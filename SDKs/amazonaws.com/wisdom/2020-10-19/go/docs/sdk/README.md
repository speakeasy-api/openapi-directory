# SDK

## Overview

Amazon Connect Wisdom delivers agents the information they need to solve customer issues as they're actively speaking with customers. Agents can search across connected repositories from within their agent desktop to find answers quickly. Use Amazon Connect Wisdom to create an assistant and a knowledge base, for example, or manage content by uploading custom files.

Amazon Web Services documentation
<https://docs.aws.amazon.com/wisdom/>
### Available Operations

* [CreateAssistant](#createassistant) - Creates an Amazon Connect Wisdom assistant.
* [CreateAssistantAssociation](#createassistantassociation) - Creates an association between an Amazon Connect Wisdom assistant and another resource. Currently, the only supported association is with a knowledge base. An assistant can have only a single association.
* [CreateContent](#createcontent) - Creates Wisdom content. Before to calling this API, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a> to upload an asset.
* [CreateKnowledgeBase](#createknowledgebase) - <p>Creates a knowledge base.</p> <note> <p>When using this API, you cannot reuse <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do, you'll get an <code>InvalidRequestException</code> error. </p> <p>For example, you're programmatically managing your external knowledge base, and you want to add or remove one of the fields that is being ingested from Salesforce. Do the following:</p> <ol> <li> <p>Call <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteKnowledgeBase.html">DeleteKnowledgeBase</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> to recreate the DataIntegration or a create different one.</p> </li> <li> <p>Call CreateKnowledgeBase.</p> </li> </ol> </note>
* [CreateSession](#createsession) - Creates a session. A session is a contextual container used for generating recommendations. Amazon Connect creates a new Wisdom session for each contact on which Wisdom is enabled.
* [DeleteAssistant](#deleteassistant) - Deletes an assistant.
* [DeleteAssistantAssociation](#deleteassistantassociation) - Deletes an assistant association.
* [DeleteContent](#deletecontent) - Deletes the content.
* [DeleteKnowledgeBase](#deleteknowledgebase) - <p>Deletes the knowledge base.</p> <note> <p>When you use this API to delete an external knowledge base such as Salesforce or ServiceNow, you must also delete the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegration. This is because you can't reuse the DataIntegration after it's been associated with an external knowledge base. However, you can delete and recreate it. See <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a> and <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> in the <i>Amazon AppIntegrations API Reference</i>.</p> </note>
* [GetAssistant](#getassistant) - Retrieves information about an assistant.
* [GetAssistantAssociation](#getassistantassociation) - Retrieves information about an assistant association.
* [GetContent](#getcontent) - Retrieves content, including a pre-signed URL to download the content.
* [GetContentSummary](#getcontentsummary) - Retrieves summary information about the content.
* [GetKnowledgeBase](#getknowledgebase) - Retrieves information about the knowledge base.
* [GetRecommendations](#getrecommendations) - Retrieves recommendations for the specified session. To avoid retrieving the same recommendations in subsequent calls, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_NotifyRecommendationsReceived.html">NotifyRecommendationsReceived</a>. This API supports long-polling behavior with the <code>waitTimeSeconds</code> parameter. Short poll is the default behavior and only returns recommendations already available. To perform a manual query against an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_QueryAssistant.html">QueryAssistant</a>.
* [GetSession](#getsession) - Retrieves information for a specified session.
* [ListAssistantAssociations](#listassistantassociations) - Lists information about assistant associations.
* [ListAssistants](#listassistants) - Lists information about assistants.
* [ListContents](#listcontents) - Lists the content.
* [ListKnowledgeBases](#listknowledgebases) - Lists the knowledge bases.
* [ListTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [NotifyRecommendationsReceived](#notifyrecommendationsreceived) - Removes the specified recommendations from the specified assistant's queue of newly available recommendations. You can use this API in conjunction with <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a> and a <code>waitTimeSeconds</code> input for long-polling behavior and avoiding duplicate recommendations.
* [QueryAssistant](#queryassistant) - Performs a manual search against the specified assistant. To retrieve recommendations for an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a>. 
* [RemoveKnowledgeBaseTemplateURI](#removeknowledgebasetemplateuri) - Removes a URI template from a knowledge base.
* [SearchContent](#searchcontent) - Searches for content in a specified knowledge base. Can be used to get a specific content resource by its name.
* [SearchSessions](#searchsessions) - Searches for sessions.
* [StartContentUpload](#startcontentupload) - Get a URL to upload content to a knowledge base. To upload content, first make a PUT request to the returned URL with your file, making sure to include the required headers. Then use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateContent.html">CreateContent</a> to finalize the content creation process or <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateContent.html">UpdateContent</a> to modify an existing resource. You can only upload content to a knowledge base of type CUSTOM.
* [TagResource](#tagresource) - Adds the specified tags to the specified resource.
* [UntagResource](#untagresource) - Removes the specified tags from the specified resource.
* [UpdateContent](#updatecontent) - Updates information about the content.
* [UpdateKnowledgeBaseTemplateURI](#updateknowledgebasetemplateuri) - Updates the template URI of a knowledge base. This is only supported for knowledge bases of type EXTERNAL. Include a single variable in <code>${variable}</code> format; this interpolated by Wisdom using ingested content. For example, if you ingest a Salesforce article, it has an <code>Id</code> value, and you can set the template URI to <code>https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*${Id}*/view</code>. 

## CreateAssistant

Creates an Amazon Connect Wisdom assistant.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateAssistant(ctx, operations.CreateAssistantRequest{
        RequestBody: operations.CreateAssistantRequestBody{
            ClientToken: sdk.String("minus"),
            Description: sdk.String("placeat"),
            Name: "Ted Mante",
            ServerSideEncryptionConfiguration: &operations.CreateAssistantRequestBodyServerSideEncryptionConfiguration{
                KmsKeyID: sdk.String("temporibus"),
            },
            Tags: map[string]string{
                "quis": "veritatis",
            },
            Type: operations.CreateAssistantRequestBodyTypeEnumAgent,
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAssistantResponse != nil {
        // handle response
    }
}
```

## CreateAssistantAssociation

Creates an association between an Amazon Connect Wisdom assistant and another resource. Currently, the only supported association is with a knowledge base. An assistant can have only a single association.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateAssistantAssociation(ctx, operations.CreateAssistantAssociationRequest{
        RequestBody: operations.CreateAssistantAssociationRequestBody{
            Association: operations.CreateAssistantAssociationRequestBodyAssociation{
                KnowledgeBaseID: sdk.String("at"),
            },
            AssociationType: operations.CreateAssistantAssociationRequestBodyAssociationTypeEnumKnowledgeBase,
            ClientToken: sdk.String("at"),
            Tags: map[string]string{
                "molestiae": "quod",
                "quod": "esse",
                "totam": "porro",
                "dolorum": "dicta",
            },
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("optio"),
        AssistantID: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAssistantAssociationResponse != nil {
        // handle response
    }
}
```

## CreateContent

Creates Wisdom content. Before to calling this API, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a> to upload an asset.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateContent(ctx, operations.CreateContentRequest{
        RequestBody: operations.CreateContentRequestBody{
            ClientToken: sdk.String("beatae"),
            Metadata: map[string]string{
                "molestiae": "modi",
                "qui": "impedit",
            },
            Name: "Cory Emmerich",
            OverrideLinkOutURI: sdk.String("perferendis"),
            Tags: map[string]string{
                "natus": "sed",
                "iste": "dolor",
            },
            Title: sdk.String("Miss"),
            UploadID: "laboriosam",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("iure"),
        KnowledgeBaseID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateContentResponse != nil {
        // handle response
    }
}
```

## CreateKnowledgeBase

<p>Creates a knowledge base.</p> <note> <p>When using this API, you cannot reuse <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do, you'll get an <code>InvalidRequestException</code> error. </p> <p>For example, you're programmatically managing your external knowledge base, and you want to add or remove one of the fields that is being ingested from Salesforce. Do the following:</p> <ol> <li> <p>Call <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteKnowledgeBase.html">DeleteKnowledgeBase</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> to recreate the DataIntegration or a create different one.</p> </li> <li> <p>Call CreateKnowledgeBase.</p> </li> </ol> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateKnowledgeBase(ctx, operations.CreateKnowledgeBaseRequest{
        RequestBody: operations.CreateKnowledgeBaseRequestBody{
            ClientToken: sdk.String("quidem"),
            Description: sdk.String("architecto"),
            KnowledgeBaseType: operations.CreateKnowledgeBaseRequestBodyKnowledgeBaseTypeEnumExternal,
            Name: "Carlton O'Hara",
            RenderingConfiguration: &operations.CreateKnowledgeBaseRequestBodyRenderingConfiguration{
                TemplateURI: sdk.String("dolorem"),
            },
            ServerSideEncryptionConfiguration: &operations.CreateKnowledgeBaseRequestBodyServerSideEncryptionConfiguration{
                KmsKeyID: sdk.String("corporis"),
            },
            SourceConfiguration: &operations.CreateKnowledgeBaseRequestBodySourceConfiguration{
                AppIntegrations: &shared.AppIntegrationsConfiguration{
                    AppIntegrationArn: "explicabo",
                    ObjectFields: []string{
                        "enim",
                        "omnis",
                        "nemo",
                        "minima",
                    },
                },
            },
            Tags: map[string]string{
                "accusantium": "iure",
                "culpa": "doloribus",
                "sapiente": "architecto",
            },
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateKnowledgeBaseResponse != nil {
        // handle response
    }
}
```

## CreateSession

Creates a session. A session is a contextual container used for generating recommendations. Amazon Connect creates a new Wisdom session for each contact on which Wisdom is enabled.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateSession(ctx, operations.CreateSessionRequest{
        RequestBody: operations.CreateSessionRequestBody{
            ClientToken: sdk.String("numquam"),
            Description: sdk.String("commodi"),
            Name: "Nellie Frami",
            Tags: map[string]string{
                "vitae": "laborum",
                "animi": "enim",
            },
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("possimus"),
        AssistantID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSessionResponse != nil {
        // handle response
    }
}
```

## DeleteAssistant

Deletes an assistant.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAssistant(ctx, operations.DeleteAssistantRequest{
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        AssistantID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAssistantResponse != nil {
        // handle response
    }
}
```

## DeleteAssistantAssociation

Deletes an assistant association.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAssistantAssociation(ctx, operations.DeleteAssistantAssociationRequest{
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("cum"),
        AssistantAssociationID: "perferendis",
        AssistantID: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAssistantAssociationResponse != nil {
        // handle response
    }
}
```

## DeleteContent

Deletes the content.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteContent(ctx, operations.DeleteContentRequest{
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("iusto"),
        ContentID: "dicta",
        KnowledgeBaseID: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteContentResponse != nil {
        // handle response
    }
}
```

## DeleteKnowledgeBase

<p>Deletes the knowledge base.</p> <note> <p>When you use this API to delete an external knowledge base such as Salesforce or ServiceNow, you must also delete the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegration. This is because you can't reuse the DataIntegration after it's been associated with an external knowledge base. However, you can delete and recreate it. See <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a> and <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> in the <i>Amazon AppIntegrations API Reference</i>.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteKnowledgeBase(ctx, operations.DeleteKnowledgeBaseRequest{
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("quidem"),
        KnowledgeBaseID: "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteKnowledgeBaseResponse != nil {
        // handle response
    }
}
```

## GetAssistant

Retrieves information about an assistant.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAssistant(ctx, operations.GetAssistantRequest{
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("voluptates"),
        XAmzSignedHeaders: sdk.String("quasi"),
        AssistantID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAssistantResponse != nil {
        // handle response
    }
}
```

## GetAssistantAssociation

Retrieves information about an assistant association.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAssistantAssociation(ctx, operations.GetAssistantAssociationRequest{
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("est"),
        AssistantAssociationID: "quibusdam",
        AssistantID: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAssistantAssociationResponse != nil {
        // handle response
    }
}
```

## GetContent

Retrieves content, including a pre-signed URL to download the content.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetContent(ctx, operations.GetContentRequest{
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        ContentID: "cupiditate",
        KnowledgeBaseID: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContentResponse != nil {
        // handle response
    }
}
```

## GetContentSummary

Retrieves summary information about the content.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetContentSummary(ctx, operations.GetContentSummaryRequest{
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        ContentID: "excepturi",
        KnowledgeBaseID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContentSummaryResponse != nil {
        // handle response
    }
}
```

## GetKnowledgeBase

Retrieves information about the knowledge base.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetKnowledgeBase(ctx, operations.GetKnowledgeBaseRequest{
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("eligendi"),
        KnowledgeBaseID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetKnowledgeBaseResponse != nil {
        // handle response
    }
}
```

## GetRecommendations

Retrieves recommendations for the specified session. To avoid retrieving the same recommendations in subsequent calls, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_NotifyRecommendationsReceived.html">NotifyRecommendationsReceived</a>. This API supports long-polling behavior with the <code>waitTimeSeconds</code> parameter. Short poll is the default behavior and only returns recommendations already available. To perform a manual query against an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_QueryAssistant.html">QueryAssistant</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRecommendations(ctx, operations.GetRecommendationsRequest{
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("debitis"),
        AssistantID: "a",
        MaxResults: sdk.Int64(680056),
        SessionID: "in",
        WaitTimeSeconds: sdk.Int64(449198),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRecommendationsResponse != nil {
        // handle response
    }
}
```

## GetSession

Retrieves information for a specified session.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSession(ctx, operations.GetSessionRequest{
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("facere"),
        AssistantID: "ea",
        SessionID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSessionResponse != nil {
        // handle response
    }
}
```

## ListAssistantAssociations

Lists information about assistant associations.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAssistantAssociations(ctx, operations.ListAssistantAssociationsRequest{
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("delectus"),
        AssistantID: "quidem",
        MaxResults: sdk.Int64(588465),
        NextToken: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssistantAssociationsResponse != nil {
        // handle response
    }
}
```

## ListAssistants

Lists information about assistants.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAssistants(ctx, operations.ListAssistantsRequest{
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("nisi"),
        MaxResults: sdk.Int64(423855),
        NextToken: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssistantsResponse != nil {
        // handle response
    }
}
```

## ListContents

Lists the content.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListContents(ctx, operations.ListContentsRequest{
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("id"),
        KnowledgeBaseID: "labore",
        MaxResults: sdk.Int64(290077),
        NextToken: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListContentsResponse != nil {
        // handle response
    }
}
```

## ListKnowledgeBases

Lists the knowledge bases.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListKnowledgeBases(ctx, operations.ListKnowledgeBasesRequest{
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("magnam"),
        MaxResults: sdk.Int64(92373),
        NextToken: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListKnowledgeBasesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags for the specified resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        ResourceArn: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## NotifyRecommendationsReceived

Removes the specified recommendations from the specified assistant's queue of newly available recommendations. You can use this API in conjunction with <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a> and a <code>waitTimeSeconds</code> input for long-polling behavior and avoiding duplicate recommendations.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.NotifyRecommendationsReceived(ctx, operations.NotifyRecommendationsReceivedRequest{
        RequestBody: operations.NotifyRecommendationsReceivedRequestBody{
            RecommendationIds: []string{
                "eum",
                "dolor",
            },
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("debitis"),
        AssistantID: "eius",
        SessionID: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyRecommendationsReceivedResponse != nil {
        // handle response
    }
}
```

## QueryAssistant

Performs a manual search against the specified assistant. To retrieve recommendations for an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a>. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.QueryAssistant(ctx, operations.QueryAssistantRequest{
        RequestBody: operations.QueryAssistantRequestBody{
            MaxResults: sdk.Int64(537023),
            NextToken: sdk.String("facilis"),
            QueryText: "in",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("repellat"),
        AssistantID: "quibusdam",
        MaxResults: sdk.String("sed"),
        NextToken: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryAssistantResponse != nil {
        // handle response
    }
}
```

## RemoveKnowledgeBaseTemplateURI

Removes a URI template from a knowledge base.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RemoveKnowledgeBaseTemplateURI(ctx, operations.RemoveKnowledgeBaseTemplateURIRequest{
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("sunt"),
        KnowledgeBaseID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveKnowledgeBaseTemplateURIResponse != nil {
        // handle response
    }
}
```

## SearchContent

Searches for content in a specified knowledge base. Can be used to get a specific content resource by its name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SearchContent(ctx, operations.SearchContentRequest{
        RequestBody: operations.SearchContentRequestBody{
            SearchExpression: operations.SearchContentRequestBodySearchExpression{
                Filters: []shared.Filter{
                    shared.Filter{
                        Field: shared.FilterFieldEnumName,
                        Operator: shared.FilterOperatorEnumEquals,
                        Value: "pariatur",
                    },
                    shared.Filter{
                        Field: shared.FilterFieldEnumName,
                        Operator: shared.FilterOperatorEnumEquals,
                        Value: "maxime",
                    },
                    shared.Filter{
                        Field: shared.FilterFieldEnumName,
                        Operator: shared.FilterOperatorEnumEquals,
                        Value: "ea",
                    },
                    shared.Filter{
                        Field: shared.FilterFieldEnumName,
                        Operator: shared.FilterOperatorEnumEquals,
                        Value: "excepturi",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        KnowledgeBaseID: "voluptate",
        MaxResults: sdk.Int64(420075),
        NextToken: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchContentResponse != nil {
        // handle response
    }
}
```

## SearchSessions

Searches for sessions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SearchSessions(ctx, operations.SearchSessionsRequest{
        RequestBody: operations.SearchSessionsRequestBody{
            SearchExpression: operations.SearchSessionsRequestBodySearchExpression{
                Filters: []shared.Filter{
                    shared.Filter{
                        Field: shared.FilterFieldEnumName,
                        Operator: shared.FilterOperatorEnumEquals,
                        Value: "pariatur",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("cumque"),
        AssistantID: "corporis",
        MaxResults: sdk.Int64(944124),
        NextToken: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchSessionsResponse != nil {
        // handle response
    }
}
```

## StartContentUpload

Get a URL to upload content to a knowledge base. To upload content, first make a PUT request to the returned URL with your file, making sure to include the required headers. Then use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateContent.html">CreateContent</a> to finalize the content creation process or <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateContent.html">UpdateContent</a> to modify an existing resource. You can only upload content to a knowledge base of type CUSTOM.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartContentUpload(ctx, operations.StartContentUploadRequest{
        RequestBody: operations.StartContentUploadRequestBody{
            ContentType: "nobis",
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
        KnowledgeBaseID: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartContentUploadResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds the specified tags to the specified resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "dolores": "minus",
            },
        },
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("omnis"),
        ResourceArn: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes the specified tags from the specified resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("perspiciatis"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("eaque"),
        ResourceArn: "occaecati",
        TagKeys: []string{
            "adipisci",
            "asperiores",
            "earum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateContent

Updates information about the content.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateContent(ctx, operations.UpdateContentRequest{
        RequestBody: operations.UpdateContentRequestBody{
            Metadata: map[string]string{
                "iste": "dolorum",
                "deleniti": "pariatur",
            },
            OverrideLinkOutURI: sdk.String("provident"),
            RemoveOverrideLinkOutURI: sdk.Bool(false),
            RevisionID: sdk.String("nobis"),
            Title: sdk.String("Miss"),
            UploadID: sdk.String("delectus"),
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("qui"),
        ContentID: "ipsum",
        KnowledgeBaseID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateContentResponse != nil {
        // handle response
    }
}
```

## UpdateKnowledgeBaseTemplateURI

Updates the template URI of a knowledge base. This is only supported for knowledge bases of type EXTERNAL. Include a single variable in <code>${variable}</code> format; this interpolated by Wisdom using ingested content. For example, if you ingest a Salesforce article, it has an <code>Id</code> value, and you can set the template URI to <code>https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*${Id}*/view</code>. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateKnowledgeBaseTemplateURI(ctx, operations.UpdateKnowledgeBaseTemplateURIRequest{
        RequestBody: operations.UpdateKnowledgeBaseTemplateURIRequestBody{
            TemplateURI: "excepturi",
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("numquam"),
        KnowledgeBaseID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateKnowledgeBaseTemplateURIResponse != nil {
        // handle response
    }
}
```
