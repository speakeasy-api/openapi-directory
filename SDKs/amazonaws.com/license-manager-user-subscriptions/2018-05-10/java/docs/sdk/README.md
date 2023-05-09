# SDK

## Overview

With License Manager, you can create user-based subscriptions to utilize licensed software with a per user subscription fee on Amazon EC2 instances.

Amazon Web Services documentation
<https://docs.aws.amazon.com/license-manager-user-subscriptions/>
### Available Operations

* [associateUser](#associateuser) - <p>Associates the user to an EC2 instance to utilize user-based subscriptions.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>
* [deregisterIdentityProvider](#deregisteridentityprovider) - Deregisters the identity provider from providing user-based subscriptions.
* [disassociateUser](#disassociateuser) - Disassociates the user from an EC2 instance providing user-based subscriptions.
* [listIdentityProviders](#listidentityproviders) - Lists the identity providers for user-based subscriptions.
* [listInstances](#listinstances) - Lists the EC2 instances providing user-based subscriptions.
* [listProductSubscriptions](#listproductsubscriptions) - Lists the user-based subscription products available from an identity provider.
* [listUserAssociations](#listuserassociations) - Lists user associations for an identity provider.
* [registerIdentityProvider](#registeridentityprovider) - Registers an identity provider for user-based subscriptions.
* [startProductSubscription](#startproductsubscription) - <p>Starts a product subscription for a user with the specified identity provider.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>
* [stopProductSubscription](#stopproductsubscription) - Stops a product subscription for a user with the specified identity provider.
* [updateIdentityProviderSettings](#updateidentityprovidersettings) - Updates additional product configuration settings for the registered identity provider.

## associateUser

<p>Associates the user to an EC2 instance to utilize user-based subscriptions.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateUserRequest;
import org.openapis.openapi.models.operations.AssociateUserRequestBody;
import org.openapis.openapi.models.operations.AssociateUserRequestBodyIdentityProvider;
import org.openapis.openapi.models.operations.AssociateUserResponse;
import org.openapis.openapi.models.shared.ActiveDirectoryIdentityProvider;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateUserRequest req = new AssociateUserRequest(                new AssociateUserRequestBody(                new AssociateUserRequestBodyIdentityProvider() {{
                                                activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider() {{
                                                    directoryId = "magnam";
                                                }};;
                                            }};, "debitis", "ipsa") {{
                                domain = "delectus";
                            }};) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            AssociateUserResponse res = sdk.sdk.associateUser(req);

            if (res.associateUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterIdentityProvider

Deregisters the identity provider from providing user-based subscriptions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterIdentityProviderRequest;
import org.openapis.openapi.models.operations.DeregisterIdentityProviderRequestBody;
import org.openapis.openapi.models.operations.DeregisterIdentityProviderRequestBodyIdentityProvider;
import org.openapis.openapi.models.operations.DeregisterIdentityProviderResponse;
import org.openapis.openapi.models.shared.ActiveDirectoryIdentityProvider;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterIdentityProviderRequest req = new DeregisterIdentityProviderRequest(                new DeregisterIdentityProviderRequestBody(                new DeregisterIdentityProviderRequestBodyIdentityProvider() {{
                                                activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider() {{
                                                    directoryId = "nisi";
                                                }};;
                                            }};, "recusandae");) {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "ab";
                xAmzCredential = "quis";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ipsam";
            }};            

            DeregisterIdentityProviderResponse res = sdk.sdk.deregisterIdentityProvider(req);

            if (res.deregisterIdentityProviderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateUser

Disassociates the user from an EC2 instance providing user-based subscriptions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateUserRequest;
import org.openapis.openapi.models.operations.DisassociateUserRequestBody;
import org.openapis.openapi.models.operations.DisassociateUserRequestBodyIdentityProvider;
import org.openapis.openapi.models.operations.DisassociateUserResponse;
import org.openapis.openapi.models.shared.ActiveDirectoryIdentityProvider;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateUserRequest req = new DisassociateUserRequest(                new DisassociateUserRequestBody(                new DisassociateUserRequestBodyIdentityProvider() {{
                                                activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider() {{
                                                    directoryId = "sapiente";
                                                }};;
                                            }};, "quo", "odit") {{
                                domain = "at";
                            }};) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "molestiae";
                xAmzDate = "quod";
                xAmzSecurityToken = "quod";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "totam";
            }};            

            DisassociateUserResponse res = sdk.sdk.disassociateUser(req);

            if (res.disassociateUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIdentityProviders

Lists the identity providers for user-based subscriptions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIdentityProvidersRequest;
import org.openapis.openapi.models.operations.ListIdentityProvidersRequestBody;
import org.openapis.openapi.models.operations.ListIdentityProvidersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListIdentityProvidersRequest req = new ListIdentityProvidersRequest(                new ListIdentityProvidersRequestBody() {{
                                maxResults = 678880L;
                                nextToken = "dicta";
                            }};) {{
                maxResults = "nam";
                nextToken = "officia";
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "deleniti";
                xAmzDate = "hic";
                xAmzSecurityToken = "optio";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "beatae";
            }};            

            ListIdentityProvidersResponse res = sdk.sdk.listIdentityProviders(req);

            if (res.listIdentityProvidersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInstances

Lists the EC2 instances providing user-based subscriptions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInstancesRequest;
import org.openapis.openapi.models.operations.ListInstancesRequestBody;
import org.openapis.openapi.models.operations.ListInstancesResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListInstancesRequest req = new ListInstancesRequest(                new ListInstancesRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        attribute = "modi";
                                        operation = "qui";
                                        value = "impedit";
                                    }}),
                                    add(new Filter() {{
                                        attribute = "cum";
                                        operation = "esse";
                                        value = "ipsum";
                                    }}),
                                }};
                                maxResults = 568434L;
                                nextToken = "aspernatur";
                            }};) {{
                maxResults = "perferendis";
                nextToken = "ad";
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            ListInstancesResponse res = sdk.sdk.listInstances(req);

            if (res.listInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProductSubscriptions

Lists the user-based subscription products available from an identity provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProductSubscriptionsRequest;
import org.openapis.openapi.models.operations.ListProductSubscriptionsRequestBody;
import org.openapis.openapi.models.operations.ListProductSubscriptionsRequestBodyIdentityProvider;
import org.openapis.openapi.models.operations.ListProductSubscriptionsResponse;
import org.openapis.openapi.models.shared.ActiveDirectoryIdentityProvider;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProductSubscriptionsRequest req = new ListProductSubscriptionsRequest(                new ListProductSubscriptionsRequestBody(                new ListProductSubscriptionsRequestBodyIdentityProvider() {{
                                                activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider() {{
                                                    directoryId = "fuga";
                                                }};;
                                            }};, "in") {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        attribute = "iste";
                                        operation = "iure";
                                        value = "saepe";
                                    }}),
                                    add(new Filter() {{
                                        attribute = "quidem";
                                        operation = "architecto";
                                        value = "ipsa";
                                    }}),
                                }};
                                maxResults = 969810L;
                                nextToken = "est";
                            }};) {{
                maxResults = "mollitia";
                nextToken = "laborum";
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "corporis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "omnis";
            }};            

            ListProductSubscriptionsResponse res = sdk.sdk.listProductSubscriptions(req);

            if (res.listProductSubscriptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUserAssociations

Lists user associations for an identity provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUserAssociationsRequest;
import org.openapis.openapi.models.operations.ListUserAssociationsRequestBody;
import org.openapis.openapi.models.operations.ListUserAssociationsRequestBodyIdentityProvider;
import org.openapis.openapi.models.operations.ListUserAssociationsResponse;
import org.openapis.openapi.models.shared.ActiveDirectoryIdentityProvider;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListUserAssociationsRequest req = new ListUserAssociationsRequest(                new ListUserAssociationsRequestBody(                new ListUserAssociationsRequestBodyIdentityProvider() {{
                                                activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider() {{
                                                    directoryId = "minima";
                                                }};;
                                            }};, "excepturi") {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        attribute = "iure";
                                        operation = "culpa";
                                        value = "doloribus";
                                    }}),
                                }};
                                maxResults = 958950L;
                                nextToken = "architecto";
                            }};) {{
                maxResults = "mollitia";
                nextToken = "dolorem";
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "repellat";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "commodi";
            }};            

            ListUserAssociationsResponse res = sdk.sdk.listUserAssociations(req);

            if (res.listUserAssociationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerIdentityProvider

Registers an identity provider for user-based subscriptions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterIdentityProviderRequest;
import org.openapis.openapi.models.operations.RegisterIdentityProviderRequestBody;
import org.openapis.openapi.models.operations.RegisterIdentityProviderRequestBodyIdentityProvider;
import org.openapis.openapi.models.operations.RegisterIdentityProviderRequestBodySettings;
import org.openapis.openapi.models.operations.RegisterIdentityProviderResponse;
import org.openapis.openapi.models.shared.ActiveDirectoryIdentityProvider;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterIdentityProviderRequest req = new RegisterIdentityProviderRequest(                new RegisterIdentityProviderRequestBody(                new RegisterIdentityProviderRequestBodyIdentityProvider() {{
                                                activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider() {{
                                                    directoryId = "molestiae";
                                                }};;
                                            }};, "velit") {{
                                settings = new RegisterIdentityProviderRequestBodySettings() {{
                                    securityGroupId = "error";
                                    subnets = new String[]{{
                                        add("quis"),
                                    }};
                                }};;
                            }};) {{
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "animi";
                xAmzDate = "enim";
                xAmzSecurityToken = "odit";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "sequi";
            }};            

            RegisterIdentityProviderResponse res = sdk.sdk.registerIdentityProvider(req);

            if (res.registerIdentityProviderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startProductSubscription

<p>Starts a product subscription for a user with the specified identity provider.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartProductSubscriptionRequest;
import org.openapis.openapi.models.operations.StartProductSubscriptionRequestBody;
import org.openapis.openapi.models.operations.StartProductSubscriptionRequestBodyIdentityProvider;
import org.openapis.openapi.models.operations.StartProductSubscriptionResponse;
import org.openapis.openapi.models.shared.ActiveDirectoryIdentityProvider;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartProductSubscriptionRequest req = new StartProductSubscriptionRequest(                new StartProductSubscriptionRequestBody(                new StartProductSubscriptionRequestBodyIdentityProvider() {{
                                                activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider() {{
                                                    directoryId = "ipsam";
                                                }};;
                                            }};, "id", "possimus") {{
                                domain = "aut";
                            }};) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "error";
                xAmzCredential = "temporibus";
                xAmzDate = "laborum";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            StartProductSubscriptionResponse res = sdk.sdk.startProductSubscription(req);

            if (res.startProductSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopProductSubscription

Stops a product subscription for a user with the specified identity provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopProductSubscriptionRequest;
import org.openapis.openapi.models.operations.StopProductSubscriptionRequestBody;
import org.openapis.openapi.models.operations.StopProductSubscriptionRequestBodyIdentityProvider;
import org.openapis.openapi.models.operations.StopProductSubscriptionResponse;
import org.openapis.openapi.models.shared.ActiveDirectoryIdentityProvider;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopProductSubscriptionRequest req = new StopProductSubscriptionRequest(                new StopProductSubscriptionRequestBody(                new StopProductSubscriptionRequestBodyIdentityProvider() {{
                                                activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider() {{
                                                    directoryId = "nihil";
                                                }};;
                                            }};, "praesentium", "voluptatibus") {{
                                domain = "ipsa";
                            }};) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "cum";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "ut";
            }};            

            StopProductSubscriptionResponse res = sdk.sdk.stopProductSubscription(req);

            if (res.stopProductSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateIdentityProviderSettings

Updates additional product configuration settings for the registered identity provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateIdentityProviderSettingsRequest;
import org.openapis.openapi.models.operations.UpdateIdentityProviderSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateIdentityProviderSettingsRequestBodyIdentityProvider;
import org.openapis.openapi.models.operations.UpdateIdentityProviderSettingsRequestBodyUpdateSettings;
import org.openapis.openapi.models.operations.UpdateIdentityProviderSettingsResponse;
import org.openapis.openapi.models.shared.ActiveDirectoryIdentityProvider;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateIdentityProviderSettingsRequest req = new UpdateIdentityProviderSettingsRequest(                new UpdateIdentityProviderSettingsRequestBody(                new UpdateIdentityProviderSettingsRequestBodyIdentityProvider() {{
                                                activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider() {{
                                                    directoryId = "dicta";
                                                }};;
                                            }};, "corporis",                 new UpdateIdentityProviderSettingsRequestBodyUpdateSettings() {{
                                                addSubnets = new String[]{{
                                                    add("iusto"),
                                                    add("dicta"),
                                                }};
                                                removeSubnets = new String[]{{
                                                    add("enim"),
                                                    add("accusamus"),
                                                    add("commodi"),
                                                }};
                                                securityGroupId = "repudiandae";
                                            }};);) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "quidem";
                xAmzDate = "molestias";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "modi";
            }};            

            UpdateIdentityProviderSettingsResponse res = sdk.sdk.updateIdentityProviderSettings(req);

            if (res.updateIdentityProviderSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
