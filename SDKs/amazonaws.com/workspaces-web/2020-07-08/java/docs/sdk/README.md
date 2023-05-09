# SDK

## Overview

WorkSpaces Web is a low cost, fully managed WorkSpace built specifically to facilitate secure, web-based workloads. WorkSpaces Web makes it easy for customers to safely provide their employees with access to internal websites and SaaS web applications without the administrative burden of appliances or specialized client software. WorkSpaces Web provides simple policy tools tailored for user interactions, while offloading common tasks like capacity management, scaling, and maintaining browser images.

Amazon Web Services documentation
<https://docs.aws.amazon.com/workspaces-web/>
### Available Operations

* [associateBrowserSettings](#associatebrowsersettings) - Associates a browser settings resource with a web portal.
* [associateNetworkSettings](#associatenetworksettings) - Associates a network settings resource with a web portal.
* [associateTrustStore](#associatetruststore) - Associates a trust store with a web portal.
* [associateUserAccessLoggingSettings](#associateuseraccessloggingsettings) - Associates a user access logging settings resource with a web portal.
* [associateUserSettings](#associateusersettings) - Associates a user settings resource with a web portal.
* [createBrowserSettings](#createbrowsersettings) - Creates a browser settings resource that can be associated with a web portal. Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal. 
* [createIdentityProvider](#createidentityprovider) - Creates an identity provider resource that is then associated with a web portal.
* [createNetworkSettings](#createnetworksettings) - Creates a network settings resource that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC. 
* [createPortal](#createportal) - Creates a web portal.
* [createTrustStore](#createtruststore) - Creates a trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store. 
* [createUserAccessLoggingSettings](#createuseraccessloggingsettings) - Creates a user access logging settings resource that can be associated with a web portal.
* [createUserSettings](#createusersettings) - Creates a user settings resource that can be associated with a web portal. Once associated with a web portal, user settings control how users can transfer data between a streaming session and the their local devices. 
* [deleteBrowserSettings](#deletebrowsersettings) - Deletes browser settings.
* [deleteIdentityProvider](#deleteidentityprovider) - Deletes the identity provider.
* [deleteNetworkSettings](#deletenetworksettings) - Deletes network settings.
* [deletePortal](#deleteportal) - Deletes a web portal.
* [deleteTrustStore](#deletetruststore) - Deletes the trust store.
* [deleteUserAccessLoggingSettings](#deleteuseraccessloggingsettings) - Deletes user access logging settings.
* [deleteUserSettings](#deleteusersettings) - Deletes user settings.
* [disassociateBrowserSettings](#disassociatebrowsersettings) - Disassociates browser settings from a web portal.
* [disassociateNetworkSettings](#disassociatenetworksettings) - Disassociates network settings from a web portal.
* [disassociateTrustStore](#disassociatetruststore) - Disassociates a trust store from a web portal.
* [disassociateUserAccessLoggingSettings](#disassociateuseraccessloggingsettings) - Disassociates user access logging settings from a web portal.
* [disassociateUserSettings](#disassociateusersettings) - Disassociates user settings from a web portal.
* [getBrowserSettings](#getbrowsersettings) - Gets browser settings.
* [getIdentityProvider](#getidentityprovider) - Gets the identity provider.
* [getNetworkSettings](#getnetworksettings) - Gets the network settings.
* [getPortal](#getportal) - Gets the web portal.
* [getPortalServiceProviderMetadata](#getportalserviceprovidermetadata) - Gets the service provider metadata.
* [getTrustStore](#gettruststore) - Gets the trust store.
* [getTrustStoreCertificate](#gettruststorecertificate) - Gets the trust store certificate.
* [getUserAccessLoggingSettings](#getuseraccessloggingsettings) - Gets user access logging settings.
* [getUserSettings](#getusersettings) - Gets user settings.
* [listBrowserSettings](#listbrowsersettings) - Retrieves a list of browser settings.
* [listIdentityProviders](#listidentityproviders) - Retrieves a list of identity providers for a specific web portal.
* [listNetworkSettings](#listnetworksettings) - Retrieves a list of network settings.
* [listPortals](#listportals) - Retrieves a list or web portals.
* [listTagsForResource](#listtagsforresource) - Retrieves a list of tags for a resource.
* [listTrustStoreCertificates](#listtruststorecertificates) - Retrieves a list of trust store certificates.
* [listTrustStores](#listtruststores) - Retrieves a list of trust stores.
* [listUserAccessLoggingSettings](#listuseraccessloggingsettings) - Retrieves a list of user access logging settings.
* [listUserSettings](#listusersettings) - Retrieves a list of user settings.
* [tagResource](#tagresource) - Adds or overwrites one or more tags for the specified resource.
* [untagResource](#untagresource) - Removes one or more tags from the specified resource.
* [updateBrowserSettings](#updatebrowsersettings) - Updates browser settings.
* [updateIdentityProvider](#updateidentityprovider) - Updates the identity provider. 
* [updateNetworkSettings](#updatenetworksettings) - Updates network settings.
* [updatePortal](#updateportal) - Updates a web portal.
* [updateTrustStore](#updatetruststore) - Updates the trust store.
* [updateUserAccessLoggingSettings](#updateuseraccessloggingsettings) - Updates the user access logging settings.
* [updateUserSettings](#updateusersettings) - Updates the user settings.

## associateBrowserSettings

Associates a browser settings resource with a web portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateBrowserSettingsRequest;
import org.openapis.openapi.models.operations.AssociateBrowserSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateBrowserSettingsRequest req = new AssociateBrowserSettingsRequest("suscipit", "iure") {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            AssociateBrowserSettingsResponse res = sdk.sdk.associateBrowserSettings(req);

            if (res.associateBrowserSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateNetworkSettings

Associates a network settings resource with a web portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateNetworkSettingsRequest;
import org.openapis.openapi.models.operations.AssociateNetworkSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateNetworkSettingsRequest req = new AssociateNetworkSettingsRequest("placeat", "voluptatum") {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "nisi";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "quis";
            }};            

            AssociateNetworkSettingsResponse res = sdk.sdk.associateNetworkSettings(req);

            if (res.associateNetworkSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateTrustStore

Associates a trust store with a web portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateTrustStoreRequest;
import org.openapis.openapi.models.operations.AssociateTrustStoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateTrustStoreRequest req = new AssociateTrustStoreRequest("deserunt", "perferendis") {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "sapiente";
                xAmzDate = "quo";
                xAmzSecurityToken = "odit";
                xAmzSignature = "at";
                xAmzSignedHeaders = "at";
            }};            

            AssociateTrustStoreResponse res = sdk.sdk.associateTrustStore(req);

            if (res.associateTrustStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateUserAccessLoggingSettings

Associates a user access logging settings resource with a web portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateUserAccessLoggingSettingsRequest;
import org.openapis.openapi.models.operations.AssociateUserAccessLoggingSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateUserAccessLoggingSettingsRequest req = new AssociateUserAccessLoggingSettingsRequest("molestiae", "quod") {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "esse";
                xAmzCredential = "totam";
                xAmzDate = "porro";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "nam";
            }};            

            AssociateUserAccessLoggingSettingsResponse res = sdk.sdk.associateUserAccessLoggingSettings(req);

            if (res.associateUserAccessLoggingSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateUserSettings

Associates a user settings resource with a web portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateUserSettingsRequest;
import org.openapis.openapi.models.operations.AssociateUserSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateUserSettingsRequest req = new AssociateUserSettingsRequest("occaecati", "fugit") {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "hic";
                xAmzCredential = "optio";
                xAmzDate = "totam";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "molestiae";
            }};            

            AssociateUserSettingsResponse res = sdk.sdk.associateUserSettings(req);

            if (res.associateUserSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBrowserSettings

Creates a browser settings resource that can be associated with a web portal. Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBrowserSettingsRequest;
import org.openapis.openapi.models.operations.CreateBrowserSettingsRequestBody;
import org.openapis.openapi.models.operations.CreateBrowserSettingsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBrowserSettingsRequest req = new CreateBrowserSettingsRequest(                new CreateBrowserSettingsRequestBody("qui") {{
                                additionalEncryptionContext = new java.util.HashMap<String, String>() {{
                                    put("cum", "esse");
                                    put("ipsum", "excepturi");
                                    put("aspernatur", "perferendis");
                                    put("ad", "natus");
                                }};
                                clientToken = "sed";
                                customerManagedKey = "iste";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("hic", "saepe") {{
                                        key = "natus";
                                        value = "laboriosam";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "in";
                xAmzCredential = "corporis";
                xAmzDate = "iste";
                xAmzSecurityToken = "iure";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "quidem";
            }};            

            CreateBrowserSettingsResponse res = sdk.sdk.createBrowserSettings(req);

            if (res.createBrowserSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createIdentityProvider

Creates an identity provider resource that is then associated with a web portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIdentityProviderRequest;
import org.openapis.openapi.models.operations.CreateIdentityProviderRequestBody;
import org.openapis.openapi.models.operations.CreateIdentityProviderRequestBodyIdentityProviderTypeEnum;
import org.openapis.openapi.models.operations.CreateIdentityProviderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateIdentityProviderRequest req = new CreateIdentityProviderRequest(                new CreateIdentityProviderRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("reiciendis", "est");
                                            }}, "mollitia", CreateIdentityProviderRequestBodyIdentityProviderTypeEnum.SIGN_IN_WITH_APPLE, "dolores") {{
                                clientToken = "dolorem";
                            }};) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "nobis";
                xAmzDate = "enim";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "minima";
            }};            

            CreateIdentityProviderResponse res = sdk.sdk.createIdentityProvider(req);

            if (res.createIdentityProviderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkSettings

Creates a network settings resource that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSettingsRequest;
import org.openapis.openapi.models.operations.CreateNetworkSettingsRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSettingsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSettingsRequest req = new CreateNetworkSettingsRequest(                new CreateNetworkSettingsRequestBody(                new String[]{{
                                                add("iure"),
                                            }},                 new String[]{{
                                                add("doloribus"),
                                                add("sapiente"),
                                                add("architecto"),
                                            }}, "mollitia") {{
                                clientToken = "dolorem";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("mollitia", "occaecati") {{
                                        key = "consequuntur";
                                        value = "repellat";
                                    }}),
                                    add(new Tag("quam", "molestiae") {{
                                        key = "numquam";
                                        value = "commodi";
                                    }}),
                                    add(new Tag("quia", "quis") {{
                                        key = "velit";
                                        value = "error";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "animi";
                xAmzDate = "enim";
                xAmzSecurityToken = "odit";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "sequi";
            }};            

            CreateNetworkSettingsResponse res = sdk.sdk.createNetworkSettings(req);

            if (res.createNetworkSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPortal

Creates a web portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePortalRequest;
import org.openapis.openapi.models.operations.CreatePortalRequestBody;
import org.openapis.openapi.models.operations.CreatePortalRequestBodyAuthenticationTypeEnum;
import org.openapis.openapi.models.operations.CreatePortalResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePortalRequest req = new CreatePortalRequest(                new CreatePortalRequestBody() {{
                                additionalEncryptionContext = new java.util.HashMap<String, String>() {{
                                    put("id", "possimus");
                                    put("aut", "quasi");
                                }};
                                authenticationType = CreatePortalRequestBodyAuthenticationTypeEnum.IAM_IDENTITY_CENTER;
                                clientToken = "temporibus";
                                customerManagedKey = "laborum";
                                displayName = "quasi";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("nihil", "praesentium") {{
                                        key = "voluptatibus";
                                        value = "vero";
                                    }}),
                                    add(new Tag("omnis", "voluptate") {{
                                        key = "voluptatibus";
                                        value = "ipsa";
                                    }}),
                                    add(new Tag("doloremque", "reprehenderit") {{
                                        key = "cum";
                                        value = "perferendis";
                                    }}),
                                    add(new Tag("dicta", "corporis") {{
                                        key = "ut";
                                        value = "maiores";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "dicta";
                xAmzDate = "harum";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "commodi";
            }};            

            CreatePortalResponse res = sdk.sdk.createPortal(req);

            if (res.createPortalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTrustStore

Creates a trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTrustStoreRequest;
import org.openapis.openapi.models.operations.CreateTrustStoreRequestBody;
import org.openapis.openapi.models.operations.CreateTrustStoreResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTrustStoreRequest req = new CreateTrustStoreRequest(                new CreateTrustStoreRequestBody(                new String[]{{
                                                add("ipsum"),
                                            }}) {{
                                clientToken = "quidem";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("modi", "praesentium") {{
                                        key = "excepturi";
                                        value = "pariatur";
                                    }}),
                                    add(new Tag("quasi", "repudiandae") {{
                                        key = "rem";
                                        value = "voluptates";
                                    }}),
                                    add(new Tag("itaque", "incidunt") {{
                                        key = "sint";
                                        value = "veritatis";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "est";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "distinctio";
            }};            

            CreateTrustStoreResponse res = sdk.sdk.createTrustStore(req);

            if (res.createTrustStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUserAccessLoggingSettings

Creates a user access logging settings resource that can be associated with a web portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUserAccessLoggingSettingsRequest;
import org.openapis.openapi.models.operations.CreateUserAccessLoggingSettingsRequestBody;
import org.openapis.openapi.models.operations.CreateUserAccessLoggingSettingsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUserAccessLoggingSettingsRequest req = new CreateUserAccessLoggingSettingsRequest(                new CreateUserAccessLoggingSettingsRequestBody("labore") {{
                                clientToken = "modi";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("quos", "perferendis") {{
                                        key = "aliquid";
                                        value = "cupiditate";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "ipsam";
                xAmzDate = "alias";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreateUserAccessLoggingSettingsResponse res = sdk.sdk.createUserAccessLoggingSettings(req);

            if (res.createUserAccessLoggingSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUserSettings

Creates a user settings resource that can be associated with a web portal. Once associated with a web portal, user settings control how users can transfer data between a streaming session and the their local devices. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUserSettingsRequest;
import org.openapis.openapi.models.operations.CreateUserSettingsRequestBody;
import org.openapis.openapi.models.operations.CreateUserSettingsRequestBodyCopyAllowedEnum;
import org.openapis.openapi.models.operations.CreateUserSettingsRequestBodyDownloadAllowedEnum;
import org.openapis.openapi.models.operations.CreateUserSettingsRequestBodyPasteAllowedEnum;
import org.openapis.openapi.models.operations.CreateUserSettingsRequestBodyPrintAllowedEnum;
import org.openapis.openapi.models.operations.CreateUserSettingsRequestBodyUploadAllowedEnum;
import org.openapis.openapi.models.operations.CreateUserSettingsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUserSettingsRequest req = new CreateUserSettingsRequest(                new CreateUserSettingsRequestBody(CreateUserSettingsRequestBodyCopyAllowedEnum.ENABLED, CreateUserSettingsRequestBodyDownloadAllowedEnum.ENABLED, CreateUserSettingsRequestBodyPasteAllowedEnum.DISABLED, CreateUserSettingsRequestBodyPrintAllowedEnum.ENABLED, CreateUserSettingsRequestBodyUploadAllowedEnum.DISABLED) {{
                                clientToken = "non";
                                disconnectTimeoutInMinutes = 756107L;
                                idleDisconnectTimeoutInMinutes = 576157L;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("sint", "officia") {{
                                        key = "provident";
                                        value = "necessitatibus";
                                    }}),
                                    add(new Tag("a", "dolorum") {{
                                        key = "dolor";
                                        value = "debitis";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "in";
                xAmzCredential = "illum";
                xAmzDate = "maiores";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "magnam";
            }};            

            CreateUserSettingsResponse res = sdk.sdk.createUserSettings(req);

            if (res.createUserSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBrowserSettings

Deletes browser settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBrowserSettingsRequest;
import org.openapis.openapi.models.operations.DeleteBrowserSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBrowserSettingsRequest req = new DeleteBrowserSettingsRequest("facere") {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "laborum";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "non";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "enim";
            }};            

            DeleteBrowserSettingsResponse res = sdk.sdk.deleteBrowserSettings(req);

            if (res.deleteBrowserSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteIdentityProvider

Deletes the identity provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIdentityProviderRequest;
import org.openapis.openapi.models.operations.DeleteIdentityProviderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteIdentityProviderRequest req = new DeleteIdentityProviderRequest("delectus") {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "provident";
                xAmzCredential = "nam";
                xAmzDate = "id";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "sapiente";
            }};            

            DeleteIdentityProviderResponse res = sdk.sdk.deleteIdentityProvider(req);

            if (res.deleteIdentityProviderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSettings

Deletes network settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSettingsRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSettingsRequest req = new DeleteNetworkSettingsRequest("deserunt") {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "vel";
                xAmzCredential = "natus";
                xAmzDate = "omnis";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "nihil";
            }};            

            DeleteNetworkSettingsResponse res = sdk.sdk.deleteNetworkSettings(req);

            if (res.deleteNetworkSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePortal

Deletes a web portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePortalRequest;
import org.openapis.openapi.models.operations.DeletePortalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePortalRequest req = new DeletePortalRequest("distinctio") {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "labore";
                xAmzCredential = "labore";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "natus";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "eum";
            }};            

            DeletePortalResponse res = sdk.sdk.deletePortal(req);

            if (res.deletePortalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTrustStore

Deletes the trust store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTrustStoreRequest;
import org.openapis.openapi.models.operations.DeleteTrustStoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTrustStoreRequest req = new DeleteTrustStoreRequest("aspernatur") {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "et";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "quos";
            }};            

            DeleteTrustStoreResponse res = sdk.sdk.deleteTrustStore(req);

            if (res.deleteTrustStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUserAccessLoggingSettings

Deletes user access logging settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserAccessLoggingSettingsRequest;
import org.openapis.openapi.models.operations.DeleteUserAccessLoggingSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteUserAccessLoggingSettingsRequest req = new DeleteUserAccessLoggingSettingsRequest("accusantium") {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "mollitia";
                xAmzDate = "ad";
                xAmzSecurityToken = "eum";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            DeleteUserAccessLoggingSettingsResponse res = sdk.sdk.deleteUserAccessLoggingSettings(req);

            if (res.deleteUserAccessLoggingSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUserSettings

Deletes user settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserSettingsRequest;
import org.openapis.openapi.models.operations.DeleteUserSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteUserSettingsRequest req = new DeleteUserSettingsRequest("nemo") {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "iure";
                xAmzCredential = "doloribus";
                xAmzDate = "debitis";
                xAmzSecurityToken = "eius";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "deleniti";
            }};            

            DeleteUserSettingsResponse res = sdk.sdk.deleteUserSettings(req);

            if (res.deleteUserSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateBrowserSettings

Disassociates browser settings from a web portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateBrowserSettingsRequest;
import org.openapis.openapi.models.operations.DisassociateBrowserSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateBrowserSettingsRequest req = new DisassociateBrowserSettingsRequest("in") {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "repudiandae";
                xAmzDate = "ullam";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "repellat";
            }};            

            DisassociateBrowserSettingsResponse res = sdk.sdk.disassociateBrowserSettings(req);

            if (res.disassociateBrowserSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateNetworkSettings

Disassociates network settings from a web portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateNetworkSettingsRequest;
import org.openapis.openapi.models.operations.DisassociateNetworkSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateNetworkSettingsRequest req = new DisassociateNetworkSettingsRequest("sed") {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "accusantium";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "magni";
            }};            

            DisassociateNetworkSettingsResponse res = sdk.sdk.disassociateNetworkSettings(req);

            if (res.disassociateNetworkSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateTrustStore

Disassociates a trust store from a web portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateTrustStoreRequest;
import org.openapis.openapi.models.operations.DisassociateTrustStoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateTrustStoreRequest req = new DisassociateTrustStoreRequest("quo") {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "maxime";
                xAmzDate = "ea";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "ea";
            }};            

            DisassociateTrustStoreResponse res = sdk.sdk.disassociateTrustStore(req);

            if (res.disassociateTrustStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateUserAccessLoggingSettings

Disassociates user access logging settings from a web portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateUserAccessLoggingSettingsRequest;
import org.openapis.openapi.models.operations.DisassociateUserAccessLoggingSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateUserAccessLoggingSettingsRequest req = new DisassociateUserAccessLoggingSettingsRequest("ab") {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "ipsam";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "autem";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "eaque";
            }};            

            DisassociateUserAccessLoggingSettingsResponse res = sdk.sdk.disassociateUserAccessLoggingSettings(req);

            if (res.disassociateUserAccessLoggingSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateUserSettings

Disassociates user settings from a web portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateUserSettingsRequest;
import org.openapis.openapi.models.operations.DisassociateUserSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateUserSettingsRequest req = new DisassociateUserSettingsRequest("nemo") {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "fugiat";
                xAmzDate = "amet";
                xAmzSecurityToken = "aut";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "corporis";
            }};            

            DisassociateUserSettingsResponse res = sdk.sdk.disassociateUserSettings(req);

            if (res.disassociateUserSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBrowserSettings

Gets browser settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBrowserSettingsRequest;
import org.openapis.openapi.models.operations.GetBrowserSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBrowserSettingsRequest req = new GetBrowserSettingsRequest("libero") {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "quis";
                xAmzDate = "totam";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "quis";
            }};            

            GetBrowserSettingsResponse res = sdk.sdk.getBrowserSettings(req);

            if (res.getBrowserSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIdentityProvider

Gets the identity provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIdentityProviderRequest;
import org.openapis.openapi.models.operations.GetIdentityProviderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIdentityProviderRequest req = new GetIdentityProviderRequest("eos") {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "minus";
                xAmzDate = "quam";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "nostrum";
            }};            

            GetIdentityProviderResponse res = sdk.sdk.getIdentityProvider(req);

            if (res.getIdentityProviderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSettings

Gets the network settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSettingsRequest req = new GetNetworkSettingsRequest("recusandae") {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "perspiciatis";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "porro";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "blanditiis";
            }};            

            GetNetworkSettingsResponse res = sdk.sdk.getNetworkSettings(req);

            if (res.getNetworkSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPortal

Gets the web portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPortalRequest;
import org.openapis.openapi.models.operations.GetPortalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPortalRequest req = new GetPortalRequest("eaque") {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "adipisci";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "earum";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "iste";
            }};            

            GetPortalResponse res = sdk.sdk.getPortal(req);

            if (res.getPortalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPortalServiceProviderMetadata

Gets the service provider metadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPortalServiceProviderMetadataRequest;
import org.openapis.openapi.models.operations.GetPortalServiceProviderMetadataResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPortalServiceProviderMetadataRequest req = new GetPortalServiceProviderMetadataRequest("deleniti") {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "provident";
                xAmzCredential = "nobis";
                xAmzDate = "libero";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "quos";
            }};            

            GetPortalServiceProviderMetadataResponse res = sdk.sdk.getPortalServiceProviderMetadata(req);

            if (res.getPortalServiceProviderMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTrustStore

Gets the trust store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrustStoreRequest;
import org.openapis.openapi.models.operations.GetTrustStoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTrustStoreRequest req = new GetTrustStoreRequest("dolorem") {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "qui";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "hic";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "cum";
            }};            

            GetTrustStoreResponse res = sdk.sdk.getTrustStore(req);

            if (res.getTrustStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTrustStoreCertificate

Gets the trust store certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrustStoreCertificateRequest;
import org.openapis.openapi.models.operations.GetTrustStoreCertificateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTrustStoreCertificateRequest req = new GetTrustStoreCertificateRequest("dignissimos", "reiciendis") {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "numquam";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "iure";
            }};            

            GetTrustStoreCertificateResponse res = sdk.sdk.getTrustStoreCertificate(req);

            if (res.getTrustStoreCertificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserAccessLoggingSettings

Gets user access logging settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserAccessLoggingSettingsRequest;
import org.openapis.openapi.models.operations.GetUserAccessLoggingSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserAccessLoggingSettingsRequest req = new GetUserAccessLoggingSettingsRequest("quaerat") {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "voluptatibus";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "natus";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "atque";
            }};            

            GetUserAccessLoggingSettingsResponse res = sdk.sdk.getUserAccessLoggingSettings(req);

            if (res.getUserAccessLoggingSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserSettings

Gets user settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserSettingsRequest;
import org.openapis.openapi.models.operations.GetUserSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserSettingsRequest req = new GetUserSettingsRequest("fugiat") {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "dolorum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "deleniti";
            }};            

            GetUserSettingsResponse res = sdk.sdk.getUserSettings(req);

            if (res.getUserSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBrowserSettings

Retrieves a list of browser settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBrowserSettingsRequest;
import org.openapis.openapi.models.operations.ListBrowserSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBrowserSettingsRequest req = new ListBrowserSettingsRequest() {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "asperiores";
                xAmzDate = "nihil";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "id";
                maxResults = 906418L;
                nextToken = "eius";
            }};            

            ListBrowserSettingsResponse res = sdk.sdk.listBrowserSettings(req);

            if (res.listBrowserSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIdentityProviders

Retrieves a list of identity providers for a specific web portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIdentityProvidersRequest;
import org.openapis.openapi.models.operations.ListIdentityProvidersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListIdentityProvidersRequest req = new ListIdentityProvidersRequest("perferendis") {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "optio";
                xAmzCredential = "accusamus";
                xAmzDate = "ad";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "deserunt";
                maxResults = 588317L;
                nextToken = "minima";
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

## listNetworkSettings

Retrieves a list of network settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNetworkSettingsRequest;
import org.openapis.openapi.models.operations.ListNetworkSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListNetworkSettingsRequest req = new ListNetworkSettingsRequest() {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "similique";
                xAmzCredential = "alias";
                xAmzDate = "at";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "vel";
                maxResults = 798047L;
                nextToken = "officiis";
            }};            

            ListNetworkSettingsResponse res = sdk.sdk.listNetworkSettings(req);

            if (res.listNetworkSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPortals

Retrieves a list or web portals.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPortalsRequest;
import org.openapis.openapi.models.operations.ListPortalsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPortalsRequest req = new ListPortalsRequest() {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "a";
                xAmzCredential = "esse";
                xAmzDate = "harum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "quisquam";
                maxResults = 947371L;
                nextToken = "amet";
            }};            

            ListPortalsResponse res = sdk.sdk.listPortals(req);

            if (res.listPortalsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Retrieves a list of tags for a resource.

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
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("accusamus") {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "enim";
                xAmzCredential = "dolorem";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "totam";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "sit";
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

## listTrustStoreCertificates

Retrieves a list of trust store certificates.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTrustStoreCertificatesRequest;
import org.openapis.openapi.models.operations.ListTrustStoreCertificatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTrustStoreCertificatesRequest req = new ListTrustStoreCertificatesRequest("neque") {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "vel";
                xAmzCredential = "libero";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "ipsum";
                maxResults = 277628L;
                nextToken = "qui";
            }};            

            ListTrustStoreCertificatesResponse res = sdk.sdk.listTrustStoreCertificates(req);

            if (res.listTrustStoreCertificatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTrustStores

Retrieves a list of trust stores.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTrustStoresRequest;
import org.openapis.openapi.models.operations.ListTrustStoresResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTrustStoresRequest req = new ListTrustStoresRequest() {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "soluta";
                xAmzDate = "dicta";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "incidunt";
                maxResults = 132068L;
                nextToken = "dolores";
            }};            

            ListTrustStoresResponse res = sdk.sdk.listTrustStores(req);

            if (res.listTrustStoresResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUserAccessLoggingSettings

Retrieves a list of user access logging settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUserAccessLoggingSettingsRequest;
import org.openapis.openapi.models.operations.ListUserAccessLoggingSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListUserAccessLoggingSettingsRequest req = new ListUserAccessLoggingSettingsRequest() {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "quam";
                xAmzDate = "molestias";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "neque";
                maxResults = 144847L;
                nextToken = "magni";
            }};            

            ListUserAccessLoggingSettingsResponse res = sdk.sdk.listUserAccessLoggingSettings(req);

            if (res.listUserAccessLoggingSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUserSettings

Retrieves a list of user settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUserSettingsRequest;
import org.openapis.openapi.models.operations.ListUserSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListUserSettingsRequest req = new ListUserSettingsRequest() {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "nam";
                xAmzDate = "hic";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "soluta";
                maxResults = 748664L;
                nextToken = "et";
            }};            

            ListUserSettingsResponse res = sdk.sdk.listUserSettings(req);

            if (res.listUserSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds or overwrites one or more tags for the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("quos", "tempore") {{
                                                    key = "veritatis";
                                                    value = "nobis";
                                                }}),
                                            }}) {{
                                clientToken = "cupiditate";
                            }};, "aperiam") {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolore";
                xAmzDate = "labore";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "architecto";
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

Removes one or more tags from the specified resource.

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
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("aut",                 new String[]{{
                                add("itaque"),
                                add("consequatur"),
                                add("est"),
                            }}) {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "porro";
                xAmzCredential = "doloribus";
                xAmzDate = "ut";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "qui";
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

## updateBrowserSettings

Updates browser settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBrowserSettingsRequest;
import org.openapis.openapi.models.operations.UpdateBrowserSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateBrowserSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateBrowserSettingsRequest req = new UpdateBrowserSettingsRequest(                new UpdateBrowserSettingsRequestBody() {{
                                browserPolicy = "laudantium";
                                clientToken = "odio";
                            }};, "occaecati") {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "vero";
                xAmzDate = "omnis";
                xAmzSecurityToken = "quis";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "delectus";
            }};            

            UpdateBrowserSettingsResponse res = sdk.sdk.updateBrowserSettings(req);

            if (res.updateBrowserSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateIdentityProvider

Updates the identity provider. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateIdentityProviderRequest;
import org.openapis.openapi.models.operations.UpdateIdentityProviderRequestBody;
import org.openapis.openapi.models.operations.UpdateIdentityProviderRequestBodyIdentityProviderTypeEnum;
import org.openapis.openapi.models.operations.UpdateIdentityProviderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateIdentityProviderRequest req = new UpdateIdentityProviderRequest(                new UpdateIdentityProviderRequestBody() {{
                                clientToken = "consectetur";
                                identityProviderDetails = new java.util.HashMap<String, String>() {{
                                    put("tenetur", "dignissimos");
                                    put("hic", "distinctio");
                                    put("quod", "odio");
                                    put("similique", "facilis");
                                }};
                                identityProviderName = "vero";
                                identityProviderType = UpdateIdentityProviderRequestBodyIdentityProviderTypeEnum.GOOGLE;
                            }};, "dolore") {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "illum";
                xAmzCredential = "sequi";
                xAmzDate = "natus";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            UpdateIdentityProviderResponse res = sdk.sdk.updateIdentityProvider(req);

            if (res.updateIdentityProviderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSettings

Updates network settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSettingsRequest req = new UpdateNetworkSettingsRequest(                new UpdateNetworkSettingsRequestBody() {{
                                clientToken = "nulla";
                                securityGroupIds = new String[]{{
                                    add("porro"),
                                }};
                                subnetIds = new String[]{{
                                    add("doloribus"),
                                    add("iusto"),
                                    add("eligendi"),
                                    add("ducimus"),
                                }};
                                vpcId = "alias";
                            }};, "officia") {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "ea";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "vel";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "magnam";
            }};            

            UpdateNetworkSettingsResponse res = sdk.sdk.updateNetworkSettings(req);

            if (res.updateNetworkSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePortal

Updates a web portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePortalRequest;
import org.openapis.openapi.models.operations.UpdatePortalRequestBody;
import org.openapis.openapi.models.operations.UpdatePortalRequestBodyAuthenticationTypeEnum;
import org.openapis.openapi.models.operations.UpdatePortalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePortalRequest req = new UpdatePortalRequest(                new UpdatePortalRequestBody() {{
                                authenticationType = UpdatePortalRequestBodyAuthenticationTypeEnum.STANDARD;
                                displayName = "laudantium";
                            }};, "dicta") {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "quasi";
                xAmzDate = "ex";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            UpdatePortalResponse res = sdk.sdk.updatePortal(req);

            if (res.updatePortalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTrustStore

Updates the trust store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTrustStoreRequest;
import org.openapis.openapi.models.operations.UpdateTrustStoreRequestBody;
import org.openapis.openapi.models.operations.UpdateTrustStoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTrustStoreRequest req = new UpdateTrustStoreRequest(                new UpdateTrustStoreRequestBody() {{
                                certificatesToAdd = new String[]{{
                                    add("quisquam"),
                                    add("saepe"),
                                    add("ea"),
                                    add("impedit"),
                                }};
                                certificatesToDelete = new String[]{{
                                    add("veniam"),
                                    add("aliquid"),
                                }};
                                clientToken = "inventore";
                            }};, "magnam") {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "quo";
                xAmzCredential = "consectetur";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "eaque";
            }};            

            UpdateTrustStoreResponse res = sdk.sdk.updateTrustStore(req);

            if (res.updateTrustStoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUserAccessLoggingSettings

Updates the user access logging settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserAccessLoggingSettingsRequest;
import org.openapis.openapi.models.operations.UpdateUserAccessLoggingSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateUserAccessLoggingSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateUserAccessLoggingSettingsRequest req = new UpdateUserAccessLoggingSettingsRequest(                new UpdateUserAccessLoggingSettingsRequestBody() {{
                                clientToken = "libero";
                                kinesisStreamArn = "aut";
                            }};, "aut") {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "aliquam";
                xAmzDate = "fugit";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "non";
            }};            

            UpdateUserAccessLoggingSettingsResponse res = sdk.sdk.updateUserAccessLoggingSettings(req);

            if (res.updateUserAccessLoggingSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUserSettings

Updates the user settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserSettingsRequest;
import org.openapis.openapi.models.operations.UpdateUserSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateUserSettingsRequestBodyCopyAllowedEnum;
import org.openapis.openapi.models.operations.UpdateUserSettingsRequestBodyDownloadAllowedEnum;
import org.openapis.openapi.models.operations.UpdateUserSettingsRequestBodyPasteAllowedEnum;
import org.openapis.openapi.models.operations.UpdateUserSettingsRequestBodyPrintAllowedEnum;
import org.openapis.openapi.models.operations.UpdateUserSettingsRequestBodyUploadAllowedEnum;
import org.openapis.openapi.models.operations.UpdateUserSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateUserSettingsRequest req = new UpdateUserSettingsRequest(                new UpdateUserSettingsRequestBody() {{
                                clientToken = "dolorum";
                                copyAllowed = UpdateUserSettingsRequestBodyCopyAllowedEnum.ENABLED;
                                disconnectTimeoutInMinutes = 810424L;
                                downloadAllowed = UpdateUserSettingsRequestBodyDownloadAllowedEnum.DISABLED;
                                idleDisconnectTimeoutInMinutes = 432148L;
                                pasteAllowed = UpdateUserSettingsRequestBodyPasteAllowedEnum.DISABLED;
                                printAllowed = UpdateUserSettingsRequestBodyPrintAllowedEnum.ENABLED;
                                uploadAllowed = UpdateUserSettingsRequestBodyUploadAllowedEnum.ENABLED;
                            }};, "assumenda") {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "libero";
                xAmzDate = "quasi";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "explicabo";
            }};            

            UpdateUserSettingsResponse res = sdk.sdk.updateUserSettings(req);

            if (res.updateUserSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
