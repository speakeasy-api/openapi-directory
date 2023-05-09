# SDK

## Overview

<note> <p>Amazon Security Lake is in preview release. Your use of the Security Lake preview is subject to Section 2 of the <a href="http://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a>("Betas and Previews").</p> </note> <p>Amazon Security Lake is a fully managed security data lake service. You can use Security Lake to automatically centralize security data from cloud, on-premises, and custom sources into a data lake that's stored in your Amazon Web Servicesaccount. Amazon Web Services Organizations is an account management service that lets you consolidate multiple Amazon Web Services accounts into an organization that you create and centrally manage. With Organizations, you can create member accounts and invite existing accounts to join your organization. Security Lake helps you analyze security data for a more complete understanding of your security posture across the entire organization. It can also help you improve the protection of your workloads, applications, and data.</p> <p>The data lake is backed by Amazon Simple Storage Service (Amazon S3) buckets, and you retain ownership over your data. </p> <p>Amazon Security Lake integrates with CloudTrail, a service that provides a record of actions taken by a user, role, or an Amazon Web Services service in Security Lake CloudTrail captures API calls for Security Lake as events. The calls captured include calls from the Security Lake console and code calls to the Security Lake API operations. If you create a trail, you can enable continuous delivery of CloudTrail events to an Amazon S3 bucket, including events for Security Lake. If you don't configure a trail, you can still view the most recent events in the CloudTrail console in Event history. Using the information collected by CloudTrail you can determine the request that was made to Security Lake, the IP address from which the request was made, who made the request, when it was made, and additional details. To learn more about Security Lake information in CloudTrail, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/securitylake-cloudtrail.html">Amazon Security Lake User Guide</a>.</p> <p>Security Lake automates the collection of security-related log and event data from integrated Amazon Web Services and third-party services. It also helps you manage the lifecycle of data with customizable retention and replication settings. Security Lake converts ingested data into Apache Parquet format and a standard open-source schema called the Open Cybersecurity Schema Framework (OCSF).</p> <p>Other Amazon Web Services and third-party services can subscribe to the data that's stored in Security Lake for incident response and security data analytics.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/securitylake/>
### Available Operations

