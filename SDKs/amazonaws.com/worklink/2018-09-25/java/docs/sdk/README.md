# SDK

## Overview

Amazon WorkLink is a cloud-based service that provides secure access to internal websites and web apps from iOS and Android phones. In a single step, your users, such as employees, can access internal websites as efficiently as they access any other public website. They enter a URL in their web browser, or choose a link to an internal website in an email. Amazon WorkLink authenticates the user's access and securely renders authorized internal web content in a secure rendering service in the AWS cloud. Amazon WorkLink doesn't download or store any internal web content on mobile devices.

Amazon Web Services documentation
<https://docs.aws.amazon.com/worklink/>
### Available Operations

* [~~associateDomain~~](#associatedomain) - Specifies a domain to be associated to Amazon WorkLink. :warning: **Deprecated**
* [~~associateWebsiteAuthorizationProvider~~](#associatewebsiteauthorizationprovider) - Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network. :warning: **Deprecated**
* [~~associateWebsiteCertificateAuthority~~](#associatewebsitecertificateauthority) - Imports the root certificate of a certificate authority (CA) used to obtain TLS certificates used by associated websites within the company network. :warning: **Deprecated**
* [~~createFleet~~](#createfleet) - Creates a fleet. A fleet consists of resources and the configuration that delivers associated websites to authorized users who download and set up the Amazon WorkLink app. :warning: **Deprecated**
* [~~deleteFleet~~](#deletefleet) - Deletes a fleet. Prevents users from accessing previously associated websites.  :warning: **Deprecated**
* [~~describeAuditStreamConfiguration~~](#describeauditstreamconfiguration) - Describes the configuration for delivering audit streams to the customer account. :warning: **Deprecated**
* [~~describeCompanyNetworkConfiguration~~](#describecompanynetworkconfiguration) - Describes the networking configuration to access the internal websites associated with the specified fleet. :warning: **Deprecated**
* [~~describeDevice~~](#describedevice) - Provides information about a user's device. :warning: **Deprecated**
* [~~describeDevicePolicyConfiguration~~](#describedevicepolicyconfiguration) - Describes the device policy configuration for the specified fleet. :warning: **Deprecated**
* [~~describeDomain~~](#describedomain) - Provides information about the domain. :warning: **Deprecated**
* [~~describeFleetMetadata~~](#describefleetmetadata) - Provides basic information for the specified fleet, excluding identity provider, networking, and device configuration details. :warning: **Deprecated**
* [~~describeIdentityProviderConfiguration~~](#describeidentityproviderconfiguration) - Describes the identity provider configuration of the specified fleet. :warning: **Deprecated**
* [~~describeWebsiteCertificateAuthority~~](#describewebsitecertificateauthority) - Provides information about the certificate authority. :warning: **Deprecated**
* [~~disassociateDomain~~](#disassociatedomain) - Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink.  :warning: **Deprecated**
* [~~disassociateWebsiteAuthorizationProvider~~](#disassociatewebsiteauthorizationprovider) - Disassociates a website authorization provider from a specified fleet. After the disassociation, users can't load any associated websites that require this authorization provider. :warning: **Deprecated**
* [~~disassociateWebsiteCertificateAuthority~~](#disassociatewebsitecertificateauthority) - Removes a certificate authority (CA). :warning: **Deprecated**
* [~~listDevices~~](#listdevices) - Retrieves a list of devices registered with the specified fleet. :warning: **Deprecated**
* [~~listDomains~~](#listdomains) - Retrieves a list of domains associated to a specified fleet. :warning: **Deprecated**
* [~~listFleets~~](#listfleets) - Retrieves a list of fleets for the current account and Region. :warning: **Deprecated**
* [~~listTagsForResource~~](#listtagsforresource) - Retrieves a list of tags for the specified resource. :warning: **Deprecated**
* [~~listWebsiteAuthorizationProviders~~](#listwebsiteauthorizationproviders) - Retrieves a list of website authorization providers associated with a specified fleet. :warning: **Deprecated**
* [~~listWebsiteCertificateAuthorities~~](#listwebsitecertificateauthorities) - Retrieves a list of certificate authorities added for the current account and Region. :warning: **Deprecated**
* [~~restoreDomainAccess~~](#restoredomainaccess) - Moves a domain to ACTIVE status if it was in the INACTIVE status. :warning: **Deprecated**
* [~~revokeDomainAccess~~](#revokedomainaccess) - Moves a domain to INACTIVE status if it was in the ACTIVE status. :warning: **Deprecated**
* [~~signOutUser~~](#signoutuser) - Signs the user out from all of their devices. The user can sign in again if they have valid credentials. :warning: **Deprecated**
* [~~tagResource~~](#tagresource) - Adds or overwrites one or more tags for the specified resource, such as a fleet. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value. :warning: **Deprecated**
* [~~untagResource~~](#untagresource) - Removes one or more tags from the specified resource. :warning: **Deprecated**
* [~~updateAuditStreamConfiguration~~](#updateauditstreamconfiguration) - Updates the audit stream configuration for the fleet. :warning: **Deprecated**
* [~~updateCompanyNetworkConfiguration~~](#updatecompanynetworkconfiguration) - Updates the company network configuration for the fleet. :warning: **Deprecated**
* [~~updateDevicePolicyConfiguration~~](#updatedevicepolicyconfiguration) - Updates the device policy configuration for the fleet. :warning: **Deprecated**
* [~~updateDomainMetadata~~](#updatedomainmetadata) - Updates domain metadata, such as DisplayName. :warning: **Deprecated**
* [~~updateFleetMetadata~~](#updatefleetmetadata) - Updates fleet metadata, such as DisplayName. :warning: **Deprecated**
* [~~updateIdentityProviderConfiguration~~](#updateidentityproviderconfiguration) - Updates the identity provider configuration for the fleet. :warning: **Deprecated**

## ~~associateDomain~~

Specifies a domain to be associated to Amazon WorkLink.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateDomainRequest;
import org.openapis.openapi.models.operations.AssociateDomainRequestBody;
import org.openapis.openapi.models.operations.AssociateDomainResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateDomainRequest req = new AssociateDomainRequest(                new AssociateDomainRequestBody("magnam", "debitis", "ipsa") {{
                                displayName = "delectus";
                            }};) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            AssociateDomainResponse res = sdk.sdk.associateDomain(req);

            if (res.associateDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~associateWebsiteAuthorizationProvider~~

Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateWebsiteAuthorizationProviderRequest;
import org.openapis.openapi.models.operations.AssociateWebsiteAuthorizationProviderRequestBody;
import org.openapis.openapi.models.operations.AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum;
import org.openapis.openapi.models.operations.AssociateWebsiteAuthorizationProviderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateWebsiteAuthorizationProviderRequest req = new AssociateWebsiteAuthorizationProviderRequest(                new AssociateWebsiteAuthorizationProviderRequestBody(AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum.SAML, "nisi") {{
                                domainName = "recusandae";
                            }};) {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "ab";
                xAmzCredential = "quis";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ipsam";
            }};            

            AssociateWebsiteAuthorizationProviderResponse res = sdk.sdk.associateWebsiteAuthorizationProvider(req);

            if (res.associateWebsiteAuthorizationProviderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~associateWebsiteCertificateAuthority~~

Imports the root certificate of a certificate authority (CA) used to obtain TLS certificates used by associated websites within the company network.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateWebsiteCertificateAuthorityRequest;
import org.openapis.openapi.models.operations.AssociateWebsiteCertificateAuthorityRequestBody;
import org.openapis.openapi.models.operations.AssociateWebsiteCertificateAuthorityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateWebsiteCertificateAuthorityRequest req = new AssociateWebsiteCertificateAuthorityRequest(                new AssociateWebsiteCertificateAuthorityRequestBody("sapiente", "quo") {{
                                displayName = "odit";
                            }};) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "at";
                xAmzCredential = "maiores";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "quod";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "esse";
            }};            

            AssociateWebsiteCertificateAuthorityResponse res = sdk.sdk.associateWebsiteCertificateAuthority(req);

            if (res.associateWebsiteCertificateAuthorityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~createFleet~~

Creates a fleet. A fleet consists of resources and the configuration that delivers associated websites to authorized users who download and set up the Amazon WorkLink app.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFleetRequest;
import org.openapis.openapi.models.operations.CreateFleetRequestBody;
import org.openapis.openapi.models.operations.CreateFleetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFleetRequest req = new CreateFleetRequest(                new CreateFleetRequestBody("porro") {{
                                displayName = "dolorum";
                                optimizeForEndUserLocation = false;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("nam", "officia");
                                }};
                            }};) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "deleniti";
                xAmzDate = "hic";
                xAmzSecurityToken = "optio";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "beatae";
            }};            

            CreateFleetResponse res = sdk.sdk.createFleet(req);

            if (res.createFleetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~deleteFleet~~

Deletes a fleet. Prevents users from accessing previously associated websites. 

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFleetRequest;
import org.openapis.openapi.models.operations.DeleteFleetRequestBody;
import org.openapis.openapi.models.operations.DeleteFleetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFleetRequest req = new DeleteFleetRequest(                new DeleteFleetRequestBody("molestiae");) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "impedit";
                xAmzDate = "cum";
                xAmzSecurityToken = "esse";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "excepturi";
            }};            

            DeleteFleetResponse res = sdk.sdk.deleteFleet(req);

            if (res.deleteFleetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~describeAuditStreamConfiguration~~

Describes the configuration for delivering audit streams to the customer account.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAuditStreamConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeAuditStreamConfigurationRequestBody;
import org.openapis.openapi.models.operations.DescribeAuditStreamConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAuditStreamConfigurationRequest req = new DescribeAuditStreamConfigurationRequest(                new DescribeAuditStreamConfigurationRequestBody("perferendis");) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "natus";
                xAmzCredential = "sed";
                xAmzDate = "iste";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "laboriosam";
            }};            

            DescribeAuditStreamConfigurationResponse res = sdk.sdk.describeAuditStreamConfiguration(req);

            if (res.describeAuditStreamConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~describeCompanyNetworkConfiguration~~

Describes the networking configuration to access the internal websites associated with the specified fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCompanyNetworkConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeCompanyNetworkConfigurationRequestBody;
import org.openapis.openapi.models.operations.DescribeCompanyNetworkConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCompanyNetworkConfigurationRequest req = new DescribeCompanyNetworkConfigurationRequest(                new DescribeCompanyNetworkConfigurationRequestBody("saepe");) {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "in";
                xAmzCredential = "corporis";
                xAmzDate = "iste";
                xAmzSecurityToken = "iure";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "quidem";
            }};            

            DescribeCompanyNetworkConfigurationResponse res = sdk.sdk.describeCompanyNetworkConfiguration(req);

            if (res.describeCompanyNetworkConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~describeDevice~~

Provides information about a user's device.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDeviceRequest;
import org.openapis.openapi.models.operations.DescribeDeviceRequestBody;
import org.openapis.openapi.models.operations.DescribeDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDeviceRequest req = new DescribeDeviceRequest(                new DescribeDeviceRequestBody("ipsa", "reiciendis");) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "laborum";
                xAmzDate = "dolores";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "explicabo";
            }};            

            DescribeDeviceResponse res = sdk.sdk.describeDevice(req);

            if (res.describeDeviceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~describeDevicePolicyConfiguration~~

Describes the device policy configuration for the specified fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDevicePolicyConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeDevicePolicyConfigurationRequestBody;
import org.openapis.openapi.models.operations.DescribeDevicePolicyConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDevicePolicyConfigurationRequest req = new DescribeDevicePolicyConfigurationRequest(                new DescribeDevicePolicyConfigurationRequestBody("enim");) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "minima";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "culpa";
            }};            

            DescribeDevicePolicyConfigurationResponse res = sdk.sdk.describeDevicePolicyConfiguration(req);

            if (res.describeDevicePolicyConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~describeDomain~~

Provides information about the domain.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDomainRequest;
import org.openapis.openapi.models.operations.DescribeDomainRequestBody;
import org.openapis.openapi.models.operations.DescribeDomainResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDomainRequest req = new DescribeDomainRequest(                new DescribeDomainRequestBody("sapiente", "architecto");) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "culpa";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "occaecati";
            }};            

            DescribeDomainResponse res = sdk.sdk.describeDomain(req);

            if (res.describeDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~describeFleetMetadata~~

Provides basic information for the specified fleet, excluding identity provider, networking, and device configuration details.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFleetMetadataRequest;
import org.openapis.openapi.models.operations.DescribeFleetMetadataRequestBody;
import org.openapis.openapi.models.operations.DescribeFleetMetadataResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFleetMetadataRequest req = new DescribeFleetMetadataRequest(                new DescribeFleetMetadataRequestBody("commodi");) {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "velit";
                xAmzDate = "error";
                xAmzSecurityToken = "quia";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "vitae";
            }};            

            DescribeFleetMetadataResponse res = sdk.sdk.describeFleetMetadata(req);

            if (res.describeFleetMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~describeIdentityProviderConfiguration~~

Describes the identity provider configuration of the specified fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeIdentityProviderConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeIdentityProviderConfigurationRequestBody;
import org.openapis.openapi.models.operations.DescribeIdentityProviderConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeIdentityProviderConfigurationRequest req = new DescribeIdentityProviderConfigurationRequest(                new DescribeIdentityProviderConfigurationRequestBody("animi");) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "odit";
                xAmzCredential = "quo";
                xAmzDate = "sequi";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "id";
            }};            

            DescribeIdentityProviderConfigurationResponse res = sdk.sdk.describeIdentityProviderConfiguration(req);

            if (res.describeIdentityProviderConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~describeWebsiteCertificateAuthority~~

Provides information about the certificate authority.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWebsiteCertificateAuthorityRequest;
import org.openapis.openapi.models.operations.DescribeWebsiteCertificateAuthorityRequestBody;
import org.openapis.openapi.models.operations.DescribeWebsiteCertificateAuthorityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWebsiteCertificateAuthorityRequest req = new DescribeWebsiteCertificateAuthorityRequest(                new DescribeWebsiteCertificateAuthorityRequestBody("aut", "quasi");) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "laborum";
                xAmzDate = "quasi";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "vero";
            }};            

            DescribeWebsiteCertificateAuthorityResponse res = sdk.sdk.describeWebsiteCertificateAuthority(req);

            if (res.describeWebsiteCertificateAuthorityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~disassociateDomain~~

Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink. 

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateDomainRequest;
import org.openapis.openapi.models.operations.DisassociateDomainRequestBody;
import org.openapis.openapi.models.operations.DisassociateDomainResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateDomainRequest req = new DisassociateDomainRequest(                new DisassociateDomainRequestBody("praesentium", "voluptatibus");) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "voluptate";
                xAmzDate = "cum";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            DisassociateDomainResponse res = sdk.sdk.disassociateDomain(req);

            if (res.disassociateDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~disassociateWebsiteAuthorizationProvider~~

Disassociates a website authorization provider from a specified fleet. After the disassociation, users can't load any associated websites that require this authorization provider.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateWebsiteAuthorizationProviderRequest;
import org.openapis.openapi.models.operations.DisassociateWebsiteAuthorizationProviderRequestBody;
import org.openapis.openapi.models.operations.DisassociateWebsiteAuthorizationProviderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateWebsiteAuthorizationProviderRequest req = new DisassociateWebsiteAuthorizationProviderRequest(                new DisassociateWebsiteAuthorizationProviderRequestBody("maiores", "dicta");) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "iusto";
                xAmzDate = "dicta";
                xAmzSecurityToken = "harum";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "accusamus";
            }};            

            DisassociateWebsiteAuthorizationProviderResponse res = sdk.sdk.disassociateWebsiteAuthorizationProvider(req);

            if (res.disassociateWebsiteAuthorizationProviderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~disassociateWebsiteCertificateAuthority~~

Removes a certificate authority (CA).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateWebsiteCertificateAuthorityRequest;
import org.openapis.openapi.models.operations.DisassociateWebsiteCertificateAuthorityRequestBody;
import org.openapis.openapi.models.operations.DisassociateWebsiteCertificateAuthorityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateWebsiteCertificateAuthorityRequest req = new DisassociateWebsiteCertificateAuthorityRequest(                new DisassociateWebsiteCertificateAuthorityRequestBody("repudiandae", "quae");) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "molestias";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "praesentium";
            }};            

            DisassociateWebsiteCertificateAuthorityResponse res = sdk.sdk.disassociateWebsiteCertificateAuthority(req);

            if (res.disassociateWebsiteCertificateAuthorityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~listDevices~~

Retrieves a list of devices registered with the specified fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDevicesRequest;
import org.openapis.openapi.models.operations.ListDevicesRequestBody;
import org.openapis.openapi.models.operations.ListDevicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDevicesRequest req = new ListDevicesRequest(                new ListDevicesRequestBody("voluptates") {{
                                maxResults = 93940L;
                                nextToken = "repudiandae";
                            }};) {{
                maxResults = "sint";
                nextToken = "veritatis";
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "enim";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "explicabo";
            }};            

            ListDevicesResponse res = sdk.sdk.listDevices(req);

            if (res.listDevicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~listDomains~~

Retrieves a list of domains associated to a specified fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDomainsRequest;
import org.openapis.openapi.models.operations.ListDomainsRequestBody;
import org.openapis.openapi.models.operations.ListDomainsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDomainsRequest req = new ListDomainsRequest(                new ListDomainsRequestBody("distinctio") {{
                                maxResults = 841386L;
                                nextToken = "labore";
                            }};) {{
                maxResults = "modi";
                nextToken = "qui";
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "quos";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "magni";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "ipsam";
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

## ~~listFleets~~

Retrieves a list of fleets for the current account and Region.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFleetsRequest;
import org.openapis.openapi.models.operations.ListFleetsRequestBody;
import org.openapis.openapi.models.operations.ListFleetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFleetsRequest req = new ListFleetsRequest(                new ListFleetsRequestBody() {{
                                maxResults = 146441L;
                                nextToken = "dolorum";
                            }};) {{
                maxResults = "excepturi";
                nextToken = "tempora";
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "labore";
                xAmzDate = "delectus";
                xAmzSecurityToken = "eum";
                xAmzSignature = "non";
                xAmzSignedHeaders = "eligendi";
            }};            

            ListFleetsResponse res = sdk.sdk.listFleets(req);

            if (res.listFleetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~listTagsForResource~~

Retrieves a list of tags for the specified resource.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("aliquid") {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "sint";
                xAmzDate = "officia";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "a";
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

## ~~listWebsiteAuthorizationProviders~~

Retrieves a list of website authorization providers associated with a specified fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWebsiteAuthorizationProvidersRequest;
import org.openapis.openapi.models.operations.ListWebsiteAuthorizationProvidersRequestBody;
import org.openapis.openapi.models.operations.ListWebsiteAuthorizationProvidersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWebsiteAuthorizationProvidersRequest req = new ListWebsiteAuthorizationProvidersRequest(                new ListWebsiteAuthorizationProvidersRequestBody("in") {{
                                maxResults = 449198L;
                                nextToken = "illum";
                            }};) {{
                maxResults = "maiores";
                nextToken = "rerum";
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "cumque";
                xAmzDate = "facere";
                xAmzSecurityToken = "ea";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "laborum";
            }};            

            ListWebsiteAuthorizationProvidersResponse res = sdk.sdk.listWebsiteAuthorizationProviders(req);

            if (res.listWebsiteAuthorizationProvidersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~listWebsiteCertificateAuthorities~~

Retrieves a list of certificate authorities added for the current account and Region.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWebsiteCertificateAuthoritiesRequest;
import org.openapis.openapi.models.operations.ListWebsiteCertificateAuthoritiesRequestBody;
import org.openapis.openapi.models.operations.ListWebsiteCertificateAuthoritiesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWebsiteCertificateAuthoritiesRequest req = new ListWebsiteCertificateAuthoritiesRequest(                new ListWebsiteCertificateAuthoritiesRequestBody("non") {{
                                maxResults = 581273L;
                                nextToken = "enim";
                            }};) {{
                maxResults = "accusamus";
                nextToken = "delectus";
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "provident";
                xAmzCredential = "nam";
                xAmzDate = "id";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "sapiente";
            }};            

            ListWebsiteCertificateAuthoritiesResponse res = sdk.sdk.listWebsiteCertificateAuthorities(req);

            if (res.listWebsiteCertificateAuthoritiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~restoreDomainAccess~~

Moves a domain to ACTIVE status if it was in the INACTIVE status.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RestoreDomainAccessRequest;
import org.openapis.openapi.models.operations.RestoreDomainAccessRequestBody;
import org.openapis.openapi.models.operations.RestoreDomainAccessResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RestoreDomainAccessRequest req = new RestoreDomainAccessRequest(                new RestoreDomainAccessRequestBody("deserunt", "nisi");) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "natus";
                xAmzCredential = "omnis";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "magnam";
            }};            

            RestoreDomainAccessResponse res = sdk.sdk.restoreDomainAccess(req);

            if (res.restoreDomainAccessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~revokeDomainAccess~~

Moves a domain to INACTIVE status if it was in the ACTIVE status.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RevokeDomainAccessRequest;
import org.openapis.openapi.models.operations.RevokeDomainAccessRequestBody;
import org.openapis.openapi.models.operations.RevokeDomainAccessResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RevokeDomainAccessRequest req = new RevokeDomainAccessRequest(                new RevokeDomainAccessRequestBody("id", "labore");) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "natus";
                xAmzDate = "nobis";
                xAmzSecurityToken = "eum";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "aspernatur";
            }};            

            RevokeDomainAccessResponse res = sdk.sdk.revokeDomainAccess(req);

            if (res.revokeDomainAccessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~signOutUser~~

Signs the user out from all of their devices. The user can sign in again if they have valid credentials.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SignOutUserRequest;
import org.openapis.openapi.models.operations.SignOutUserRequestBody;
import org.openapis.openapi.models.operations.SignOutUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SignOutUserRequest req = new SignOutUserRequest(                new SignOutUserRequestBody("magnam", "et");) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "provident";
                xAmzDate = "quos";
                xAmzSecurityToken = "sint";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "mollitia";
            }};            

            SignOutUserResponse res = sdk.sdk.signOutUser(req);

            if (res.signOutUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~tagResource~~

Adds or overwrites one or more tags for the specified resource, such as a fleet. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("ad", "eum");
                                                put("dolor", "necessitatibus");
                                                put("odit", "nemo");
                                            }});, "quasi") {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "debitis";
                xAmzDate = "eius";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "facilis";
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

## ~~untagResource~~

Removes one or more tags from the specified resource.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("architecto",                 new String[]{{
                                add("repudiandae"),
                            }}) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "nihil";
                xAmzDate = "repellat";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "saepe";
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

## ~~updateAuditStreamConfiguration~~

Updates the audit stream configuration for the fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAuditStreamConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateAuditStreamConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateAuditStreamConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAuditStreamConfigurationRequest req = new UpdateAuditStreamConfigurationRequest(                new UpdateAuditStreamConfigurationRequestBody("accusantium") {{
                                auditStreamArn = "consequuntur";
                            }};) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "natus";
                xAmzCredential = "magni";
                xAmzDate = "sunt";
                xAmzSecurityToken = "quo";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "pariatur";
            }};            

            UpdateAuditStreamConfigurationResponse res = sdk.sdk.updateAuditStreamConfiguration(req);

            if (res.updateAuditStreamConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~updateCompanyNetworkConfiguration~~

Updates the company network configuration for the fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCompanyNetworkConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateCompanyNetworkConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateCompanyNetworkConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCompanyNetworkConfigurationRequest req = new UpdateCompanyNetworkConfigurationRequest(                new UpdateCompanyNetworkConfigurationRequestBody("ea",                 new String[]{{
                                                add("odit"),
                                                add("ea"),
                                                add("accusantium"),
                                            }},                 new String[]{{
                                                add("maiores"),
                                            }}, "quidem");) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "autem";
                xAmzDate = "nam";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "nemo";
            }};            

            UpdateCompanyNetworkConfigurationResponse res = sdk.sdk.updateCompanyNetworkConfiguration(req);

            if (res.updateCompanyNetworkConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~updateDevicePolicyConfiguration~~

Updates the device policy configuration for the fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDevicePolicyConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateDevicePolicyConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateDevicePolicyConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDevicePolicyConfigurationRequest req = new UpdateDevicePolicyConfigurationRequest(                new UpdateDevicePolicyConfigurationRequestBody("perferendis") {{
                                deviceCaCertificate = "fugiat";
                            }};) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "aut";
                xAmzCredential = "cumque";
                xAmzDate = "corporis";
                xAmzSecurityToken = "hic";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "nobis";
            }};            

            UpdateDevicePolicyConfigurationResponse res = sdk.sdk.updateDevicePolicyConfiguration(req);

            if (res.updateDevicePolicyConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~updateDomainMetadata~~

Updates domain metadata, such as DisplayName.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDomainMetadataRequest;
import org.openapis.openapi.models.operations.UpdateDomainMetadataRequestBody;
import org.openapis.openapi.models.operations.UpdateDomainMetadataResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDomainMetadataRequest req = new UpdateDomainMetadataRequest(                new UpdateDomainMetadataRequestBody("quis", "totam") {{
                                displayName = "dignissimos";
                            }};) {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "quis";
                xAmzCredential = "nesciunt";
                xAmzDate = "eos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "minus";
            }};            

            UpdateDomainMetadataResponse res = sdk.sdk.updateDomainMetadata(req);

            if (res.updateDomainMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~updateFleetMetadata~~

Updates fleet metadata, such as DisplayName.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFleetMetadataRequest;
import org.openapis.openapi.models.operations.UpdateFleetMetadataRequestBody;
import org.openapis.openapi.models.operations.UpdateFleetMetadataResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFleetMetadataRequest req = new UpdateFleetMetadataRequest(                new UpdateFleetMetadataRequestBody("dolor") {{
                                displayName = "vero";
                                optimizeForEndUserLocation = false;
                            }};) {{
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "hic";
                xAmzCredential = "recusandae";
                xAmzDate = "omnis";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "perspiciatis";
                xAmzSignedHeaders = "voluptatem";
            }};            

            UpdateFleetMetadataResponse res = sdk.sdk.updateFleetMetadata(req);

            if (res.updateFleetMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~updateIdentityProviderConfiguration~~

Updates the identity provider configuration for the fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateIdentityProviderConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateIdentityProviderConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum;
import org.openapis.openapi.models.operations.UpdateIdentityProviderConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateIdentityProviderConfigurationRequest req = new UpdateIdentityProviderConfigurationRequest(                new UpdateIdentityProviderConfigurationRequestBody("consequuntur", UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum.SAML) {{
                                identityProviderSamlMetadata = "blanditiis";
                            }};) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "occaecati";
                xAmzDate = "rerum";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "earum";
            }};            

            UpdateIdentityProviderConfigurationResponse res = sdk.sdk.updateIdentityProviderConfiguration(req);

            if (res.updateIdentityProviderConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
