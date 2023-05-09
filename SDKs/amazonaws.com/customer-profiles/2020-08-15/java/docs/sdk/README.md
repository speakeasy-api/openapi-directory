# SDK

## Overview

<fullname>Amazon Connect Customer Profiles</fullname> <p>Amazon Connect Customer Profiles is a unified customer profile for your contact center that has pre-built connectors powered by AppFlow that make it easy to combine customer information from third party applications, such as Salesforce (CRM), ServiceNow (ITSM), and your enterprise resource planning (ERP), with contact history from your Amazon Connect contact center. If you're new to Amazon Connect, you might find it helpful to review the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/">Amazon Connect Administrator Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/profile/>
### Available Operations

* [addProfileKey](#addprofilekey) - <p>Associates a new key value with a specific profile, such as a Contact Record ContactId.</p> <p>A profile object can have a single unique key and any number of additional keys that can be used to identify the profile that it belongs to.</p>
* [createDomain](#createdomain) - <p>Creates a domain, which is a container for all customer data, such as customer profile attributes, object types, profile keys, and encryption keys. You can create multiple domains, and each domain can have multiple third-party integrations.</p> <p>Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances can be associated with one domain.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true. </p> <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should apply. </p>
* [createIntegrationWorkflow](#createintegrationworkflow) -  Creates an integration workflow. An integration workflow is an async process which ingests historic data and sets up an integration for ongoing updates. The supported Amazon AppFlow sources are Salesforce, ServiceNow, and Marketo. 
* [createProfile](#createprofile) - <p>Creates a standard profile.</p> <p>A standard profile represents the following attributes for a customer profile in a domain.</p>
* [deleteDomain](#deletedomain) - Deletes a specific domain and all of its customer data, such as customer profile attributes and their related objects.
* [deleteIntegration](#deleteintegration) - Removes an integration from a specific domain.
* [deleteProfile](#deleteprofile) - Deletes the standard customer profile and all data pertaining to the profile.
* [deleteProfileKey](#deleteprofilekey) - Removes a searchable key from a customer profile.
* [deleteProfileObject](#deleteprofileobject) - Removes an object associated with a profile of a given ProfileObjectType.
* [deleteProfileObjectType](#deleteprofileobjecttype) - Removes a ProfileObjectType from a specific domain as well as removes all the ProfileObjects of that type. It also disables integrations from this specific ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that were populated from this ProfileObjectType.
* [deleteWorkflow](#deleteworkflow) - Deletes the specified workflow and all its corresponding resources. This is an async process.
* [getAutoMergingPreview](#getautomergingpreview) - <p>Tests the auto-merging settings of your Identity Resolution Job without merging your data. It randomly selects a sample of matching groups from the existing matching results, and applies the automerging settings that you provided. You can then view the number of profiles in the sample, the number of matches, and the number of profiles identified to be merged. This enables you to evaluate the accuracy of the attributes in your matching list. </p> <p>You can't view which profiles are matched and would be merged.</p> <important> <p>We strongly recommend you use this API to do a dry run of the automerging process before running the Identity Resolution Job. Include <b>at least</b> two matching attributes. If your matching list includes too few attributes (such as only <code>FirstName</code> or only <code>LastName</code>), there may be a large number of matches. This increases the chances of erroneous merges.</p> </important>
* [getDomain](#getdomain) - Returns information about a specific domain.
* [getIdentityResolutionJob](#getidentityresolutionjob) - <p>Returns information about an Identity Resolution Job in a specific domain. </p> <p>Identity Resolution Jobs are set up using the Amazon Connect admin console. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/use-identity-resolution.html">Use Identity Resolution to consolidate similar profiles</a>.</p>
* [getIntegration](#getintegration) - Returns an integration for a domain.
* [getMatches](#getmatches) - <p>Before calling this API, use <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable identity resolution: set <code>Matching</code> to true.</p> <p>GetMatches returns potentially matching profiles, based on the results of the latest run of a machine learning process. </p> <important> <p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains. </p> <p>After the Identity Resolution Job completes, use the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a> API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from S3.</p> </important> <p>Amazon Connect uses the following profile attributes to identify matches:</p> <ul> <li> <p>PhoneNumber</p> </li> <li> <p>HomePhoneNumber</p> </li> <li> <p>BusinessPhoneNumber</p> </li> <li> <p>MobilePhoneNumber</p> </li> <li> <p>EmailAddress</p> </li> <li> <p>PersonalEmailAddress</p> </li> <li> <p>BusinessEmailAddress</p> </li> <li> <p>FullName</p> </li> </ul> <p>For example, two or more profiles—with spelling mistakes such as <b>John Doe</b> and <b>Jhn Doe</b>, or different casing email addresses such as <b>JOHN_DOE@ANYCOMPANY.COM</b> and <b>johndoe@anycompany.com</b>, or different phone number formats such as <b>555-010-0000</b> and <b>+1-555-010-0000</b>—can be detected as belonging to the same customer <b>John Doe</b> and merged into a unified profile.</p>
* [getProfileObjectType](#getprofileobjecttype) - Returns the object types for a specific domain.
* [getProfileObjectTypeTemplate](#getprofileobjecttypetemplate) - <p>Returns the template information for a specific object type.</p> <p>A template is a predefined ProfileObjectType, such as “Salesforce-Account” or “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API, with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the template.</p>
* [getWorkflow](#getworkflow) - Get details of specified workflow.
* [getWorkflowSteps](#getworkflowsteps) - Get granular list of steps in workflow.
* [listAccountIntegrations](#listaccountintegrations) - Lists all of the integrations associated to a specific URI in the AWS account.
* [listDomains](#listdomains) - Returns a list of all the domains for an AWS account that have been created.
* [listIdentityResolutionJobs](#listidentityresolutionjobs) - Lists all of the Identity Resolution Jobs in your domain. The response sorts the list by <code>JobStartTime</code>.
* [listIntegrations](#listintegrations) - Lists all of the integrations in your domain.
* [listProfileObjectTypeTemplates](#listprofileobjecttypetemplates) - Lists all of the template information for object types.
* [listProfileObjectTypes](#listprofileobjecttypes) - Lists all of the templates available within the service.
* [listProfileObjects](#listprofileobjects) - Returns a list of objects associated with a profile of a given ProfileObjectType.
* [listTagsForResource](#listtagsforresource) - Displays the tags associated with an Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.
* [listWorkflows](#listworkflows) - Query to list all workflows.
* [mergeProfiles](#mergeprofiles) - <p>Runs an AWS Lambda job that does the following:</p> <ol> <li> <p>All the profileKeys in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the objects in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the <code>ProfileToBeMerged</code> will be deleted at the end.</p> </li> <li> <p>All the profileKeys in the <code>ProfileIdsToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>Standard fields are merged as follows:</p> <ol> <li> <p>Fields are always "union"-ed if there are no conflicts in standard fields or attributeKeys.</p> </li> <li> <p>When there are conflicting fields:</p> <ol> <li> <p>If no <code>SourceProfileIds</code> entry is specified, the main Profile value is always taken. </p> </li> <li> <p>If a <code>SourceProfileIds</code> entry is specified, the specified profileId is always taken, even if it is a NULL value.</p> </li> </ol> </li> </ol> </li> </ol> <p>You can use MergeProfiles together with <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>, which returns potentially matching profiles, or use it with the results of another matching system. After profiles have been merged, they cannot be separated (unmerged).</p>
* [putIntegration](#putintegration) - <p>Adds an integration between the service and a third-party service, which includes Amazon AppFlow and Amazon Connect.</p> <p>An integration can belong to only one domain.</p> <p>To add or remove tags on an existing Integration, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource </a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html"> UntagResource</a>.</p>
* [putProfileObject](#putprofileobject) - <p>Adds additional objects to customer profiles of a given ObjectType.</p> <p>When adding a specific profile object, like a Contact Record, an inferred profile can get created if it is not mapped to an existing profile. The resulting profile will only have a phone number populated in the standard ProfileObject. Any additional Contact Records with the same phone number will be mapped to the same inferred profile.</p> <p>When a ProfileObject is created and if a ProfileObjectType already exists for the ProfileObject, it will provide data to a standard profile depending on the ProfileObjectType definition.</p> <p>PutProfileObject needs an ObjectType, which can be created using PutProfileObjectType.</p>
* [putProfileObjectType](#putprofileobjecttype) - <p>Defines a ProfileObjectType.</p> <p>To add or remove tags on an existing ObjectType, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>
* [searchProfiles](#searchprofiles) - <p>Searches for profiles within a specific domain using one or more predefined search keys (e.g., _fullName, _phone, _email, _account, etc.) and/or custom-defined search keys. A search key is a data type pair that consists of a <code>KeyName</code> and <code>Values</code> list.</p> <p>This operation supports searching for profiles with a minimum of 1 key-value(s) pair and up to 5 key-value(s) pairs using either <code>AND</code> or <code>OR</code> logic.</p>
* [tagResource](#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified Amazon Connect Customer Profiles resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.</p> <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.</p> <p>You can use the TagResource action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>
* [untagResource](#untagresource) - Removes one or more tags from the specified Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.
* [updateDomain](#updatedomain) - <p>Updates the properties of a domain, including creating or selecting a dead letter queue or an encryption key.</p> <p>After a domain is created, the name can’t be changed.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true. </p> <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should apply. </p> <p>To add or remove tags on an existing Domain, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html">TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>
* [updateProfile](#updateprofile) - <p>Updates the properties of a profile. The ProfileId is required for updating a customer profile.</p> <p>When calling the UpdateProfile API, specifying an empty string value means that any existing value will be removed. Not specifying a string value means that any value already there will be kept.</p>

## addProfileKey

<p>Associates a new key value with a specific profile, such as a Contact Record ContactId.</p> <p>A profile object can have a single unique key and any number of additional keys that can be used to identify the profile that it belongs to.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddProfileKeyRequest;
import org.openapis.openapi.models.operations.AddProfileKeyRequestBody;
import org.openapis.openapi.models.operations.AddProfileKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddProfileKeyRequest req = new AddProfileKeyRequest("delectus",                 new AddProfileKeyRequestBody("tempora", "suscipit",                 new String[]{{
                                                add("minus"),
                                                add("placeat"),
                                            }});) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "excepturi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ab";
            }};            

            AddProfileKeyResponse res = sdk.sdk.addProfileKey(req);

            if (res.addProfileKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDomain

<p>Creates a domain, which is a container for all customer data, such as customer profile attributes, object types, profile keys, and encryption keys. You can create multiple domains, and each domain can have multiple third-party integrations.</p> <p>Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances can be associated with one domain.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true. </p> <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should apply. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDomainRequest;
import org.openapis.openapi.models.operations.CreateDomainRequestBody;
import org.openapis.openapi.models.operations.CreateDomainRequestBodyMatching;
import org.openapis.openapi.models.operations.CreateDomainResponse;
import org.openapis.openapi.models.shared.AutoMerging;
import org.openapis.openapi.models.shared.ConflictResolution;
import org.openapis.openapi.models.shared.ConflictResolvingModelEnum;
import org.openapis.openapi.models.shared.Consolidation;
import org.openapis.openapi.models.shared.ExportingConfig;
import org.openapis.openapi.models.shared.JobSchedule;
import org.openapis.openapi.models.shared.JobScheduleDayOfTheWeekEnum;
import org.openapis.openapi.models.shared.S3ExportingConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDomainRequest req = new CreateDomainRequest("veritatis",                 new CreateDomainRequestBody(648172L) {{
                                deadLetterQueueUrl = "perferendis";
                                defaultEncryptionKey = "ipsam";
                                matching = new CreateDomainRequestBodyMatching() {{
                                    autoMerging = new AutoMerging(false) {{
                                        conflictResolution = new ConflictResolution(ConflictResolvingModelEnum.SOURCE) {{
                                            sourceName = "sapiente";
                                        }};;
                                        consolidation = new Consolidation(                new String[][]{{
                                                            add(new String[]{{
                                                                add("at"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("maiores"),
                                                                add("molestiae"),
                                                                add("quod"),
                                                                add("quod"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("totam"),
                                                                add("porro"),
                                                            }}),
                                                            add(new String[]{{
                                                                add("dicta"),
                                                                add("nam"),
                                                                add("officia"),
                                                            }}),
                                                        }});;
                                        minAllowedConfidenceScoreForMerging = 5820.2;
                                    }};;
                                    enabled = false;
                                    exportingConfig = new ExportingConfig() {{
                                        s3Exporting = new S3ExportingConfig("fugit") {{
                                            s3KeyName = "deleniti";
                                        }};;
                                    }};;
                                    jobSchedule = new JobSchedule(JobScheduleDayOfTheWeekEnum.SATURDAY, "optio");;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("beatae", "commodi");
                                    put("molestiae", "modi");
                                    put("qui", "impedit");
                                }};
                            }};) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ipsum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ad";
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

## createIntegrationWorkflow

 Creates an integration workflow. An integration workflow is an async process which ingests historic data and sets up an integration for ongoing updates. The supported Amazon AppFlow sources are Salesforce, ServiceNow, and Marketo. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIntegrationWorkflowRequest;
import org.openapis.openapi.models.operations.CreateIntegrationWorkflowRequestBody;
import org.openapis.openapi.models.operations.CreateIntegrationWorkflowRequestBodyIntegrationConfig;
import org.openapis.openapi.models.operations.CreateIntegrationWorkflowRequestBodyWorkflowTypeEnum;
import org.openapis.openapi.models.operations.CreateIntegrationWorkflowResponse;
import org.openapis.openapi.models.shared.AppflowIntegration;
import org.openapis.openapi.models.shared.Batch;
import org.openapis.openapi.models.shared.ConnectorOperator;
import org.openapis.openapi.models.shared.DataPullModeEnum;
import org.openapis.openapi.models.shared.FlowDefinition;
import org.openapis.openapi.models.shared.IncrementalPullConfig;
import org.openapis.openapi.models.shared.MarketoConnectorOperatorEnum;
import org.openapis.openapi.models.shared.MarketoSourceProperties;
import org.openapis.openapi.models.shared.S3ConnectorOperatorEnum;
import org.openapis.openapi.models.shared.S3SourceProperties;
import org.openapis.openapi.models.shared.SalesforceConnectorOperatorEnum;
import org.openapis.openapi.models.shared.SalesforceSourceProperties;
import org.openapis.openapi.models.shared.ScheduledTriggerProperties;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceNowConnectorOperatorEnum;
import org.openapis.openapi.models.shared.ServiceNowSourceProperties;
import org.openapis.openapi.models.shared.SourceConnectorProperties;
import org.openapis.openapi.models.shared.SourceConnectorTypeEnum;
import org.openapis.openapi.models.shared.SourceFlowConfig;
import org.openapis.openapi.models.shared.Task;
import org.openapis.openapi.models.shared.TaskTypeEnum;
import org.openapis.openapi.models.shared.TriggerConfig;
import org.openapis.openapi.models.shared.TriggerProperties;
import org.openapis.openapi.models.shared.TriggerTypeEnum;
import org.openapis.openapi.models.shared.ZendeskConnectorOperatorEnum;
import org.openapis.openapi.models.shared.ZendeskSourceProperties;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateIntegrationWorkflowRequest req = new CreateIntegrationWorkflowRequest("sed",                 new CreateIntegrationWorkflowRequestBody(                new CreateIntegrationWorkflowRequestBodyIntegrationConfig() {{
                                                appflowIntegration = new AppflowIntegration(                new FlowDefinition("iste", "dolor",                 new SourceFlowConfig(SourceConnectorTypeEnum.SERVICENOW,                 new SourceConnectorProperties() {{
                                                                                                    marketo = new MarketoSourceProperties("laboriosam");;
                                                                                                    s3 = new S3SourceProperties("hic") {{
                                                                                                        bucketPrefix = "saepe";
                                                                                                    }};;
                                                                                                    salesforce = new SalesforceSourceProperties("fuga") {{
                                                                                                        enableDynamicFieldUpdate = false;
                                                                                                        includeDeletedRecords = false;
                                                                                                    }};;
                                                                                                    serviceNow = new ServiceNowSourceProperties("in");;
                                                                                                    zendesk = new ZendeskSourceProperties("corporis");;
                                                                                                }};) {{
                                                                                    connectorProfileName = "iste";
                                                                                    incrementalPullConfig = new IncrementalPullConfig() {{
                                                                                        datetimeTypeFieldName = "iure";
                                                                                    }};;
                                                                                }};,                 new org.openapis.openapi.models.shared.Task[]{{
                                                                                    add(new Task(                new String[]{{
                                                                                                        add("minima"),
                                                                                                        add("excepturi"),
                                                                                                    }}, TaskTypeEnum.ARITHMETIC) {{
                                                                                        connectorOperator = new ConnectorOperator() {{
                                                                                            marketo = MarketoConnectorOperatorEnum.VALIDATE_NON_NULL;
                                                                                            s3 = S3ConnectorOperatorEnum.LESS_THAN;
                                                                                            salesforce = SalesforceConnectorOperatorEnum.LESS_THAN;
                                                                                            serviceNow = ServiceNowConnectorOperatorEnum.NO_OP;
                                                                                            zendesk = ZendeskConnectorOperatorEnum.VALIDATE_NON_NULL;
                                                                                        }};
                                                                                        destinationField = "mollitia";
                                                                                        sourceFields = new String[]{{
                                                                                            add("dolores"),
                                                                                            add("dolorem"),
                                                                                            add("corporis"),
                                                                                        }};
                                                                                        taskProperties = new java.util.HashMap<String, String>() {{
                                                                                            put("nobis", "enim");
                                                                                        }};
                                                                                        taskType = TaskTypeEnum.MERGE;
                                                                                    }}),
                                                                                    add(new Task(                new String[]{{
                                                                                                        add("commodi"),
                                                                                                        add("quam"),
                                                                                                    }}, TaskTypeEnum.MASK) {{
                                                                                        connectorOperator = new ConnectorOperator() {{
                                                                                            marketo = MarketoConnectorOperatorEnum.SUBTRACTION;
                                                                                            s3 = S3ConnectorOperatorEnum.MASK_ALL;
                                                                                            salesforce = SalesforceConnectorOperatorEnum.NO_OP;
                                                                                            serviceNow = ServiceNowConnectorOperatorEnum.NO_OP;
                                                                                            zendesk = ZendeskConnectorOperatorEnum.GREATER_THAN;
                                                                                        }};
                                                                                        destinationField = "mollitia";
                                                                                        sourceFields = new String[]{{
                                                                                            add("culpa"),
                                                                                        }};
                                                                                        taskProperties = new java.util.HashMap<String, String>() {{
                                                                                            put("repellat", "mollitia");
                                                                                        }};
                                                                                        taskType = TaskTypeEnum.MERGE;
                                                                                    }}),
                                                                                    add(new Task(                new String[]{{
                                                                                                        add("aut"),
                                                                                                        add("quasi"),
                                                                                                        add("error"),
                                                                                                        add("temporibus"),
                                                                                                    }}, TaskTypeEnum.MERGE) {{
                                                                                        connectorOperator = new ConnectorOperator() {{
                                                                                            marketo = MarketoConnectorOperatorEnum.BETWEEN;
                                                                                            s3 = S3ConnectorOperatorEnum.MASK_ALL;
                                                                                            salesforce = SalesforceConnectorOperatorEnum.GREATER_THAN;
                                                                                            serviceNow = ServiceNowConnectorOperatorEnum.EQUAL_TO;
                                                                                            zendesk = ZendeskConnectorOperatorEnum.GREATER_THAN;
                                                                                        }};
                                                                                        destinationField = "laborum";
                                                                                        sourceFields = new String[]{{
                                                                                            add("enim"),
                                                                                            add("odit"),
                                                                                            add("quo"),
                                                                                        }};
                                                                                        taskProperties = new java.util.HashMap<String, String>() {{
                                                                                            put("tenetur", "ipsam");
                                                                                        }};
                                                                                        taskType = TaskTypeEnum.MERGE;
                                                                                    }}),
                                                                                    add(new Task(                new String[]{{
                                                                                                        add("dicta"),
                                                                                                        add("corporis"),
                                                                                                        add("dolore"),
                                                                                                        add("iusto"),
                                                                                                    }}, TaskTypeEnum.ARITHMETIC) {{
                                                                                        connectorOperator = new ConnectorOperator() {{
                                                                                            marketo = MarketoConnectorOperatorEnum.LESS_THAN;
                                                                                            s3 = S3ConnectorOperatorEnum.NO_OP;
                                                                                            salesforce = SalesforceConnectorOperatorEnum.NO_OP;
                                                                                            serviceNow = ServiceNowConnectorOperatorEnum.VALIDATE_NON_NEGATIVE;
                                                                                            zendesk = ZendeskConnectorOperatorEnum.MASK_ALL;
                                                                                        }};
                                                                                        destinationField = "praesentium";
                                                                                        sourceFields = new String[]{{
                                                                                            add("ipsa"),
                                                                                            add("omnis"),
                                                                                            add("voluptate"),
                                                                                            add("cum"),
                                                                                        }};
                                                                                        taskProperties = new java.util.HashMap<String, String>() {{
                                                                                            put("doloremque", "reprehenderit");
                                                                                        }};
                                                                                        taskType = TaskTypeEnum.FILTER;
                                                                                    }}),
                                                                                }},                 new TriggerConfig(TriggerTypeEnum.ON_DEMAND) {{
                                                                                    triggerProperties = new TriggerProperties() {{
                                                                                        scheduled = new ScheduledTriggerProperties("enim") {{
                                                                                            dataPullMode = DataPullModeEnum.COMPLETE;
                                                                                            firstExecutionFrom = OffsetDateTime.parse("2022-01-30T20:15:26.045Z");
                                                                                            scheduleEndTime = OffsetDateTime.parse("2022-10-13T20:38:16.426Z");
                                                                                            scheduleOffset = 692472L;
                                                                                            scheduleStartTime = OffsetDateTime.parse("2021-11-13T09:08:33.009Z");
                                                                                            timezone = "pariatur";
                                                                                        }};;
                                                                                    }};;
                                                                                }};) {{
                                                                    description = "modi";
                                                                }};) {{
                                                    batches = new org.openapis.openapi.models.shared.Batch[]{{
                                                        add(new Batch(OffsetDateTime.parse("2022-11-01T07:52:08.326Z"), OffsetDateTime.parse("2022-03-02T21:33:21.372Z")) {{
                                                            endTime = OffsetDateTime.parse("2021-03-02T19:00:49.599Z");
                                                            startTime = OffsetDateTime.parse("2022-01-29T18:39:33.469Z");
                                                        }}),
                                                        add(new Batch(OffsetDateTime.parse("2022-05-09T18:45:16.013Z"), OffsetDateTime.parse("2021-04-26T18:54:54.344Z")) {{
                                                            endTime = OffsetDateTime.parse("2022-12-28T14:02:06.064Z");
                                                            startTime = OffsetDateTime.parse("2021-04-26T02:10:00.226Z");
                                                        }}),
                                                        add(new Batch(OffsetDateTime.parse("2021-11-23T10:34:02.904Z"), OffsetDateTime.parse("2022-11-01T19:07:16.800Z")) {{
                                                            endTime = OffsetDateTime.parse("2022-09-26T08:57:48.803Z");
                                                            startTime = OffsetDateTime.parse("2022-08-08T19:05:24.174Z");
                                                        }}),
                                                    }};
                                                }};;
                                            }};, "assumenda", "ipsam", CreateIntegrationWorkflowRequestBodyWorkflowTypeEnum.APPFLOW_INTEGRATION) {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("fugit", "dolorum");
                                }};
                            }};) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "facilis";
                xAmzDate = "tempore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "eum";
            }};            

            CreateIntegrationWorkflowResponse res = sdk.sdk.createIntegrationWorkflow(req);

            if (res.createIntegrationWorkflowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProfile

<p>Creates a standard profile.</p> <p>A standard profile represents the following attributes for a customer profile in a domain.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProfileRequest;
import org.openapis.openapi.models.operations.CreateProfileRequestBody;
import org.openapis.openapi.models.operations.CreateProfileRequestBodyAddress;
import org.openapis.openapi.models.operations.CreateProfileRequestBodyBillingAddress;
import org.openapis.openapi.models.operations.CreateProfileRequestBodyGenderEnum;
import org.openapis.openapi.models.operations.CreateProfileRequestBodyMailingAddress;
import org.openapis.openapi.models.operations.CreateProfileRequestBodyPartyTypeEnum;
import org.openapis.openapi.models.operations.CreateProfileRequestBodyShippingAddress;
import org.openapis.openapi.models.operations.CreateProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateProfileRequest req = new CreateProfileRequest("eligendi",                 new CreateProfileRequestBody() {{
                                accountNumber = "sint";
                                additionalInformation = "aliquid";
                                address = new CreateProfileRequestBodyAddress() {{
                                    address1 = "provident";
                                    address2 = "necessitatibus";
                                    address3 = "sint";
                                    address4 = "officia";
                                    city = "Fort Veda";
                                    country = "Palau";
                                    county = "in";
                                    postalCode = "89612";
                                    province = "cumque";
                                    state = "facere";
                                }};;
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("aliquid", "laborum");
                                    put("accusamus", "non");
                                }};
                                billingAddress = new CreateProfileRequestBodyBillingAddress() {{
                                    address1 = "occaecati";
                                    address2 = "enim";
                                    address3 = "accusamus";
                                    address4 = "delectus";
                                    city = "McKenziecester";
                                    country = "Norfolk Island";
                                    county = "blanditiis";
                                    postalCode = "92634-6640";
                                    province = "nihil";
                                    state = "magnam";
                                }};;
                                birthDate = "distinctio";
                                businessEmailAddress = "id";
                                businessName = "labore";
                                businessPhoneNumber = "labore";
                                emailAddress = "suscipit";
                                firstName = "Liana";
                                gender = CreateProfileRequestBodyGenderEnum.UNSPECIFIED;
                                genderString = "eum";
                                homePhoneNumber = "vero";
                                lastName = "Collins";
                                mailingAddress = new CreateProfileRequestBodyMailingAddress() {{
                                    address1 = "architecto";
                                    address2 = "magnam";
                                    address3 = "et";
                                    address4 = "excepturi";
                                    city = "New Katrina";
                                    country = "Micronesia";
                                    county = "accusantium";
                                    postalCode = "96342-8130";
                                    province = "iure";
                                    state = "doloribus";
                                }};;
                                middleName = "debitis";
                                mobilePhoneNumber = "eius";
                                partyType = CreateProfileRequestBodyPartyTypeEnum.OTHER;
                                partyTypeString = "deleniti";
                                personalEmailAddress = "facilis";
                                phoneNumber = "in";
                                shippingAddress = new CreateProfileRequestBodyShippingAddress() {{
                                    address1 = "architecto";
                                    address2 = "architecto";
                                    address3 = "repudiandae";
                                    address4 = "ullam";
                                    city = "Kossworth";
                                    country = "Sudan";
                                    county = "sed";
                                    postalCode = "80156-1178";
                                    province = "pariatur";
                                    state = "maxime";
                                }};;
                            }};) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "odit";
                xAmzDate = "ea";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "maiores";
            }};            

            CreateProfileResponse res = sdk.sdk.createProfile(req);

            if (res.createProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDomain

Deletes a specific domain and all of its customer data, such as customer profile attributes and their related objects.

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
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDomainRequest req = new DeleteDomainRequest("ipsam") {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "autem";
                xAmzCredential = "nam";
                xAmzDate = "eaque";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "voluptatibus";
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

## deleteIntegration

Removes an integration from a specific domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIntegrationRequest;
import org.openapis.openapi.models.operations.DeleteIntegrationRequestBody;
import org.openapis.openapi.models.operations.DeleteIntegrationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteIntegrationRequest req = new DeleteIntegrationRequest("fugiat",                 new DeleteIntegrationRequestBody("amet");) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "corporis";
                xAmzDate = "hic";
                xAmzSecurityToken = "libero";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "dolores";
            }};            

            DeleteIntegrationResponse res = sdk.sdk.deleteIntegration(req);

            if (res.deleteIntegrationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProfile

Deletes the standard customer profile and all data pertaining to the profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProfileRequest;
import org.openapis.openapi.models.operations.DeleteProfileRequestBody;
import org.openapis.openapi.models.operations.DeleteProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProfileRequest req = new DeleteProfileRequest("totam",                 new DeleteProfileRequestBody("dignissimos");) {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "quis";
                xAmzCredential = "nesciunt";
                xAmzDate = "eos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "minus";
            }};            

            DeleteProfileResponse res = sdk.sdk.deleteProfile(req);

            if (res.deleteProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProfileKey

Removes a searchable key from a customer profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProfileKeyRequest;
import org.openapis.openapi.models.operations.DeleteProfileKeyRequestBody;
import org.openapis.openapi.models.operations.DeleteProfileKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProfileKeyRequest req = new DeleteProfileKeyRequest("dolor",                 new DeleteProfileKeyRequestBody("vero", "nostrum",                 new String[]{{
                                                add("recusandae"),
                                                add("omnis"),
                                                add("facilis"),
                                                add("perspiciatis"),
                                            }});) {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "porro";
                xAmzCredential = "consequuntur";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "error";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "occaecati";
            }};            

            DeleteProfileKeyResponse res = sdk.sdk.deleteProfileKey(req);

            if (res.deleteProfileKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProfileObject

Removes an object associated with a profile of a given ProfileObjectType.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProfileObjectRequest;
import org.openapis.openapi.models.operations.DeleteProfileObjectRequestBody;
import org.openapis.openapi.models.operations.DeleteProfileObjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProfileObjectRequest req = new DeleteProfileObjectRequest("adipisci",                 new DeleteProfileObjectRequestBody("asperiores", "earum", "modi");) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "deleniti";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "provident";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "libero";
            }};            

            DeleteProfileObjectResponse res = sdk.sdk.deleteProfileObject(req);

            if (res.deleteProfileObjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProfileObjectType

Removes a ProfileObjectType from a specific domain as well as removes all the ProfileObjects of that type. It also disables integrations from this specific ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that were populated from this ProfileObjectType.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProfileObjectTypeRequest;
import org.openapis.openapi.models.operations.DeleteProfileObjectTypeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProfileObjectTypeRequest req = new DeleteProfileObjectTypeRequest("quaerat", "quos") {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolorem";
                xAmzDate = "dolor";
                xAmzSecurityToken = "qui";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "hic";
            }};            

            DeleteProfileObjectTypeResponse res = sdk.sdk.deleteProfileObjectType(req);

            if (res.deleteProfileObjectTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWorkflow

Deletes the specified workflow and all its corresponding resources. This is an async process.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkflowRequest;
import org.openapis.openapi.models.operations.DeleteWorkflowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWorkflowRequest req = new DeleteWorkflowRequest("cum", "voluptate") {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "amet";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "ipsa";
            }};            

            DeleteWorkflowResponse res = sdk.sdk.deleteWorkflow(req);

            if (res.deleteWorkflowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAutoMergingPreview

<p>Tests the auto-merging settings of your Identity Resolution Job without merging your data. It randomly selects a sample of matching groups from the existing matching results, and applies the automerging settings that you provided. You can then view the number of profiles in the sample, the number of matches, and the number of profiles identified to be merged. This enables you to evaluate the accuracy of the attributes in your matching list. </p> <p>You can't view which profiles are matched and would be merged.</p> <important> <p>We strongly recommend you use this API to do a dry run of the automerging process before running the Identity Resolution Job. Include <b>at least</b> two matching attributes. If your matching list includes too few attributes (such as only <code>FirstName</code> or only <code>LastName</code>), there may be a large number of matches. This increases the chances of erroneous merges.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutoMergingPreviewRequest;
import org.openapis.openapi.models.operations.GetAutoMergingPreviewRequestBody;
import org.openapis.openapi.models.operations.GetAutoMergingPreviewRequestBodyConflictResolution;
import org.openapis.openapi.models.operations.GetAutoMergingPreviewRequestBodyConsolidation;
import org.openapis.openapi.models.operations.GetAutoMergingPreviewResponse;
import org.openapis.openapi.models.shared.ConflictResolvingModelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAutoMergingPreviewRequest req = new GetAutoMergingPreviewRequest("iure",                 new GetAutoMergingPreviewRequestBody(                new GetAutoMergingPreviewRequestBodyConflictResolution() {{
                                                conflictResolvingModel = ConflictResolvingModelEnum.RECENCY;
                                                sourceName = "quaerat";
                                            }};,                 new GetAutoMergingPreviewRequestBodyConsolidation() {{
                                                matchingAttributesList = new String[][]{{
                                                    add(new String[]{{
                                                        add("voluptatibus"),
                                                        add("voluptas"),
                                                        add("natus"),
                                                    }}),
                                                    add(new String[]{{
                                                        add("atque"),
                                                    }}),
                                                    add(new String[]{{
                                                        add("fugiat"),
                                                    }}),
                                                    add(new String[]{{
                                                        add("soluta"),
                                                    }}),
                                                }};
                                            }};) {{
                                minAllowedConfidenceScoreForMerging = 6793.93;
                            }};) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "dolorum";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "distinctio";
            }};            

            GetAutoMergingPreviewResponse res = sdk.sdk.getAutoMergingPreview(req);

            if (res.getAutoMergingPreviewResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomain

Returns information about a specific domain.

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
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDomainRequest req = new GetDomainRequest("nihil") {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "id";
                xAmzDate = "saepe";
                xAmzSecurityToken = "eius";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "perferendis";
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

## getIdentityResolutionJob

<p>Returns information about an Identity Resolution Job in a specific domain. </p> <p>Identity Resolution Jobs are set up using the Amazon Connect admin console. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/use-identity-resolution.html">Use Identity Resolution to consolidate similar profiles</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIdentityResolutionJobRequest;
import org.openapis.openapi.models.operations.GetIdentityResolutionJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIdentityResolutionJobRequest req = new GetIdentityResolutionJobRequest("optio", "accusamus") {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "suscipit";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "provident";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "repellendus";
            }};            

            GetIdentityResolutionJobResponse res = sdk.sdk.getIdentityResolutionJob(req);

            if (res.getIdentityResolutionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIntegration

Returns an integration for a domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIntegrationRequest;
import org.openapis.openapi.models.operations.GetIntegrationRequestBody;
import org.openapis.openapi.models.operations.GetIntegrationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIntegrationRequest req = new GetIntegrationRequest("similique",                 new GetIntegrationRequestBody("alias");) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "tempora";
                xAmzDate = "vel";
                xAmzSecurityToken = "quod";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "qui";
            }};            

            GetIntegrationResponse res = sdk.sdk.getIntegration(req);

            if (res.getIntegrationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMatches

<p>Before calling this API, use <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable identity resolution: set <code>Matching</code> to true.</p> <p>GetMatches returns potentially matching profiles, based on the results of the latest run of a machine learning process. </p> <important> <p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains. </p> <p>After the Identity Resolution Job completes, use the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a> API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from S3.</p> </important> <p>Amazon Connect uses the following profile attributes to identify matches:</p> <ul> <li> <p>PhoneNumber</p> </li> <li> <p>HomePhoneNumber</p> </li> <li> <p>BusinessPhoneNumber</p> </li> <li> <p>MobilePhoneNumber</p> </li> <li> <p>EmailAddress</p> </li> <li> <p>PersonalEmailAddress</p> </li> <li> <p>BusinessEmailAddress</p> </li> <li> <p>FullName</p> </li> </ul> <p>For example, two or more profiles—with spelling mistakes such as <b>John Doe</b> and <b>Jhn Doe</b>, or different casing email addresses such as <b>JOHN_DOE@ANYCOMPANY.COM</b> and <b>johndoe@anycompany.com</b>, or different phone number formats such as <b>555-010-0000</b> and <b>+1-555-010-0000</b>—can be detected as belonging to the same customer <b>John Doe</b> and merged into a unified profile.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMatchesRequest;
import org.openapis.openapi.models.operations.GetMatchesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMatchesRequest req = new GetMatchesRequest("a") {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "harum";
                xAmzCredential = "iusto";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "amet";
                maxResults = 730856L;
                nextToken = "accusamus";
            }};            

            GetMatchesResponse res = sdk.sdk.getMatches(req);

            if (res.getMatchesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProfileObjectType

Returns the object types for a specific domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProfileObjectTypeRequest;
import org.openapis.openapi.models.operations.GetProfileObjectTypeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProfileObjectTypeRequest req = new GetProfileObjectTypeRequest("enim", "dolorem") {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "totam";
                xAmzCredential = "nihil";
                xAmzDate = "sit";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "sed";
            }};            

            GetProfileObjectTypeResponse res = sdk.sdk.getProfileObjectType(req);

            if (res.getProfileObjectTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProfileObjectTypeTemplate

<p>Returns the template information for a specific object type.</p> <p>A template is a predefined ProfileObjectType, such as “Salesforce-Account” or “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API, with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the template.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProfileObjectTypeTemplateRequest;
import org.openapis.openapi.models.operations.GetProfileObjectTypeTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProfileObjectTypeTemplateRequest req = new GetProfileObjectTypeTemplateRequest("libero") {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "quam";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "cupiditate";
            }};            

            GetProfileObjectTypeTemplateResponse res = sdk.sdk.getProfileObjectTypeTemplate(req);

            if (res.getProfileObjectTypeTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkflow

Get details of specified workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkflowRequest;
import org.openapis.openapi.models.operations.GetWorkflowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWorkflowRequest req = new GetWorkflowRequest("pariatur", "soluta") {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "totam";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "distinctio";
            }};            

            GetWorkflowResponse res = sdk.sdk.getWorkflow(req);

            if (res.getWorkflowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkflowSteps

Get granular list of steps in workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkflowStepsRequest;
import org.openapis.openapi.models.operations.GetWorkflowStepsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWorkflowStepsRequest req = new GetWorkflowStepsRequest("aliquid", "quam") {{
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "qui";
                xAmzDate = "neque";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "odio";
                maxResults = 124833L;
                nextToken = "ullam";
            }};            

            GetWorkflowStepsResponse res = sdk.sdk.getWorkflowSteps(req);

            if (res.getWorkflowStepsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAccountIntegrations

Lists all of the integrations associated to a specific URI in the AWS account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccountIntegrationsRequest;
import org.openapis.openapi.models.operations.ListAccountIntegrationsRequestBody;
import org.openapis.openapi.models.operations.ListAccountIntegrationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAccountIntegrationsRequest req = new ListAccountIntegrationsRequest(                new ListAccountIntegrationsRequestBody("hic");) {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "soluta";
                xAmzDate = "nobis";
                xAmzSecurityToken = "et";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "ipsum";
                includeHidden = false;
                maxResults = 83422L;
                nextToken = "nobis";
            }};            

            ListAccountIntegrationsResponse res = sdk.sdk.listAccountIntegrations(req);

            if (res.listAccountIntegrationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDomains

Returns a list of all the domains for an AWS account that have been created.

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
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDomainsRequest req = new ListDomainsRequest() {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "aperiam";
                xAmzDate = "delectus";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "labore";
                maxResults = 240829L;
                nextToken = "dolorum";
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

## listIdentityResolutionJobs

Lists all of the Identity Resolution Jobs in your domain. The response sorts the list by <code>JobStartTime</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIdentityResolutionJobsRequest;
import org.openapis.openapi.models.operations.ListIdentityResolutionJobsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListIdentityResolutionJobsRequest req = new ListIdentityResolutionJobsRequest("quae") {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "quas";
                xAmzCredential = "itaque";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "porro";
                maxResults = 984330L;
                nextToken = "ut";
            }};            

            ListIdentityResolutionJobsResponse res = sdk.sdk.listIdentityResolutionJobs(req);

            if (res.listIdentityResolutionJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIntegrations

Lists all of the integrations in your domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIntegrationsRequest;
import org.openapis.openapi.models.operations.ListIntegrationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListIntegrationsRequest req = new ListIntegrationsRequest("cupiditate") {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "quae";
                xAmzCredential = "laudantium";
                xAmzDate = "odio";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "quisquam";
                includeHidden = false;
                maxResults = 876506L;
                nextToken = "omnis";
            }};            

            ListIntegrationsResponse res = sdk.sdk.listIntegrations(req);

            if (res.listIntegrationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProfileObjectTypeTemplates

Lists all of the template information for object types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProfileObjectTypeTemplatesRequest;
import org.openapis.openapi.models.operations.ListProfileObjectTypeTemplatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProfileObjectTypeTemplatesRequest req = new ListProfileObjectTypeTemplatesRequest() {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "voluptate";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "vero";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "dignissimos";
                maxResults = 941378L;
                nextToken = "distinctio";
            }};            

            ListProfileObjectTypeTemplatesResponse res = sdk.sdk.listProfileObjectTypeTemplates(req);

            if (res.listProfileObjectTypeTemplatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProfileObjectTypes

Lists all of the templates available within the service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProfileObjectTypesRequest;
import org.openapis.openapi.models.operations.ListProfileObjectTypesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProfileObjectTypesRequest req = new ListProfileObjectTypesRequest("odio") {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "vero";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "illum";
                maxResults = 194342L;
                nextToken = "natus";
            }};            

            ListProfileObjectTypesResponse res = sdk.sdk.listProfileObjectTypes(req);

            if (res.listProfileObjectTypesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProfileObjects

Returns a list of objects associated with a profile of a given ProfileObjectType.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProfileObjectsRequest;
import org.openapis.openapi.models.operations.ListProfileObjectsRequestBody;
import org.openapis.openapi.models.operations.ListProfileObjectsRequestBodyObjectFilter;
import org.openapis.openapi.models.operations.ListProfileObjectsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProfileObjectsRequest req = new ListProfileObjectsRequest("aut",                 new ListProfileObjectsRequestBody("voluptatibus", "exercitationem") {{
                                objectFilter = new ListProfileObjectsRequestBodyObjectFilter() {{
                                    keyName = "nulla";
                                    values = new String[]{{
                                        add("porro"),
                                    }};
                                }};;
                            }};) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "iusto";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "officia";
                maxResults = 269479L;
                nextToken = "ipsam";
            }};            

            ListProfileObjectsResponse res = sdk.sdk.listProfileObjects(req);

            if (res.listProfileObjectsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Displays the tags associated with an Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.

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
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("aspernatur") {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "magnam";
                xAmzDate = "ratione";
                xAmzSecurityToken = "ex";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "dicta";
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

## listWorkflows

Query to list all workflows.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkflowsRequest;
import org.openapis.openapi.models.operations.ListWorkflowsRequestBody;
import org.openapis.openapi.models.operations.ListWorkflowsRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.ListWorkflowsRequestBodyWorkflowTypeEnum;
import org.openapis.openapi.models.operations.ListWorkflowsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorkflowsRequest req = new ListWorkflowsRequest("maiores",                 new ListWorkflowsRequestBody() {{
                                queryEndDate = OffsetDateTime.parse("2022-08-05T18:23:03.713Z");
                                queryStartDate = OffsetDateTime.parse("2021-04-17T17:08:28.312Z");
                                status = ListWorkflowsRequestBodyStatusEnum.CANCELLED;
                                workflowType = ListWorkflowsRequestBodyWorkflowTypeEnum.APPFLOW_INTEGRATION;
                            }};) {{
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "quisquam";
                xAmzDate = "saepe";
                xAmzSecurityToken = "ea";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "corporis";
                maxResults = 333145L;
                nextToken = "aliquid";
            }};            

            ListWorkflowsResponse res = sdk.sdk.listWorkflows(req);

            if (res.listWorkflowsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mergeProfiles

<p>Runs an AWS Lambda job that does the following:</p> <ol> <li> <p>All the profileKeys in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the objects in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the <code>ProfileToBeMerged</code> will be deleted at the end.</p> </li> <li> <p>All the profileKeys in the <code>ProfileIdsToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>Standard fields are merged as follows:</p> <ol> <li> <p>Fields are always "union"-ed if there are no conflicts in standard fields or attributeKeys.</p> </li> <li> <p>When there are conflicting fields:</p> <ol> <li> <p>If no <code>SourceProfileIds</code> entry is specified, the main Profile value is always taken. </p> </li> <li> <p>If a <code>SourceProfileIds</code> entry is specified, the specified profileId is always taken, even if it is a NULL value.</p> </li> </ol> </li> </ol> </li> </ol> <p>You can use MergeProfiles together with <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>, which returns potentially matching profiles, or use it with the results of another matching system. After profiles have been merged, they cannot be separated (unmerged).</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MergeProfilesRequest;
import org.openapis.openapi.models.operations.MergeProfilesRequestBody;
import org.openapis.openapi.models.operations.MergeProfilesRequestBodyFieldSourceProfileIds;
import org.openapis.openapi.models.operations.MergeProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            MergeProfilesRequest req = new MergeProfilesRequest("magnam",                 new MergeProfilesRequestBody("ea",                 new String[]{{
                                                add("consectetur"),
                                                add("recusandae"),
                                                add("aspernatur"),
                                                add("minima"),
                                            }}) {{
                                fieldSourceProfileIds = new MergeProfilesRequestBodyFieldSourceProfileIds() {{
                                    accountNumber = "eaque";
                                    additionalInformation = "a";
                                    address = "005 Haag Creek";
                                    attributes = new java.util.HashMap<String, String>() {{
                                        put("inventore", "non");
                                        put("et", "dolorum");
                                        put("laborum", "placeat");
                                        put("velit", "eum");
                                    }};
                                    billingAddress = "autem";
                                    birthDate = "nobis";
                                    businessEmailAddress = "quas";
                                    businessName = "assumenda";
                                    businessPhoneNumber = "nulla";
                                    emailAddress = "voluptas";
                                    firstName = "Mona";
                                    gender = "female";
                                    homePhoneNumber = "tempora";
                                    lastName = "Gerhold";
                                    mailingAddress = "explicabo";
                                    middleName = "provident";
                                    mobilePhoneNumber = "ipsa";
                                    partyType = "molestiae";
                                    personalEmailAddress = "magnam";
                                    phoneNumber = "odio";
                                    shippingAddress = "eius";
                                }};;
                            }};) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "esse";
                xAmzCredential = "rem";
                xAmzDate = "fuga";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "fugiat";
            }};            

            MergeProfilesResponse res = sdk.sdk.mergeProfiles(req);

            if (res.mergeProfilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putIntegration

<p>Adds an integration between the service and a third-party service, which includes Amazon AppFlow and Amazon Connect.</p> <p>An integration can belong to only one domain.</p> <p>To add or remove tags on an existing Integration, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource </a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html"> UntagResource</a>.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutIntegrationRequest;
import org.openapis.openapi.models.operations.PutIntegrationRequestBody;
import org.openapis.openapi.models.operations.PutIntegrationRequestBodyFlowDefinition;
import org.openapis.openapi.models.operations.PutIntegrationResponse;
import org.openapis.openapi.models.shared.ConnectorOperator;
import org.openapis.openapi.models.shared.DataPullModeEnum;
import org.openapis.openapi.models.shared.IncrementalPullConfig;
import org.openapis.openapi.models.shared.MarketoConnectorOperatorEnum;
import org.openapis.openapi.models.shared.MarketoSourceProperties;
import org.openapis.openapi.models.shared.S3ConnectorOperatorEnum;
import org.openapis.openapi.models.shared.S3SourceProperties;
import org.openapis.openapi.models.shared.SalesforceConnectorOperatorEnum;
import org.openapis.openapi.models.shared.SalesforceSourceProperties;
import org.openapis.openapi.models.shared.ScheduledTriggerProperties;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceNowConnectorOperatorEnum;
import org.openapis.openapi.models.shared.ServiceNowSourceProperties;
import org.openapis.openapi.models.shared.SourceConnectorProperties;
import org.openapis.openapi.models.shared.SourceConnectorTypeEnum;
import org.openapis.openapi.models.shared.SourceFlowConfig;
import org.openapis.openapi.models.shared.Task;
import org.openapis.openapi.models.shared.TaskTypeEnum;
import org.openapis.openapi.models.shared.TriggerConfig;
import org.openapis.openapi.models.shared.TriggerProperties;
import org.openapis.openapi.models.shared.TriggerTypeEnum;
import org.openapis.openapi.models.shared.ZendeskConnectorOperatorEnum;
import org.openapis.openapi.models.shared.ZendeskSourceProperties;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutIntegrationRequest req = new PutIntegrationRequest("eum",                 new PutIntegrationRequestBody() {{
                                flowDefinition = new PutIntegrationRequestBodyFlowDefinition() {{
                                    description = "suscipit";
                                    flowName = "assumenda";
                                    kmsArn = "eos";
                                    sourceFlowConfig = new SourceFlowConfig(SourceConnectorTypeEnum.ZENDESK,                 new SourceConnectorProperties() {{
                                                        marketo = new MarketoSourceProperties("quisquam");;
                                                        s3 = new S3SourceProperties("veritatis") {{
                                                            bucketPrefix = "ipsa";
                                                        }};;
                                                        salesforce = new SalesforceSourceProperties("id") {{
                                                            enableDynamicFieldUpdate = false;
                                                            includeDeletedRecords = false;
                                                        }};;
                                                        serviceNow = new ServiceNowSourceProperties("quidem");;
                                                        zendesk = new ZendeskSourceProperties("neque");;
                                                    }};) {{
                                        connectorProfileName = "quo";
                                        incrementalPullConfig = new IncrementalPullConfig() {{
                                            datetimeTypeFieldName = "illum";
                                        }};;
                                    }};;
                                    tasks = new org.openapis.openapi.models.shared.Task[]{{
                                        add(new Task(                new String[]{{
                                                            add("inventore"),
                                                            add("nihil"),
                                                        }}, TaskTypeEnum.MASK) {{
                                            connectorOperator = new ConnectorOperator() {{
                                                marketo = MarketoConnectorOperatorEnum.MASK_LAST_N;
                                                s3 = S3ConnectorOperatorEnum.GREATER_THAN_OR_EQUAL_TO;
                                                salesforce = SalesforceConnectorOperatorEnum.GREATER_THAN;
                                                serviceNow = ServiceNowConnectorOperatorEnum.EQUAL_TO;
                                                zendesk = ZendeskConnectorOperatorEnum.PROJECTION;
                                            }};
                                            destinationField = "cupiditate";
                                            sourceFields = new String[]{{
                                                add("tempora"),
                                            }};
                                            taskProperties = new java.util.HashMap<String, String>() {{
                                                put("ipsam", "aspernatur");
                                                put("sequi", "quo");
                                                put("esse", "recusandae");
                                                put("aperiam", "distinctio");
                                            }};
                                            taskType = TaskTypeEnum.TRUNCATE;
                                        }}),
                                        add(new Task(                new String[]{{
                                                            add("deleniti"),
                                                        }}, TaskTypeEnum.FILTER) {{
                                            connectorOperator = new ConnectorOperator() {{
                                                marketo = MarketoConnectorOperatorEnum.VALIDATE_NUMERIC;
                                                s3 = S3ConnectorOperatorEnum.EQUAL_TO;
                                                salesforce = SalesforceConnectorOperatorEnum.MULTIPLICATION;
                                                serviceNow = ServiceNowConnectorOperatorEnum.SUBTRACTION;
                                                zendesk = ZendeskConnectorOperatorEnum.SUBTRACTION;
                                            }};
                                            destinationField = "sapiente";
                                            sourceFields = new String[]{{
                                                add("deserunt"),
                                            }};
                                            taskProperties = new java.util.HashMap<String, String>() {{
                                                put("accusantium", "porro");
                                                put("eum", "quas");
                                            }};
                                            taskType = TaskTypeEnum.MASK;
                                        }}),
                                        add(new Task(                new String[]{{
                                                            add("atque"),
                                                            add("et"),
                                                            add("esse"),
                                                        }}, TaskTypeEnum.VALIDATE) {{
                                            connectorOperator = new ConnectorOperator() {{
                                                marketo = MarketoConnectorOperatorEnum.MASK_LAST_N;
                                                s3 = S3ConnectorOperatorEnum.MASK_ALL;
                                                salesforce = SalesforceConnectorOperatorEnum.LESS_THAN_OR_EQUAL_TO;
                                                serviceNow = ServiceNowConnectorOperatorEnum.DIVISION;
                                                zendesk = ZendeskConnectorOperatorEnum.GREATER_THAN;
                                            }};
                                            destinationField = "minima";
                                            sourceFields = new String[]{{
                                                add("fugit"),
                                                add("sapiente"),
                                            }};
                                            taskProperties = new java.util.HashMap<String, String>() {{
                                                put("ratione", "explicabo");
                                            }};
                                            taskType = TaskTypeEnum.VALIDATE;
                                        }}),
                                        add(new Task(                new String[]{{
                                                            add("eligendi"),
                                                            add("sit"),
                                                            add("culpa"),
                                                        }}, TaskTypeEnum.TRUNCATE) {{
                                            connectorOperator = new ConnectorOperator() {{
                                                marketo = MarketoConnectorOperatorEnum.VALIDATE_NUMERIC;
                                                s3 = S3ConnectorOperatorEnum.LESS_THAN;
                                                salesforce = SalesforceConnectorOperatorEnum.ADDITION;
                                                serviceNow = ServiceNowConnectorOperatorEnum.VALIDATE_NON_NULL;
                                                zendesk = ZendeskConnectorOperatorEnum.VALIDATE_NON_ZERO;
                                            }};
                                            destinationField = "vero";
                                            sourceFields = new String[]{{
                                                add("quasi"),
                                                add("saepe"),
                                            }};
                                            taskProperties = new java.util.HashMap<String, String>() {{
                                                put("harum", "molestiae");
                                                put("rerum", "occaecati");
                                            }};
                                            taskType = TaskTypeEnum.MAP;
                                        }}),
                                    }};
                                    triggerConfig = new TriggerConfig(TriggerTypeEnum.SCHEDULED) {{
                                        triggerProperties = new TriggerProperties() {{
                                            scheduled = new ScheduledTriggerProperties("cumque") {{
                                                dataPullMode = DataPullModeEnum.INCREMENTAL;
                                                firstExecutionFrom = OffsetDateTime.parse("2022-03-16T07:36:38.247Z");
                                                scheduleEndTime = OffsetDateTime.parse("2022-01-15T21:42:01.969Z");
                                                scheduleOffset = 232865L;
                                                scheduleStartTime = OffsetDateTime.parse("2022-07-01T05:58:32.179Z");
                                                timezone = "provident";
                                            }};;
                                        }};;
                                    }};;
                                }};;
                                objectTypeName = "a";
                                objectTypeNames = new java.util.HashMap<String, String>() {{
                                    put("quas", "esse");
                                    put("quasi", "a");
                                    put("error", "sint");
                                    put("pariatur", "possimus");
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("eveniet", "asperiores");
                                }};
                                uri = "https://bossy-chowder.com";
                            }};) {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "aliquid";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "quae";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "vel";
            }};            

            PutIntegrationResponse res = sdk.sdk.putIntegration(req);

            if (res.putIntegrationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putProfileObject

<p>Adds additional objects to customer profiles of a given ObjectType.</p> <p>When adding a specific profile object, like a Contact Record, an inferred profile can get created if it is not mapped to an existing profile. The resulting profile will only have a phone number populated in the standard ProfileObject. Any additional Contact Records with the same phone number will be mapped to the same inferred profile.</p> <p>When a ProfileObject is created and if a ProfileObjectType already exists for the ProfileObject, it will provide data to a standard profile depending on the ProfileObjectType definition.</p> <p>PutProfileObject needs an ObjectType, which can be created using PutProfileObjectType.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutProfileObjectRequest;
import org.openapis.openapi.models.operations.PutProfileObjectRequestBody;
import org.openapis.openapi.models.operations.PutProfileObjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutProfileObjectRequest req = new PutProfileObjectRequest("eius",                 new PutProfileObjectRequestBody("libero", "illum");) {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "aliquam";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            PutProfileObjectResponse res = sdk.sdk.putProfileObject(req);

            if (res.putProfileObjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putProfileObjectType

<p>Defines a ProfileObjectType.</p> <p>To add or remove tags on an existing ObjectType, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutProfileObjectTypeRequest;
import org.openapis.openapi.models.operations.PutProfileObjectTypeRequestBody;
import org.openapis.openapi.models.operations.PutProfileObjectTypeResponse;
import org.openapis.openapi.models.shared.FieldContentTypeEnum;
import org.openapis.openapi.models.shared.ObjectTypeField;
import org.openapis.openapi.models.shared.ObjectTypeKey;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StandardIdentifierEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutProfileObjectTypeRequest req = new PutProfileObjectTypeRequest("nisi", "aut",                 new PutProfileObjectTypeRequestBody("voluptatum") {{
                                allowProfileCreation = false;
                                encryptionKey = "qui";
                                expirationDays = 845358L;
                                fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.ObjectTypeField>() {{
                                    put("deleniti", new ObjectTypeField() {{
                                        contentType = FieldContentTypeEnum.NAME;
                                        source = "dolorum";
                                        target = "architecto";
                                    }});
                                    put("omnis", new ObjectTypeField() {{
                                        contentType = FieldContentTypeEnum.NAME;
                                        source = "quasi";
                                        target = "at";
                                    }});
                                }};
                                keys = new java.util.HashMap<String, org.openapis.openapi.models.shared.ObjectTypeKey[]>() {{
                                    put("voluptate", new org.openapis.openapi.models.shared.ObjectTypeKey[]{{
                                        add(new ObjectTypeKey() {{
                                            fieldNames = new String[]{{
                                                add("veritatis"),
                                                add("consectetur"),
                                            }};
                                            standardIdentifiers = new org.openapis.openapi.models.shared.StandardIdentifierEnum[]{{
                                                add(StandardIdentifierEnum.SECONDARY),
                                            }};
                                        }}),
                                    }});
                                }};
                                sourceLastUpdatedTimestampFormat = "temporibus";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("rem", "aut");
                                }};
                                templateId = "laudantium";
                            }};) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "ab";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "non";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "dolor";
            }};            

            PutProfileObjectTypeResponse res = sdk.sdk.putProfileObjectType(req);

            if (res.putProfileObjectTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchProfiles

<p>Searches for profiles within a specific domain using one or more predefined search keys (e.g., _fullName, _phone, _email, _account, etc.) and/or custom-defined search keys. A search key is a data type pair that consists of a <code>KeyName</code> and <code>Values</code> list.</p> <p>This operation supports searching for profiles with a minimum of 1 key-value(s) pair and up to 5 key-value(s) pairs using either <code>AND</code> or <code>OR</code> logic.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProfilesRequest;
import org.openapis.openapi.models.operations.SearchProfilesRequestBody;
import org.openapis.openapi.models.operations.SearchProfilesRequestBodyLogicalOperatorEnum;
import org.openapis.openapi.models.operations.SearchProfilesResponse;
import org.openapis.openapi.models.shared.AdditionalSearchKey;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchProfilesRequest req = new SearchProfilesRequest("numquam",                 new SearchProfilesRequestBody("impedit",                 new String[]{{
                                                add("voluptas"),
                                            }}) {{
                                additionalSearchKeys = new org.openapis.openapi.models.shared.AdditionalSearchKey[]{{
                                    add(new AdditionalSearchKey("natus",                 new String[]{{
                                                        add("voluptatibus"),
                                                    }}) {{
                                        keyName = "dignissimos";
                                        values = new String[]{{
                                            add("maiores"),
                                        }};
                                    }}),
                                }};
                                logicalOperator = SearchProfilesRequestBodyLogicalOperatorEnum.AND;
                            }};) {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "ea";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "officia";
                maxResults = 807023L;
                nextToken = "dignissimos";
            }};            

            SearchProfilesResponse res = sdk.sdk.searchProfiles(req);

            if (res.searchProfilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Assigns one or more tags (key-value pairs) to the specified Amazon Connect Customer Profiles resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.</p> <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.</p> <p>You can use the TagResource action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>

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
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("nemo", "quae");
                                                put("quaerat", "porro");
                                                put("quod", "labore");
                                                put("ab", "adipisci");
                                            }});, "fuga") {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "velit";
                xAmzDate = "culpa";
                xAmzSecurityToken = "est";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "totam";
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

Removes one or more tags from the specified Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.

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
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("vel",                 new String[]{{
                                add("quos"),
                                add("vel"),
                            }}) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "facilis";
                xAmzDate = "cum";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "in";
                xAmzSignedHeaders = "corporis";
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

## updateDomain

<p>Updates the properties of a domain, including creating or selecting a dead letter queue or an encryption key.</p> <p>After a domain is created, the name can’t be changed.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true. </p> <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should apply. </p> <p>To add or remove tags on an existing Domain, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html">TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDomainRequest;
import org.openapis.openapi.models.operations.UpdateDomainRequestBody;
import org.openapis.openapi.models.operations.UpdateDomainRequestBodyMatching;
import org.openapis.openapi.models.operations.UpdateDomainResponse;
import org.openapis.openapi.models.shared.AutoMerging;
import org.openapis.openapi.models.shared.ConflictResolution;
import org.openapis.openapi.models.shared.ConflictResolvingModelEnum;
import org.openapis.openapi.models.shared.Consolidation;
import org.openapis.openapi.models.shared.ExportingConfig;
import org.openapis.openapi.models.shared.JobSchedule;
import org.openapis.openapi.models.shared.JobScheduleDayOfTheWeekEnum;
import org.openapis.openapi.models.shared.S3ExportingConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDomainRequest req = new UpdateDomainRequest("assumenda",                 new UpdateDomainRequestBody() {{
                                deadLetterQueueUrl = "nemo";
                                defaultEncryptionKey = "recusandae";
                                defaultExpirationDays = 397533L;
                                matching = new UpdateDomainRequestBodyMatching() {{
                                    autoMerging = new AutoMerging(false) {{
                                        conflictResolution = new ConflictResolution(ConflictResolvingModelEnum.RECENCY) {{
                                            sourceName = "cum";
                                        }};;
                                        consolidation = new Consolidation(                new String[][]{{
                                                            add(new String[]{{
                                                                add("exercitationem"),
                                                                add("earum"),
                                                            }}),
                                                        }});;
                                        minAllowedConfidenceScoreForMerging = 8149.67;
                                    }};;
                                    enabled = false;
                                    exportingConfig = new ExportingConfig() {{
                                        s3Exporting = new S3ExportingConfig("numquam") {{
                                            s3KeyName = "doloribus";
                                        }};;
                                    }};;
                                    jobSchedule = new JobSchedule(JobScheduleDayOfTheWeekEnum.TUESDAY, "reiciendis");;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("saepe", "necessitatibus");
                                    put("dolore", "sunt");
                                    put("asperiores", "adipisci");
                                }};
                            }};) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "amet";
                xAmzCredential = "beatae";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "a";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "consectetur";
            }};            

            UpdateDomainResponse res = sdk.sdk.updateDomain(req);

            if (res.updateDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProfile

<p>Updates the properties of a profile. The ProfileId is required for updating a customer profile.</p> <p>When calling the UpdateProfile API, specifying an empty string value means that any existing value will be removed. Not specifying a string value means that any value already there will be kept.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProfileRequest;
import org.openapis.openapi.models.operations.UpdateProfileRequestBody;
import org.openapis.openapi.models.operations.UpdateProfileRequestBodyAddress;
import org.openapis.openapi.models.operations.UpdateProfileRequestBodyBillingAddress;
import org.openapis.openapi.models.operations.UpdateProfileRequestBodyGenderEnum;
import org.openapis.openapi.models.operations.UpdateProfileRequestBodyMailingAddress;
import org.openapis.openapi.models.operations.UpdateProfileRequestBodyPartyTypeEnum;
import org.openapis.openapi.models.operations.UpdateProfileRequestBodyShippingAddress;
import org.openapis.openapi.models.operations.UpdateProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProfileRequest req = new UpdateProfileRequest("harum",                 new UpdateProfileRequestBody("laboriosam") {{
                                accountNumber = "ipsa";
                                additionalInformation = "voluptates";
                                address = new UpdateProfileRequestBodyAddress() {{
                                    address1 = "libero";
                                    address2 = "vitae";
                                    address3 = "accusamus";
                                    address4 = "similique";
                                    city = "East Genevieve";
                                    country = "Haiti";
                                    county = "voluptas";
                                    postalCode = "76271";
                                    province = "blanditiis";
                                    state = "in";
                                }};;
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("aliquam", "officiis");
                                    put("temporibus", "ullam");
                                }};
                                billingAddress = new UpdateProfileRequestBodyBillingAddress() {{
                                    address1 = "adipisci";
                                    address2 = "cum";
                                    address3 = "blanditiis";
                                    address4 = "quas";
                                    city = "Compton";
                                    country = "New Caledonia";
                                    county = "corrupti";
                                    postalCode = "59370-6191";
                                    province = "asperiores";
                                    state = "facilis";
                                }};;
                                birthDate = "voluptate";
                                businessEmailAddress = "expedita";
                                businessName = "ab";
                                businessPhoneNumber = "iste";
                                emailAddress = "dolore";
                                firstName = "Margarett";
                                gender = UpdateProfileRequestBodyGenderEnum.MALE;
                                genderString = "in";
                                homePhoneNumber = "commodi";
                                lastName = "Predovic";
                                mailingAddress = new UpdateProfileRequestBodyMailingAddress() {{
                                    address1 = "explicabo";
                                    address2 = "voluptas";
                                    address3 = "unde";
                                    address4 = "architecto";
                                    city = "Fort Sonia";
                                    country = "Bangladesh";
                                    county = "reiciendis";
                                    postalCode = "59215";
                                    province = "eius";
                                    state = "necessitatibus";
                                }};;
                                middleName = "ipsum";
                                mobilePhoneNumber = "ea";
                                partyType = UpdateProfileRequestBodyPartyTypeEnum.BUSINESS;
                                partyTypeString = "quos";
                                personalEmailAddress = "voluptatibus";
                                phoneNumber = "tempora";
                                shippingAddress = new UpdateProfileRequestBodyShippingAddress() {{
                                    address1 = "tempora";
                                    address2 = "voluptate";
                                    address3 = "reiciendis";
                                    address4 = "ex";
                                    city = "East Shyannmouth";
                                    country = "Pitcairn Islands";
                                    county = "quaerat";
                                    postalCode = "38507";
                                    province = "error";
                                    state = "veniam";
                                }};;
                            }};) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "reiciendis";
                xAmzDate = "nulla";
                xAmzSecurityToken = "magni";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "saepe";
            }};            

            UpdateProfileResponse res = sdk.sdk.updateProfile(req);

            if (res.updateProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
