# SDK

## Overview

With Amazon Connect Cases, your agents can track and manage customer issues that require multiple interactions, follow-up tasks, and teams in your contact center. A case represents a customer issue. It records the issue, the steps and interactions taken to resolve the issue, and the outcome. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cases.html">Amazon Connect Cases</a> in the <i>Amazon Connect Administrator Guide</i>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/cases/>
### Available Operations

* [batchGetField](#batchgetfield) - Returns the description for the list of fields in the request parameters. 
* [batchPutFieldOptions](#batchputfieldoptions) - Creates and updates a set of field options for a single select field in a Cases domain.
* [createCase](#createcase) - <p>Creates a case in the specified Cases domain. Case system and custom fields are taken as an array id/value pairs with a declared data types.</p> <note> <p>The following fields are required when creating a case:</p> <pre><code> &lt;ul&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;customer_id&lt;/code&gt; - You must provide the full customer profile ARN in this format: &lt;code&gt;arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;title&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/note&gt; </code></pre>
* [createDomain](#createdomain) - <p>Creates a domain, which is a container for all case data, such as cases, fields, templates and layouts. Each Amazon Connect instance can be associated with only one Cases domain.</p> <important> <p>This will not associate your connect instance to Cases domain. Instead, use the Amazon Connect <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateIntegrationAssociation.html">CreateIntegrationAssociation</a> API. You need specific IAM permissions to successfully associate the Cases domain. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/required-permissions-iam-cases.html#onboard-cases-iam">Onboard to Cases</a>.</p> </important>
* [createField](#createfield) - Creates a field in the Cases domain. This field is used to define the case object model (that is, defines what data can be captured on cases) in a Cases domain. 
* [createLayout](#createlayout) - <p>Creates a layout in the Cases domain. Layouts define the following configuration in the top section and More Info tab of the Cases user interface:</p> <ul> <li> <p>Fields to display to the users</p> </li> <li> <p>Field ordering</p> </li> </ul> <note> <p>Title and Status fields cannot be part of layouts since they are not configurable.</p> </note>
* [createRelatedItem](#createrelateditem) - <p>Creates a related item (comments, tasks, and contacts) and associates it with a case.</p> <note> <p>A Related Item is a resource that is associated with a case. It may or may not have an external identifier linking it to an external resource (for example, a <code>contactArn</code>). All Related Items have their own internal identifier, the <code>relatedItemArn</code>. Examples of related items include <code>comments</code> and <code>contacts</code>.</p> </note>
* [createTemplate](#createtemplate) - Creates a template in the Cases domain. This template is used to define the case object model (that is, to define what data can be captured on cases) in a Cases domain. A template must have a unique name within a domain, and it must reference existing field IDs and layout IDs. Additionally, multiple fields with same IDs are not allowed within the same Template. A template can be either Active or Inactive, as indicated by its status. Inactive templates cannot be used to create cases.
* [deleteDomain](#deletedomain) - Deletes a domain.
* [getCase](#getcase) - Returns information about a specific case if it exists. 
* [getCaseEventConfiguration](#getcaseeventconfiguration) - Returns the case event publishing configuration.
* [getDomain](#getdomain) - Returns information about a specific domain if it exists. 
* [getLayout](#getlayout) - Returns the details for the requested layout.
* [getTemplate](#gettemplate) - Returns the details for the requested template. 
* [listCasesForContact](#listcasesforcontact) - Lists cases for a given contact.
* [listDomains](#listdomains) - Lists all cases domains in the Amazon Web Services account. Each list item is a condensed summary object of the domain.
* [listFieldOptions](#listfieldoptions) - Lists all of the field options for a field identifier in the domain. 
* [listFields](#listfields) - Lists all fields in a Cases domain.
* [listLayouts](#listlayouts) - Lists all layouts in the given cases domain. Each list item is a condensed summary object of the layout.
* [listTagsForResource](#listtagsforresource) - Lists tags for a resource.
* [listTemplates](#listtemplates) - Lists all of the templates in a Cases domain. Each list item is a condensed summary object of the template. 
* [putCaseEventConfiguration](#putcaseeventconfiguration) - API for adding case event publishing configuration
* [searchCases](#searchcases) - <p>Searches for cases within their associated Cases domain. Search results are returned as a paginated list of abridged case documents.</p> <note> <p>For <code>customer_id</code> you must provide the full customer profile ARN in this format: <code> arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID</code>. </p> </note>
* [searchRelatedItems](#searchrelateditems) - <p>Searches for related items that are associated with a case.</p> <note> <p>If no filters are provided, this returns all related items associated with a case.</p> </note>
* [tagResource](#tagresource) - Adds tags to a resource.
* [untagResource](#untagresource) - Untags a resource.
* [updateCase](#updatecase) - <p>Updates the values of fields on a case. Fields to be updated are received as an array of id/value pairs identical to the <code>CreateCase</code> input .</p> <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p>
* [updateField](#updatefield) - Updates the properties of an existing field. 
* [updateLayout](#updatelayout) - <p>Updates the attributes of an existing layout.</p> <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p> <p>A <code>ValidationException</code> is returned when you add non-existent <code>fieldIds</code> to a layout.</p> <note> <p>Title and Status fields cannot be part of layouts because they are not configurable.</p> </note>
* [updateTemplate](#updatetemplate) - Updates the attributes of an existing template. The template attributes that can be modified include <code>name</code>, <code>description</code>, <code>layoutConfiguration</code>, <code>requiredFields</code>, and <code>status</code>. At least one of these attributes must not be null. If a null value is provided for a given attribute, that attribute is ignored and its current value is preserved.

## batchGetField

Returns the description for the list of fields in the request parameters. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetFieldRequest;
import org.openapis.openapi.models.operations.BatchGetFieldRequestBody;
import org.openapis.openapi.models.operations.BatchGetFieldResponse;
import org.openapis.openapi.models.shared.FieldIdentifier;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetFieldRequest req = new BatchGetFieldRequest(                new BatchGetFieldRequestBody(                new org.openapis.openapi.models.shared.FieldIdentifier[]{{
                                                add(new FieldIdentifier("reiciendis") {{
                                                    id = "3a2fa946-7739-4251-aa52-c3f5ad019da1";
                                                }}),
                                                add(new FieldIdentifier("praesentium") {{
                                                    id = "fe78f097-b007-44f1-9471-b5e6e13b99d4";
                                                }}),
                                                add(new FieldIdentifier("facilis") {{
                                                    id = "8e1e91e4-50ad-42ab-9442-69802d502a94";
                                                }}),
                                            }});, "tempore") {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "eum";
                xAmzDate = "non";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "aliquid";
            }};            

            BatchGetFieldResponse res = sdk.sdk.batchGetField(req);

            if (res.batchGetFieldResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchPutFieldOptions

Creates and updates a set of field options for a single select field in a Cases domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchPutFieldOptionsRequest;
import org.openapis.openapi.models.operations.BatchPutFieldOptionsRequestBody;
import org.openapis.openapi.models.operations.BatchPutFieldOptionsResponse;
import org.openapis.openapi.models.shared.FieldOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchPutFieldOptionsRequest req = new BatchPutFieldOptionsRequest(                new BatchPutFieldOptionsRequestBody(                new org.openapis.openapi.models.shared.FieldOption[]{{
                                                add(new FieldOption(false, "in", "in") {{
                                                    active = false;
                                                    name = "Luke Fadel";
                                                    value = "dolorum";
                                                }}),
                                                add(new FieldOption(false, "ea", "aliquid") {{
                                                    active = false;
                                                    name = "Mrs. Emilio Price";
                                                    value = "facere";
                                                }}),
                                                add(new FieldOption(false, "delectus", "quidem") {{
                                                    active = false;
                                                    name = "Tomas Friesen";
                                                    value = "accusamus";
                                                }}),
                                                add(new FieldOption(false, "amet", "deserunt") {{
                                                    active = false;
                                                    name = "Marco Olson";
                                                    value = "sapiente";
                                                }}),
                                            }});, "nisi", "vel") {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "molestiae";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "distinctio";
            }};            

            BatchPutFieldOptionsResponse res = sdk.sdk.batchPutFieldOptions(req);

            if (res.batchPutFieldOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCase

<p>Creates a case in the specified Cases domain. Case system and custom fields are taken as an array id/value pairs with a declared data types.</p> <note> <p>The following fields are required when creating a case:</p> <pre><code> &lt;ul&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;customer_id&lt;/code&gt; - You must provide the full customer profile ARN in this format: &lt;code&gt;arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;title&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/note&gt; </code></pre>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCaseRequest;
import org.openapis.openapi.models.operations.CreateCaseRequestBody;
import org.openapis.openapi.models.operations.CreateCaseResponse;
import org.openapis.openapi.models.shared.FieldValue;
import org.openapis.openapi.models.shared.FieldValueUnion;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCaseRequest req = new CreateCaseRequest(                new CreateCaseRequestBody(                new org.openapis.openapi.models.shared.FieldValue[]{{
                                                add(new FieldValue("in",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 1002.26;
                                                                    stringValue = "architecto";
                                                                }};) {{
                                                    id = "469b6e21-4195-4989-8afa-563e2516fe4c";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 5370.23;
                                                        stringValue = "facilis";
                                                    }};
                                                }}),
                                                add(new FieldValue("nemo",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 9755.22;
                                                                    stringValue = "perferendis";
                                                                }};) {{
                                                    id = "e5b7fd2e-d028-4921-8ddc-692601fb576b";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 505.88;
                                                        stringValue = "pariatur";
                                                    }};
                                                }}),
                                            }}, "fugiat") {{
                                clientToken = "amet";
                            }};, "aut") {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "hic";
                xAmzDate = "libero";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "quis";
            }};            

            CreateCaseResponse res = sdk.sdk.createCase(req);

            if (res.createCaseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDomain

<p>Creates a domain, which is a container for all case data, such as cases, fields, templates and layouts. Each Amazon Connect instance can be associated with only one Cases domain.</p> <important> <p>This will not associate your connect instance to Cases domain. Instead, use the Amazon Connect <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateIntegrationAssociation.html">CreateIntegrationAssociation</a> API. You need specific IAM permissions to successfully associate the Cases domain. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/required-permissions-iam-cases.html#onboard-cases-iam">Onboard to Cases</a>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDomainRequest;
import org.openapis.openapi.models.operations.CreateDomainRequestBody;
import org.openapis.openapi.models.operations.CreateDomainResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDomainRequest req = new CreateDomainRequest(                new CreateDomainRequestBody("dignissimos");) {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "quis";
                xAmzCredential = "nesciunt";
                xAmzDate = "eos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "minus";
            }};            

            CreateDomainResponse res = sdk.sdk.createDomain(req);

            if (res.createDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createField

Creates a field in the Cases domain. This field is used to define the case object model (that is, defines what data can be captured on cases) in a Cases domain. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFieldRequest;
import org.openapis.openapi.models.operations.CreateFieldRequestBody;
import org.openapis.openapi.models.operations.CreateFieldRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.CreateFieldResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFieldRequest req = new CreateFieldRequest(                new CreateFieldRequestBody("dolor", CreateFieldRequestBodyTypeEnum.SINGLE_SELECT) {{
                                description = "nostrum";
                            }};, "hic") {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "facilis";
                xAmzDate = "perspiciatis";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "consequuntur";
            }};            

            CreateFieldResponse res = sdk.sdk.createField(req);

            if (res.createFieldResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLayout

<p>Creates a layout in the Cases domain. Layouts define the following configuration in the top section and More Info tab of the Cases user interface:</p> <ul> <li> <p>Fields to display to the users</p> </li> <li> <p>Field ordering</p> </li> </ul> <note> <p>Title and Status fields cannot be part of layouts since they are not configurable.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLayoutRequest;
import org.openapis.openapi.models.operations.CreateLayoutRequestBody;
import org.openapis.openapi.models.operations.CreateLayoutRequestBodyContent;
import org.openapis.openapi.models.operations.CreateLayoutResponse;
import org.openapis.openapi.models.shared.BasicLayout;
import org.openapis.openapi.models.shared.FieldGroup;
import org.openapis.openapi.models.shared.FieldItem;
import org.openapis.openapi.models.shared.LayoutSections;
import org.openapis.openapi.models.shared.Section;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLayoutRequest req = new CreateLayoutRequest(                new CreateLayoutRequestBody(                new CreateLayoutRequestBodyContent() {{
                                                basic = new BasicLayout() {{
                                                    moreInfo = new LayoutSections() {{
                                                        sections = new org.openapis.openapi.models.shared.Section[]{{
                                                            add(new Section() {{
                                                                fieldGroup = new FieldGroup(                new org.openapis.openapi.models.shared.FieldItem[]{{
                                                                                    add(new FieldItem("saepe") {{
                                                                                        id = "bf69280d-1ba7-47a8-9ebf-737ae4203ce5";
                                                                                    }}),
                                                                                    add(new FieldItem("nihil") {{
                                                                                        id = "6a95d8a0-d446-4ce2-af7a-73cf3be453f8";
                                                                                    }}),
                                                                                    add(new FieldItem("magni") {{
                                                                                        id = "0b326b5a-7342-49cd-b1a8-422bb679d232";
                                                                                    }}),
                                                                                    add(new FieldItem("repellendus") {{
                                                                                        id = "715bf0cb-b1e3-41b8-b90f-3443a1108e0a";
                                                                                    }}),
                                                                                }}) {{
                                                                    fields = new org.openapis.openapi.models.shared.FieldItem[]{{
                                                                        add(new FieldItem("veritatis") {{
                                                                            id = "9b3fe49a-8d9c-4bf4-8633-323f9b77f3a4";
                                                                        }}),
                                                                    }};
                                                                    name = "Angela Kerluke";
                                                                }};
                                                            }}),
                                                            add(new Section() {{
                                                                fieldGroup = new FieldGroup(                new org.openapis.openapi.models.shared.FieldItem[]{{
                                                                                    add(new FieldItem("commodi") {{
                                                                                        id = "b3cdca42-5190-44e5-a3c7-e0bc7178e479";
                                                                                    }}),
                                                                                    add(new FieldItem("veritatis") {{
                                                                                        id = "f2a70c68-8282-4aa4-8256-2f222e9817ee";
                                                                                    }}),
                                                                                    add(new FieldItem("quas") {{
                                                                                        id = "7cbe61e6-b7b9-45bc-8ab3-c20c4f3789fd";
                                                                                    }}),
                                                                                }}) {{
                                                                    fields = new org.openapis.openapi.models.shared.FieldItem[]{{
                                                                        add(new FieldItem("illum") {{
                                                                            id = "f4b92187-9fce-4953-b73e-f7fbc7abd74d";
                                                                        }}),
                                                                        add(new FieldItem("nulla") {{
                                                                            id = "39c0f5d2-cff7-4c70-a456-26d436813f16";
                                                                        }}),
                                                                        add(new FieldItem("et") {{
                                                                            id = "9f5fce6c-5561-446c-be25-0fb008c42e14";
                                                                        }}),
                                                                        add(new FieldItem("suscipit") {{
                                                                            id = "aac366c8-dd6b-4144-a907-474778a7bd46";
                                                                        }}),
                                                                    }};
                                                                    name = "Alan Lang Jr.";
                                                                }};
                                                            }}),
                                                            add(new Section() {{
                                                                fieldGroup = new FieldGroup(                new org.openapis.openapi.models.shared.FieldItem[]{{
                                                                                    add(new FieldItem("velit") {{
                                                                                        id = "6071f93f-5f06-442d-ac7a-f515cc413aa6";
                                                                                    }}),
                                                                                }}) {{
                                                                    fields = new org.openapis.openapi.models.shared.FieldItem[]{{
                                                                        add(new FieldItem("ullam") {{
                                                                            id = "1f99dd2e-fd12-41aa-af1e-674bdb04f157";
                                                                        }}),
                                                                        add(new FieldItem("non") {{
                                                                            id = "6082d68e-a19f-41d1-b051-339d08086a18";
                                                                        }}),
                                                                    }};
                                                                    name = "Carmen McClure";
                                                                }};
                                                            }}),
                                                        }};
                                                    }};;
                                                    topPanel = new LayoutSections() {{
                                                        sections = new org.openapis.openapi.models.shared.Section[]{{
                                                            add(new Section() {{
                                                                fieldGroup = new FieldGroup(                new org.openapis.openapi.models.shared.FieldItem[]{{
                                                                                    add(new FieldItem("quaerat") {{
                                                                                        id = "6916fe1f-08f4-4294-a369-8f447f603e8b";
                                                                                    }}),
                                                                                }}) {{
                                                                    fields = new org.openapis.openapi.models.shared.FieldItem[]{{
                                                                        add(new FieldItem("saepe") {{
                                                                            id = "e8d67864-dbb6-475f-95e6-0b375ed4f6fb";
                                                                        }}),
                                                                        add(new FieldItem("dolores") {{
                                                                            id = "e41f3331-7fe3-45b6-8eb1-ea426555ba3c";
                                                                        }}),
                                                                        add(new FieldItem("dolore") {{
                                                                            id = "8744ed53-b88f-43a8-98f5-c0b2f2fb7b19";
                                                                        }}),
                                                                    }};
                                                                    name = "Aaron King";
                                                                }};
                                                            }}),
                                                            add(new Section() {{
                                                                fieldGroup = new FieldGroup(                new org.openapis.openapi.models.shared.FieldItem[]{{
                                                                                    add(new FieldItem("reprehenderit") {{
                                                                                        id = "4b8abf60-3a79-4f9d-be0a-b7da8a50ce18";
                                                                                    }}),
                                                                                    add(new FieldItem("repellendus") {{
                                                                                        id = "f86bc173-d689-4eee-9526-f8d986e881ea";
                                                                                    }}),
                                                                                    add(new FieldItem("quidem") {{
                                                                                        id = "4f0e1012-563f-494e-a9e9-73e922a57a15";
                                                                                    }}),
                                                                                }}) {{
                                                                    fields = new org.openapis.openapi.models.shared.FieldItem[]{{
                                                                        add(new FieldItem("dolorum") {{
                                                                            id = "5e80ca55-efd2-40e4-97e1-858b6a89fbe3";
                                                                        }}),
                                                                        add(new FieldItem("consequatur") {{
                                                                            id = "5aa8e482-4d0a-4b40-b508-8e51862065e9";
                                                                        }}),
                                                                    }};
                                                                    name = "Lela Ebert Sr.";
                                                                }};
                                                            }}),
                                                            add(new Section() {{
                                                                fieldGroup = new FieldGroup(                new org.openapis.openapi.models.shared.FieldItem[]{{
                                                                                    add(new FieldItem("fugiat") {{
                                                                                        id = "312fde04-7717-478f-b61d-017476360a15";
                                                                                    }}),
                                                                                    add(new FieldItem("aliquid") {{
                                                                                        id = "b6a66065-9a1a-4dea-ab58-51d6c645b08b";
                                                                                    }}),
                                                                                }}) {{
                                                                    fields = new org.openapis.openapi.models.shared.FieldItem[]{{
                                                                        add(new FieldItem("id") {{
                                                                            id = "3e060807-e2b6-4e3a-b884-5f0597a60ff2";
                                                                        }}),
                                                                        add(new FieldItem("possimus") {{
                                                                            id = "54a31e94-764a-43e8-a5e7-956f9251a5a9";
                                                                        }}),
                                                                        add(new FieldItem("eius") {{
                                                                            id = "a660ff57-bfaa-4d4f-9efc-1b4512c10326";
                                                                        }}),
                                                                        add(new FieldItem("consequatur") {{
                                                                            id = "8dc2f615-199e-4bfd-8e9f-e6c632ca3aed";
                                                                        }}),
                                                                    }};
                                                                    name = "Catherine Kuphal";
                                                                }};
                                                            }}),
                                                        }};
                                                    }};;
                                                }};;
                                            }};, "beatae");, "voluptatum") {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "rerum";
                xAmzDate = "est";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "sapiente";
            }};            

            CreateLayoutResponse res = sdk.sdk.createLayout(req);

            if (res.createLayoutResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRelatedItem

<p>Creates a related item (comments, tasks, and contacts) and associates it with a case.</p> <note> <p>A Related Item is a resource that is associated with a case. It may or may not have an external identifier linking it to an external resource (for example, a <code>contactArn</code>). All Related Items have their own internal identifier, the <code>relatedItemArn</code>. Examples of related items include <code>comments</code> and <code>contacts</code>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRelatedItemRequest;
import org.openapis.openapi.models.operations.CreateRelatedItemRequestBody;
import org.openapis.openapi.models.operations.CreateRelatedItemRequestBodyContent;
import org.openapis.openapi.models.operations.CreateRelatedItemRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.CreateRelatedItemResponse;
import org.openapis.openapi.models.shared.CommentBodyTextTypeEnum;
import org.openapis.openapi.models.shared.CommentContent;
import org.openapis.openapi.models.shared.Contact;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRelatedItemRequest req = new CreateRelatedItemRequest(                new CreateRelatedItemRequestBody(                new CreateRelatedItemRequestBodyContent() {{
                                                comment = new CommentContent("architecto", CommentBodyTextTypeEnum.TEXT_PLAIN);;
                                                contact = new Contact("fuga");;
                                            }};, CreateRelatedItemRequestBodyTypeEnum.COMMENT);, "debitis", "voluptatem") {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "earum";
                xAmzDate = "ex";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "minus";
            }};            

            CreateRelatedItemResponse res = sdk.sdk.createRelatedItem(req);

            if (res.createRelatedItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTemplate

Creates a template in the Cases domain. This template is used to define the case object model (that is, to define what data can be captured on cases) in a Cases domain. A template must have a unique name within a domain, and it must reference existing field IDs and layout IDs. Additionally, multiple fields with same IDs are not allowed within the same Template. A template can be either Active or Inactive, as indicated by its status. Inactive templates cannot be used to create cases.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTemplateRequest;
import org.openapis.openapi.models.operations.CreateTemplateRequestBody;
import org.openapis.openapi.models.operations.CreateTemplateRequestBodyLayoutConfiguration;
import org.openapis.openapi.models.operations.CreateTemplateRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.CreateTemplateResponse;
import org.openapis.openapi.models.shared.RequiredField;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTemplateRequest req = new CreateTemplateRequest(                new CreateTemplateRequestBody("asperiores") {{
                                description = "ratione";
                                layoutConfiguration = new CreateTemplateRequestBodyLayoutConfiguration() {{
                                    defaultLayout = "ullam";
                                }};;
                                requiredFields = new org.openapis.openapi.models.shared.RequiredField[]{{
                                    add(new RequiredField("totam") {{
                                        fieldId = "illum";
                                    }}),
                                }};
                                status = CreateTemplateRequestBodyStatusEnum.INACTIVE;
                            }};, "quibusdam") {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "culpa";
                xAmzDate = "dolor";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "deleniti";
            }};            

            CreateTemplateResponse res = sdk.sdk.createTemplate(req);

            if (res.createTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDomain

Deletes a domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDomainRequest;
import org.openapis.openapi.models.operations.DeleteDomainResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDomainRequest req = new DeleteDomainRequest("tempora") {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "architecto";
                xAmzDate = "sit";
                xAmzSecurityToken = "modi";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "ab";
            }};            

            DeleteDomainResponse res = sdk.sdk.deleteDomain(req);

            if (res.deleteDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCase

Returns information about a specific case if it exists. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCaseRequest;
import org.openapis.openapi.models.operations.GetCaseRequestBody;
import org.openapis.openapi.models.operations.GetCaseResponse;
import org.openapis.openapi.models.shared.FieldIdentifier;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCaseRequest req = new GetCaseRequest(                new GetCaseRequestBody(                new org.openapis.openapi.models.shared.FieldIdentifier[]{{
                                                add(new FieldIdentifier("nisi") {{
                                                    id = "3d5208ec-e7e2-453b-a684-51c6c6e205e1";
                                                }}),
                                            }}) {{
                                nextToken = "at";
                            }};, "vero", "est") {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "doloribus";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "optio";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "nemo";
                nextToken = "voluptate";
            }};            

            GetCaseResponse res = sdk.sdk.getCase(req);

            if (res.getCaseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCaseEventConfiguration

Returns the case event publishing configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCaseEventConfigurationRequest;
import org.openapis.openapi.models.operations.GetCaseEventConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCaseEventConfigurationRequest req = new GetCaseEventConfigurationRequest("officia") {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "nemo";
                xAmzDate = "quos";
                xAmzSecurityToken = "eius";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "ducimus";
            }};            

            GetCaseEventConfigurationResponse res = sdk.sdk.getCaseEventConfiguration(req);

            if (res.getCaseEventConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomain

Returns information about a specific domain if it exists. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainRequest;
import org.openapis.openapi.models.operations.GetDomainResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDomainRequest req = new GetDomainRequest("fuga") {{
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "quasi";
                xAmzDate = "rem";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "nisi";
            }};            

            GetDomainResponse res = sdk.sdk.getDomain(req);

            if (res.getDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLayout

Returns the details for the requested layout.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLayoutRequest;
import org.openapis.openapi.models.operations.GetLayoutResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLayoutRequest req = new GetLayoutRequest("consectetur", "aperiam") {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "soluta";
                xAmzDate = "alias";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "occaecati";
            }};            

            GetLayoutResponse res = sdk.sdk.getLayout(req);

            if (res.getLayoutResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTemplate

Returns the details for the requested template. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTemplateRequest;
import org.openapis.openapi.models.operations.GetTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTemplateRequest req = new GetTemplateRequest("magni", "inventore") {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "voluptatibus";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "minima";
            }};            

            GetTemplateResponse res = sdk.sdk.getTemplate(req);

            if (res.getTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCasesForContact

Lists cases for a given contact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCasesForContactRequest;
import org.openapis.openapi.models.operations.ListCasesForContactRequestBody;
import org.openapis.openapi.models.operations.ListCasesForContactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCasesForContactRequest req = new ListCasesForContactRequest(                new ListCasesForContactRequestBody("maxime") {{
                                maxResults = 300403L;
                                nextToken = "temporibus";
                            }};, "quos") {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "commodi";
                xAmzDate = "totam";
                xAmzSecurityToken = "earum";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "nam";
                maxResults = "vero";
                nextToken = "voluptatem";
            }};            

            ListCasesForContactResponse res = sdk.sdk.listCasesForContact(req);

            if (res.listCasesForContactResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDomains

Lists all cases domains in the Amazon Web Services account. Each list item is a condensed summary object of the domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDomainsRequest;
import org.openapis.openapi.models.operations.ListDomainsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDomainsRequest req = new ListDomainsRequest() {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "alias";
                xAmzCredential = "quasi";
                xAmzDate = "non";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "sint";
                maxResults = 858778L;
                nextToken = "deserunt";
            }};            

            ListDomainsResponse res = sdk.sdk.listDomains(req);

            if (res.listDomainsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFieldOptions

Lists all of the field options for a field identifier in the domain. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFieldOptionsRequest;
import org.openapis.openapi.models.operations.ListFieldOptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFieldOptionsRequest req = new ListFieldOptionsRequest("nemo", "reprehenderit") {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "quis";
                xAmzCredential = "sint";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "necessitatibus";
                maxResults = 991891L;
                nextToken = "ex";
                values = new String[]{{
                    add("debitis"),
                    add("delectus"),
                }};
            }};            

            ListFieldOptionsResponse res = sdk.sdk.listFieldOptions(req);

            if (res.listFieldOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFields

Lists all fields in a Cases domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFieldsRequest;
import org.openapis.openapi.models.operations.ListFieldsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFieldsRequest req = new ListFieldsRequest("minus") {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "consectetur";
                xAmzDate = "velit";
                xAmzSecurityToken = "atque";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "impedit";
                maxResults = 166047L;
                nextToken = "soluta";
            }};            

            ListFieldsResponse res = sdk.sdk.listFields(req);

            if (res.listFieldsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLayouts

Lists all layouts in the given cases domain. Each list item is a condensed summary object of the layout.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLayoutsRequest;
import org.openapis.openapi.models.operations.ListLayoutsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLayoutsRequest req = new ListLayoutsRequest("nam") {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "voluptate";
                xAmzDate = "sequi";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "quo";
                maxResults = 535468L;
                nextToken = "quibusdam";
            }};            

            ListLayoutsResponse res = sdk.sdk.listLayouts(req);

            if (res.listLayoutsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists tags for a resource.

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
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("odit") {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "vel";
                xAmzCredential = "magnam";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "inventore";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "libero";
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

## listTemplates

Lists all of the templates in a Cases domain. Each list item is a condensed summary object of the template. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTemplatesRequest;
import org.openapis.openapi.models.operations.ListTemplatesResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TemplateStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTemplatesRequest req = new ListTemplatesRequest("voluptatibus") {{
                xAmzAlgorithm = "quia";
                xAmzContentSha256 = "porro";
                xAmzCredential = "aliquam";
                xAmzDate = "velit";
                xAmzSecurityToken = "illo";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "vel";
                maxResults = 406922L;
                nextToken = "beatae";
                status = new org.openapis.openapi.models.shared.TemplateStatusEnum[]{{
                    add(TemplateStatusEnum.INACTIVE),
                    add(TemplateStatusEnum.ACTIVE),
                    add(TemplateStatusEnum.ACTIVE),
                    add(TemplateStatusEnum.ACTIVE),
                }};
            }};            

            ListTemplatesResponse res = sdk.sdk.listTemplates(req);

            if (res.listTemplatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCaseEventConfiguration

API for adding case event publishing configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCaseEventConfigurationRequest;
import org.openapis.openapi.models.operations.PutCaseEventConfigurationRequestBody;
import org.openapis.openapi.models.operations.PutCaseEventConfigurationRequestBodyEventBridge;
import org.openapis.openapi.models.operations.PutCaseEventConfigurationResponse;
import org.openapis.openapi.models.shared.CaseEventIncludedData;
import org.openapis.openapi.models.shared.EventIncludedData;
import org.openapis.openapi.models.shared.FieldIdentifier;
import org.openapis.openapi.models.shared.RelatedItemEventIncludedData;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutCaseEventConfigurationRequest req = new PutCaseEventConfigurationRequest(                new PutCaseEventConfigurationRequestBody(                new PutCaseEventConfigurationRequestBodyEventBridge() {{
                                                enabled = false;
                                                includedData = new EventIncludedData() {{
                                                    caseData = new CaseEventIncludedData(                new org.openapis.openapi.models.shared.FieldIdentifier[]{{
                                                                        add(new FieldIdentifier("animi") {{
                                                                            id = "1cf9e06e-3a43-4700-8ae6-b6bc9b8f759e";
                                                                        }}),
                                                                        add(new FieldIdentifier("exercitationem") {{
                                                                            id = "c55a9741-d311-4352-965b-b8a720261143";
                                                                        }}),
                                                                        add(new FieldIdentifier("esse") {{
                                                                            id = "e139dbc2-259b-41ab-9a8c-070e1084cb06";
                                                                        }}),
                                                                        add(new FieldIdentifier("quibusdam") {{
                                                                            id = "2d1ad879-eeb9-4665-b85e-fbd02bae0be2";
                                                                        }}),
                                                                    }});;
                                                    relatedItemData = new RelatedItemEventIncludedData(false);;
                                                }};;
                                            }};);, "odio") {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "odit";
                xAmzCredential = "explicabo";
                xAmzDate = "corporis";
                xAmzSecurityToken = "error";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "adipisci";
            }};            

            PutCaseEventConfigurationResponse res = sdk.sdk.putCaseEventConfiguration(req);

            if (res.putCaseEventConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchCases

<p>Searches for cases within their associated Cases domain. Search results are returned as a paginated list of abridged case documents.</p> <note> <p>For <code>customer_id</code> you must provide the full customer profile ARN in this format: <code> arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID</code>. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchCasesRequest;
import org.openapis.openapi.models.operations.SearchCasesRequestBody;
import org.openapis.openapi.models.operations.SearchCasesRequestBodyFilter;
import org.openapis.openapi.models.operations.SearchCasesResponse;
import org.openapis.openapi.models.shared.CaseFilter;
import org.openapis.openapi.models.shared.FieldFilter;
import org.openapis.openapi.models.shared.FieldIdentifier;
import org.openapis.openapi.models.shared.FieldValue;
import org.openapis.openapi.models.shared.FieldValueUnion;
import org.openapis.openapi.models.shared.OrderEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Sort;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchCasesRequest req = new SearchCasesRequest(                new SearchCasesRequestBody() {{
                                fields = new org.openapis.openapi.models.shared.FieldIdentifier[]{{
                                    add(new FieldIdentifier("magnam") {{
                                        id = "4b5197f9-2443-4da7-8e52-b895c537c645";
                                    }}),
                                    add(new FieldIdentifier("dolores") {{
                                        id = "efb0b348-96c3-4ca5-acfb-e2fd57075779";
                                    }}),
                                    add(new FieldIdentifier("consequuntur") {{
                                        id = "9177deac-646e-4cb5-b340-9e3eb1e5a2b1";
                                    }}),
                                }};
                                filter = new SearchCasesRequestBodyFilter() {{
                                    andAll = new org.openapis.openapi.models.shared.CaseFilter[]{{
                                        add(new CaseFilter() {{
                                            andAll = new org.openapis.openapi.models.shared.CaseFilter[]{{
                                                add(new CaseFilter() {{}}),
                                                add(new CaseFilter() {{}}),
                                                add(new CaseFilter() {{}}),
                                            }};
                                            field = new FieldFilter() {{
                                                contains = new FieldValue("delectus",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 7731.1;
                                                                    stringValue = "cum";
                                                                }};) {{
                                                    id = "07f116db-9954-45fc-95fa-88970e189dbb";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 2440.32;
                                                        stringValue = "doloremque";
                                                    }};
                                                }};
                                                equalTo = new FieldValue("blanditiis",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 7186.27;
                                                                    stringValue = "nisi";
                                                                }};) {{
                                                    id = "33ea055b-197c-4d44-a2f5-2d82d3513bb6";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 9775.18;
                                                        stringValue = "quaerat";
                                                    }};
                                                }};
                                                greaterThan = new FieldValue("fugiat",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 3223.33;
                                                                    stringValue = "aspernatur";
                                                                }};) {{
                                                    id = "56bcdb35-ff2e-44b2-b537-a8cd9e7319c1";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 4915.91;
                                                        stringValue = "esse";
                                                    }};
                                                }};
                                                greaterThanOrEqualTo = new FieldValue("aspernatur",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 7239.42;
                                                                    stringValue = "expedita";
                                                                }};) {{
                                                    id = "5f77b114-eeb5-42ff-b85f-c37814d4c98e";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 96.83;
                                                        stringValue = "maxime";
                                                    }};
                                                }};
                                                lessThan = new FieldValue("necessitatibus",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 5928.8;
                                                                    stringValue = "repudiandae";
                                                                }};) {{
                                                    id = "89eb75da-d636-4c60-8503-d8bb31180f73";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 5879.67;
                                                        stringValue = "dolorum";
                                                    }};
                                                }};
                                                lessThanOrEqualTo = new FieldValue("porro",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 5886.39;
                                                                    stringValue = "consectetur";
                                                                }};) {{
                                                    id = "057eb809-e281-4033-9f39-81d4c700b607";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 9980.26;
                                                        stringValue = "velit";
                                                    }};
                                                }};
                                            }};
                                            not = new CaseFilter() {{}};
                                        }}),
                                        add(new CaseFilter() {{
                                            andAll = new org.openapis.openapi.models.shared.CaseFilter[]{{
                                                add(new CaseFilter() {{}}),
                                                add(new CaseFilter() {{}}),
                                                add(new CaseFilter() {{}}),
                                                add(new CaseFilter() {{}}),
                                            }};
                                            field = new FieldFilter() {{
                                                contains = new FieldValue("numquam",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 9211.93;
                                                                    stringValue = "modi";
                                                                }};) {{
                                                    id = "73b9da3f-2ced-4a7e-a3f2-257411faf4b7";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 3499.93;
                                                        stringValue = "labore";
                                                    }};
                                                }};
                                                equalTo = new FieldValue("possimus",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 4523.99;
                                                                    stringValue = "consectetur";
                                                                }};) {{
                                                    id = "72e80285-7a5b-4404-a3a7-d575f1400e76";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 2561.14;
                                                        stringValue = "dolorum";
                                                    }};
                                                }};
                                                greaterThan = new FieldValue("incidunt",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 1854.48;
                                                                    stringValue = "qui";
                                                                }};) {{
                                                    id = "34ec1b78-1b36-4a08-888d-100efada200e";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 9416.68;
                                                        stringValue = "voluptatem";
                                                    }};
                                                }};
                                                greaterThanOrEqualTo = new FieldValue("ullam",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 7868.6;
                                                                    stringValue = "dicta";
                                                                }};) {{
                                                    id = "eb2164cf-9ab8-4366-8723-ffda9e06bee4";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 5245.77;
                                                        stringValue = "quia";
                                                    }};
                                                }};
                                                lessThan = new FieldValue("nihil",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 4584.12;
                                                                    stringValue = "iure";
                                                                }};) {{
                                                    id = "fc0e115c-80bf-4f91-8544-ec42defcce8f";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 660.74;
                                                        stringValue = "sint";
                                                    }};
                                                }};
                                                lessThanOrEqualTo = new FieldValue("doloribus",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 8237.53;
                                                                    stringValue = "unde";
                                                                }};) {{
                                                    id = "73e63562-a7b4-408f-85e3-d48fdaf313a1";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 9979.95;
                                                        stringValue = "nemo";
                                                    }};
                                                }};
                                            }};
                                            not = new CaseFilter() {{}};
                                        }}),
                                        add(new CaseFilter() {{
                                            andAll = new org.openapis.openapi.models.shared.CaseFilter[]{{
                                                add(new CaseFilter() {{}}),
                                                add(new CaseFilter() {{}}),
                                            }};
                                            field = new FieldFilter() {{
                                                contains = new FieldValue("qui",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 3970.26;
                                                                    stringValue = "magni";
                                                                }};) {{
                                                    id = "259c0b36-f25e-4a94-8f3b-756c11f6c37a";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 3269.03;
                                                        stringValue = "architecto";
                                                    }};
                                                }};
                                                equalTo = new FieldValue("perspiciatis",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 8927.08;
                                                                    stringValue = "ullam";
                                                                }};) {{
                                                    id = "43835bbc-05a2-43a4-9cef-c5fde10a0ce2";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 1189.32;
                                                        stringValue = "vel";
                                                    }};
                                                }};
                                                greaterThan = new FieldValue("incidunt",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 9253.95;
                                                                    stringValue = "quod";
                                                                }};) {{
                                                    id = "10019c6d-c5e3-4476-a799-bfbbe6949fb2";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 7257.84;
                                                        stringValue = "nam";
                                                    }};
                                                }};
                                                greaterThanOrEqualTo = new FieldValue("fugit",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 3992.22;
                                                                    stringValue = "magnam";
                                                                }};) {{
                                                    id = "ae6c3d5d-b3ad-4ebd-9dae-a4c506a8aa94";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 7773.78;
                                                        stringValue = "perferendis";
                                                    }};
                                                }};
                                                lessThan = new FieldValue("officiis",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 1483.79;
                                                                    stringValue = "necessitatibus";
                                                                }};) {{
                                                    id = "4cf5e9d9-a457-48ad-81ac-600dec001ac8";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 608.92;
                                                        stringValue = "magni";
                                                    }};
                                                }};
                                                lessThanOrEqualTo = new FieldValue("error",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 4248.54;
                                                                    stringValue = "accusantium";
                                                                }};) {{
                                                    id = "c09ff8f0-f816-4ff3-877c-13e902c14125";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 7014.41;
                                                        stringValue = "alias";
                                                    }};
                                                }};
                                            }};
                                            not = new CaseFilter() {{}};
                                        }}),
                                        add(new CaseFilter() {{
                                            andAll = new org.openapis.openapi.models.shared.CaseFilter[]{{
                                                add(new CaseFilter() {{}}),
                                                add(new CaseFilter() {{}}),
                                                add(new CaseFilter() {{}}),
                                            }};
                                            field = new FieldFilter() {{
                                                contains = new FieldValue("a",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 7497.02;
                                                                    stringValue = "perspiciatis";
                                                                }};) {{
                                                    id = "668151a4-72af-4923-8594-9f83f350cf87";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 3956.34;
                                                        stringValue = "asperiores";
                                                    }};
                                                }};
                                                equalTo = new FieldValue("accusantium",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 6378.4;
                                                                    stringValue = "impedit";
                                                                }};) {{
                                                    id = "01c6ecbb-4e24-43cf-b89f-fafeda53e5ae";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 4299.97;
                                                        stringValue = "repudiandae";
                                                    }};
                                                }};
                                                greaterThan = new FieldValue("veniam",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 4699.94;
                                                                    stringValue = "ad";
                                                                }};) {{
                                                    id = "184c2b9c-247c-4883-b3a4-0e1942f32e55";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 510.53;
                                                        stringValue = "exercitationem";
                                                    }};
                                                }};
                                                greaterThanOrEqualTo = new FieldValue("quasi",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 6490.32;
                                                                    stringValue = "accusamus";
                                                                }};) {{
                                                    id = "6f5d56d0-bd0a-4f2d-be13-db4f62cba3f8";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 6211.4;
                                                        stringValue = "non";
                                                    }};
                                                }};
                                                lessThan = new FieldValue("pariatur",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 4248.53;
                                                                    stringValue = "sapiente";
                                                                }};) {{
                                                    id = "bc0b80a6-924d-43b2-acfc-c8f895010f5d";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 8234.72;
                                                        stringValue = "neque";
                                                    }};
                                                }};
                                                lessThanOrEqualTo = new FieldValue("tenetur",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 4198.58;
                                                                    stringValue = "quidem";
                                                                }};) {{
                                                    id = "a1804e54-c82f-4168-a363-c8873e484380";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 7031.89;
                                                        stringValue = "veritatis";
                                                    }};
                                                }};
                                            }};
                                            not = new CaseFilter() {{}};
                                        }}),
                                    }};
                                    field = new FieldFilter() {{
                                        contains = new FieldValue("totam",                 new FieldValueUnion() {{
                                                            booleanValue = false;
                                                            doubleValue = 7811.93;
                                                            stringValue = "deserunt";
                                                        }};);;
                                        equalTo = new FieldValue("magni",                 new FieldValueUnion() {{
                                                            booleanValue = false;
                                                            doubleValue = 4712.07;
                                                            stringValue = "voluptas";
                                                        }};);;
                                        greaterThan = new FieldValue("animi",                 new FieldValueUnion() {{
                                                            booleanValue = false;
                                                            doubleValue = 4137.8;
                                                            stringValue = "alias";
                                                        }};);;
                                        greaterThanOrEqualTo = new FieldValue("fuga",                 new FieldValueUnion() {{
                                                            booleanValue = false;
                                                            doubleValue = 147.8;
                                                            stringValue = "dolore";
                                                        }};);;
                                        lessThan = new FieldValue("maxime",                 new FieldValueUnion() {{
                                                            booleanValue = false;
                                                            doubleValue = 3032.92;
                                                            stringValue = "iste";
                                                        }};);;
                                        lessThanOrEqualTo = new FieldValue("ullam",                 new FieldValueUnion() {{
                                                            booleanValue = false;
                                                            doubleValue = 7557.38;
                                                            stringValue = "placeat";
                                                        }};);;
                                    }};;
                                    not = new CaseFilter() {{
                                        andAll = new org.openapis.openapi.models.shared.CaseFilter[]{{
                                            add(new CaseFilter() {{}}),
                                            add(new CaseFilter() {{}}),
                                        }};
                                        field = new FieldFilter() {{
                                            contains = new FieldValue("occaecati",                 new FieldValueUnion() {{
                                                                booleanValue = false;
                                                                doubleValue = 6009.34;
                                                                stringValue = "illo";
                                                            }};);;
                                            equalTo = new FieldValue("nihil",                 new FieldValueUnion() {{
                                                                booleanValue = false;
                                                                doubleValue = 782.46;
                                                                stringValue = "libero";
                                                            }};);;
                                            greaterThan = new FieldValue("ipsam",                 new FieldValueUnion() {{
                                                                booleanValue = false;
                                                                doubleValue = 976.59;
                                                                stringValue = "cumque";
                                                            }};);;
                                            greaterThanOrEqualTo = new FieldValue("dicta",                 new FieldValueUnion() {{
                                                                booleanValue = false;
                                                                doubleValue = 6886.84;
                                                                stringValue = "facere";
                                                            }};);;
                                            lessThan = new FieldValue("facilis",                 new FieldValueUnion() {{
                                                                booleanValue = false;
                                                                doubleValue = 1053.72;
                                                                stringValue = "cumque";
                                                            }};);;
                                            lessThanOrEqualTo = new FieldValue("delectus",                 new FieldValueUnion() {{
                                                                booleanValue = false;
                                                                doubleValue = 2871.52;
                                                                stringValue = "expedita";
                                                            }};);;
                                        }};;
                                        not = new CaseFilter();;
                                    }};;
                                }};;
                                maxResults = 548256L;
                                nextToken = "rem";
                                searchTerm = "atque";
                                sorts = new org.openapis.openapi.models.shared.Sort[]{{
                                    add(new Sort("sapiente", OrderEnum.DESC) {{
                                        fieldId = "cum";
                                        sortOrder = OrderEnum.DESC;
                                    }}),
                                    add(new Sort("minus", OrderEnum.DESC) {{
                                        fieldId = "incidunt";
                                        sortOrder = OrderEnum.DESC;
                                    }}),
                                    add(new Sort("occaecati", OrderEnum.DESC) {{
                                        fieldId = "id";
                                        sortOrder = OrderEnum.DESC;
                                    }}),
                                    add(new Sort("hic", OrderEnum.DESC) {{
                                        fieldId = "quo";
                                        sortOrder = OrderEnum.ASC;
                                    }}),
                                }};
                            }};, "accusantium") {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "pariatur";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "aut";
                maxResults = "laudantium";
                nextToken = "iusto";
            }};            

            SearchCasesResponse res = sdk.sdk.searchCases(req);

            if (res.searchCasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchRelatedItems

<p>Searches for related items that are associated with a case.</p> <note> <p>If no filters are provided, this returns all related items associated with a case.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchRelatedItemsRequest;
import org.openapis.openapi.models.operations.SearchRelatedItemsRequestBody;
import org.openapis.openapi.models.operations.SearchRelatedItemsResponse;
import org.openapis.openapi.models.shared.ContactFilter;
import org.openapis.openapi.models.shared.RelatedItemTypeFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchRelatedItemsRequest req = new SearchRelatedItemsRequest(                new SearchRelatedItemsRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.RelatedItemTypeFilter[]{{
                                    add(new RelatedItemTypeFilter() {{
                                        comment = new java.util.HashMap<String, Object>() {{
                                            put("magni", "rerum");
                                            put("doloremque", "voluptatem");
                                        }};
                                        contact = new ContactFilter() {{
                                            channel = new String[]{{
                                                add("at"),
                                                add("eum"),
                                            }};
                                            contactArn = "reprehenderit";
                                        }};
                                    }}),
                                    add(new RelatedItemTypeFilter() {{
                                        comment = new java.util.HashMap<String, Object>() {{
                                            put("blanditiis", "nihil");
                                            put("atque", "rerum");
                                            put("deserunt", "atque");
                                        }};
                                        contact = new ContactFilter() {{
                                            channel = new String[]{{
                                                add("atque"),
                                                add("architecto"),
                                            }};
                                            contactArn = "est";
                                        }};
                                    }}),
                                    add(new RelatedItemTypeFilter() {{
                                        comment = new java.util.HashMap<String, Object>() {{
                                            put("rem", "magni");
                                            put("quae", "quas");
                                        }};
                                        contact = new ContactFilter() {{
                                            channel = new String[]{{
                                                add("enim"),
                                                add("labore"),
                                                add("sapiente"),
                                                add("saepe"),
                                            }};
                                            contactArn = "delectus";
                                        }};
                                    }}),
                                    add(new RelatedItemTypeFilter() {{
                                        comment = new java.util.HashMap<String, Object>() {{
                                            put("natus", "cumque");
                                            put("natus", "quaerat");
                                            put("doloribus", "quia");
                                        }};
                                        contact = new ContactFilter() {{
                                            channel = new String[]{{
                                                add("mollitia"),
                                                add("cumque"),
                                                add("quis"),
                                                add("enim"),
                                            }};
                                            contactArn = "eum";
                                        }};
                                    }}),
                                }};
                                maxResults = 365539L;
                                nextToken = "illum";
                            }};, "nesciunt", "sit") {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "minus";
                xAmzCredential = "asperiores";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "dicta";
                maxResults = "fugit";
                nextToken = "sit";
            }};            

            SearchRelatedItemsResponse res = sdk.sdk.searchRelatedItems(req);

            if (res.searchRelatedItemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds tags to a resource.

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
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("sed", "deleniti");
                                                put("sunt", "nesciunt");
                                                put("delectus", "laborum");
                                                put("aliquam", "deserunt");
                                            }});, "modi") {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "eius";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "at";
                xAmzSignedHeaders = "dolorem";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Untags a resource.

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
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("aspernatur",                 new String[]{{
                                add("sequi"),
                            }}) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "hic";
                xAmzDate = "eaque";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "aperiam";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCase

<p>Updates the values of fields on a case. Fields to be updated are received as an array of id/value pairs identical to the <code>CreateCase</code> input .</p> <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCaseRequest;
import org.openapis.openapi.models.operations.UpdateCaseRequestBody;
import org.openapis.openapi.models.operations.UpdateCaseResponse;
import org.openapis.openapi.models.shared.FieldValue;
import org.openapis.openapi.models.shared.FieldValueUnion;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCaseRequest req = new UpdateCaseRequest(                new UpdateCaseRequestBody(                new org.openapis.openapi.models.shared.FieldValue[]{{
                                                add(new FieldValue("itaque",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 4896.85;
                                                                    stringValue = "ipsam";
                                                                }};) {{
                                                    id = "514f4cc6-f18b-4f96-a1a6-a4f77a87ee3e";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 2633.46;
                                                        stringValue = "rerum";
                                                    }};
                                                }}),
                                                add(new FieldValue("modi",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 9376.64;
                                                                    stringValue = "architecto";
                                                                }};) {{
                                                    id = "2c65b344-18e3-4bb9-9c8d-975e0e8419d8";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 9493.7;
                                                        stringValue = "deleniti";
                                                    }};
                                                }}),
                                                add(new FieldValue("quia",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 5147.67;
                                                                    stringValue = "sed";
                                                                }};) {{
                                                    id = "44f3e07e-dcc4-4aa5-b3ca-bd905a972e05";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 3927.52;
                                                        stringValue = "molestiae";
                                                    }};
                                                }}),
                                                add(new FieldValue("distinctio",                 new FieldValueUnion() {{
                                                                    booleanValue = false;
                                                                    doubleValue = 9832.75;
                                                                    stringValue = "laboriosam";
                                                                }};) {{
                                                    id = "27b2d309-470b-4f7a-8fa8-7cf535a6fae5";
                                                    value = new FieldValueUnion() {{
                                                        booleanValue = false;
                                                        doubleValue = 2525.67;
                                                        stringValue = "necessitatibus";
                                                    }};
                                                }}),
                                            }});, "voluptatem", "optio") {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "vitae";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "amet";
            }};            

            UpdateCaseResponse res = sdk.sdk.updateCase(req);

            if (res.updateCaseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateField

Updates the properties of an existing field. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFieldRequest;
import org.openapis.openapi.models.operations.UpdateFieldRequestBody;
import org.openapis.openapi.models.operations.UpdateFieldResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFieldRequest req = new UpdateFieldRequest(                new UpdateFieldRequestBody() {{
                                description = "in";
                                name = "Paulette Dibbert";
                            }};, "dignissimos", "reiciendis") {{
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "vitae";
                xAmzCredential = "est";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "quod";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "quos";
            }};            

            UpdateFieldResponse res = sdk.sdk.updateField(req);

            if (res.updateFieldResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLayout

<p>Updates the attributes of an existing layout.</p> <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p> <p>A <code>ValidationException</code> is returned when you add non-existent <code>fieldIds</code> to a layout.</p> <note> <p>Title and Status fields cannot be part of layouts because they are not configurable.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLayoutRequest;
import org.openapis.openapi.models.operations.UpdateLayoutRequestBody;
import org.openapis.openapi.models.operations.UpdateLayoutRequestBodyContent;
import org.openapis.openapi.models.operations.UpdateLayoutResponse;
import org.openapis.openapi.models.shared.BasicLayout;
import org.openapis.openapi.models.shared.FieldGroup;
import org.openapis.openapi.models.shared.FieldItem;
import org.openapis.openapi.models.shared.LayoutSections;
import org.openapis.openapi.models.shared.Section;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLayoutRequest req = new UpdateLayoutRequest(                new UpdateLayoutRequestBody() {{
                                content = new UpdateLayoutRequestBodyContent() {{
                                    basic = new BasicLayout() {{
                                        moreInfo = new LayoutSections() {{
                                            sections = new org.openapis.openapi.models.shared.Section[]{{
                                                add(new Section() {{
                                                    fieldGroup = new FieldGroup(                new org.openapis.openapi.models.shared.FieldItem[]{{
                                                                        add(new FieldItem("neque") {{
                                                                            id = "7747dc91-5ad2-4caf-9dd6-723dc0f5ae2f";
                                                                        }}),
                                                                    }}) {{
                                                        fields = new org.openapis.openapi.models.shared.FieldItem[]{{
                                                            add(new FieldItem("tempora") {{
                                                                id = "9f0a396d-90c3-464b-bc15-dfbace188b1c";
                                                            }}),
                                                            add(new FieldItem("laudantium") {{
                                                                id = "ee2c8c6c-e611-4fee-b1c7-cbdb6eec7437";
                                                            }}),
                                                        }};
                                                        name = "Gerard Conn";
                                                    }};
                                                }}),
                                                add(new Section() {{
                                                    fieldGroup = new FieldGroup(                new org.openapis.openapi.models.shared.FieldItem[]{{
                                                                        add(new FieldItem("id") {{
                                                                            id = "2676696e-1ec0-4022-9b33-5d89acb3ecfd";
                                                                        }}),
                                                                        add(new FieldItem("voluptate") {{
                                                                            id = "8d0c549e-f030-4049-b8a6-1fa1cf20688f";
                                                                        }}),
                                                                    }}) {{
                                                        fields = new org.openapis.openapi.models.shared.FieldItem[]{{
                                                            add(new FieldItem("numquam") {{
                                                                id = "6b700878-7561-443f-9a6c-98b55554080d";
                                                            }}),
                                                            add(new FieldItem("ipsam") {{
                                                                id = "0bcacc6c-bd6b-45f3-ac90-9304f926bad2";
                                                            }}),
                                                            add(new FieldItem("mollitia") {{
                                                                id = "53819b47-4b0e-4d20-a562-48fff639a910";
                                                            }}),
                                                        }};
                                                        name = "Kristopher Sanford";
                                                    }};
                                                }}),
                                                add(new Section() {{
                                                    fieldGroup = new FieldGroup(                new org.openapis.openapi.models.shared.FieldItem[]{{
                                                                        add(new FieldItem("quidem") {{
                                                                            id = "6a6d2d00-0355-4338-8ec0-86fa21e9152c";
                                                                        }}),
                                                                        add(new FieldItem("ullam") {{
                                                                            id = "3119167b-8e3c-48db-8340-8d6d364ffd45";
                                                                        }}),
                                                                    }}) {{
                                                        fields = new org.openapis.openapi.models.shared.FieldItem[]{{
                                                            add(new FieldItem("tenetur") {{
                                                                id = "c1ffc71d-ca16-43f2-a3c8-0a97ff334cdd";
                                                            }}),
                                                            add(new FieldItem("dignissimos") {{
                                                                id = "857a9e61-876c-46ab-a1d2-9dfc94d6fecd";
                                                            }}),
                                                        }};
                                                        name = "Rene Ernser Jr.";
                                                    }};
                                                }}),
                                                add(new Section() {{
                                                    fieldGroup = new FieldGroup(                new org.openapis.openapi.models.shared.FieldItem[]{{
                                                                        add(new FieldItem("suscipit") {{
                                                                            id = "a319f4ba-df94-47c9-a867-bc4242666581";
                                                                        }}),
                                                                    }}) {{
                                                        fields = new org.openapis.openapi.models.shared.FieldItem[]{{
                                                            add(new FieldItem("aperiam") {{
                                                                id = "06d1263d-48e9-435c-ac9e-81f30be3e432";
                                                            }}),
                                                            add(new FieldItem("tempora") {{
                                                                id = "2d721657-6506-4641-870d-9d21f9ad030c";
                                                            }}),
                                                            add(new FieldItem("praesentium") {{
                                                                id = "ecc11a08-3642-4906-8b85-02a55e7f73bc";
                                                            }}),
                                                        }};
                                                        name = "Holly Torphy";
                                                    }};
                                                }}),
                                            }};
                                        }};;
                                        topPanel = new LayoutSections() {{
                                            sections = new org.openapis.openapi.models.shared.Section[]{{
                                                add(new Section() {{
                                                    fieldGroup = new FieldGroup(                new org.openapis.openapi.models.shared.FieldItem[]{{
                                                                        add(new FieldItem("inventore") {{
                                                                            id = "923b7e13-584f-47ae-92c6-891f82ce1157";
                                                                        }}),
                                                                        add(new FieldItem("cumque") {{
                                                                            id = "72305377-dcfa-489d-b975-e356686092e9";
                                                                        }}),
                                                                        add(new FieldItem("odio") {{
                                                                            id = "3ddc5f11-1dea-4102-ad54-1a4d190feb21";
                                                                        }}),
                                                                    }}) {{
                                                        fields = new org.openapis.openapi.models.shared.FieldItem[]{{
                                                            add(new FieldItem("facere") {{
                                                                id = "ca8ef51f-cb4c-4593-ac12-cdaad0ec7afe";
                                                            }}),
                                                            add(new FieldItem("recusandae") {{
                                                                id = "bd80df44-8a47-4f93-90c5-8880983dabf9";
                                                            }}),
                                                            add(new FieldItem("quasi") {{
                                                                id = "f3ffdd9f-7f07-49af-8d35-724cdb0f4d28";
                                                            }}),
                                                            add(new FieldItem("quia") {{
                                                                id = "187d5684-4ede-4d85-a906-5e628bdfc203";
                                                            }}),
                                                        }};
                                                        name = "Hector Satterfield";
                                                    }};
                                                }}),
                                                add(new Section() {{
                                                    fieldGroup = new FieldGroup(                new org.openapis.openapi.models.shared.FieldItem[]{{
                                                                        add(new FieldItem("porro") {{
                                                                            id = "30d83f5a-eb77-499d-a2e8-c1f8493825fd";
                                                                        }}),
                                                                    }}) {{
                                                        fields = new org.openapis.openapi.models.shared.FieldItem[]{{
                                                            add(new FieldItem("blanditiis") {{
                                                                id = "0bccc0db-bddb-4484-b08f-b4e391e6bc15";
                                                            }}),
                                                            add(new FieldItem("quibusdam") {{
                                                                id = "c4c4e545-99ea-4342-a60e-9b200ce78a1b";
                                                            }}),
                                                            add(new FieldItem("libero") {{
                                                                id = "8fb7a0a1-16ce-4723-9409-7fa30e9af725";
                                                            }}),
                                                        }};
                                                        name = "Belinda Cartwright";
                                                    }};
                                                }}),
                                                add(new Section() {{
                                                    fieldGroup = new FieldGroup(                new org.openapis.openapi.models.shared.FieldItem[]{{
                                                                        add(new FieldItem("odio") {{
                                                                            id = "a289c57e-854e-4904-b9d2-224656946240";
                                                                        }}),
                                                                    }}) {{
                                                        fields = new org.openapis.openapi.models.shared.FieldItem[]{{
                                                            add(new FieldItem("assumenda") {{
                                                                id = "2c876c2c-2dfb-44cf-81c7-6230f841fb1b";
                                                            }}),
                                                            add(new FieldItem("a") {{
                                                                id = "23fdb14d-b6be-45a6-8599-8e22ae20da16";
                                                            }}),
                                                        }};
                                                        name = "Louis Reichert";
                                                    }};
                                                }}),
                                                add(new Section() {{
                                                    fieldGroup = new FieldGroup(                new org.openapis.openapi.models.shared.FieldItem[]{{
                                                                        add(new FieldItem("nam") {{
                                                                            id = "c7cdc981-f068-4981-96bb-33cfaa348c31";
                                                                        }}),
                                                                        add(new FieldItem("nisi") {{
                                                                            id = "f407ee4f-cf0c-442b-b8f1-5626398a0dc7";
                                                                        }}),
                                                                    }}) {{
                                                        fields = new org.openapis.openapi.models.shared.FieldItem[]{{
                                                            add(new FieldItem("sint") {{
                                                                id = "84f7ab37-cef0-4222-9194-db55410adc66";
                                                            }}),
                                                        }};
                                                        name = "Miss Cary McKenzie";
                                                    }};
                                                }}),
                                            }};
                                        }};;
                                    }};;
                                }};;
                                name = "Rosa Considine";
                            }};, "maxime", "expedita") {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "ea";
                xAmzCredential = "impedit";
                xAmzDate = "totam";
                xAmzSecurityToken = "optio";
                xAmzSignature = "est";
                xAmzSignedHeaders = "inventore";
            }};            

            UpdateLayoutResponse res = sdk.sdk.updateLayout(req);

            if (res.updateLayoutResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTemplate

Updates the attributes of an existing template. The template attributes that can be modified include <code>name</code>, <code>description</code>, <code>layoutConfiguration</code>, <code>requiredFields</code>, and <code>status</code>. At least one of these attributes must not be null. If a null value is provided for a given attribute, that attribute is ignored and its current value is preserved.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTemplateRequest;
import org.openapis.openapi.models.operations.UpdateTemplateRequestBody;
import org.openapis.openapi.models.operations.UpdateTemplateRequestBodyLayoutConfiguration;
import org.openapis.openapi.models.operations.UpdateTemplateRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.UpdateTemplateResponse;
import org.openapis.openapi.models.shared.RequiredField;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTemplateRequest req = new UpdateTemplateRequest(                new UpdateTemplateRequestBody() {{
                                description = "repellendus";
                                layoutConfiguration = new UpdateTemplateRequestBodyLayoutConfiguration() {{
                                    defaultLayout = "sit";
                                }};;
                                name = "Jill Collins";
                                requiredFields = new org.openapis.openapi.models.shared.RequiredField[]{{
                                    add(new RequiredField("quidem") {{
                                        fieldId = "alias";
                                    }}),
                                    add(new RequiredField("possimus") {{
                                        fieldId = "deleniti";
                                    }}),
                                }};
                                status = UpdateTemplateRequestBodyStatusEnum.ACTIVE;
                            }};, "odio", "fugit") {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "at";
                xAmzCredential = "illum";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "sint";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "cum";
            }};            

            UpdateTemplateResponse res = sdk.sdk.updateTemplate(req);

            if (res.updateTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
