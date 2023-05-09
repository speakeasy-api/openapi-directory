# SDK

## Overview

<p>AWS Identity and Access Management Roles Anywhere provides a secure way for your workloads such as servers, containers, and applications running outside of AWS to obtain Temporary AWS credentials. Your workloads can use the same IAM policies and roles that you have configured with native AWS applications to access AWS resources. Using IAM Roles Anywhere will eliminate the need to manage long term credentials for workloads running outside of AWS.</p> <p>To use IAM Roles Anywhere customer workloads will need to use X.509 certificates issued by their Certificate Authority (CA) . The Certificate Authority (CA) needs to be registered with IAM Roles Anywhere as a trust anchor to establish trust between customer PKI and IAM Roles Anywhere. Customers who do not manage their own PKI system can use AWS Certificate Manager Private Certificate Authority (ACM PCA) to create a Certificate Authority and use that to establish trust with IAM Roles Anywhere</p> <p>This guide describes the IAM rolesanywhere operations that you can call programmatically. For general information about IAM Roles Anywhere see <a href="https://docs.aws.amazon.com/">https://docs.aws.amazon.com/</a> </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/rolesanywhere/>
### Available Operations

* [createProfile](#createprofile) - <p>Creates a profile. A profile is configuration resource to list the roles that RolesAnywhere service is trusted to assume. In addition, by applying a profile you can intersect permissions with IAM managed policies.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:CreateProfile</code>. </p>
* [createTrustAnchor](#createtrustanchor) - <p>Creates a trust anchor. You establish trust between IAM Roles Anywhere and your certificate authority (CA) by configuring a trust anchor. A Trust Anchor is defined either as a reference to a AWS Certificate Manager Private Certificate Authority (ACM PCA), or by uploading a Certificate Authority (CA) certificate. Your AWS workloads can authenticate with the trust anchor using certificates issued by the trusted Certificate Authority (CA) in exchange for temporary AWS credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:CreateTrustAnchor</code>. </p>
* [deleteCrl](#deletecrl) - <p>Deletes a certificate revocation list (CRL).</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DeleteCrl</code>. </p>
* [deleteProfile](#deleteprofile) - <p>Deletes a profile.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DeleteProfile</code>. </p>
* [deleteTrustAnchor](#deletetrustanchor) - <p>Deletes a trust anchor.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DeleteTrustAnchor</code>. </p>
* [disableCrl](#disablecrl) - <p>Disables a certificate revocation list (CRL).</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DisableCrl</code>. </p>
* [disableProfile](#disableprofile) - <p>Disables a profile. When disabled, <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> requests with this profile fail.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DisableProfile</code>. </p>
* [disableTrustAnchor](#disabletrustanchor) - <p>Disables a trust anchor. When disabled, <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> requests specifying this trust anchor are unauthorized.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DisableTrustAnchor</code>. </p>
* [enableCrl](#enablecrl) - <p>Enables a certificate revocation list (CRL). When enabled, certificates stored in the CRL are unauthorized to receive session credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:EnableCrl</code>. </p>
* [enableProfile](#enableprofile) - <p>Enables the roles in a profile to receive session credentials in <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a>. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:EnableProfile</code>. </p>
* [enableTrustAnchor](#enabletrustanchor) - <p>Enables a trust anchor. When enabled, certificates in the trust anchor chain are authorized for trust validation. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:EnableTrustAnchor</code>. </p>
* [getCrl](#getcrl) - <p>Gets a certificate revocation list (CRL).</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetCrl</code>. </p>
* [getProfile](#getprofile) - <p>Gets a profile.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetProfile</code>. </p>
* [getSubject](#getsubject) - <p>Gets a Subject. A Subject associates a certificate identity with authentication attempts by CreateSession. The Subject resources stores audit information such as status of the last authentication attempt, the certificate data used in the attempt, and the last time the associated identity attempted authentication. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetSubject</code>. </p>
* [getTrustAnchor](#gettrustanchor) - <p>Gets a trust anchor.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetTrustAnchor</code>. </p>
* [importCrl](#importcrl) - <p>Imports the certificate revocation list (CRL). CRl is a list of certificates that have been revoked by the issuing certificate Authority (CA). IAM Roles Anywhere validates against the crl list before issuing credentials. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:ImportCrl</code>. </p>
* [listCrls](#listcrls) - <p>Lists all Crls in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListCrls</code>. </p>
* [listProfiles](#listprofiles) - <p>Lists all profiles in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListProfiles</code>. </p>
* [listSubjects](#listsubjects) - <p>Lists the subjects in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListSubjects</code>. </p>
* [listTagsForResource](#listtagsforresource) - <p>Lists the tags attached to the resource.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListTagsForResource</code>. </p>
* [listTrustAnchors](#listtrustanchors) - <p>Lists the trust anchors in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListTrustAnchors</code>. </p>
* [tagResource](#tagresource) - <p>Attaches tags to a resource.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:TagResource</code>. </p>
* [untagResource](#untagresource) - <p>Removes tags from the resource.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UntagResource</code>. </p>
* [updateCrl](#updatecrl) - <p>Updates the certificate revocation list (CRL). CRl is a list of certificates that have been revoked by the issuing certificate Authority (CA). IAM Roles Anywhere validates against the crl list before issuing credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateCrl</code>. </p>
* [updateProfile](#updateprofile) - <p>Updates the profile. A profile is configuration resource to list the roles that RolesAnywhere service is trusted to assume. In addition, by applying a profile you can scope-down permissions with IAM managed policies.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateProfile</code>. </p>
* [updateTrustAnchor](#updatetrustanchor) - <p>Updates the trust anchor.You establish trust between IAM Roles Anywhere and your certificate authority (CA) by configuring a trust anchor. A Trust Anchor is defined either as a reference to a AWS Certificate Manager Private Certificate Authority (ACM PCA), or by uploading a Certificate Authority (CA) certificate. Your AWS workloads can authenticate with the trust anchor using certificates issued by the trusted Certificate Authority (CA) in exchange for temporary AWS credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateTrustAnchor</code>. </p>

## createProfile

<p>Creates a profile. A profile is configuration resource to list the roles that RolesAnywhere service is trusted to assume. In addition, by applying a profile you can intersect permissions with IAM managed policies.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:CreateProfile</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProfileRequest;
import org.openapis.openapi.models.operations.CreateProfileRequestBody;
import org.openapis.openapi.models.operations.CreateProfileResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateProfileRequest req = new CreateProfileRequest(                new CreateProfileRequestBody("veritatis",                 new String[]{{
                                                add("perferendis"),
                                                add("ipsam"),
                                                add("repellendus"),
                                            }}) {{
                                durationSeconds = 957156L;
                                enabled = false;
                                managedPolicyArns = new String[]{{
                                    add("odit"),
                                    add("at"),
                                    add("at"),
                                    add("maiores"),
                                }};
                                requireInstanceProperties = false;
                                sessionPolicy = "molestiae";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("totam", "porro") {{
                                        key = "quod";
                                        value = "esse";
                                    }}),
                                    add(new Tag("nam", "officia") {{
                                        key = "dolorum";
                                        value = "dicta";
                                    }}),
                                    add(new Tag("deleniti", "hic") {{
                                        key = "occaecati";
                                        value = "fugit";
                                    }}),
                                    add(new Tag("beatae", "commodi") {{
                                        key = "optio";
                                        value = "totam";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "impedit";
                xAmzSecurityToken = "cum";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "ipsum";
            }};            

            CreateProfileResponse res = sdk.sdk.createProfile(req);

            if (res.profileDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTrustAnchor

<p>Creates a trust anchor. You establish trust between IAM Roles Anywhere and your certificate authority (CA) by configuring a trust anchor. A Trust Anchor is defined either as a reference to a AWS Certificate Manager Private Certificate Authority (ACM PCA), or by uploading a Certificate Authority (CA) certificate. Your AWS workloads can authenticate with the trust anchor using certificates issued by the trusted Certificate Authority (CA) in exchange for temporary AWS credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:CreateTrustAnchor</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTrustAnchorRequest;
import org.openapis.openapi.models.operations.CreateTrustAnchorRequestBody;
import org.openapis.openapi.models.operations.CreateTrustAnchorRequestBodySource;
import org.openapis.openapi.models.operations.CreateTrustAnchorResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceData;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TrustAnchorTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTrustAnchorRequest req = new CreateTrustAnchorRequest(                new CreateTrustAnchorRequestBody("aspernatur",                 new CreateTrustAnchorRequestBodySource() {{
                                                sourceData = new SourceData() {{
                                                    acmPcaArn = "perferendis";
                                                    x509CertificateData = "ad";
                                                }};;
                                                sourceType = TrustAnchorTypeEnum.CERTIFICATE_BUNDLE;
                                            }};) {{
                                enabled = false;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("natus", "laboriosam") {{
                                        key = "iste";
                                        value = "dolor";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "fuga";
                xAmzDate = "in";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "iure";
            }};            

            CreateTrustAnchorResponse res = sdk.sdk.createTrustAnchor(req);

            if (res.trustAnchorDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCrl

<p>Deletes a certificate revocation list (CRL).</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DeleteCrl</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCrlRequest;
import org.openapis.openapi.models.operations.DeleteCrlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCrlRequest req = new DeleteCrlRequest("quidem") {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "reiciendis";
                xAmzDate = "est";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "dolores";
            }};            

            DeleteCrlResponse res = sdk.sdk.deleteCrl(req);

            if (res.crlDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProfile

<p>Deletes a profile.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DeleteProfile</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProfileRequest;
import org.openapis.openapi.models.operations.DeleteProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProfileRequest req = new DeleteProfileRequest("corporis") {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "enim";
                xAmzDate = "omnis";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "excepturi";
            }};            

            DeleteProfileResponse res = sdk.sdk.deleteProfile(req);

            if (res.profileDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTrustAnchor

<p>Deletes a trust anchor.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DeleteTrustAnchor</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTrustAnchorRequest;
import org.openapis.openapi.models.operations.DeleteTrustAnchorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTrustAnchorRequest req = new DeleteTrustAnchorRequest("iure") {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "sapiente";
                xAmzDate = "architecto";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "culpa";
            }};            

            DeleteTrustAnchorResponse res = sdk.sdk.deleteTrustAnchor(req);

            if (res.trustAnchorDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableCrl

<p>Disables a certificate revocation list (CRL).</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DisableCrl</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableCrlRequest;
import org.openapis.openapi.models.operations.DisableCrlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableCrlRequest req = new DisableCrlRequest("repellat") {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "numquam";
                xAmzDate = "commodi";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "velit";
            }};            

            DisableCrlResponse res = sdk.sdk.disableCrl(req);

            if (res.crlDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableProfile

<p>Disables a profile. When disabled, <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> requests with this profile fail.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DisableProfile</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableProfileRequest;
import org.openapis.openapi.models.operations.DisableProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableProfileRequest req = new DisableProfileRequest("quia") {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "vitae";
                xAmzCredential = "laborum";
                xAmzDate = "animi";
                xAmzSecurityToken = "enim";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "quo";
            }};            

            DisableProfileResponse res = sdk.sdk.disableProfile(req);

            if (res.profileDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableTrustAnchor

<p>Disables a trust anchor. When disabled, <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> requests specifying this trust anchor are unauthorized.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DisableTrustAnchor</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableTrustAnchorRequest;
import org.openapis.openapi.models.operations.DisableTrustAnchorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableTrustAnchorRequest req = new DisableTrustAnchorRequest("tenetur") {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "id";
                xAmzCredential = "possimus";
                xAmzDate = "aut";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "error";
                xAmzSignedHeaders = "temporibus";
            }};            

            DisableTrustAnchorResponse res = sdk.sdk.disableTrustAnchor(req);

            if (res.trustAnchorDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableCrl

<p>Enables a certificate revocation list (CRL). When enabled, certificates stored in the CRL are unauthorized to receive session credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:EnableCrl</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableCrlRequest;
import org.openapis.openapi.models.operations.EnableCrlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableCrlRequest req = new EnableCrlRequest("quasi") {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "vero";
                xAmzDate = "nihil";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "ipsa";
            }};            

            EnableCrlResponse res = sdk.sdk.enableCrl(req);

            if (res.crlDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableProfile

<p>Enables the roles in a profile to receive session credentials in <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a>. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:EnableProfile</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableProfileRequest;
import org.openapis.openapi.models.operations.EnableProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableProfileRequest req = new EnableProfileRequest("voluptate") {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "doloremque";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "ut";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "dicta";
            }};            

            EnableProfileResponse res = sdk.sdk.enableProfile(req);

            if (res.profileDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableTrustAnchor

<p>Enables a trust anchor. When enabled, certificates in the trust anchor chain are authorized for trust validation. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:EnableTrustAnchor</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableTrustAnchorRequest;
import org.openapis.openapi.models.operations.EnableTrustAnchorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableTrustAnchorRequest req = new EnableTrustAnchorRequest("dolore") {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "harum";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "repudiandae";
            }};            

            EnableTrustAnchorResponse res = sdk.sdk.enableTrustAnchor(req);

            if (res.trustAnchorDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCrl

<p>Gets a certificate revocation list (CRL).</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetCrl</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCrlRequest;
import org.openapis.openapi.models.operations.GetCrlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCrlRequest req = new GetCrlRequest("ipsum") {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "molestias";
                xAmzCredential = "excepturi";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "modi";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "rem";
            }};            

            GetCrlResponse res = sdk.sdk.getCrl(req);

            if (res.crlDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProfile

<p>Gets a profile.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetProfile</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProfileRequest;
import org.openapis.openapi.models.operations.GetProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProfileRequest req = new GetProfileRequest("quasi") {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "sint";
                xAmzCredential = "veritatis";
                xAmzDate = "itaque";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "consequatur";
            }};            

            GetProfileResponse res = sdk.sdk.getProfile(req);

            if (res.profileDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubject

<p>Gets a Subject. A Subject associates a certificate identity with authentication attempts by CreateSession. The Subject resources stores audit information such as status of the last authentication attempt, the certificate data used in the attempt, and the last time the associated identity attempted authentication. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetSubject</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubjectRequest;
import org.openapis.openapi.models.operations.GetSubjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSubjectRequest req = new GetSubjectRequest("quibusdam") {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "distinctio";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "labore";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            GetSubjectResponse res = sdk.sdk.getSubject(req);

            if (res.subjectDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTrustAnchor

<p>Gets a trust anchor.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetTrustAnchor</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrustAnchorRequest;
import org.openapis.openapi.models.operations.GetTrustAnchorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTrustAnchorRequest req = new GetTrustAnchorRequest("cupiditate") {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "magni";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "fugit";
            }};            

            GetTrustAnchorResponse res = sdk.sdk.getTrustAnchor(req);

            if (res.trustAnchorDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importCrl

<p>Imports the certificate revocation list (CRL). CRl is a list of certificates that have been revoked by the issuing certificate Authority (CA). IAM Roles Anywhere validates against the crl list before issuing credentials. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:ImportCrl</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportCrlRequest;
import org.openapis.openapi.models.operations.ImportCrlRequestBody;
import org.openapis.openapi.models.operations.ImportCrlResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportCrlRequest req = new ImportCrlRequest(                new ImportCrlRequestBody("excepturi", "tempora", "facilis") {{
                                enabled = false;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("eum", "non") {{
                                        key = "labore";
                                        value = "delectus";
                                    }}),
                                    add(new Tag("aliquid", "provident") {{
                                        key = "eligendi";
                                        value = "sint";
                                    }}),
                                    add(new Tag("officia", "dolor") {{
                                        key = "necessitatibus";
                                        value = "sint";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "a";
                xAmzCredential = "dolorum";
                xAmzDate = "in";
                xAmzSecurityToken = "in";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "maiores";
            }};            

            ImportCrlResponse res = sdk.sdk.importCrl(req);

            if (res.crlDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCrls

<p>Lists all Crls in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListCrls</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCrlsRequest;
import org.openapis.openapi.models.operations.ListCrlsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCrlsRequest req = new ListCrlsRequest() {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "cumque";
                xAmzDate = "facere";
                xAmzSecurityToken = "ea";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "laborum";
                nextToken = "accusamus";
                pageSize = 249796L;
            }};            

            ListCrlsResponse res = sdk.sdk.listCrls(req);

            if (res.listCrlsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProfiles

<p>Lists all profiles in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListProfiles</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProfilesRequest;
import org.openapis.openapi.models.operations.ListProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProfilesRequest req = new ListProfilesRequest() {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "delectus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "provident";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "id";
                nextToken = "blanditiis";
                pageSize = 533206L;
            }};            

            ListProfilesResponse res = sdk.sdk.listProfiles(req);

            if (res.listProfilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSubjects

<p>Lists the subjects in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListSubjects</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSubjectsRequest;
import org.openapis.openapi.models.operations.ListSubjectsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSubjectsRequest req = new ListSubjectsRequest() {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "nisi";
                xAmzDate = "vel";
                xAmzSecurityToken = "natus";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "molestiae";
                nextToken = "perferendis";
                pageSize = 470132L;
            }};            

            ListSubjectsResponse res = sdk.sdk.listSubjects(req);

            if (res.listSubjectsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

<p>Lists the tags attached to the resource.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListTagsForResource</code>. </p>

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
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("distinctio") {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "labore";
                xAmzCredential = "labore";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "natus";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "eum";
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

## listTrustAnchors

<p>Lists the trust anchors in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListTrustAnchors</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTrustAnchorsRequest;
import org.openapis.openapi.models.operations.ListTrustAnchorsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTrustAnchorsRequest req = new ListTrustAnchorsRequest() {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "magnam";
                xAmzDate = "et";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "provident";
                nextToken = "quos";
                pageSize = 574325L;
            }};            

            ListTrustAnchorsResponse res = sdk.sdk.listTrustAnchors(req);

            if (res.listTrustAnchorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Attaches tags to a resource.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:TagResource</code>. </p>

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
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody("mollitia",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("eum", "dolor") {{
                                                    key = "mollitia";
                                                    value = "ad";
                                                }}),
                                                add(new Tag("nemo", "quasi") {{
                                                    key = "necessitatibus";
                                                    value = "odit";
                                                }}),
                                                add(new Tag("debitis", "eius") {{
                                                    key = "iure";
                                                    value = "doloribus";
                                                }}),
                                                add(new Tag("facilis", "in") {{
                                                    key = "maxime";
                                                    value = "deleniti";
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "repudiandae";
                xAmzDate = "ullam";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "repellat";
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

<p>Removes tags from the resource.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UntagResource</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceRequestBody;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequestBody("sed",                 new String[]{{
                                                add("pariatur"),
                                                add("accusantium"),
                                                add("consequuntur"),
                                                add("praesentium"),
                                            }});) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "magni";
                xAmzCredential = "sunt";
                xAmzDate = "quo";
                xAmzSecurityToken = "illum";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "maxime";
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

## updateCrl

<p>Updates the certificate revocation list (CRL). CRl is a list of certificates that have been revoked by the issuing certificate Authority (CA). IAM Roles Anywhere validates against the crl list before issuing credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateCrl</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCrlRequest;
import org.openapis.openapi.models.operations.UpdateCrlRequestBody;
import org.openapis.openapi.models.operations.UpdateCrlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCrlRequest req = new UpdateCrlRequest(                new UpdateCrlRequestBody() {{
                                crlData = "excepturi";
                                name = "Dr. Rosemary Bartoletti";
                            }};, "ipsam") {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "autem";
                xAmzCredential = "nam";
                xAmzDate = "eaque";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            UpdateCrlResponse res = sdk.sdk.updateCrl(req);

            if (res.crlDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProfile

<p>Updates the profile. A profile is configuration resource to list the roles that RolesAnywhere service is trusted to assume. In addition, by applying a profile you can scope-down permissions with IAM managed policies.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateProfile</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProfileRequest;
import org.openapis.openapi.models.operations.UpdateProfileRequestBody;
import org.openapis.openapi.models.operations.UpdateProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProfileRequest req = new UpdateProfileRequest(                new UpdateProfileRequestBody() {{
                                durationSeconds = 855804L;
                                managedPolicyArns = new String[]{{
                                    add("aut"),
                                }};
                                name = "Lewis Welch";
                                roleArns = new String[]{{
                                    add("quis"),
                                }};
                                sessionPolicy = "totam";
                            }};, "dignissimos") {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "quis";
                xAmzCredential = "nesciunt";
                xAmzDate = "eos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "minus";
            }};            

            UpdateProfileResponse res = sdk.sdk.updateProfile(req);

            if (res.profileDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTrustAnchor

<p>Updates the trust anchor.You establish trust between IAM Roles Anywhere and your certificate authority (CA) by configuring a trust anchor. A Trust Anchor is defined either as a reference to a AWS Certificate Manager Private Certificate Authority (ACM PCA), or by uploading a Certificate Authority (CA) certificate. Your AWS workloads can authenticate with the trust anchor using certificates issued by the trusted Certificate Authority (CA) in exchange for temporary AWS credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateTrustAnchor</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTrustAnchorRequest;
import org.openapis.openapi.models.operations.UpdateTrustAnchorRequestBody;
import org.openapis.openapi.models.operations.UpdateTrustAnchorRequestBodySource;
import org.openapis.openapi.models.operations.UpdateTrustAnchorResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceData;
import org.openapis.openapi.models.shared.TrustAnchorTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTrustAnchorRequest req = new UpdateTrustAnchorRequest(                new UpdateTrustAnchorRequestBody() {{
                                name = "Eula Hegmann";
                                source = new UpdateTrustAnchorRequestBodySource() {{
                                    sourceData = new SourceData() {{
                                        acmPcaArn = "omnis";
                                        x509CertificateData = "facilis";
                                    }};;
                                    sourceType = TrustAnchorTypeEnum.CERTIFICATE_BUNDLE;
                                }};;
                            }};, "voluptatem") {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "blanditiis";
                xAmzDate = "error";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "rerum";
            }};            

            UpdateTrustAnchorResponse res = sdk.sdk.updateTrustAnchor(req);

            if (res.trustAnchorDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
