# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAwsLogSourceHeaders;
import org.openapis.openapi.models.operations.CreateAwsLogSourceRequestBody;
import org.openapis.openapi.models.operations.CreateAwsLogSourceRequest;
import org.openapis.openapi.models.operations.CreateAwsLogSourceResponse;
import org.openapis.openapi.models.shared.DimensionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateAwsLogSourceRequest req = new CreateAwsLogSourceRequest() {{
                headers = new CreateAwsLogSourceHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateAwsLogSourceRequestBody() {{
                    enableAllDimensions = new java.util.HashMap<String, java.util.HashMap<String, String[]>>() {{
                        put("vel", new java.util.HashMap<String, String[]>() {{
                            put("deserunt", new String[]{{
                                add("iure"),
                                add("magnam"),
                            }});
                            put("debitis", new String[]{{
                                add("delectus"),
                            }});
                            put("tempora", new String[]{{
                                add("molestiae"),
                                add("minus"),
                            }});
                        }});
                        put("placeat", new java.util.HashMap<String, String[]>() {{
                            put("iusto", new String[]{{
                                add("nisi"),
                                add("recusandae"),
                                add("temporibus"),
                            }});
                            put("ab", new String[]{{
                                add("veritatis"),
                                add("deserunt"),
                            }});
                            put("perferendis", new String[]{{
                                add("repellendus"),
                                add("sapiente"),
                            }});
                        }});
                        put("quo", new java.util.HashMap<String, String[]>() {{
                            put("at", new String[]{{
                                add("maiores"),
                                add("molestiae"),
                                add("quod"),
                                add("quod"),
                            }});
                        }});
                        put("esse", new java.util.HashMap<String, String[]>() {{
                            put("porro", new String[]{{
                                add("dicta"),
                                add("nam"),
                                add("officia"),
                            }});
                            put("occaecati", new String[]{{
                                add("deleniti"),
                            }});
                            put("hic", new String[]{{
                                add("totam"),
                                add("beatae"),
                                add("commodi"),
                                add("molestiae"),
                            }});
                        }});
                    }};
                    enableSingleDimension = new String[]{{
                        add("qui"),
                        add("impedit"),
                    }};
                    enableTwoDimensions = new java.util.HashMap<String, String[]>() {{
                        put("esse", new String[]{{
                            add("excepturi"),
                        }});
                        put("aspernatur", new String[]{{
                            add("ad"),
                        }});
                        put("natus", new String[]{{
                            add("iste"),
                        }});
                    }};
                    inputOrder = new org.openapis.openapi.models.shared.DimensionEnum[]{{
                        add("SOURCE_TYPE"),
                    }};
                }};
            }};            

            CreateAwsLogSourceResponse res = sdk.createAwsLogSource(req);

            if (res.createAwsLogSourceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createAwsLogSource` - <p>Adds a natively supported Amazon Web Service as an Amazon Security Lake source. Enables source types for member accounts in required Amazon Web Services Regions, based on the parameters you specify. You can choose any source type in any Region for either accounts that are part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, you can supply any combination of the three dimensions to this API. </p> <p>By default, a dimension refers to the entire set. When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when you do not specify members, the API enables all Security Lake member accounts for all sources. Similarly, when you do not specify Regions, Security Lake is enabled for all the Regions where Security Lake is available as a service.</p> <p>You can use this API only to enable natively supported Amazon Web Services as a source. Use <code>CreateCustomLogSource</code> to enable data collection from a custom source. </p>
* `createCustomLogSource` - Adds a third-party custom source in Amazon Security Lake, from the Amazon Web Services Region where you want to create a custom source. Security Lake can collect logs and events from third-party custom sources. After creating the appropriate IAM role to invoke Glue crawler, use this API to add a custom source name in Security Lake. This operation creates a partition in the Amazon S3 bucket for Security Lake as the target location for log files from the custom source in addition to an associated Glue table and an Glue crawler.
* `createDatalake` - <p>Initializes an Amazon Security Lake instance with the provided (or default) configuration. You can enable Security Lake in Amazon Web Services Regions with customized settings before enabling log collection in Regions. You can either use the <code>enableAll</code> parameter to specify all Regions or specify the Regions where you want to enable Security Lake. To specify particular Regions, use the <code>Regions</code> parameter and then configure these Regions using the <code>configurations</code> parameter. If you have already enabled Security Lake in a Region when you call this command, the command will update the Region if you provide new configuration parameters. If you have not already enabled Security Lake in the Region when you call this API, it will set up the data lake in the Region with the specified configurations.</p> <p>When you enable Security Lake, it starts ingesting security data after the <code>CreateAwsLogSource</code> call. This includes ingesting security data from sources, storing data, and making data accessible to subscribers. Security Lake also enables all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/what-is-security-lake.html">Amazon Security Lake User Guide</a>.</p>
* `createDatalakeAutoEnable` - Automatically enables Amazon Security Lake for new member accounts in your organization. Security Lake is not automatically enabled for any existing member accounts in your organization.
* `createDatalakeDelegatedAdmin` - Designates the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.
* `createDatalakeExceptionsSubscription` - Creates the specified notification subscription in Amazon Security Lake for the organization you specify.
* `createSubscriber` - Creates a subscription permission for accounts that are already enabled in Amazon Security Lake. You can create a subscriber with access to data in the current Amazon Web Services Region.
* `createSubscriptionNotificationConfiguration` - Notifies the subscriber when new data is written to the data lake for the sources that the subscriber consumes in Security Lake. You can create only one subscriber notification per subscriber.
* `deleteAwsLogSource` - <p>Removes a natively supported Amazon Web Service as an Amazon Security Lake source. When you remove the source, Security Lake stops collecting data from that source, and subscribers can no longer consume new data from the source. Subscribers can still consume data that Security Lake collected from the source before disablement.</p> <p>You can choose any source type in any Amazon Web Services Region for either accounts that are part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, you can supply any combination of the three dimensions to this API. </p> <p>By default, a dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when you do not specify members, the API disables all Security Lake member accounts for sources. Similarly, when you do not specify Regions, Security Lake is disabled for all the Regions where Security Lake is available as a service.</p> <p>When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. For example, if you don't provide specific accounts, the API applies to the entire set of accounts in your organization.</p>
* `deleteCustomLogSource` - Removes a custom log source from Amazon Security Lake.
* `deleteDatalake` - <p>When you delete Amazon Security Lake from your account, Security Lake is disabled in all Amazon Web Services Regions. Also, this API automatically takes steps to remove the account from Security Lake . </p> <p>This operation disables security data collection from sources, deletes data stored, and stops making data accessible to subscribers. Security Lake also deletes all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. The <code>DeleteDatalake</code> operation does not delete the Amazon S3 bucket, which is owned by your Amazon Web Services account. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/disable-security-lake.html">Amazon Security Lake User Guide</a>.</p>
* `deleteDatalakeAutoEnable` -  <code>DeleteDatalakeAutoEnable</code> removes automatic enablement of configuration settings for new member accounts (but keeps settings for the delegated administrator) from Amazon Security Lake. You must run this API using credentials of the delegated administrator. When you run this API, new member accounts that are added after the organization enables Security Lake won't contribute to the data lake.
* `deleteDatalakeDelegatedAdmin` - Deletes the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.
* `deleteDatalakeExceptionsSubscription` - Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.
* `deleteSubscriber` - Deletes the subscription permission for accounts that are already enabled in Amazon Security Lake. You can delete a subscriber and remove access to data in the current Amazon Web Services Region.
* `deleteSubscriptionNotificationConfiguration` - Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.
* `getDatalake` - Retrieves the Amazon Security Lake configuration object for the specified Amazon Web Services account ID. You can use the <code>GetDatalake</code> API to know whether Security Lake is enabled for the current Region. This API does not take input parameters. 
* `getDatalakeAutoEnable` - Retrieves the configuration that will be automatically set up for accounts added to the organization after the organization has onboarded to Amazon Security Lake. This API does not take input parameters.
* `getDatalakeExceptionsExpiry` - Retrieves the expiration period and time-to-live (TTL) for which the exception message will remain. Exceptions are stored by default, for 2 weeks from when a record was created in Amazon Security Lake. This API does not take input parameters.
* `getDatalakeExceptionsSubscription` - Retrieves the details of exception notifications for the account in Amazon Security Lake.
* `getDatalakeStatus` - Retrieves a snapshot of the current Region, including whether Amazon Security Lake is enabled for those accounts and which sources Security Lake is collecting data from. 
* `getSubscriber` - Retrieves the subscription information for the specified subscription ID. You can get information about a specific subscriber.
* `listDatalakeExceptions` - Lists the Amazon Security Lake exceptions that you can use to find the source of problems and fix them.
* `listLogSources` - Retrieves the log sources in the current Amazon Web Services Region. 
* `listSubscribers` - List all subscribers for the specific Amazon Security Lake account ID. You can retrieve a list of subscriptions associated with a specific organization or Amazon Web Services account.
* `updateDatalake` - Specifies where to store your security data and for how long. You can add a rollup Region to consolidate data from multiple Amazon Web Services Regions. 
* `updateDatalakeExceptionsExpiry` - Update the expiration period for the exception message to your preferred time, and control the time-to-live (TTL) for the exception message to remain. Exceptions are stored by default for 2 weeks from when a record was created in Amazon Security Lake. 
* `updateDatalakeExceptionsSubscription` - Updates the specified notification subscription in Amazon Security Lake for the organization you specify.
* `updateSubscriber` - Updates an existing subscription for the given Amazon Security Lake account ID. You can update a subscriber by changing the sources that the subscriber consumes data from. 
* `updateSubscriptionNotificationConfiguration` - Updates an existing notification method for the subscription (SQS or HTTPs endpoint) or switches the notification subscription endpoint for a subscriber.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
