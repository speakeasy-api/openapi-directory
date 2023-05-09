# SDK

## Overview

With License Manager, you can discover and track your commercial Linux subscriptions on running Amazon EC2 instances.

Amazon Web Services documentation
<https://docs.aws.amazon.com/license-manager-linux-subscriptions/>
### Available Operations

* [getServiceSettings](#getservicesettings) - Lists the Linux subscriptions service settings.
* [listLinuxSubscriptionInstances](#listlinuxsubscriptioninstances) - Lists the running Amazon EC2 instances that were discovered with commercial Linux subscriptions.
* [listLinuxSubscriptions](#listlinuxsubscriptions) - Lists the Linux subscriptions that have been discovered. If you have linked your organization, the returned results will include data aggregated across your accounts in Organizations.
* [updateServiceSettings](#updateservicesettings) - Updates the service settings for Linux subscriptions.

## getServiceSettings

Lists the Linux subscriptions service settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceSettingsRequest;
import org.openapis.openapi.models.operations.GetServiceSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceSettingsRequest req = new GetServiceSettingsRequest() {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "suscipit";
                xAmzDate = "iure";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "ipsa";
            }};            

            GetServiceSettingsResponse res = sdk.sdk.getServiceSettings(req);

            if (res.getServiceSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLinuxSubscriptionInstances

Lists the running Amazon EC2 instances that were discovered with commercial Linux subscriptions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLinuxSubscriptionInstancesRequest;
import org.openapis.openapi.models.operations.ListLinuxSubscriptionInstancesRequestBody;
import org.openapis.openapi.models.operations.ListLinuxSubscriptionInstancesResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.OperatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLinuxSubscriptionInstancesRequest req = new ListLinuxSubscriptionInstancesRequest(                new ListLinuxSubscriptionInstancesRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Minnie Schiller";
                                        operator = OperatorEnum.NOT_EQUAL;
                                        values = new String[]{{
                                            add("nisi"),
                                            add("recusandae"),
                                            add("temporibus"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Erica Bogisich III";
                                        operator = OperatorEnum.CONTAINS;
                                        values = new String[]{{
                                            add("quo"),
                                            add("odit"),
                                            add("at"),
                                            add("at"),
                                        }};
                                    }}),
                                }};
                                maxResults = 978619L;
                                nextToken = "molestiae";
                            }};) {{
                maxResults = "quod";
                nextToken = "quod";
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "totam";
                xAmzCredential = "porro";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "officia";
            }};            

            ListLinuxSubscriptionInstancesResponse res = sdk.sdk.listLinuxSubscriptionInstances(req);

            if (res.listLinuxSubscriptionInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLinuxSubscriptions

Lists the Linux subscriptions that have been discovered. If you have linked your organization, the returned results will include data aggregated across your accounts in Organizations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLinuxSubscriptionsRequest;
import org.openapis.openapi.models.operations.ListLinuxSubscriptionsRequestBody;
import org.openapis.openapi.models.operations.ListLinuxSubscriptionsResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.OperatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLinuxSubscriptionsRequest req = new ListLinuxSubscriptionsRequest(                new ListLinuxSubscriptionsRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Irvin Rosenbaum III";
                                        operator = OperatorEnum.NOT_EQUAL;
                                        values = new String[]{{
                                            add("qui"),
                                            add("impedit"),
                                        }};
                                    }}),
                                }};
                                maxResults = 736918L;
                                nextToken = "esse";
                            }};) {{
                maxResults = "ipsum";
                nextToken = "excepturi";
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ad";
                xAmzDate = "natus";
                xAmzSecurityToken = "sed";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolor";
            }};            

            ListLinuxSubscriptionsResponse res = sdk.sdk.listLinuxSubscriptions(req);

            if (res.listLinuxSubscriptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceSettings

Updates the service settings for Linux subscriptions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceSettingsRequest;
import org.openapis.openapi.models.operations.UpdateServiceSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateServiceSettingsRequestBodyLinuxSubscriptionsDiscoveryEnum;
import org.openapis.openapi.models.operations.UpdateServiceSettingsRequestBodyLinuxSubscriptionsDiscoverySettings;
import org.openapis.openapi.models.operations.UpdateServiceSettingsResponse;
import org.openapis.openapi.models.shared.OrganizationIntegrationEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServiceSettingsRequest req = new UpdateServiceSettingsRequest(                new UpdateServiceSettingsRequestBody(UpdateServiceSettingsRequestBodyLinuxSubscriptionsDiscoveryEnum.ENABLED,                 new UpdateServiceSettingsRequestBodyLinuxSubscriptionsDiscoverySettings() {{
                                                organizationIntegration = OrganizationIntegrationEnum.DISABLED;
                                                sourceRegions = new String[]{{
                                                    add("fuga"),
                                                    add("in"),
                                                    add("corporis"),
                                                    add("iste"),
                                                }};
                                            }};) {{
                                allowUpdate = false;
                            }};) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "quidem";
                xAmzDate = "architecto";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "est";
            }};            

            UpdateServiceSettingsResponse res = sdk.sdk.updateServiceSettings(req);

            if (res.updateServiceSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
