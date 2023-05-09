# SDK

## Overview

<fullname>Certificate Manager</fullname> <p>You can use Certificate Manager (ACM) to manage SSL/TLS certificates for your Amazon Web Services-based websites and applications. For more information about using ACM, see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">Certificate Manager User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/acm/>
### Available Operations

* [addTagsToCertificate](#addtagstocertificate) - <p>Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a <code>key</code> and an optional <code>value</code>. You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. </p> <p>You can apply a tag to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply the same tag to multiple certificates if you want to filter for a common relationship among those certificates. Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load balancer to indicate that they are both used by the same website. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/tags.html">Tagging ACM certificates</a>. </p> <p>To remove one or more tags, use the <a>RemoveTagsFromCertificate</a> action. To view all of the tags that have been applied to the certificate, use the <a>ListTagsForCertificate</a> action. </p>
* [deleteCertificate](#deletecertificate) - <p>Deletes a certificate and its associated private key. If this action succeeds, the certificate no longer appears in the list that can be displayed by calling the <a>ListCertificates</a> action or be retrieved by calling the <a>GetCertificate</a> action. The certificate will not be available for use by Amazon Web Services services integrated with ACM. </p> <note> <p>You cannot delete an ACM certificate that is being used by another Amazon Web Services service. To delete a certificate that is in use, the certificate association must first be removed.</p> </note>
* [describeCertificate](#describecertificate) - <p>Returns detailed metadata about the specified ACM certificate.</p> <p>If you have just created a certificate using the <code>RequestCertificate</code> action, there is a delay of several seconds before you can retrieve information about it.</p>
* [exportCertificate](#exportcertificate) - <p>Exports a private certificate issued by a private certificate authority (CA) for use anywhere. The exported file contains the certificate, the certificate chain, and the encrypted private 2048-bit RSA key associated with the public key that is embedded in the certificate. For security, you must assign a passphrase for the private key when exporting it. </p> <p>For information about exporting and formatting a certificate using the ACM console or CLI, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-export-private.html">Export a Private Certificate</a>.</p>
* [getAccountConfiguration](#getaccountconfiguration) - Returns the account configuration options associated with an Amazon Web Services account.
* [getCertificate](#getcertificate) - Retrieves an Amazon-issued certificate and its certificate chain. The chain consists of the certificate of the issuing CA and the intermediate certificates of any other subordinate CAs. All of the certificates are base64 encoded. You can use <a href="https://wiki.openssl.org/index.php/Command_Line_Utilities">OpenSSL</a> to decode the certificates and inspect individual fields.
* [importCertificate](#importcertificate) - <p>Imports a certificate into Certificate Manager (ACM) to use with services that are integrated with ACM. Note that <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-services.html">integrated services</a> allow only certificate types and keys they support to be associated with their resources. Further, their support differs depending on whether the certificate is imported into IAM or into ACM. For more information, see the documentation for each service. For more information about importing certificates into ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing Certificates</a> in the <i>Certificate Manager User Guide</i>. </p> <note> <p>ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for certificates that you import.</p> </note> <p>Note the following guidelines when importing third party certificates:</p> <ul> <li> <p>You must enter the private key that matches the certificate you are importing.</p> </li> <li> <p>The private key must be unencrypted. You cannot import a private key that is protected by a password or a passphrase.</p> </li> <li> <p>The private key must be no larger than 5 KB (5,120 bytes).</p> </li> <li> <p>If the certificate you are importing is not self-signed, you must enter its certificate chain.</p> </li> <li> <p>If a certificate chain is included, the issuer must be the subject of one of the certificates in the chain.</p> </li> <li> <p>The certificate, private key, and certificate chain must be PEM-encoded.</p> </li> <li> <p>The current time must be between the <code>Not Before</code> and <code>Not After</code> certificate fields.</p> </li> <li> <p>The <code>Issuer</code> field must not be empty.</p> </li> <li> <p>The OCSP authority URL, if present, must not exceed 1000 characters.</p> </li> <li> <p>To import a new certificate, omit the <code>CertificateArn</code> argument. Include this argument only when you want to replace a previously imported certificate.</p> </li> <li> <p>When you import a certificate by using the CLI, you must specify the certificate, the certificate chain, and the private key by their file names preceded by <code>fileb://</code>. For example, you can specify a certificate saved in the <code>C:\temp</code> folder as <code>fileb://C:\temp\certificate_to_import.pem</code>. If you are making an HTTP or HTTPS Query request, include these arguments as BLOBs. </p> </li> <li> <p>When you import a certificate by using an SDK, you must specify the certificate, the certificate chain, and the private key files in the manner required by the programming language you're using. </p> </li> <li> <p>The cryptographic algorithm of an imported certificate must match the algorithm of the signing CA. For example, if the signing CA key type is RSA, then the certificate key type must also be RSA.</p> </li> </ul> <p>This operation returns the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the imported certificate.</p>
* [listCertificates](#listcertificates) - Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a specific status be listed. You can also filter by specific attributes of the certificate. Default filtering returns only <code>RSA_2048</code> certificates. For more information, see <a>Filters</a>.
* [listTagsForCertificate](#listtagsforcertificate) - Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate, use the <a>AddTagsToCertificate</a> action. To delete a tag, use the <a>RemoveTagsFromCertificate</a> action. 
* [putAccountConfiguration](#putaccountconfiguration) - <p>Adds or modifies account-level configurations in ACM. </p> <p>The supported configuration option is <code>DaysBeforeExpiry</code>. This option specifies the number of days prior to certificate expiration when ACM starts generating <code>EventBridge</code> events. ACM sends one event per day per certificate until the certificate expires. By default, accounts receive events starting 45 days before certificate expiration.</p>
* [removeTagsFromCertificate](#removetagsfromcertificate) - <p>Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this function, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. </p> <p>To add tags to a certificate, use the <a>AddTagsToCertificate</a> action. To view all of the tags that have been applied to a specific ACM certificate, use the <a>ListTagsForCertificate</a> action. </p>
* [renewCertificate](#renewcertificate) - Renews an eligible ACM certificate. At this time, only exported private certificates can be renewed with this operation. In order to renew your Amazon Web Services Private CA certificates with ACM, you must first <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaPermissions.html">grant the ACM service principal permission to do so</a>. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/manual-renewal.html">Testing Managed Renewal</a> in the ACM User Guide.
* [requestCertificate](#requestcertificate) - <p>Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate, you must specify a fully qualified domain name (FQDN) in the <code>DomainName</code> parameter. You can also specify additional FQDNs in the <code>SubjectAlternativeNames</code> parameter. </p> <p>If you are requesting a private certificate, domain validation is not required. If you are requesting a public certificate, each domain name that you specify must be validated to verify that you own or control the domain. You can use <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html">email validation</a>. We recommend that you use DNS validation. ACM issues public certificates after receiving approval from the domain owner. </p> <note> <p>ACM behavior differs from the <a href="https://datatracker.ietf.org/doc/html/rfc6125#appendix-B.2">RFC 6125</a> specification of the certificate validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common name (CN).</p> </note> <p>After successful completion of the <code>RequestCertificate</code> action, there is a delay of several seconds before you can retrieve information about the new certificate.</p>
* [resendValidationEmail](#resendvalidationemail) - Resends the email that requests domain ownership validation. The domain owner or an authorized representative must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in the mail to navigate to the Amazon certificate approval website and then clicking <b>I Approve</b>. However, the validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have elapsed since your original request or since your last attempt to resend validation mail, you must request a new certificate. For more information about setting up your contact email addresses, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/setup-email.html">Configure Email for your Domain</a>. 
* [updateCertificateOptions](#updatecertificateoptions) - Updates a certificate. Currently, you can use this function to specify whether to opt in to or out of recording your certificate in a certificate transparency log. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency"> Opting Out of Certificate Transparency Logging</a>. 

## addTagsToCertificate

<p>Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a <code>key</code> and an optional <code>value</code>. You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. </p> <p>You can apply a tag to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply the same tag to multiple certificates if you want to filter for a common relationship among those certificates. Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load balancer to indicate that they are both used by the same website. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/tags.html">Tagging ACM certificates</a>. </p> <p>To remove one or more tags, use the <a>RemoveTagsFromCertificate</a> action. To view all of the tags that have been applied to the certificate, use the <a>ListTagsForCertificate</a> action. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTagsToCertificateRequest;
import org.openapis.openapi.models.operations.AddTagsToCertificateResponse;
import org.openapis.openapi.models.operations.AddTagsToCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddTagsToCertificateRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddTagsToCertificateRequest req = new AddTagsToCertificateRequest(                new AddTagsToCertificateRequest("minus",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("excepturi") {{
                                                    key = "voluptatum";
                                                    value = "iusto";
                                                }}),
                                                add(new Tag("temporibus") {{
                                                    key = "nisi";
                                                    value = "recusandae";
                                                }}),
                                                add(new Tag("veritatis") {{
                                                    key = "ab";
                                                    value = "quis";
                                                }}),
                                                add(new Tag("ipsam") {{
                                                    key = "deserunt";
                                                    value = "perferendis";
                                                }}),
                                            }});, AddTagsToCertificateXAmzTargetEnum.CERTIFICATE_MANAGER_ADD_TAGS_TO_CERTIFICATE) {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "quo";
                xAmzDate = "odit";
                xAmzSecurityToken = "at";
                xAmzSignature = "at";
                xAmzSignedHeaders = "maiores";
            }};            

            AddTagsToCertificateResponse res = sdk.sdk.addTagsToCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCertificate

<p>Deletes a certificate and its associated private key. If this action succeeds, the certificate no longer appears in the list that can be displayed by calling the <a>ListCertificates</a> action or be retrieved by calling the <a>GetCertificate</a> action. The certificate will not be available for use by Amazon Web Services services integrated with ACM. </p> <note> <p>You cannot delete an ACM certificate that is being used by another Amazon Web Services service. To delete a certificate that is in use, the certificate association must first be removed.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCertificateRequest;
import org.openapis.openapi.models.operations.DeleteCertificateResponse;
import org.openapis.openapi.models.operations.DeleteCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCertificateRequest req = new DeleteCertificateRequest(                new DeleteCertificateRequest("quod");, DeleteCertificateXAmzTargetEnum.CERTIFICATE_MANAGER_DELETE_CERTIFICATE) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "esse";
                xAmzCredential = "totam";
                xAmzDate = "porro";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "nam";
            }};            

            DeleteCertificateResponse res = sdk.sdk.deleteCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCertificate

<p>Returns detailed metadata about the specified ACM certificate.</p> <p>If you have just created a certificate using the <code>RequestCertificate</code> action, there is a delay of several seconds before you can retrieve information about it.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCertificateRequest;
import org.openapis.openapi.models.operations.DescribeCertificateResponse;
import org.openapis.openapi.models.operations.DescribeCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCertificateRequest req = new DescribeCertificateRequest(                new DescribeCertificateRequest("occaecati");, DescribeCertificateXAmzTargetEnum.CERTIFICATE_MANAGER_DESCRIBE_CERTIFICATE) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "hic";
                xAmzDate = "optio";
                xAmzSecurityToken = "totam";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "commodi";
            }};            

            DescribeCertificateResponse res = sdk.sdk.describeCertificate(req);

            if (res.describeCertificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportCertificate

<p>Exports a private certificate issued by a private certificate authority (CA) for use anywhere. The exported file contains the certificate, the certificate chain, and the encrypted private 2048-bit RSA key associated with the public key that is embedded in the certificate. For security, you must assign a passphrase for the private key when exporting it. </p> <p>For information about exporting and formatting a certificate using the ACM console or CLI, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-export-private.html">Export a Private Certificate</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportCertificateRequest;
import org.openapis.openapi.models.operations.ExportCertificateResponse;
import org.openapis.openapi.models.operations.ExportCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.ExportCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExportCertificateRequest req = new ExportCertificateRequest(                new ExportCertificateRequest("modi", "qui");, ExportCertificateXAmzTargetEnum.CERTIFICATE_MANAGER_EXPORT_CERTIFICATE) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "cum";
                xAmzCredential = "esse";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "perferendis";
            }};            

            ExportCertificateResponse res = sdk.sdk.exportCertificate(req);

            if (res.exportCertificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountConfiguration

Returns the account configuration options associated with an Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountConfigurationRequest;
import org.openapis.openapi.models.operations.GetAccountConfigurationResponse;
import org.openapis.openapi.models.operations.GetAccountConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountConfigurationRequest req = new GetAccountConfigurationRequest(GetAccountConfigurationXAmzTargetEnum.CERTIFICATE_MANAGER_GET_ACCOUNT_CONFIGURATION) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            GetAccountConfigurationResponse res = sdk.sdk.getAccountConfiguration(req);

            if (res.getAccountConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCertificate

Retrieves an Amazon-issued certificate and its certificate chain. The chain consists of the certificate of the issuing CA and the intermediate certificates of any other subordinate CAs. All of the certificates are base64 encoded. You can use <a href="https://wiki.openssl.org/index.php/Command_Line_Utilities">OpenSSL</a> to decode the certificates and inspect individual fields.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCertificateRequest;
import org.openapis.openapi.models.operations.GetCertificateResponse;
import org.openapis.openapi.models.operations.GetCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCertificateRequest req = new GetCertificateRequest(                new GetCertificateRequest("fuga");, GetCertificateXAmzTargetEnum.CERTIFICATE_MANAGER_GET_CERTIFICATE) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "iste";
                xAmzDate = "iure";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "architecto";
            }};            

            GetCertificateResponse res = sdk.sdk.getCertificate(req);

            if (res.getCertificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importCertificate

<p>Imports a certificate into Certificate Manager (ACM) to use with services that are integrated with ACM. Note that <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-services.html">integrated services</a> allow only certificate types and keys they support to be associated with their resources. Further, their support differs depending on whether the certificate is imported into IAM or into ACM. For more information, see the documentation for each service. For more information about importing certificates into ACM, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing Certificates</a> in the <i>Certificate Manager User Guide</i>. </p> <note> <p>ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for certificates that you import.</p> </note> <p>Note the following guidelines when importing third party certificates:</p> <ul> <li> <p>You must enter the private key that matches the certificate you are importing.</p> </li> <li> <p>The private key must be unencrypted. You cannot import a private key that is protected by a password or a passphrase.</p> </li> <li> <p>The private key must be no larger than 5 KB (5,120 bytes).</p> </li> <li> <p>If the certificate you are importing is not self-signed, you must enter its certificate chain.</p> </li> <li> <p>If a certificate chain is included, the issuer must be the subject of one of the certificates in the chain.</p> </li> <li> <p>The certificate, private key, and certificate chain must be PEM-encoded.</p> </li> <li> <p>The current time must be between the <code>Not Before</code> and <code>Not After</code> certificate fields.</p> </li> <li> <p>The <code>Issuer</code> field must not be empty.</p> </li> <li> <p>The OCSP authority URL, if present, must not exceed 1000 characters.</p> </li> <li> <p>To import a new certificate, omit the <code>CertificateArn</code> argument. Include this argument only when you want to replace a previously imported certificate.</p> </li> <li> <p>When you import a certificate by using the CLI, you must specify the certificate, the certificate chain, and the private key by their file names preceded by <code>fileb://</code>. For example, you can specify a certificate saved in the <code>C:\temp</code> folder as <code>fileb://C:\temp\certificate_to_import.pem</code>. If you are making an HTTP or HTTPS Query request, include these arguments as BLOBs. </p> </li> <li> <p>When you import a certificate by using an SDK, you must specify the certificate, the certificate chain, and the private key files in the manner required by the programming language you're using. </p> </li> <li> <p>The cryptographic algorithm of an imported certificate must match the algorithm of the signing CA. For example, if the signing CA key type is RSA, then the certificate key type must also be RSA.</p> </li> </ul> <p>This operation returns the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the imported certificate.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportCertificateRequest;
import org.openapis.openapi.models.operations.ImportCertificateResponse;
import org.openapis.openapi.models.operations.ImportCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.ImportCertificateRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportCertificateRequest req = new ImportCertificateRequest(                new ImportCertificateRequest("reiciendis", "est") {{
                                certificateArn = "mollitia";
                                certificateChain = "laborum";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("explicabo") {{
                                        key = "dolorem";
                                        value = "corporis";
                                    }}),
                                }};
                            }};, ImportCertificateXAmzTargetEnum.CERTIFICATE_MANAGER_IMPORT_CERTIFICATE) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "enim";
                xAmzCredential = "omnis";
                xAmzDate = "nemo";
                xAmzSecurityToken = "minima";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "accusantium";
            }};            

            ImportCertificateResponse res = sdk.sdk.importCertificate(req);

            if (res.importCertificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCertificates

Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a specific status be listed. You can also filter by specific attributes of the certificate. Default filtering returns only <code>RSA_2048</code> certificates. For more information, see <a>Filters</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCertificatesRequest;
import org.openapis.openapi.models.operations.ListCertificatesResponse;
import org.openapis.openapi.models.operations.ListCertificatesXAmzTargetEnum;
import org.openapis.openapi.models.shared.CertificateStatusEnum;
import org.openapis.openapi.models.shared.ExtendedKeyUsageNameEnum;
import org.openapis.openapi.models.shared.Filters;
import org.openapis.openapi.models.shared.KeyAlgorithmEnum;
import org.openapis.openapi.models.shared.KeyUsageNameEnum;
import org.openapis.openapi.models.shared.ListCertificatesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortByEnum;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCertificatesRequest req = new ListCertificatesRequest(                new ListCertificatesRequest() {{
                                certificateStatuses = new org.openapis.openapi.models.shared.CertificateStatusEnum[]{{
                                    add(CertificateStatusEnum.FAILED),
                                    add(CertificateStatusEnum.FAILED),
                                    add(CertificateStatusEnum.PENDING_VALIDATION),
                                }};
                                includes = new Filters() {{
                                    extendedKeyUsage = new org.openapis.openapi.models.shared.ExtendedKeyUsageNameEnum[]{{
                                        add(ExtendedKeyUsageNameEnum.CODE_SIGNING),
                                        add(ExtendedKeyUsageNameEnum.IPSEC_TUNNEL),
                                        add(ExtendedKeyUsageNameEnum.TLS_WEB_CLIENT_AUTHENTICATION),
                                    }};
                                    keyTypes = new org.openapis.openapi.models.shared.KeyAlgorithmEnum[]{{
                                        add(KeyAlgorithmEnum.EC_PRIME256V1),
                                        add(KeyAlgorithmEnum.EC_PRIME256V1),
                                        add(KeyAlgorithmEnum.RSA2048),
                                        add(KeyAlgorithmEnum.RSA3072),
                                    }};
                                    keyUsage = new org.openapis.openapi.models.shared.KeyUsageNameEnum[]{{
                                        add(KeyUsageNameEnum.CERTIFICATE_SIGNING),
                                        add(KeyUsageNameEnum.KEY_ENCIPHERMENT),
                                    }};
                                }};;
                                maxItems = 623510L;
                                nextToken = "quia";
                                sortBy = SortByEnum.CREATED_AT;
                                sortOrder = SortOrderEnum.ASCENDING;
                            }};, ListCertificatesXAmzTargetEnum.CERTIFICATE_MANAGER_LIST_CERTIFICATES) {{
                maxItems = "vitae";
                nextToken = "laborum";
                xAmzAlgorithm = "animi";
                xAmzContentSha256 = "enim";
                xAmzCredential = "odit";
                xAmzDate = "quo";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "ipsam";
            }};            

            ListCertificatesResponse res = sdk.sdk.listCertificates(req);

            if (res.listCertificatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForCertificate

Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate, use the <a>AddTagsToCertificate</a> action. To delete a tag, use the <a>RemoveTagsFromCertificate</a> action. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForCertificateRequest;
import org.openapis.openapi.models.operations.ListTagsForCertificateResponse;
import org.openapis.openapi.models.operations.ListTagsForCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForCertificateRequest req = new ListTagsForCertificateRequest(                new ListTagsForCertificateRequest("possimus");, ListTagsForCertificateXAmzTargetEnum.CERTIFICATE_MANAGER_LIST_TAGS_FOR_CERTIFICATE) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "error";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "reiciendis";
            }};            

            ListTagsForCertificateResponse res = sdk.sdk.listTagsForCertificate(req);

            if (res.listTagsForCertificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAccountConfiguration

<p>Adds or modifies account-level configurations in ACM. </p> <p>The supported configuration option is <code>DaysBeforeExpiry</code>. This option specifies the number of days prior to certificate expiration when ACM starts generating <code>EventBridge</code> events. ACM sends one event per day per certificate until the certificate expires. By default, accounts receive events starting 45 days before certificate expiration.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAccountConfigurationRequest;
import org.openapis.openapi.models.operations.PutAccountConfigurationResponse;
import org.openapis.openapi.models.operations.PutAccountConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ExpiryEventsConfiguration;
import org.openapis.openapi.models.shared.PutAccountConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAccountConfigurationRequest req = new PutAccountConfigurationRequest(                new PutAccountConfigurationRequest("vero") {{
                                expiryEvents = new ExpiryEventsConfiguration() {{
                                    daysBeforeExpiry = 468651L;
                                }};;
                            }};, PutAccountConfigurationXAmzTargetEnum.CERTIFICATE_MANAGER_PUT_ACCOUNT_CONFIGURATION) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "ipsa";
                xAmzDate = "omnis";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "perferendis";
            }};            

            PutAccountConfigurationResponse res = sdk.sdk.putAccountConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeTagsFromCertificate

<p>Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this function, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. </p> <p>To add tags to a certificate, use the <a>AddTagsToCertificate</a> action. To view all of the tags that have been applied to a specific ACM certificate, use the <a>ListTagsForCertificate</a> action. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveTagsFromCertificateRequest;
import org.openapis.openapi.models.operations.RemoveTagsFromCertificateResponse;
import org.openapis.openapi.models.operations.RemoveTagsFromCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.RemoveTagsFromCertificateRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveTagsFromCertificateRequest req = new RemoveTagsFromCertificateRequest(                new RemoveTagsFromCertificateRequest("reprehenderit",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("corporis") {{
                                                    key = "maiores";
                                                    value = "dicta";
                                                }}),
                                                add(new Tag("dicta") {{
                                                    key = "dolore";
                                                    value = "iusto";
                                                }}),
                                            }});, RemoveTagsFromCertificateXAmzTargetEnum.CERTIFICATE_MANAGER_REMOVE_TAGS_FROM_CERTIFICATE) {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "commodi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "ipsum";
            }};            

            RemoveTagsFromCertificateResponse res = sdk.sdk.removeTagsFromCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## renewCertificate

