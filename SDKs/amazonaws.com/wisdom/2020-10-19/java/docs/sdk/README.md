# SDK

## Overview

Amazon Connect Wisdom delivers agents the information they need to solve customer issues as they're actively speaking with customers. Agents can search across connected repositories from within their agent desktop to find answers quickly. Use Amazon Connect Wisdom to create an assistant and a knowledge base, for example, or manage content by uploading custom files.

Amazon Web Services documentation
<https://docs.aws.amazon.com/wisdom/>
### Available Operations

* [createAssistant](#createassistant) - Creates an Amazon Connect Wisdom assistant.
* [createAssistantAssociation](#createassistantassociation) - Creates an association between an Amazon Connect Wisdom assistant and another resource. Currently, the only supported association is with a knowledge base. An assistant can have only a single association.
* [createContent](#createcontent) - Creates Wisdom content. Before to calling this API, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a> to upload an asset.
* [createKnowledgeBase](#createknowledgebase) - <p>Creates a knowledge base.</p> <note> <p>When using this API, you cannot reuse <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do, you'll get an <code>InvalidRequestException</code> error. </p> <p>For example, you're programmatically managing your external knowledge base, and you want to add or remove one of the fields that is being ingested from Salesforce. Do the following:</p> <ol> <li> <p>Call <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteKnowledgeBase.html">DeleteKnowledgeBase</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> to recreate the DataIntegration or a create different one.</p> </li> <li> <p>Call CreateKnowledgeBase.</p> </li> </ol> </note>
* [createSession](#createsession) - Creates a session. A session is a contextual container used for generating recommendations. Amazon Connect creates a new Wisdom session for each contact on which Wisdom is enabled.
* [deleteAssistant](#deleteassistant) - Deletes an assistant.
* [deleteAssistantAssociation](#deleteassistantassociation) - Deletes an assistant association.
* [deleteContent](#deletecontent) - Deletes the content.
* [deleteKnowledgeBase](#deleteknowledgebase) - <p>Deletes the knowledge base.</p> <note> <p>When you use this API to delete an external knowledge base such as Salesforce or ServiceNow, you must also delete the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegration. This is because you can't reuse the DataIntegration after it's been associated with an external knowledge base. However, you can delete and recreate it. See <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a> and <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> in the <i>Amazon AppIntegrations API Reference</i>.</p> </note>
* [getAssistant](#getassistant) - Retrieves information about an assistant.
* [getAssistantAssociation](#getassistantassociation) - Retrieves information about an assistant association.
* [getContent](#getcontent) - Retrieves content, including a pre-signed URL to download the content.
* [getContentSummary](#getcontentsummary) - Retrieves summary information about the content.
* [getKnowledgeBase](#getknowledgebase) - Retrieves information about the knowledge base.
* [getRecommendations](#getrecommendations) - Retrieves recommendations for the specified session. To avoid retrieving the same recommendations in subsequent calls, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_NotifyRecommendationsReceived.html">NotifyRecommendationsReceived</a>. This API supports long-polling behavior with the <code>waitTimeSeconds</code> parameter. Short poll is the default behavior and only returns recommendations already available. To perform a manual query against an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_QueryAssistant.html">QueryAssistant</a>.
* [getSession](#getsession) - Retrieves information for a specified session.
* [listAssistantAssociations](#listassistantassociations) - Lists information about assistant associations.
* [listAssistants](#listassistants) - Lists information about assistants.
* [listContents](#listcontents) - Lists the content.
* [listKnowledgeBases](#listknowledgebases) - Lists the knowledge bases.
* [listTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [notifyRecommendationsReceived](#notifyrecommendationsreceived) - Removes the specified recommendations from the specified assistant's queue of newly available recommendations. You can use this API in conjunction with <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a> and a <code>waitTimeSeconds</code> input for long-polling behavior and avoiding duplicate recommendations.
* [queryAssistant](#queryassistant) - Performs a manual search against the specified assistant. To retrieve recommendations for an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a>. 
* [removeKnowledgeBaseTemplateUri](#removeknowledgebasetemplateuri) - Removes a URI template from a knowledge base.
* [searchContent](#searchcontent) - Searches for content in a specified knowledge base. Can be used to get a specific content resource by its name.
* [searchSessions](#searchsessions) - Searches for sessions.
* [startContentUpload](#startcontentupload) - Get a URL to upload content to a knowledge base. To upload content, first make a PUT request to the returned URL with your file, making sure to include the required headers. Then use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateContent.html">CreateContent</a> to finalize the content creation process or <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateContent.html">UpdateContent</a> to modify an existing resource. You can only upload content to a knowledge base of type CUSTOM.
* [tagResource](#tagresource) - Adds the specified tags to the specified resource.
* [untagResource](#untagresource) - Removes the specified tags from the specified resource.
* [updateContent](#updatecontent) - Updates information about the content.
* [updateKnowledgeBaseTemplateUri](#updateknowledgebasetemplateuri) - Updates the template URI of a knowledge base. This is only supported for knowledge bases of type EXTERNAL. Include a single variable in <code>${variable}</code> format; this interpolated by Wisdom using ingested content. For example, if you ingest a Salesforce article, it has an <code>Id</code> value, and you can set the template URI to <code>https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*${Id}*/view</code>. 

## createAssistant

Creates an Amazon Connect Wisdom assistant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAssistantRequest;
import org.openapis.openapi.models.operations.CreateAssistantRequestBody;
import org.openapis.openapi.models.operations.CreateAssistantRequestBodyServerSideEncryptionConfiguration;
import org.openapis.openapi.models.operations.CreateAssistantRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.CreateAssistantResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAssistantRequest req = new CreateAssistantRequest(                new CreateAssistantRequestBody("voluptatum", CreateAssistantRequestBodyTypeEnum.AGENT) {{
                                clientToken = "iusto";
                                description = "excepturi";
                                serverSideEncryptionConfiguration = new CreateAssistantRequestBodyServerSideEncryptionConfiguration() {{
                                    kmsKeyId = "nisi";
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("temporibus", "ab");
                                    put("quis", "veritatis");
                                    put("deserunt", "perferendis");
                                    put("ipsam", "repellendus");
                                }};
                            }};) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quo";
                xAmzCredential = "odit";
                xAmzDate = "at";
                xAmzSecurityToken = "at";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "molestiae";
            }};            

            CreateAssistantResponse res = sdk.sdk.createAssistant(req);

            if (res.createAssistantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAssistantAssociation

Creates an association between an Amazon Connect Wisdom assistant and another resource. Currently, the only supported association is with a knowledge base. An assistant can have only a single association.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAssistantAssociationRequest;
import org.openapis.openapi.models.operations.CreateAssistantAssociationRequestBody;
import org.openapis.openapi.models.operations.CreateAssistantAssociationRequestBodyAssociation;
import org.openapis.openapi.models.operations.CreateAssistantAssociationRequestBodyAssociationTypeEnum;
import org.openapis.openapi.models.operations.CreateAssistantAssociationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAssistantAssociationRequest req = new CreateAssistantAssociationRequest(                new CreateAssistantAssociationRequestBody(                new CreateAssistantAssociationRequestBodyAssociation() {{
                                                knowledgeBaseId = "quod";
                                            }};, CreateAssistantAssociationRequestBodyAssociationTypeEnum.KNOWLEDGE_BASE) {{
                                clientToken = "esse";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("porro", "dolorum");
                                    put("dicta", "nam");
                                    put("officia", "occaecati");
                                }};
                            }};, "fugit") {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "hic";
                xAmzCredential = "optio";
                xAmzDate = "totam";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "molestiae";
            }};            

            CreateAssistantAssociationResponse res = sdk.sdk.createAssistantAssociation(req);

            if (res.createAssistantAssociationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createContent

Creates Wisdom content. Before to calling this API, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a> to upload an asset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateContentRequest;
import org.openapis.openapi.models.operations.CreateContentRequestBody;
import org.openapis.openapi.models.operations.CreateContentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateContentRequest req = new CreateContentRequest(                new CreateContentRequestBody("qui", "impedit") {{
                                clientToken = "cum";
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("ipsum", "excepturi");
                                    put("aspernatur", "perferendis");
                                }};
                                overrideLinkOutUri = "ad";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("sed", "iste");
                                    put("dolor", "natus");
                                    put("laboriosam", "hic");
                                }};
                                title = "Dr.";
                            }};, "fuga") {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "iste";
                xAmzDate = "iure";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "architecto";
            }};            

            CreateContentResponse res = sdk.sdk.createContent(req);

            if (res.createContentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createKnowledgeBase

<p>Creates a knowledge base.</p> <note> <p>When using this API, you cannot reuse <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do, you'll get an <code>InvalidRequestException</code> error. </p> <p>For example, you're programmatically managing your external knowledge base, and you want to add or remove one of the fields that is being ingested from Salesforce. Do the following:</p> <ol> <li> <p>Call <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteKnowledgeBase.html">DeleteKnowledgeBase</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> to recreate the DataIntegration or a create different one.</p> </li> <li> <p>Call CreateKnowledgeBase.</p> </li> </ol> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateKnowledgeBaseRequest;
import org.openapis.openapi.models.operations.CreateKnowledgeBaseRequestBody;
import org.openapis.openapi.models.operations.CreateKnowledgeBaseRequestBodyKnowledgeBaseTypeEnum;
import org.openapis.openapi.models.operations.CreateKnowledgeBaseRequestBodyRenderingConfiguration;
import org.openapis.openapi.models.operations.CreateKnowledgeBaseRequestBodyServerSideEncryptionConfiguration;
import org.openapis.openapi.models.operations.CreateKnowledgeBaseRequestBodySourceConfiguration;
import org.openapis.openapi.models.operations.CreateKnowledgeBaseResponse;
import org.openapis.openapi.models.shared.AppIntegrationsConfiguration;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateKnowledgeBaseRequest req = new CreateKnowledgeBaseRequest(                new CreateKnowledgeBaseRequestBody(CreateKnowledgeBaseRequestBodyKnowledgeBaseTypeEnum.CUSTOM, "est") {{
                                clientToken = "mollitia";
                                description = "laborum";
                                renderingConfiguration = new CreateKnowledgeBaseRequestBodyRenderingConfiguration() {{
                                    templateUri = "dolores";
                                }};;
                                serverSideEncryptionConfiguration = new CreateKnowledgeBaseRequestBodyServerSideEncryptionConfiguration() {{
                                    kmsKeyId = "dolorem";
                                }};;
                                sourceConfiguration = new CreateKnowledgeBaseRequestBodySourceConfiguration() {{
                                    appIntegrations = new AppIntegrationsConfiguration("corporis") {{
                                        objectFields = new String[]{{
                                            add("nobis"),
                                        }};
                                    }};;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("omnis", "nemo");
                                    put("minima", "excepturi");
                                }};
                            }};) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "iure";
                xAmzCredential = "culpa";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "mollitia";
            }};            

            CreateKnowledgeBaseResponse res = sdk.sdk.createKnowledgeBase(req);

            if (res.createKnowledgeBaseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSession

Creates a session. A session is a contextual container used for generating recommendations. Amazon Connect creates a new Wisdom session for each contact on which Wisdom is enabled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSessionRequest;
import org.openapis.openapi.models.operations.CreateSessionRequestBody;
import org.openapis.openapi.models.operations.CreateSessionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSessionRequest req = new CreateSessionRequest(                new CreateSessionRequestBody("culpa") {{
                                clientToken = "consequuntur";
                                description = "repellat";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("occaecati", "numquam");
                                    put("commodi", "quam");
                                    put("molestiae", "velit");
                                }};
                            }};, "error") {{
                xAmzAlgorithm = "quia";
                xAmzContentSha256 = "quis";
                xAmzCredential = "vitae";
                xAmzDate = "laborum";
                xAmzSecurityToken = "animi";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "odit";
            }};            

            CreateSessionResponse res = sdk.sdk.createSession(req);

            if (res.createSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAssistant

Deletes an assistant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAssistantRequest;
import org.openapis.openapi.models.operations.DeleteAssistantResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAssistantRequest req = new DeleteAssistantRequest("sequi") {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "id";
                xAmzDate = "possimus";
                xAmzSecurityToken = "aut";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "error";
            }};            

            DeleteAssistantResponse res = sdk.sdk.deleteAssistant(req);

            if (res.deleteAssistantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAssistantAssociation

Deletes an assistant association.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAssistantAssociationRequest;
import org.openapis.openapi.models.operations.DeleteAssistantAssociationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAssistantAssociationRequest req = new DeleteAssistantAssociationRequest("laborum", "quasi") {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "vero";
                xAmzDate = "nihil";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "ipsa";
            }};            

            DeleteAssistantAssociationResponse res = sdk.sdk.deleteAssistantAssociation(req);

            if (res.deleteAssistantAssociationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteContent

Deletes the content.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteContentRequest;
import org.openapis.openapi.models.operations.DeleteContentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteContentRequest req = new DeleteContentRequest("voluptate", "cum") {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "doloremque";
                xAmzCredential = "reprehenderit";
                xAmzDate = "ut";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "corporis";
            }};            

            DeleteContentResponse res = sdk.sdk.deleteContent(req);

            if (res.deleteContentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteKnowledgeBase

<p>Deletes the knowledge base.</p> <note> <p>When you use this API to delete an external knowledge base such as Salesforce or ServiceNow, you must also delete the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegration. This is because you can't reuse the DataIntegration after it's been associated with an external knowledge base. However, you can delete and recreate it. See <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a> and <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> in the <i>Amazon AppIntegrations API Reference</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteKnowledgeBaseRequest;
import org.openapis.openapi.models.operations.DeleteKnowledgeBaseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteKnowledgeBaseRequest req = new DeleteKnowledgeBaseRequest("iusto") {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "harum";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "quae";
            }};            

            DeleteKnowledgeBaseResponse res = sdk.sdk.deleteKnowledgeBase(req);

            if (res.deleteKnowledgeBaseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssistant

Retrieves information about an assistant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssistantRequest;
import org.openapis.openapi.models.operations.GetAssistantResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAssistantRequest req = new GetAssistantRequest("quidem") {{
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "pariatur";
                xAmzDate = "modi";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "voluptates";
            }};            

            GetAssistantResponse res = sdk.sdk.getAssistant(req);

            if (res.getAssistantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssistantAssociation

Retrieves information about an assistant association.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssistantAssociationRequest;
import org.openapis.openapi.models.operations.GetAssistantAssociationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAssistantAssociationRequest req = new GetAssistantAssociationRequest("repudiandae", "sint") {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "incidunt";
                xAmzDate = "enim";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "est";
                xAmzSignedHeaders = "quibusdam";
            }};            

            GetAssistantAssociationResponse res = sdk.sdk.getAssistantAssociation(req);

            if (res.getAssistantAssociationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContent

Retrieves content, including a pre-signed URL to download the content.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContentRequest;
import org.openapis.openapi.models.operations.GetContentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContentRequest req = new GetContentRequest("deserunt", "distinctio") {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "labore";
                xAmzCredential = "modi";
                xAmzDate = "qui";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "quos";
            }};            

            GetContentResponse res = sdk.sdk.getContent(req);

            if (res.getContentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContentSummary

Retrieves summary information about the content.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContentSummaryRequest;
import org.openapis.openapi.models.operations.GetContentSummaryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContentSummaryRequest req = new GetContentSummaryRequest("magni", "assumenda") {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "alias";
                xAmzCredential = "fugit";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "facilis";
            }};            

            GetContentSummaryResponse res = sdk.sdk.getContentSummary(req);

            if (res.getContentSummaryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getKnowledgeBase

Retrieves information about the knowledge base.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetKnowledgeBaseRequest;
import org.openapis.openapi.models.operations.GetKnowledgeBaseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetKnowledgeBaseRequest req = new GetKnowledgeBaseRequest("labore") {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "eum";
                xAmzCredential = "non";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "sint";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "provident";
            }};            

            GetKnowledgeBaseResponse res = sdk.sdk.getKnowledgeBase(req);

            if (res.getKnowledgeBaseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRecommendations

Retrieves recommendations for the specified session. To avoid retrieving the same recommendations in subsequent calls, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_NotifyRecommendationsReceived.html">NotifyRecommendationsReceived</a>. This API supports long-polling behavior with the <code>waitTimeSeconds</code> parameter. Short poll is the default behavior and only returns recommendations already available. To perform a manual query against an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_QueryAssistant.html">QueryAssistant</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRecommendationsRequest;
import org.openapis.openapi.models.operations.GetRecommendationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRecommendationsRequest req = new GetRecommendationsRequest("sint", "officia") {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "a";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "in";
                xAmzSignature = "in";
                xAmzSignedHeaders = "illum";
                maxResults = 978571L;
                waitTimeSeconds = 699479L;
            }};            

            GetRecommendationsResponse res = sdk.sdk.getRecommendations(req);

            if (res.getRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSession

Retrieves information for a specified session.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSessionRequest;
import org.openapis.openapi.models.operations.GetSessionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSessionRequest req = new GetSessionRequest("magnam", "cumque") {{
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "ea";
                xAmzCredential = "aliquid";
                xAmzDate = "laborum";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "non";
                xAmzSignedHeaders = "occaecati";
            }};            

            GetSessionResponse res = sdk.sdk.getSession(req);

            if (res.getSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssistantAssociations

Lists information about assistant associations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssistantAssociationsRequest;
import org.openapis.openapi.models.operations.ListAssistantAssociationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssistantAssociationsRequest req = new ListAssistantAssociationsRequest("accusamus") {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "provident";
                xAmzDate = "nam";
                xAmzSecurityToken = "id";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "deleniti";
                maxResults = 956084L;
                nextToken = "amet";
            }};            

            ListAssistantAssociationsResponse res = sdk.sdk.listAssistantAssociations(req);

            if (res.listAssistantAssociationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssistants

Lists information about assistants.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssistantsRequest;
import org.openapis.openapi.models.operations.ListAssistantsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssistantsRequest req = new ListAssistantsRequest() {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "vel";
                xAmzCredential = "natus";
                xAmzDate = "omnis";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "nihil";
                maxResults = 301575L;
                nextToken = "distinctio";
            }};            

            ListAssistantsResponse res = sdk.sdk.listAssistants(req);

            if (res.listAssistantsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listContents

Lists the content.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListContentsRequest;
import org.openapis.openapi.models.operations.ListContentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListContentsRequest req = new ListContentsRequest("labore") {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "natus";
                xAmzDate = "nobis";
                xAmzSecurityToken = "eum";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "aspernatur";
                maxResults = 102863L;
                nextToken = "magnam";
            }};            

            ListContentsResponse res = sdk.sdk.listContents(req);

            if (res.listContentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listKnowledgeBases

Lists the knowledge bases.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListKnowledgeBasesRequest;
import org.openapis.openapi.models.operations.ListKnowledgeBasesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListKnowledgeBasesRequest req = new ListKnowledgeBasesRequest() {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "provident";
                xAmzDate = "quos";
                xAmzSecurityToken = "sint";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "mollitia";
                maxResults = 968962L;
                nextToken = "mollitia";
            }};            

            ListKnowledgeBasesResponse res = sdk.sdk.listKnowledgeBases(req);

            if (res.listKnowledgeBasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags for the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("eum") {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "odit";
                xAmzDate = "nemo";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "doloribus";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notifyRecommendationsReceived

Removes the specified recommendations from the specified assistant's queue of newly available recommendations. You can use this API in conjunction with <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a> and a <code>waitTimeSeconds</code> input for long-polling behavior and avoiding duplicate recommendations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotifyRecommendationsReceivedRequest;
import org.openapis.openapi.models.operations.NotifyRecommendationsReceivedRequestBody;
import org.openapis.openapi.models.operations.NotifyRecommendationsReceivedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            NotifyRecommendationsReceivedRequest req = new NotifyRecommendationsReceivedRequest(                new NotifyRecommendationsReceivedRequestBody(                new String[]{{
                                                add("maxime"),
                                                add("deleniti"),
                                            }});, "facilis", "in") {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "repudiandae";
                xAmzDate = "ullam";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "repellat";
            }};            

            NotifyRecommendationsReceivedResponse res = sdk.sdk.notifyRecommendationsReceived(req);

            if (res.notifyRecommendationsReceivedResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryAssistant

Performs a manual search against the specified assistant. To retrieve recommendations for an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryAssistantRequest;
import org.openapis.openapi.models.operations.QueryAssistantRequestBody;
import org.openapis.openapi.models.operations.QueryAssistantResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            QueryAssistantRequest req = new QueryAssistantRequest(                new QueryAssistantRequestBody("sed") {{
                                maxResults = 904648L;
                                nextToken = "pariatur";
                            }};, "accusantium") {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "natus";
                xAmzDate = "magni";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "illum";
                maxResults = "pariatur";
                nextToken = "maxime";
            }};            

            QueryAssistantResponse res = sdk.sdk.queryAssistant(req);

            if (res.queryAssistantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeKnowledgeBaseTemplateUri

Removes a URI template from a knowledge base.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveKnowledgeBaseTemplateUriRequest;
import org.openapis.openapi.models.operations.RemoveKnowledgeBaseTemplateUriResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveKnowledgeBaseTemplateUriRequest req = new RemoveKnowledgeBaseTemplateUriRequest("excepturi") {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "ea";
                xAmzCredential = "accusantium";
                xAmzDate = "ab";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "ipsam";
            }};            

            RemoveKnowledgeBaseTemplateUriResponse res = sdk.sdk.removeKnowledgeBaseTemplateUri(req);

            if (res.removeKnowledgeBaseTemplateUriResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchContent

Searches for content in a specified knowledge base. Can be used to get a specific content resource by its name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchContentRequest;
import org.openapis.openapi.models.operations.SearchContentRequestBody;
import org.openapis.openapi.models.operations.SearchContentRequestBodySearchExpression;
import org.openapis.openapi.models.operations.SearchContentResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterFieldEnum;
import org.openapis.openapi.models.shared.FilterOperatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchContentRequest req = new SearchContentRequest(                new SearchContentRequestBody(                new SearchContentRequestBodySearchExpression() {{
                                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                                    add(new Filter(FilterFieldEnum.NAME, FilterOperatorEnum.EQUALS, "eaque") {{
                                                        field = FilterFieldEnum.NAME;
                                                        operator = FilterOperatorEnum.EQUALS;
                                                        value = "nam";
                                                    }}),
                                                    add(new Filter(FilterFieldEnum.NAME, FilterOperatorEnum.EQUALS, "nemo") {{
                                                        field = FilterFieldEnum.NAME;
                                                        operator = FilterOperatorEnum.EQUALS;
                                                        value = "pariatur";
                                                    }}),
                                                }};
                                            }};);, "voluptatibus") {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "amet";
                xAmzDate = "aut";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "hic";
                maxResults = 729991L;
                nextToken = "nobis";
            }};            

            SearchContentResponse res = sdk.sdk.searchContent(req);

            if (res.searchContentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchSessions

Searches for sessions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchSessionsRequest;
import org.openapis.openapi.models.operations.SearchSessionsRequestBody;
import org.openapis.openapi.models.operations.SearchSessionsRequestBodySearchExpression;
import org.openapis.openapi.models.operations.SearchSessionsResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterFieldEnum;
import org.openapis.openapi.models.shared.FilterOperatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchSessionsRequest req = new SearchSessionsRequest(                new SearchSessionsRequestBody(                new SearchSessionsRequestBodySearchExpression() {{
                                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                                    add(new Filter(FilterFieldEnum.NAME, FilterOperatorEnum.EQUALS, "dignissimos") {{
                                                        field = FilterFieldEnum.NAME;
                                                        operator = FilterOperatorEnum.EQUALS;
                                                        value = "totam";
                                                    }}),
                                                    add(new Filter(FilterFieldEnum.NAME, FilterOperatorEnum.EQUALS, "quis") {{
                                                        field = FilterFieldEnum.NAME;
                                                        operator = FilterOperatorEnum.EQUALS;
                                                        value = "eaque";
                                                    }}),
                                                }};
                                            }};);, "nesciunt") {{
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "dolores";
                xAmzDate = "minus";
                xAmzSecurityToken = "quam";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "vero";
                maxResults = 345352L;
                nextToken = "hic";
            }};            

            SearchSessionsResponse res = sdk.sdk.searchSessions(req);

            if (res.searchSessionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startContentUpload

Get a URL to upload content to a knowledge base. To upload content, first make a PUT request to the returned URL with your file, making sure to include the required headers. Then use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateContent.html">CreateContent</a> to finalize the content creation process or <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateContent.html">UpdateContent</a> to modify an existing resource. You can only upload content to a knowledge base of type CUSTOM.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartContentUploadRequest;
import org.openapis.openapi.models.operations.StartContentUploadRequestBody;
import org.openapis.openapi.models.operations.StartContentUploadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartContentUploadRequest req = new StartContentUploadRequest(                new StartContentUploadRequestBody("omnis");, "facilis") {{
                xAmzAlgorithm = "perspiciatis";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "porro";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "error";
                xAmzSignedHeaders = "eaque";
            }};            

            StartContentUploadResponse res = sdk.sdk.startContentUpload(req);

            if (res.startContentUploadResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds the specified tags to the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("adipisci", "asperiores");
                                                put("earum", "modi");
                                                put("iste", "dolorum");
                                            }});, "deleniti") {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "provident";
                xAmzCredential = "nobis";
                xAmzDate = "libero";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "quos";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes the specified tags from the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("dolorem",                 new String[]{{
                                add("dolor"),
                            }}) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "hic";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "cum";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "dignissimos";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateContent

Updates information about the content.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateContentRequest;
import org.openapis.openapi.models.operations.UpdateContentRequestBody;
import org.openapis.openapi.models.operations.UpdateContentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateContentRequest req = new UpdateContentRequest(                new UpdateContentRequestBody() {{
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("dolorum", "numquam");
                                }};
                                overrideLinkOutUri = "veritatis";
                                removeOverrideLinkOutUri = false;
                                revisionId = "ipsa";
                                title = "Mr.";
                                uploadId = "iure";
                            }};, "odio", "quaerat") {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "voluptatibus";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "natus";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "atque";
            }};            

            UpdateContentResponse res = sdk.sdk.updateContent(req);

            if (res.updateContentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateKnowledgeBaseTemplateUri

Updates the template URI of a knowledge base. This is only supported for knowledge bases of type EXTERNAL. Include a single variable in <code>${variable}</code> format; this interpolated by Wisdom using ingested content. For example, if you ingest a Salesforce article, it has an <code>Id</code> value, and you can set the template URI to <code>https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*${Id}*/view</code>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateKnowledgeBaseTemplateUriRequest;
import org.openapis.openapi.models.operations.UpdateKnowledgeBaseTemplateUriRequestBody;
import org.openapis.openapi.models.operations.UpdateKnowledgeBaseTemplateUriResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateKnowledgeBaseTemplateUriRequest req = new UpdateKnowledgeBaseTemplateUriRequest(                new UpdateKnowledgeBaseTemplateUriRequestBody("fugiat");, "ab") {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "iusto";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "omnis";
            }};            

            UpdateKnowledgeBaseTemplateUriResponse res = sdk.sdk.updateKnowledgeBaseTemplateUri(req);

            if (res.updateKnowledgeBaseTemplateUriResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