* [createAwsLogSource](#createawslogsource) - <p>Adds a natively supported Amazon Web Service as an Amazon Security Lake source. Enables source types for member accounts in required Amazon Web Services Regions, based on the parameters you specify. You can choose any source type in any Region for either accounts that are part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, you can supply any combination of the three dimensions to this API. </p> <p>By default, a dimension refers to the entire set. When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when you do not specify members, the API enables all Security Lake member accounts for all sources. Similarly, when you do not specify Regions, Security Lake is enabled for all the Regions where Security Lake is available as a service.</p> <p>You can use this API only to enable natively supported Amazon Web Services as a source. Use <code>CreateCustomLogSource</code> to enable data collection from a custom source. </p>
* [createCustomLogSource](#createcustomlogsource) - Adds a third-party custom source in Amazon Security Lake, from the Amazon Web Services Region where you want to create a custom source. Security Lake can collect logs and events from third-party custom sources. After creating the appropriate IAM role to invoke Glue crawler, use this API to add a custom source name in Security Lake. This operation creates a partition in the Amazon S3 bucket for Security Lake as the target location for log files from the custom source in addition to an associated Glue table and an Glue crawler.
* [createDatalake](#createdatalake) - <p>Initializes an Amazon Security Lake instance with the provided (or default) configuration. You can enable Security Lake in Amazon Web Services Regions with customized settings before enabling log collection in Regions. You can either use the <code>enableAll</code> parameter to specify all Regions or specify the Regions where you want to enable Security Lake. To specify particular Regions, use the <code>Regions</code> parameter and then configure these Regions using the <code>configurations</code> parameter. If you have already enabled Security Lake in a Region when you call this command, the command will update the Region if you provide new configuration parameters. If you have not already enabled Security Lake in the Region when you call this API, it will set up the data lake in the Region with the specified configurations.</p> <p>When you enable Security Lake, it starts ingesting security data after the <code>CreateAwsLogSource</code> call. This includes ingesting security data from sources, storing data, and making data accessible to subscribers. Security Lake also enables all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/what-is-security-lake.html">Amazon Security Lake User Guide</a>.</p>
* [createDatalakeAutoEnable](#createdatalakeautoenable) - Automatically enables Amazon Security Lake for new member accounts in your organization. Security Lake is not automatically enabled for any existing member accounts in your organization.
* [createDatalakeDelegatedAdmin](#createdatalakedelegatedadmin) - Designates the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.
* [createDatalakeExceptionsSubscription](#createdatalakeexceptionssubscription) - Creates the specified notification subscription in Amazon Security Lake for the organization you specify.
* [createSubscriber](#createsubscriber) - Creates a subscription permission for accounts that are already enabled in Amazon Security Lake. You can create a subscriber with access to data in the current Amazon Web Services Region.
* [createSubscriptionNotificationConfiguration](#createsubscriptionnotificationconfiguration) - Notifies the subscriber when new data is written to the data lake for the sources that the subscriber consumes in Security Lake. You can create only one subscriber notification per subscriber.
* [deleteAwsLogSource](#deleteawslogsource) - <p>Removes a natively supported Amazon Web Service as an Amazon Security Lake source. When you remove the source, Security Lake stops collecting data from that source, and subscribers can no longer consume new data from the source. Subscribers can still consume data that Security Lake collected from the source before disablement.</p> <p>You can choose any source type in any Amazon Web Services Region for either accounts that are part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, you can supply any combination of the three dimensions to this API. </p> <p>By default, a dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when you do not specify members, the API disables all Security Lake member accounts for sources. Similarly, when you do not specify Regions, Security Lake is disabled for all the Regions where Security Lake is available as a service.</p> <p>When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. For example, if you don't provide specific accounts, the API applies to the entire set of accounts in your organization.</p>
* [deleteCustomLogSource](#deletecustomlogsource) - Removes a custom log source from Amazon Security Lake.
* [deleteDatalake](#deletedatalake) - <p>When you delete Amazon Security Lake from your account, Security Lake is disabled in all Amazon Web Services Regions. Also, this API automatically takes steps to remove the account from Security Lake . </p> <p>This operation disables security data collection from sources, deletes data stored, and stops making data accessible to subscribers. Security Lake also deletes all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. The <code>DeleteDatalake</code> operation does not delete the Amazon S3 bucket, which is owned by your Amazon Web Services account. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/disable-security-lake.html">Amazon Security Lake User Guide</a>.</p>
* [deleteDatalakeAutoEnable](#deletedatalakeautoenable) -  <code>DeleteDatalakeAutoEnable</code> removes automatic enablement of configuration settings for new member accounts (but keeps settings for the delegated administrator) from Amazon Security Lake. You must run this API using credentials of the delegated administrator. When you run this API, new member accounts that are added after the organization enables Security Lake won't contribute to the data lake.
* [deleteDatalakeDelegatedAdmin](#deletedatalakedelegatedadmin) - Deletes the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.
* [deleteDatalakeExceptionsSubscription](#deletedatalakeexceptionssubscription) - Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.
* [deleteSubscriber](#deletesubscriber) - Deletes the subscription permission for accounts that are already enabled in Amazon Security Lake. You can delete a subscriber and remove access to data in the current Amazon Web Services Region.
* [deleteSubscriptionNotificationConfiguration](#deletesubscriptionnotificationconfiguration) - Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.
* [getDatalake](#getdatalake) - Retrieves the Amazon Security Lake configuration object for the specified Amazon Web Services account ID. You can use the <code>GetDatalake</code> API to know whether Security Lake is enabled for the current Region. This API does not take input parameters. 
* [getDatalakeAutoEnable](#getdatalakeautoenable) - Retrieves the configuration that will be automatically set up for accounts added to the organization after the organization has onboarded to Amazon Security Lake. This API does not take input parameters.
* [getDatalakeExceptionsExpiry](#getdatalakeexceptionsexpiry) - Retrieves the expiration period and time-to-live (TTL) for which the exception message will remain. Exceptions are stored by default, for 2 weeks from when a record was created in Amazon Security Lake. This API does not take input parameters.
* [getDatalakeExceptionsSubscription](#getdatalakeexceptionssubscription) - Retrieves the details of exception notifications for the account in Amazon Security Lake.
* [getDatalakeStatus](#getdatalakestatus) - Retrieves a snapshot of the current Region, including whether Amazon Security Lake is enabled for those accounts and which sources Security Lake is collecting data from. 
* [getSubscriber](#getsubscriber) - Retrieves the subscription information for the specified subscription ID. You can get information about a specific subscriber.
* [listDatalakeExceptions](#listdatalakeexceptions) - Lists the Amazon Security Lake exceptions that you can use to find the source of problems and fix them.
* [listLogSources](#listlogsources) - Retrieves the log sources in the current Amazon Web Services Region. 
* [listSubscribers](#listsubscribers) - List all subscribers for the specific Amazon Security Lake account ID. You can retrieve a list of subscriptions associated with a specific organization or Amazon Web Services account.
* [updateDatalake](#updatedatalake) - Specifies where to store your security data and for how long. You can add a rollup Region to consolidate data from multiple Amazon Web Services Regions. 
* [updateDatalakeExceptionsExpiry](#updatedatalakeexceptionsexpiry) - Update the expiration period for the exception message to your preferred time, and control the time-to-live (TTL) for the exception message to remain. Exceptions are stored by default for 2 weeks from when a record was created in Amazon Security Lake. 
* [updateDatalakeExceptionsSubscription](#updatedatalakeexceptionssubscription) - Updates the specified notification subscription in Amazon Security Lake for the organization you specify.
* [updateSubscriber](#updatesubscriber) - Updates an existing subscription for the given Amazon Security Lake account ID. You can update a subscriber by changing the sources that the subscriber consumes data from. 
* [updateSubscriptionNotificationConfiguration](#updatesubscriptionnotificationconfiguration) - Updates an existing notification method for the subscription (SQS or HTTPs endpoint) or switches the notification subscription endpoint for a subscriber.

## createAwsLogSource

<p>Adds a natively supported Amazon Web Service as an Amazon Security Lake source. Enables source types for member accounts in required Amazon Web Services Regions, based on the parameters you specify. You can choose any source type in any Region for either accounts that are part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, you can supply any combination of the three dimensions to this API. </p> <p>By default, a dimension refers to the entire set. When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when you do not specify members, the API enables all Security Lake member accounts for all sources. Similarly, when you do not specify Regions, Security Lake is enabled for all the Regions where Security Lake is available as a service.</p> <p>You can use this API only to enable natively supported Amazon Web Services as a source. Use <code>CreateCustomLogSource</code> to enable data collection from a custom source. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAwsLogSourceRequest;
import org.openapis.openapi.models.operations.CreateAwsLogSourceRequestBody;
import org.openapis.openapi.models.operations.CreateAwsLogSourceResponse;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAwsLogSourceRequest req = new CreateAwsLogSourceRequest(                new CreateAwsLogSourceRequestBody(                new org.openapis.openapi.models.shared.DimensionEnum[]{{
                                                add(DimensionEnum.MEMBER),
                                            }}) {{
                                enableAllDimensions = new java.util.HashMap<String, java.util.HashMap<String, String[]>>() {{
                                    put("mollitia", new java.util.HashMap<String, String[]>() {{
                                        put("dolores", new String[]{{
                                            add("corporis"),
                                        }});
                                        put("explicabo", new String[]{{
                                            add("enim"),
                                            add("omnis"),
                                            add("nemo"),
                                            add("minima"),
                                        }});
                                        put("excepturi", new String[]{{
                                            add("iure"),
                                        }});
                                    }});
                                    put("culpa", new java.util.HashMap<String, String[]>() {{
                                        put("sapiente", new String[]{{
                                            add("mollitia"),
                                        }});
                                        put("dolorem", new String[]{{
                                            add("consequuntur"),
                                            add("repellat"),
                                            add("mollitia"),
                                        }});
                                        put("occaecati", new String[]{{
                                            add("commodi"),
                                            add("quam"),
                                        }});
                                        put("molestiae", new String[]{{
                                            add("error"),
                                        }});
                                    }});
                                    put("quia", new java.util.HashMap<String, String[]>() {{
                                        put("vitae", new String[]{{
                                            add("animi"),
                                            add("enim"),
                                            add("odit"),
                                        }});
                                        put("quo", new String[]{{
                                            add("tenetur"),
                                        }});
                                    }});
                                }};
                                enableSingleDimension = new String[]{{
                                    add("id"),
                                    add("possimus"),
                                }};
                                enableTwoDimensions = new java.util.HashMap<String, String[]>() {{
                                    put("quasi", new String[]{{
                                        add("temporibus"),
                                        add("laborum"),
                                        add("quasi"),
                                    }});
                                }};
                            }};) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "vero";
                xAmzDate = "nihil";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "ipsa";
            }};            

            CreateAwsLogSourceResponse res = sdk.sdk.createAwsLogSource(req);

            if (res.createAwsLogSourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCustomLogSource

Adds a third-party custom source in Amazon Security Lake, from the Amazon Web Services Region where you want to create a custom source. Security Lake can collect logs and events from third-party custom sources. After creating the appropriate IAM role to invoke Glue crawler, use this API to add a custom source name in Security Lake. This operation creates a partition in the Amazon S3 bucket for Security Lake as the target location for log files from the custom source in addition to an associated Glue table and an Glue crawler.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCustomLogSourceRequest;
import org.openapis.openapi.models.operations.CreateCustomLogSourceRequestBody;
import org.openapis.openapi.models.operations.CreateCustomLogSourceRequestBodyEventClassEnum;
import org.openapis.openapi.models.operations.CreateCustomLogSourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCustomLogSourceRequest req = new CreateCustomLogSourceRequest(                new CreateCustomLogSourceRequestBody("voluptate", CreateCustomLogSourceRequestBodyEventClassEnum.CLOUD_API, "perferendis", "doloremque");) {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "ut";
                xAmzCredential = "maiores";
                xAmzDate = "dicta";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "iusto";
            }};            

            CreateCustomLogSourceResponse res = sdk.sdk.createCustomLogSource(req);

            if (res.createCustomLogSourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDatalake

<p>Initializes an Amazon Security Lake instance with the provided (or default) configuration. You can enable Security Lake in Amazon Web Services Regions with customized settings before enabling log collection in Regions. You can either use the <code>enableAll</code> parameter to specify all Regions or specify the Regions where you want to enable Security Lake. To specify particular Regions, use the <code>Regions</code> parameter and then configure these Regions using the <code>configurations</code> parameter. If you have already enabled Security Lake in a Region when you call this command, the command will update the Region if you provide new configuration parameters. If you have not already enabled Security Lake in the Region when you call this API, it will set up the data lake in the Region with the specified configurations.</p> <p>When you enable Security Lake, it starts ingesting security data after the <code>CreateAwsLogSource</code> call. This includes ingesting security data from sources, storing data, and making data accessible to subscribers. Security Lake also enables all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/what-is-security-lake.html">Amazon Security Lake User Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDatalakeRequest;
import org.openapis.openapi.models.operations.CreateDatalakeRequestBody;
import org.openapis.openapi.models.operations.CreateDatalakeResponse;
import org.openapis.openapi.models.shared.LakeConfigurationRequest;
import org.openapis.openapi.models.shared.RegionEnum;
import org.openapis.openapi.models.shared.RetentionSetting;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StorageClassEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDatalakeRequest req = new CreateDatalakeRequest(                new CreateDatalakeRequestBody() {{
                                configurations = new java.util.HashMap<String, org.openapis.openapi.models.shared.LakeConfigurationRequest>() {{
                                    put("enim", new LakeConfigurationRequest() {{
                                        encryptionKey = "accusamus";
                                        replicationDestinationRegions = new org.openapis.openapi.models.shared.RegionEnum[]{{
                                            add(RegionEnum.AP_SOUTHEAST2),
                                            add(RegionEnum.US_EAST1),
                                        }};
                                        replicationRoleArn = "ipsum";
                                        retentionSettings = new org.openapis.openapi.models.shared.RetentionSetting[]{{
                                            add(new RetentionSetting() {{
                                                retentionPeriod = 565189L;
                                                storageClass = StorageClassEnum.GLACIER_IR;
                                            }}),
                                            add(new RetentionSetting() {{
                                                retentionPeriod = 865103L;
                                                storageClass = StorageClassEnum.ONEZONE_IA;
                                            }}),
                                            add(new RetentionSetting() {{
                                                retentionPeriod = 508969L;
                                                storageClass = StorageClassEnum.GLACIER_IR;
                                            }}),
                                        }};
                                        tagsMap = new java.util.HashMap<String, String>() {{
                                            put("quasi", "repudiandae");
                                            put("sint", "veritatis");
                                            put("itaque", "incidunt");
                                            put("enim", "consequatur");
                                        }};
                                    }});
                                    put("est", new LakeConfigurationRequest() {{
                                        encryptionKey = "quibusdam";
                                        replicationDestinationRegions = new org.openapis.openapi.models.shared.RegionEnum[]{{
                                            add(RegionEnum.EU_WEST1),
                                        }};
                                        replicationRoleArn = "distinctio";
                                        retentionSettings = new org.openapis.openapi.models.shared.RetentionSetting[]{{
                                            add(new RetentionSetting() {{
                                                retentionPeriod = 289406L;
                                                storageClass = StorageClassEnum.ONEZONE_IA;
                                            }}),
                                            add(new RetentionSetting() {{
                                                retentionPeriod = 183191L;
                                                storageClass = StorageClassEnum.INTELLIGENT_TIERING;
                                            }}),
                                            add(new RetentionSetting() {{
                                                retentionPeriod = 586513L;
                                                storageClass = StorageClassEnum.GLACIER_IR;
                                            }}),
                                            add(new RetentionSetting() {{
                                                retentionPeriod = 20107L;
                                                storageClass = StorageClassEnum.ONEZONE_IA;
                                            }}),
                                        }};
                                        tagsMap = new java.util.HashMap<String, String>() {{
                                            put("ipsam", "alias");
                                            put("fugit", "dolorum");
                                            put("excepturi", "tempora");
                                            put("facilis", "tempore");
                                        }};
                                    }});
                                    put("labore", new LakeConfigurationRequest() {{
                                        encryptionKey = "delectus";
                                        replicationDestinationRegions = new org.openapis.openapi.models.shared.RegionEnum[]{{
                                            add(RegionEnum.US_WEST2),
                                            add(RegionEnum.AP_NORTHEAST1),
                                        }};
                                        replicationRoleArn = "sint";
                                        retentionSettings = new org.openapis.openapi.models.shared.RetentionSetting[]{{
                                            add(new RetentionSetting() {{
                                                retentionPeriod = 592042L;
                                                storageClass = StorageClassEnum.EXPIRE;
                                            }}),
                                            add(new RetentionSetting() {{
                                                retentionPeriod = 572252L;
                                                storageClass = StorageClassEnum.GLACIER;
                                            }}),
                                        }};
                                        tagsMap = new java.util.HashMap<String, String>() {{
                                            put("debitis", "a");
                                        }};
                                    }});
                                }};
                                enableAll = false;
                                metaStoreManagerRoleArn = "dolorum";
                                regions = new org.openapis.openapi.models.shared.RegionEnum[]{{
                                    add(RegionEnum.US_EAST2),
                                    add(RegionEnum.AP_NORTHEAST1),
                                }};
                            }};) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "dicta";
                xAmzDate = "magnam";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "ea";
            }};            

            CreateDatalakeResponse res = sdk.sdk.createDatalake(req);

            if (res.createDatalakeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDatalakeAutoEnable

Automatically enables Amazon Security Lake for new member accounts in your organization. Security Lake is not automatically enabled for any existing member accounts in your organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDatalakeAutoEnableRequest;
import org.openapis.openapi.models.operations.CreateDatalakeAutoEnableRequestBody;
import org.openapis.openapi.models.operations.CreateDatalakeAutoEnableResponse;
import org.openapis.openapi.models.shared.AutoEnableNewRegionConfiguration;
import org.openapis.openapi.models.shared.AwsLogSourceTypeEnum;
import org.openapis.openapi.models.shared.RegionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDatalakeAutoEnableRequest req = new CreateDatalakeAutoEnableRequest(                new CreateDatalakeAutoEnableRequestBody(                new org.openapis.openapi.models.shared.AutoEnableNewRegionConfiguration[]{{
                                                add(new AutoEnableNewRegionConfiguration(RegionEnum.EU_CENTRAL1,                 new org.openapis.openapi.models.shared.AwsLogSourceTypeEnum[]{{
                                                                    add(AwsLogSourceTypeEnum.SH_FINDINGS),
                                                                    add(AwsLogSourceTypeEnum.CLOUD_TRAIL),
                                                                    add(AwsLogSourceTypeEnum.CLOUD_TRAIL),
                                                                    add(AwsLogSourceTypeEnum.CLOUD_TRAIL),
                                                                }}) {{
                                                    region = RegionEnum.AP_SOUTHEAST2;
                                                    sources = new org.openapis.openapi.models.shared.AwsLogSourceTypeEnum[]{{
                                                        add(AwsLogSourceTypeEnum.CLOUD_TRAIL),
                                                    }};
                                                }}),
                                                add(new AutoEnableNewRegionConfiguration(RegionEnum.EU_WEST1,                 new org.openapis.openapi.models.shared.AwsLogSourceTypeEnum[]{{
                                                                    add(AwsLogSourceTypeEnum.VPC_FLOW),
                                                                    add(AwsLogSourceTypeEnum.CLOUD_TRAIL),
                                                                }}) {{
                                                    region = RegionEnum.EU_WEST1;
                                                    sources = new org.openapis.openapi.models.shared.AwsLogSourceTypeEnum[]{{
                                                        add(AwsLogSourceTypeEnum.CLOUD_TRAIL),
                                                        add(AwsLogSourceTypeEnum.SH_FINDINGS),
                                                        add(AwsLogSourceTypeEnum.ROUTE53),
                                                    }};
                                                }}),
                                                add(new AutoEnableNewRegionConfiguration(RegionEnum.EU_CENTRAL1,                 new org.openapis.openapi.models.shared.AwsLogSourceTypeEnum[]{{
                                                                    add(AwsLogSourceTypeEnum.CLOUD_TRAIL),
                                                                    add(AwsLogSourceTypeEnum.VPC_FLOW),
                                                                    add(AwsLogSourceTypeEnum.VPC_FLOW),
                                                                }}) {{
                                                    region = RegionEnum.EU_WEST1;
                                                    sources = new org.openapis.openapi.models.shared.AwsLogSourceTypeEnum[]{{
                                                        add(AwsLogSourceTypeEnum.ROUTE53),
                                                        add(AwsLogSourceTypeEnum.VPC_FLOW),
                                                    }};
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "natus";
                xAmzCredential = "nobis";
                xAmzDate = "eum";
                xAmzSecurityToken = "vero";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "architecto";
            }};            

            CreateDatalakeAutoEnableResponse res = sdk.sdk.createDatalakeAutoEnable(req);

            if (res.createDatalakeAutoEnableResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDatalakeDelegatedAdmin

Designates the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDatalakeDelegatedAdminRequest;
import org.openapis.openapi.models.operations.CreateDatalakeDelegatedAdminRequestBody;
import org.openapis.openapi.models.operations.CreateDatalakeDelegatedAdminResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDatalakeDelegatedAdminRequest req = new CreateDatalakeDelegatedAdminRequest(                new CreateDatalakeDelegatedAdminRequestBody("et");) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "provident";
                xAmzDate = "quos";
                xAmzSecurityToken = "sint";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "mollitia";
            }};            

            CreateDatalakeDelegatedAdminResponse res = sdk.sdk.createDatalakeDelegatedAdmin(req);

            if (res.createDatalakeDelegatedAdminResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDatalakeExceptionsSubscription

Creates the specified notification subscription in Amazon Security Lake for the organization you specify.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDatalakeExceptionsSubscriptionRequest;
import org.openapis.openapi.models.operations.CreateDatalakeExceptionsSubscriptionRequestBody;
import org.openapis.openapi.models.operations.CreateDatalakeExceptionsSubscriptionRequestBodySubscriptionProtocolEnum;
import org.openapis.openapi.models.operations.CreateDatalakeExceptionsSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDatalakeExceptionsSubscriptionRequest req = new CreateDatalakeExceptionsSubscriptionRequest(                new CreateDatalakeExceptionsSubscriptionRequestBody("mollitia", CreateDatalakeExceptionsSubscriptionRequestBodySubscriptionProtocolEnum.EMAIL);) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "necessitatibus";
                xAmzDate = "odit";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "iure";
            }};            

            CreateDatalakeExceptionsSubscriptionResponse res = sdk.sdk.createDatalakeExceptionsSubscription(req);

            if (res.createDatalakeExceptionsSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSubscriber

Creates a subscription permission for accounts that are already enabled in Amazon Security Lake. You can create a subscriber with access to data in the current Amazon Web Services Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSubscriberRequest;
import org.openapis.openapi.models.operations.CreateSubscriberRequestBody;
import org.openapis.openapi.models.operations.CreateSubscriberResponse;
import org.openapis.openapi.models.shared.AccessTypeEnum;
import org.openapis.openapi.models.shared.AwsLogSourceTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSubscriberRequest req = new CreateSubscriberRequest(                new CreateSubscriberRequestBody("debitis", "eius",                 new org.openapis.openapi.models.shared.SourceType[]{{
                                                add(new SourceType() {{
                                                    awsSourceType = AwsLogSourceTypeEnum.CLOUD_TRAIL;
                                                    customSourceType = "facilis";
                                                }}),
                                                add(new SourceType() {{
                                                    awsSourceType = AwsLogSourceTypeEnum.VPC_FLOW;
                                                    customSourceType = "architecto";
                                                }}),
                                                add(new SourceType() {{
                                                    awsSourceType = AwsLogSourceTypeEnum.ROUTE53;
                                                    customSourceType = "repudiandae";
                                                }}),
                                                add(new SourceType() {{
                                                    awsSourceType = AwsLogSourceTypeEnum.VPC_FLOW;
                                                    customSourceType = "expedita";
                                                }}),
                                            }}, "nihil") {{
                                accessTypes = new org.openapis.openapi.models.shared.AccessTypeEnum[]{{
                                    add(AccessTypeEnum.S3),
                                    add(AccessTypeEnum.LAKEFORMATION),
                                    add(AccessTypeEnum.S3),
                                    add(AccessTypeEnum.S3),
                                }};
                                subscriberDescription = "accusantium";
                            }};) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "natus";
                xAmzDate = "magni";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "illum";
            }};            

            CreateSubscriberResponse res = sdk.sdk.createSubscriber(req);

            if (res.createSubscriberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSubscriptionNotificationConfiguration

Notifies the subscriber when new data is written to the data lake for the sources that the subscriber consumes in Security Lake. You can create only one subscriber notification per subscriber.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSubscriptionNotificationConfigurationRequest;
import org.openapis.openapi.models.operations.CreateSubscriptionNotificationConfigurationRequestBody;
import org.openapis.openapi.models.operations.CreateSubscriptionNotificationConfigurationRequestBodyHttpsMethodEnum;
import org.openapis.openapi.models.operations.CreateSubscriptionNotificationConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSubscriptionNotificationConfigurationRequest req = new CreateSubscriptionNotificationConfigurationRequest(                new CreateSubscriptionNotificationConfigurationRequestBody() {{
                                createSqs = false;
                                httpsApiKeyName = "maxime";
                                httpsApiKeyValue = "ea";
                                httpsMethod = CreateSubscriptionNotificationConfigurationRequestBodyHttpsMethodEnum.PUT;
                                roleArn = "odit";
                                subscriptionEndpoint = "ea";
                            }};, "accusantium") {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "quidem";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "nam";
            }};            

            CreateSubscriptionNotificationConfigurationResponse res = sdk.sdk.createSubscriptionNotificationConfiguration(req);

            if (res.createSubscriptionNotificationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAwsLogSource

<p>Removes a natively supported Amazon Web Service as an Amazon Security Lake source. When you remove the source, Security Lake stops collecting data from that source, and subscribers can no longer consume new data from the source. Subscribers can still consume data that Security Lake collected from the source before disablement.</p> <p>You can choose any source type in any Amazon Web Services Region for either accounts that are part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, you can supply any combination of the three dimensions to this API. </p> <p>By default, a dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when you do not specify members, the API disables all Security Lake member accounts for sources. Similarly, when you do not specify Regions, Security Lake is disabled for all the Regions where Security Lake is available as a service.</p> <p>When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. For example, if you don't provide specific accounts, the API applies to the entire set of accounts in your organization.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAwsLogSourceRequest;
import org.openapis.openapi.models.operations.DeleteAwsLogSourceRequestBody;
import org.openapis.openapi.models.operations.DeleteAwsLogSourceResponse;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAwsLogSourceRequest req = new DeleteAwsLogSourceRequest(                new DeleteAwsLogSourceRequestBody(                new org.openapis.openapi.models.shared.DimensionEnum[]{{
                                                add(DimensionEnum.SOURCE_TYPE),
                                                add(DimensionEnum.MEMBER),
                                                add(DimensionEnum.REGION),
                                                add(DimensionEnum.MEMBER),
                                            }}) {{
                                disableAllDimensions = new java.util.HashMap<String, java.util.HashMap<String, String[]>>() {{
                                    put("aut", new java.util.HashMap<String, String[]>() {{
                                        put("corporis", new String[]{{
                                            add("libero"),
                                            add("nobis"),
                                            add("dolores"),
                                            add("quis"),
                                        }});
                                        put("totam", new String[]{{
                                            add("eaque"),
                                            add("quis"),
                                        }});
                                        put("nesciunt", new String[]{{
                                            add("perferendis"),
                                        }});
                                        put("dolores", new String[]{{
                                            add("quam"),
                                            add("dolor"),
                                            add("vero"),
                                            add("nostrum"),
                                        }});
                                    }});
                                }};
                                disableSingleDimension = new String[]{{
                                    add("recusandae"),
                                    add("omnis"),
                                    add("facilis"),
                                    add("perspiciatis"),
                                }};
                                disableTwoDimensions = new java.util.HashMap<String, String[]>() {{
                                    put("porro", new String[]{{
                                        add("blanditiis"),
                                    }});
                                }};
                            }};) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "occaecati";
                xAmzDate = "rerum";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "earum";
            }};            

            DeleteAwsLogSourceResponse res = sdk.sdk.deleteAwsLogSource(req);

            if (res.deleteAwsLogSourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCustomLogSource

Removes a custom log source from Amazon Security Lake.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomLogSourceRequest;
import org.openapis.openapi.models.operations.DeleteCustomLogSourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCustomLogSourceRequest req = new DeleteCustomLogSourceRequest("iste") {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "pariatur";
                xAmzDate = "provident";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "delectus";
            }};            

            DeleteCustomLogSourceResponse res = sdk.sdk.deleteCustomLogSource(req);

            if (res.deleteCustomLogSourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDatalake

<p>When you delete Amazon Security Lake from your account, Security Lake is disabled in all Amazon Web Services Regions. Also, this API automatically takes steps to remove the account from Security Lake . </p> <p>This operation disables security data collection from sources, deletes data stored, and stops making data accessible to subscribers. Security Lake also deletes all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. The <code>DeleteDatalake</code> operation does not delete the Amazon S3 bucket, which is owned by your Amazon Web Services account. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/disable-security-lake.html">Amazon Security Lake User Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDatalakeRequest;
import org.openapis.openapi.models.operations.DeleteDatalakeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDatalakeRequest req = new DeleteDatalakeRequest() {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "dolorem";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "ipsum";
            }};            

            DeleteDatalakeResponse res = sdk.sdk.deleteDatalake(req);

            if (res.deleteDatalakeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDatalakeAutoEnable

 <code>DeleteDatalakeAutoEnable</code> removes automatic enablement of configuration settings for new member accounts (but keeps settings for the delegated administrator) from Amazon Security Lake. You must run this API using credentials of the delegated administrator. When you run this API, new member accounts that are added after the organization enables Security Lake won't contribute to the data lake.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDatalakeAutoEnableRequest;
import org.openapis.openapi.models.operations.DeleteDatalakeAutoEnableRequestBody;
import org.openapis.openapi.models.operations.DeleteDatalakeAutoEnableResponse;
import org.openapis.openapi.models.shared.AutoEnableNewRegionConfiguration;
import org.openapis.openapi.models.shared.AwsLogSourceTypeEnum;
import org.openapis.openapi.models.shared.RegionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDatalakeAutoEnableRequest req = new DeleteDatalakeAutoEnableRequest(                new DeleteDatalakeAutoEnableRequestBody(                new org.openapis.openapi.models.shared.AutoEnableNewRegionConfiguration[]{{
                                                add(new AutoEnableNewRegionConfiguration(RegionEnum.US_WEST2,                 new org.openapis.openapi.models.shared.AwsLogSourceTypeEnum[]{{
                                                                    add(AwsLogSourceTypeEnum.VPC_FLOW),
                                                                    add(AwsLogSourceTypeEnum.ROUTE53),
                                                                    add(AwsLogSourceTypeEnum.ROUTE53),
                                                                }}) {{
                                                    region = RegionEnum.AP_NORTHEAST1;
                                                    sources = new org.openapis.openapi.models.shared.AwsLogSourceTypeEnum[]{{
                                                        add(AwsLogSourceTypeEnum.VPC_FLOW),
                                                        add(AwsLogSourceTypeEnum.SH_FINDINGS),
                                                    }};
                                                }}),
                                                add(new AutoEnableNewRegionConfiguration(RegionEnum.AP_SOUTHEAST2,                 new org.openapis.openapi.models.shared.AwsLogSourceTypeEnum[]{{
                                                                    add(AwsLogSourceTypeEnum.SH_FINDINGS),
                                                                    add(AwsLogSourceTypeEnum.VPC_FLOW),
                                                                    add(AwsLogSourceTypeEnum.CLOUD_TRAIL),
                                                                }}) {{
                                                    region = RegionEnum.US_EAST1;
                                                    sources = new org.openapis.openapi.models.shared.AwsLogSourceTypeEnum[]{{
                                                        add(AwsLogSourceTypeEnum.VPC_FLOW),
                                                        add(AwsLogSourceTypeEnum.VPC_FLOW),
                                                    }};
                                                }}),
                                                add(new AutoEnableNewRegionConfiguration(RegionEnum.AP_NORTHEAST1,                 new org.openapis.openapi.models.shared.AwsLogSourceTypeEnum[]{{
                                                                    add(AwsLogSourceTypeEnum.VPC_FLOW),
                                                                    add(AwsLogSourceTypeEnum.VPC_FLOW),
                                                                    add(AwsLogSourceTypeEnum.CLOUD_TRAIL),
                                                                }}) {{
                                                    region = RegionEnum.US_WEST2;
                                                    sources = new org.openapis.openapi.models.shared.AwsLogSourceTypeEnum[]{{
                                                        add(AwsLogSourceTypeEnum.ROUTE53),
                                                        add(AwsLogSourceTypeEnum.SH_FINDINGS),
                                                        add(AwsLogSourceTypeEnum.ROUTE53),
                                                    }};
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "necessitatibus";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "ipsum";
            }};            

            DeleteDatalakeAutoEnableResponse res = sdk.sdk.deleteDatalakeAutoEnable(req);

            if (res.deleteDatalakeAutoEnableResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDatalakeDelegatedAdmin

Deletes the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDatalakeDelegatedAdminRequest;
import org.openapis.openapi.models.operations.DeleteDatalakeDelegatedAdminResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDatalakeDelegatedAdminRequest req = new DeleteDatalakeDelegatedAdminRequest("id") {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "eius";
                xAmzCredential = "aspernatur";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "amet";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "accusamus";
            }};            

            DeleteDatalakeDelegatedAdminResponse res = sdk.sdk.deleteDatalakeDelegatedAdmin(req);

            if (res.deleteDatalakeDelegatedAdminResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDatalakeExceptionsSubscription

Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDatalakeExceptionsSubscriptionRequest;
import org.openapis.openapi.models.operations.DeleteDatalakeExceptionsSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDatalakeExceptionsSubscriptionRequest req = new DeleteDatalakeExceptionsSubscriptionRequest() {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "deserunt";
                xAmzDate = "provident";
                xAmzSecurityToken = "minima";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "totam";
            }};            

            DeleteDatalakeExceptionsSubscriptionResponse res = sdk.sdk.deleteDatalakeExceptionsSubscription(req);

            if (res.deleteDatalakeExceptionsSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSubscriber

Deletes the subscription permission for accounts that are already enabled in Amazon Security Lake. You can delete a subscriber and remove access to data in the current Amazon Web Services Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSubscriberRequest;
import org.openapis.openapi.models.operations.DeleteSubscriberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSubscriberRequest req = new DeleteSubscriberRequest("alias") {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "tempora";
                xAmzDate = "vel";
                xAmzSecurityToken = "quod";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "qui";
            }};            

            DeleteSubscriberResponse res = sdk.sdk.deleteSubscriber(req);

            if (res.deleteSubscriberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSubscriptionNotificationConfiguration

Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSubscriptionNotificationConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteSubscriptionNotificationConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSubscriptionNotificationConfigurationRequest req = new DeleteSubscriptionNotificationConfigurationRequest("a") {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "harum";
                xAmzCredential = "iusto";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "amet";
            }};            

            DeleteSubscriptionNotificationConfigurationResponse res = sdk.sdk.deleteSubscriptionNotificationConfiguration(req);

            if (res.deleteSubscriptionNotificationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDatalake

Retrieves the Amazon Security Lake configuration object for the specified Amazon Web Services account ID. You can use the <code>GetDatalake</code> API to know whether Security Lake is enabled for the current Region. This API does not take input parameters. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDatalakeRequest;
import org.openapis.openapi.models.operations.GetDatalakeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDatalakeRequest req = new GetDatalakeRequest() {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "enim";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "nihil";
            }};            

            GetDatalakeResponse res = sdk.sdk.getDatalake(req);

            if (res.getDatalakeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDatalakeAutoEnable

Retrieves the configuration that will be automatically set up for accounts added to the organization after the organization has onboarded to Amazon Security Lake. This API does not take input parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDatalakeAutoEnableRequest;
import org.openapis.openapi.models.operations.GetDatalakeAutoEnableResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDatalakeAutoEnableRequest req = new GetDatalakeAutoEnableRequest() {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "neque";
                xAmzCredential = "sed";
                xAmzDate = "vel";
                xAmzSecurityToken = "libero";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "deserunt";
            }};            

            GetDatalakeAutoEnableResponse res = sdk.sdk.getDatalakeAutoEnable(req);

            if (res.getDatalakeAutoEnableResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDatalakeExceptionsExpiry

Retrieves the expiration period and time-to-live (TTL) for which the exception message will remain. Exceptions are stored by default, for 2 weeks from when a record was created in Amazon Security Lake. This API does not take input parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDatalakeExceptionsExpiryRequest;
import org.openapis.openapi.models.operations.GetDatalakeExceptionsExpiryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDatalakeExceptionsExpiryRequest req = new GetDatalakeExceptionsExpiryRequest() {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "qui";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "soluta";
            }};            

            GetDatalakeExceptionsExpiryResponse res = sdk.sdk.getDatalakeExceptionsExpiry(req);

            if (res.getDatalakeExceptionsExpiryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDatalakeExceptionsSubscription

Retrieves the details of exception notifications for the account in Amazon Security Lake.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDatalakeExceptionsSubscriptionRequest;
import org.openapis.openapi.models.operations.GetDatalakeExceptionsSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDatalakeExceptionsSubscriptionRequest req = new GetDatalakeExceptionsSubscriptionRequest() {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "totam";
                xAmzCredential = "incidunt";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "facilis";
            }};            

            GetDatalakeExceptionsSubscriptionResponse res = sdk.sdk.getDatalakeExceptionsSubscription(req);

            if (res.getDatalakeExceptionsSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDatalakeStatus

Retrieves a snapshot of the current Region, including whether Amazon Security Lake is enabled for those accounts and which sources Security Lake is collecting data from. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDatalakeStatusRequest;
import org.openapis.openapi.models.operations.GetDatalakeStatusRequestBody;
import org.openapis.openapi.models.operations.GetDatalakeStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDatalakeStatusRequest req = new GetDatalakeStatusRequest(                new GetDatalakeStatusRequestBody() {{
                                accountSet = new String[]{{
                                    add("molestias"),
                                    add("temporibus"),
                                }};
                                maxAccountResults = 183280L;
                                nextToken = "neque";
                            }};) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "magni";
                xAmzCredential = "odio";
                xAmzDate = "sunt";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "hic";
                maxAccountResults = "voluptatem";
                nextToken = "cumque";
            }};            

            GetDatalakeStatusResponse res = sdk.sdk.getDatalakeStatus(req);

            if (res.getDatalakeStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubscriber

Retrieves the subscription information for the specified subscription ID. You can get information about a specific subscriber.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubscriberRequest;
import org.openapis.openapi.models.operations.GetSubscriberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSubscriberRequest req = new GetSubscriberRequest("nobis") {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "ipsum";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "tempore";
            }};            

            GetSubscriberResponse res = sdk.sdk.getSubscriber(req);

            if (res.getSubscriberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDatalakeExceptions

Lists the Amazon Security Lake exceptions that you can use to find the source of problems and fix them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatalakeExceptionsRequest;
import org.openapis.openapi.models.operations.ListDatalakeExceptionsRequestBody;
import org.openapis.openapi.models.operations.ListDatalakeExceptionsResponse;
import org.openapis.openapi.models.shared.RegionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDatalakeExceptionsRequest req = new ListDatalakeExceptionsRequest(                new ListDatalakeExceptionsRequestBody() {{
                                maxFailures = 45614L;
                                nextToken = "delectus";
                                regionSet = new org.openapis.openapi.models.shared.RegionEnum[]{{
                                    add(RegionEnum.EU_CENTRAL1),
                                }};
                            }};) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "dolorum";
                xAmzDate = "architecto";
                xAmzSecurityToken = "quae";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "quas";
                maxFailures = "itaque";
                nextToken = "consequatur";
            }};            

            ListDatalakeExceptionsResponse res = sdk.sdk.listDatalakeExceptions(req);

            if (res.listDatalakeExceptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLogSources

Retrieves the log sources in the current Amazon Web Services Region. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLogSourcesRequest;
import org.openapis.openapi.models.operations.ListLogSourcesRequestBody;
import org.openapis.openapi.models.operations.ListLogSourcesResponse;
import org.openapis.openapi.models.shared.DimensionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLogSourcesRequest req = new ListLogSourcesRequest(                new ListLogSourcesRequestBody() {{
                                inputOrder = new org.openapis.openapi.models.shared.DimensionEnum[]{{
                                    add(DimensionEnum.MEMBER),
                                    add(DimensionEnum.MEMBER),
                                    add(DimensionEnum.REGION),
                                    add(DimensionEnum.MEMBER),
                                }};
                                listAllDimensions = new java.util.HashMap<String, java.util.HashMap<String, String[]>>() {{
                                    put("qui", new java.util.HashMap<String, String[]>() {{
                                        put("laudantium", new String[]{{
                                            add("occaecati"),
                                            add("voluptatibus"),
                                        }});
                                    }});
                                    put("quisquam", new java.util.HashMap<String, String[]>() {{
                                        put("omnis", new String[]{{
                                            add("ipsum"),
                                            add("delectus"),
                                        }});
                                        put("voluptate", new String[]{{
                                            add("vero"),
                                        }});
                                        put("tenetur", new String[]{{
                                            add("hic"),
                                            add("distinctio"),
                                        }});
                                        put("quod", new String[]{{
                                            add("similique"),
                                            add("facilis"),
                                        }});
                                    }});
                                    put("vero", new java.util.HashMap<String, String[]>() {{
                                        put("dolore", new String[]{{
                                            add("illum"),
                                            add("sequi"),
                                            add("natus"),
                                            add("impedit"),
                                        }});
                                        put("aut", new String[]{{
                                            add("exercitationem"),
                                            add("nulla"),
                                            add("fugit"),
                                            add("porro"),
                                        }});
                                    }});
                                }};
                                listSingleDimension = new String[]{{
                                    add("doloribus"),
                                    add("iusto"),
                                    add("eligendi"),
                                    add("ducimus"),
                                }};
                                listTwoDimensions = new java.util.HashMap<String, String[]>() {{
                                    put("officia", new String[]{{
                                        add("ipsam"),
                                        add("ea"),
                                    }});
                                }};
                                maxResults = 136900L;
                                nextToken = "vel";
                            }};) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "ratione";
                xAmzDate = "ex";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "dolor";
                maxResults = "maiores";
                nextToken = "quasi";
            }};            

            ListLogSourcesResponse res = sdk.sdk.listLogSources(req);

            if (res.listLogSourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSubscribers

List all subscribers for the specific Amazon Security Lake account ID. You can retrieve a list of subscriptions associated with a specific organization or Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSubscribersRequest;
import org.openapis.openapi.models.operations.ListSubscribersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSubscribersRequest req = new ListSubscribersRequest() {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "voluptatibus";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "saepe";
                maxResults = 411372L;
                nextToken = "impedit";
            }};            

            ListSubscribersResponse res = sdk.sdk.listSubscribers(req);

            if (res.listSubscribersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDatalake

Specifies where to store your security data and for how long. You can add a rollup Region to consolidate data from multiple Amazon Web Services Regions. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDatalakeRequest;
import org.openapis.openapi.models.operations.UpdateDatalakeRequestBody;
import org.openapis.openapi.models.operations.UpdateDatalakeResponse;
import org.openapis.openapi.models.shared.LakeConfigurationRequest;
import org.openapis.openapi.models.shared.RegionEnum;
import org.openapis.openapi.models.shared.RetentionSetting;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StorageClassEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDatalakeRequest req = new UpdateDatalakeRequest(                new UpdateDatalakeRequestBody(                new java.util.HashMap<String, org.openapis.openapi.models.shared.LakeConfigurationRequest>() {{
                                                put("aliquid", new LakeConfigurationRequest() {{
                                                    encryptionKey = "inventore";
                                                    replicationDestinationRegions = new org.openapis.openapi.models.shared.RegionEnum[]{{
                                                        add(RegionEnum.EU_CENTRAL1),
                                                        add(RegionEnum.AP_NORTHEAST1),
                                                    }};
                                                    replicationRoleArn = "consectetur";
                                                    retentionSettings = new org.openapis.openapi.models.shared.RetentionSetting[]{{
                                                        add(new RetentionSetting() {{
                                                            retentionPeriod = 132487L;
                                                            storageClass = StorageClassEnum.INTELLIGENT_TIERING;
                                                        }}),
                                                        add(new RetentionSetting() {{
                                                            retentionPeriod = 53427L;
                                                            storageClass = StorageClassEnum.EXPIRE;
                                                        }}),
                                                        add(new RetentionSetting() {{
                                                            retentionPeriod = 725595L;
                                                            storageClass = StorageClassEnum.STANDARD_IA;
                                                        }}),
                                                        add(new RetentionSetting() {{
                                                            retentionPeriod = 11427L;
                                                            storageClass = StorageClassEnum.GLACIER_IR;
                                                        }}),
                                                    }};
                                                    tagsMap = new java.util.HashMap<String, String>() {{
                                                        put("aliquam", "fugit");
                                                        put("accusamus", "inventore");
                                                        put("non", "et");
                                                        put("dolorum", "laborum");
                                                    }};
                                                }});
                                                put("placeat", new LakeConfigurationRequest() {{
                                                    encryptionKey = "velit";
                                                    replicationDestinationRegions = new org.openapis.openapi.models.shared.RegionEnum[]{{
                                                        add(RegionEnum.EU_CENTRAL1),
                                                        add(RegionEnum.AP_NORTHEAST1),
                                                    }};
                                                    replicationRoleArn = "quas";
                                                    retentionSettings = new org.openapis.openapi.models.shared.RetentionSetting[]{{
                                                        add(new RetentionSetting() {{
                                                            retentionPeriod = 860552L;
                                                            storageClass = StorageClassEnum.INTELLIGENT_TIERING;
                                                        }}),
                                                        add(new RetentionSetting() {{
                                                            retentionPeriod = 727044L;
                                                            storageClass = StorageClassEnum.STANDARD_IA;
                                                        }}),
                                                        add(new RetentionSetting() {{
                                                            retentionPeriod = 270328L;
                                                            storageClass = StorageClassEnum.ONEZONE_IA;
                                                        }}),
                                                        add(new RetentionSetting() {{
                                                            retentionPeriod = 131482L;
                                                            storageClass = StorageClassEnum.GLACIER;
                                                        }}),
                                                    }};
                                                    tagsMap = new java.util.HashMap<String, String>() {{
                                                        put("molestiae", "magnam");
                                                    }};
                                                }});
                                            }});) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "eius";
                xAmzCredential = "esse";
                xAmzDate = "esse";
                xAmzSecurityToken = "rem";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            UpdateDatalakeResponse res = sdk.sdk.updateDatalake(req);

            if (res.updateDatalakeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDatalakeExceptionsExpiry

Update the expiration period for the exception message to your preferred time, and control the time-to-live (TTL) for the exception message to remain. Exceptions are stored by default for 2 weeks from when a record was created in Amazon Security Lake. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDatalakeExceptionsExpiryRequest;
import org.openapis.openapi.models.operations.UpdateDatalakeExceptionsExpiryRequestBody;
import org.openapis.openapi.models.operations.UpdateDatalakeExceptionsExpiryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDatalakeExceptionsExpiryRequest req = new UpdateDatalakeExceptionsExpiryRequest(                new UpdateDatalakeExceptionsExpiryRequestBody(852635L);) {{
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "eum";
                xAmzCredential = "suscipit";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "eos";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "quisquam";
            }};            

            UpdateDatalakeExceptionsExpiryResponse res = sdk.sdk.updateDatalakeExceptionsExpiry(req);

            if (res.updateDatalakeExceptionsExpiryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDatalakeExceptionsSubscription

Updates the specified notification subscription in Amazon Security Lake for the organization you specify.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDatalakeExceptionsSubscriptionRequest;
import org.openapis.openapi.models.operations.UpdateDatalakeExceptionsSubscriptionRequestBody;
import org.openapis.openapi.models.operations.UpdateDatalakeExceptionsSubscriptionRequestBodySubscriptionProtocolEnum;
import org.openapis.openapi.models.operations.UpdateDatalakeExceptionsSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDatalakeExceptionsSubscriptionRequest req = new UpdateDatalakeExceptionsSubscriptionRequest(                new UpdateDatalakeExceptionsSubscriptionRequestBody("ipsa", UpdateDatalakeExceptionsSubscriptionRequestBodySubscriptionProtocolEnum.SQS);) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "neque";
                xAmzCredential = "quo";
                xAmzDate = "illum";
                xAmzSecurityToken = "quo";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "eius";
            }};            

            UpdateDatalakeExceptionsSubscriptionResponse res = sdk.sdk.updateDatalakeExceptionsSubscription(req);

            if (res.updateDatalakeExceptionsSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSubscriber

Updates an existing subscription for the given Amazon Security Lake account ID. You can update a subscriber by changing the sources that the subscriber consumes data from. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSubscriberRequest;
import org.openapis.openapi.models.operations.UpdateSubscriberRequestBody;
import org.openapis.openapi.models.operations.UpdateSubscriberResponse;
import org.openapis.openapi.models.shared.AwsLogSourceTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSubscriberRequest req = new UpdateSubscriberRequest(                new UpdateSubscriberRequestBody(                new org.openapis.openapi.models.shared.SourceType[]{{
                                                add(new SourceType() {{
                                                    awsSourceType = AwsLogSourceTypeEnum.ROUTE53;
                                                    customSourceType = "cupiditate";
                                                }}),
                                                add(new SourceType() {{
                                                    awsSourceType = AwsLogSourceTypeEnum.ROUTE53;
                                                    customSourceType = "tempora";
                                                }}),
                                            }}) {{
                                externalId = "debitis";
                                subscriberDescription = "ipsam";
                                subscriberName = "aspernatur";
                            }};, "sequi") {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "esse";
                xAmzCredential = "recusandae";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "dignissimos";
            }};            

            UpdateSubscriberResponse res = sdk.sdk.updateSubscriber(req);

            if (res.updateSubscriberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSubscriptionNotificationConfiguration

Updates an existing notification method for the subscription (SQS or HTTPs endpoint) or switches the notification subscription endpoint for a subscriber.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSubscriptionNotificationConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateSubscriptionNotificationConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateSubscriptionNotificationConfigurationRequestBodyHttpsMethodEnum;
import org.openapis.openapi.models.operations.UpdateSubscriptionNotificationConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSubscriptionNotificationConfigurationRequest req = new UpdateSubscriptionNotificationConfigurationRequest(                new UpdateSubscriptionNotificationConfigurationRequestBody() {{
                                createSqs = false;
                                httpsApiKeyName = "nihil";
                                httpsApiKeyValue = "totam";
                                httpsMethod = UpdateSubscriptionNotificationConfigurationRequestBodyHttpsMethodEnum.PUT;
                                roleArn = "aliquam";
                                subscriptionEndpoint = "odio";
                            }};, "occaecati") {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "dolores";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "porro";
            }};            

            UpdateSubscriptionNotificationConfigurationResponse res = sdk.sdk.updateSubscriptionNotificationConfiguration(req);

            if (res.updateSubscriptionNotificationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