Renews an eligible ACM certificate. At this time, only exported private certificates can be renewed with this operation. In order to renew your Amazon Web Services Private CA certificates with ACM, you must first <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaPermissions.html">grant the ACM service principal permission to do so</a>. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/manual-renewal.html">Testing Managed Renewal</a> in the ACM User Guide.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RenewCertificateRequest;
import org.openapis.openapi.models.operations.RenewCertificateResponse;
import org.openapis.openapi.models.operations.RenewCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.RenewCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RenewCertificateRequest req = new RenewCertificateRequest(                new RenewCertificateRequest("molestias");, RenewCertificateXAmzTargetEnum.CERTIFICATE_MANAGER_RENEW_CERTIFICATE) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "modi";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "rem";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "quasi";
            }};            

            RenewCertificateResponse res = sdk.sdk.renewCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## requestCertificate

<p>Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate, you must specify a fully qualified domain name (FQDN) in the <code>DomainName</code> parameter. You can also specify additional FQDNs in the <code>SubjectAlternativeNames</code> parameter. </p> <p>If you are requesting a private certificate, domain validation is not required. If you are requesting a public certificate, each domain name that you specify must be validated to verify that you own or control the domain. You can use <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html">email validation</a>. We recommend that you use DNS validation. ACM issues public certificates after receiving approval from the domain owner. </p> <note> <p>ACM behavior differs from the <a href="https://datatracker.ietf.org/doc/html/rfc6125#appendix-B.2">RFC 6125</a> specification of the certificate validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common name (CN).</p> </note> <p>After successful completion of the <code>RequestCertificate</code> action, there is a delay of several seconds before you can retrieve information about the new certificate.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestCertificateRequest;
import org.openapis.openapi.models.operations.RequestCertificateResponse;
import org.openapis.openapi.models.operations.RequestCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.CertificateOptions;
import org.openapis.openapi.models.shared.CertificateTransparencyLoggingPreferenceEnum;
import org.openapis.openapi.models.shared.DomainValidationOption;
import org.openapis.openapi.models.shared.KeyAlgorithmEnum;
import org.openapis.openapi.models.shared.RequestCertificateRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.ValidationMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RequestCertificateRequest req = new RequestCertificateRequest(                new RequestCertificateRequest("sint") {{
                                certificateAuthorityArn = "veritatis";
                                domainValidationOptions = new org.openapis.openapi.models.shared.DomainValidationOption[]{{
                                    add(new DomainValidationOption("consequatur", "est") {{
                                        domainName = "incidunt";
                                        validationDomain = "enim";
                                    }}),
                                    add(new DomainValidationOption("deserunt", "distinctio") {{
                                        domainName = "quibusdam";
                                        validationDomain = "explicabo";
                                    }}),
                                    add(new DomainValidationOption("modi", "qui") {{
                                        domainName = "quibusdam";
                                        validationDomain = "labore";
                                    }}),
                                    add(new DomainValidationOption("quos", "perferendis") {{
                                        domainName = "aliquid";
                                        validationDomain = "cupiditate";
                                    }}),
                                }};
                                idempotencyToken = "magni";
                                keyAlgorithm = KeyAlgorithmEnum.EC_SECP384R1;
                                options = new CertificateOptions() {{
                                    certificateTransparencyLoggingPreference = CertificateTransparencyLoggingPreferenceEnum.ENABLED;
                                }};;
                                subjectAlternativeNames = new String[]{{
                                    add("fugit"),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("facilis") {{
                                        key = "excepturi";
                                        value = "tempora";
                                    }}),
                                    add(new Tag("delectus") {{
                                        key = "tempore";
                                        value = "labore";
                                    }}),
                                    add(new Tag("eligendi") {{
                                        key = "eum";
                                        value = "non";
                                    }}),
                                }};
                                validationMethod = ValidationMethodEnum.DNS;
                            }};, RequestCertificateXAmzTargetEnum.CERTIFICATE_MANAGER_REQUEST_CERTIFICATE) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "provident";
                xAmzCredential = "necessitatibus";
                xAmzDate = "sint";
                xAmzSecurityToken = "officia";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "debitis";
            }};            

            RequestCertificateResponse res = sdk.sdk.requestCertificate(req);

            if (res.requestCertificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resendValidationEmail

Resends the email that requests domain ownership validation. The domain owner or an authorized representative must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in the mail to navigate to the Amazon certificate approval website and then clicking <b>I Approve</b>. However, the validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have elapsed since your original request or since your last attempt to resend validation mail, you must request a new certificate. For more information about setting up your contact email addresses, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/setup-email.html">Configure Email for your Domain</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResendValidationEmailRequest;
import org.openapis.openapi.models.operations.ResendValidationEmailResponse;
import org.openapis.openapi.models.operations.ResendValidationEmailXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResendValidationEmailRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResendValidationEmailRequest req = new ResendValidationEmailRequest(                new ResendValidationEmailRequest("dolorum", "in", "in");, ResendValidationEmailXAmzTargetEnum.CERTIFICATE_MANAGER_RESEND_VALIDATION_EMAIL) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "rerum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "facere";
            }};            

            ResendValidationEmailResponse res = sdk.sdk.resendValidationEmail(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCertificateOptions

Updates a certificate. Currently, you can use this function to specify whether to opt in to or out of recording your certificate in a certificate transparency log. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency"> Opting Out of Certificate Transparency Logging</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCertificateOptionsRequest;
import org.openapis.openapi.models.operations.UpdateCertificateOptionsResponse;
import org.openapis.openapi.models.operations.UpdateCertificateOptionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CertificateOptions;
import org.openapis.openapi.models.shared.CertificateTransparencyLoggingPreferenceEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateCertificateOptionsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCertificateOptionsRequest req = new UpdateCertificateOptionsRequest(                new UpdateCertificateOptionsRequest("aliquid",                 new CertificateOptions() {{
                                                certificateTransparencyLoggingPreference = CertificateTransparencyLoggingPreferenceEnum.DISABLED;
                                            }};);, UpdateCertificateOptionsXAmzTargetEnum.CERTIFICATE_MANAGER_UPDATE_CERTIFICATE_OPTIONS) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "non";
                xAmzCredential = "occaecati";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quidem";
            }};            

            UpdateCertificateOptionsResponse res = sdk.sdk.updateCertificateOptions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
