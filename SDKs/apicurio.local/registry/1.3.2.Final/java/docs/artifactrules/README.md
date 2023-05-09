# artifactRules

## Overview

Rules can be configured on a per-artifact basis, allowing for different approaches
to content evolution for each artifact.  These rules will override any global rules
that have been configured.  This section contains the operations used to manage a
single artifact's rules.

### Available Operations

* [createArtifactRule](#createartifactrule) - Create artifact rule
* [deleteArtifactRule](#deleteartifactrule) - Delete artifact rule
* [deleteArtifactRules](#deleteartifactrules) - Delete artifact rules
* [getArtifactRuleConfig](#getartifactruleconfig) - Get artifact rule configuration
* [listArtifactRules](#listartifactrules) - List artifact rules
* [testUpdateArtifact](#testupdateartifact) - Test update artifact
* [updateArtifactRuleConfig](#updateartifactruleconfig) - Update artifact rule configuration

## createArtifactRule

Adds a rule to the list of rules that get applied to the artifact when adding new
versions.  All configured rules must pass to successfully add a new artifact version.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* Rule (named in the request body) is unknown (HTTP error `400`)
* A server error occurred (HTTP error `500`)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateArtifactRuleRequest;
import org.openapis.openapi.models.operations.CreateArtifactRuleResponse;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateArtifactRuleRequest req = new CreateArtifactRuleRequest(                new Rule("distinctio") {{
                                type = RuleTypeEnum.VALIDITY;
                            }};, "quibusdam");            

            CreateArtifactRuleResponse res = sdk.artifactRules.createArtifactRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteArtifactRule

Deletes a rule from the artifact.  This results in the rule no longer applying for
this artifact.  If this is the only rule configured for the artifact, this is the 
same as deleting **all** rules, and the globally configured rules now apply to
this artifact.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No rule with this name/type is configured for this artifact (HTTP error `404`)
* Invalid rule type (HTTP error `400`)
* A server error occurred (HTTP error `500`)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteArtifactRuleRequest;
import org.openapis.openapi.models.operations.DeleteArtifactRuleResponse;
import org.openapis.openapi.models.operations.DeleteArtifactRuleRuleEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteArtifactRuleRequest req = new DeleteArtifactRuleRequest("unde", DeleteArtifactRuleRuleEnum.COMPATIBILITY);            

            DeleteArtifactRuleResponse res = sdk.artifactRules.deleteArtifactRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteArtifactRules

Deletes all of the rules configured for the artifact.  After this is done, the global
rules apply to the artifact again.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteArtifactRulesRequest;
import org.openapis.openapi.models.operations.DeleteArtifactRulesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteArtifactRulesRequest req = new DeleteArtifactRulesRequest("corrupti");            

            DeleteArtifactRulesResponse res = sdk.artifactRules.deleteArtifactRules(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getArtifactRuleConfig

Returns information about a single rule configured for an artifact.  This is useful
when you want to know what the current configuration settings are for a specific rule.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No rule with this name/type is configured for this artifact (HTTP error `404`)
* Invalid rule type (HTTP error `400`)
* A server error occurred (HTTP error `500`)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetArtifactRuleConfigRequest;
import org.openapis.openapi.models.operations.GetArtifactRuleConfigResponse;
import org.openapis.openapi.models.operations.GetArtifactRuleConfigRuleEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetArtifactRuleConfigRequest req = new GetArtifactRuleConfigRequest("illum", GetArtifactRuleConfigRuleEnum.VALIDITY);            

            GetArtifactRuleConfigResponse res = sdk.artifactRules.getArtifactRuleConfig(req);

            if (res.rule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listArtifactRules

Returns a list of all rules configured for the artifact.  The set of rules determines
how the content of an artifact can evolve over time.  If no rules are configured for
an artifact, the set of globally configured rules are used.  If no global rules 
are defined, there are no restrictions on content evolution.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListArtifactRulesRequest;
import org.openapis.openapi.models.operations.ListArtifactRulesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListArtifactRulesRequest req = new ListArtifactRulesRequest("error");            

            ListArtifactRulesResponse res = sdk.artifactRules.listArtifactRules(req);

            if (res.ruleTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testUpdateArtifact

Tests whether an update to the artifact's content *would* succeed for the provided content.
Ultimately, this applies any rules configured for the artifact against the given content
to determine whether the rules would pass or fail, but without actually updating the artifact
content.

The body of the request should be the raw content of the artifact.  This is typically in 
JSON format for *most* of the supported types, but may be in another format for a few 
(for example, `PROTOBUF`).

The registry attempts to figure out what kind of artifact is being added from the following  supported list: 

* Avro (`AVRO`)  
* Protobuf (`PROTOBUF`)  
* Protobuf File Descriptor (`PROTOBUF_FD`)  
* JSON Schema (`JSON`)  
* Kafka Connect (`KCONNECT`) 
* OpenAPI (`OPENAPI`)  
* AsyncAPI (`ASYNCAPI`) 
* GraphQL (`GRAPHQL`) 
* Web Services Description Language (`WSDL`) 
* XML Schema (`XSD`)

Alternatively, you can explicitly specify the artifact type using the `X-Registry-ArtifactType` 
HTTP request header, or by including a hint in the request's `Content-Type`.  For example:

```
Content-Type: application/json; artifactType=AVRO
```

The update could fail for a number of reasons including:

* Provided content (request body) was empty (HTTP error `400`)
* No artifact with the `artifactId` exists (HTTP error `404`)
* The new content violates one of the rules configured for the artifact (HTTP error `409`)
* The provided artifact type is not recognized (HTTP error `404`)
* A server error occurred (HTTP error `500`)

When successful, this operation simply returns a *No Content* response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestUpdateArtifactRequest;
import org.openapis.openapi.models.operations.TestUpdateArtifactResponse;
import org.openapis.openapi.models.operations.TestUpdateArtifactXRegistryArtifactTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestUpdateArtifactRequest req = new TestUpdateArtifactRequest("deserunt".getBytes(), "suscipit") {{
                xRegistryArtifactType = TestUpdateArtifactXRegistryArtifactTypeEnum.OPENAPI;
            }};            

            TestUpdateArtifactResponse res = sdk.artifactRules.testUpdateArtifact(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateArtifactRuleConfig

Updates the configuration of a single rule for the artifact.  The configuration data
is specific to each rule type, so the configuration of the `COMPATIBILITY` rule 
is in a different format from the configuration of the `VALIDITY` rule.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No rule with this name/type is configured for this artifact (HTTP error `404`)
* Invalid rule type (HTTP error `400`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateArtifactRuleConfigRequest;
import org.openapis.openapi.models.operations.UpdateArtifactRuleConfigResponse;
import org.openapis.openapi.models.operations.UpdateArtifactRuleConfigRuleEnum;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateArtifactRuleConfigRequest req = new UpdateArtifactRuleConfigRequest(                new Rule("magnam") {{
                                type = RuleTypeEnum.VALIDITY;
                            }};, "debitis", UpdateArtifactRuleConfigRuleEnum.VALIDITY);            

            UpdateArtifactRuleConfigResponse res = sdk.artifactRules.updateArtifactRuleConfig(req);

            if (res.rule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
