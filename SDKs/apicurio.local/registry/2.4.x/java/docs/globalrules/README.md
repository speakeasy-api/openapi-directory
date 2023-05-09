# globalRules

## Overview

Global rules can be configured in the registry to govern how artifact content can 
evolve over time (as artifact content is **updated**). Global rules are applied 
whenever an artifact is added to the registry, and also whenever an artifact's 
content is updated (only if that artifact does not have its own specific rules 
configured). This section describes the operations used to manage the global rules.

### Available Operations

* [createGlobalRule](#createglobalrule) - Create global rule
* [deleteAllGlobalRules](#deleteallglobalrules) - Delete all global rules
* [deleteGlobalRule](#deleteglobalrule) - Delete global rule
* [getGlobalRuleConfig](#getglobalruleconfig) - Get global rule configuration
* [listGlobalRules](#listglobalrules) - List global rules
* [updateGlobalRuleConfig](#updateglobalruleconfig) - Update global rule configuration

## createGlobalRule

Adds a rule to the list of globally configured rules.

This operation can fail for the following reasons:

* The rule type is unknown (HTTP error `400`)
* The rule already exists (HTTP error `409`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGlobalRuleResponse;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Rule req = new Rule("aut") {{
                type = RuleTypeEnum.VALIDITY;
            }};            

            CreateGlobalRuleResponse res = sdk.globalRules.createGlobalRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAllGlobalRules

Deletes all globally configured rules.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAllGlobalRulesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAllGlobalRulesResponse res = sdk.globalRules.deleteAllGlobalRules();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGlobalRule

Deletes a single global rule.  If this is the only rule configured, this is the same
as deleting **all** rules.

This operation can fail for the following reasons:

* Invalid rule name/type (HTTP error `400`)
* No rule with name/type `rule` exists (HTTP error `404`)
* Rule cannot be deleted (HTTP error `409`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGlobalRuleRequest;
import org.openapis.openapi.models.operations.DeleteGlobalRuleResponse;
import org.openapis.openapi.models.shared.RuleTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteGlobalRuleRequest req = new DeleteGlobalRuleRequest(RuleTypeEnum.VALIDITY);            

            DeleteGlobalRuleResponse res = sdk.globalRules.deleteGlobalRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGlobalRuleConfig

Returns information about the named globally configured rule.

This operation can fail for the following reasons:

* Invalid rule name/type (HTTP error `400`)
* No rule with name/type `rule` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGlobalRuleConfigRequest;
import org.openapis.openapi.models.operations.GetGlobalRuleConfigResponse;
import org.openapis.openapi.models.shared.RuleTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGlobalRuleConfigRequest req = new GetGlobalRuleConfigRequest(RuleTypeEnum.VALIDITY);            

            GetGlobalRuleConfigResponse res = sdk.globalRules.getGlobalRuleConfig(req);

            if (res.rule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGlobalRules

Gets a list of all the currently configured global rules (if any).

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGlobalRulesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListGlobalRulesResponse res = sdk.globalRules.listGlobalRules();

            if (res.ruleTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGlobalRuleConfig

Updates the configuration for a globally configured rule.

This operation can fail for the following reasons:

* Invalid rule name/type (HTTP error `400`)
* No rule with name/type `rule` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGlobalRuleConfigRequest;
import org.openapis.openapi.models.operations.UpdateGlobalRuleConfigResponse;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateGlobalRuleConfigRequest req = new UpdateGlobalRuleConfigRequest(                new Rule("quasi") {{
                                type = RuleTypeEnum.VALIDITY;
                            }};, RuleTypeEnum.VALIDITY);            

            UpdateGlobalRuleConfigResponse res = sdk.globalRules.updateGlobalRuleConfig(req);

            if (res.rule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
