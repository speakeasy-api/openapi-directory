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
import org.openapis.openapi.models.operations.CreateCertificateAuthorityRequest;
import org.openapis.openapi.models.operations.CreateCertificateAuthorityResponse;
import org.openapis.openapi.models.operations.CreateCertificateAuthorityXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessDescription;
import org.openapis.openapi.models.shared.AccessMethod;
import org.openapis.openapi.models.shared.AccessMethodTypeEnum;
import org.openapis.openapi.models.shared.Asn1Subject;
import org.openapis.openapi.models.shared.CertificateAuthorityConfiguration;
import org.openapis.openapi.models.shared.CertificateAuthorityTypeEnum;
import org.openapis.openapi.models.shared.CertificateAuthorityUsageModeEnum;
import org.openapis.openapi.models.shared.CreateCertificateAuthorityRequest;
import org.openapis.openapi.models.shared.CrlConfiguration;
import org.openapis.openapi.models.shared.CsrExtensions;
import org.openapis.openapi.models.shared.CustomAttribute;
import org.openapis.openapi.models.shared.EdiPartyName;
import org.openapis.openapi.models.shared.GeneralName;
import org.openapis.openapi.models.shared.KeyAlgorithmEnum;
import org.openapis.openapi.models.shared.KeyStorageSecurityStandardEnum;
import org.openapis.openapi.models.shared.KeyUsage;
import org.openapis.openapi.models.shared.OcspConfiguration;
import org.openapis.openapi.models.shared.OtherName;
import org.openapis.openapi.models.shared.RevocationConfiguration;
import org.openapis.openapi.models.shared.S3ObjectAclEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SigningAlgorithmEnum;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCertificateAuthorityRequest req = new CreateCertificateAuthorityRequest(                new CreateCertificateAuthorityRequest(                new CertificateAuthorityConfiguration(KeyAlgorithmEnum.EC_PRIME256V1, SigningAlgorithmEnum.SHA384_WITHRSA,                 new Asn1Subject() {{
                                                                commonName = "quibusdam";
                                                                country = "Mozambique";
                                                                customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                                    add(new CustomAttribute("vel", "error") {{
                                                                        objectIdentifier = "corrupti";
                                                                        value = "illum";
                                                                    }}),
                                                                    add(new CustomAttribute("iure", "magnam") {{
                                                                        objectIdentifier = "deserunt";
                                                                        value = "suscipit";
                                                                    }}),
                                                                    add(new CustomAttribute("delectus", "tempora") {{
                                                                        objectIdentifier = "debitis";
                                                                        value = "ipsa";
                                                                    }}),
                                                                    add(new CustomAttribute("minus", "placeat") {{
                                                                        objectIdentifier = "suscipit";
                                                                        value = "molestiae";
                                                                    }}),
                                                                }};
                                                                distinguishedNameQualifier = "voluptatum";
                                                                generationQualifier = "iusto";
                                                                givenName = "excepturi";
                                                                initials = "nisi";
                                                                locality = "recusandae";
                                                                organization = "temporibus";
                                                                organizationalUnit = "ab";
                                                                pseudonym = "quis";
                                                                serialNumber = "veritatis";
                                                                state = "deserunt";
                                                                surname = "perferendis";
                                                                title = "Mrs.";
                                                            }};) {{
                                                csrExtensions = new CsrExtensions() {{
                                                    keyUsage = new KeyUsage() {{
                                                        crlSign = false;
                                                        dataEncipherment = false;
                                                        decipherOnly = false;
                                                        digitalSignature = false;
                                                        encipherOnly = false;
                                                        keyAgreement = false;
                                                        keyCertSign = false;
                                                        keyEncipherment = false;
                                                        nonRepudiation = false;
                                                    }};;
                                                    subjectInformationAccess = new org.openapis.openapi.models.shared.AccessDescription[]{{
                                                        add(new AccessDescription(                new GeneralName() {{
                                                                            directoryName = new Asn1Subject() {{
                                                                                commonName = "perferendis";
                                                                                country = "Ghana";
                                                                                customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                                                    add(new CustomAttribute("dolor", "natus") {{
                                                                                        objectIdentifier = "sed";
                                                                                        value = "iste";
                                                                                    }}),
                                                                                    add(new CustomAttribute("saepe", "fuga") {{
                                                                                        objectIdentifier = "laboriosam";
                                                                                        value = "hic";
                                                                                    }}),
                                                                                    add(new CustomAttribute("iste", "iure") {{
                                                                                        objectIdentifier = "in";
                                                                                        value = "corporis";
                                                                                    }}),
                                                                                }};
                                                                                distinguishedNameQualifier = "saepe";
                                                                                generationQualifier = "quidem";
                                                                                givenName = "architecto";
                                                                                initials = "ipsa";
                                                                                locality = "reiciendis";
                                                                                organization = "est";
                                                                                organizationalUnit = "mollitia";
                                                                                pseudonym = "laborum";
                                                                                serialNumber = "dolores";
                                                                                state = "dolorem";
                                                                                surname = "corporis";
                                                                                title = "Mr.";
                                                                            }};;
                                                                            dnsName = "nobis";
                                                                            ediPartyName = new EdiPartyName("enim") {{
                                                                                nameAssigner = "omnis";
                                                                            }};;
                                                                            ipAddress = "nemo";
                                                                            otherName = new OtherName("minima", "excepturi");;
                                                                            registeredId = "accusantium";
                                                                            rfc822Name = "iure";
                                                                            uniformResourceIdentifier = "culpa";
                                                                        }};,                 new AccessMethod() {{
                                                                            accessMethodType = AccessMethodTypeEnum.RESOURCE_PKI_NOTIFY;
                                                                            customObjectIdentifier = "sapiente";
                                                                        }};) {{
                                                            accessLocation = new GeneralName() {{
                                                                directoryName = new Asn1Subject() {{
                                                                    commonName = "sapiente";
                                                                    country = "San Marino";
                                                                    customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                                        add(new CustomAttribute("maiores", "molestiae") {{
                                                                            objectIdentifier = "at";
                                                                            value = "at";
                                                                        }}),
                                                                    }};
                                                                    distinguishedNameQualifier = "quod";
                                                                    generationQualifier = "quod";
                                                                    givenName = "esse";
                                                                    initials = "totam";
                                                                    locality = "porro";
                                                                    organization = "dolorum";
                                                                    organizationalUnit = "dicta";
                                                                    pseudonym = "nam";
                                                                    serialNumber = "officia";
                                                                    state = "occaecati";
                                                                    surname = "fugit";
                                                                    title = "Ms.";
                                                                }};
                                                                dnsName = "hic";
                                                                ediPartyName = new EdiPartyName("beatae") {{
                                                                    nameAssigner = "optio";
                                                                    partyName = "totam";
                                                                }};
                                                                ipAddress = "commodi";
                                                                otherName = new OtherName("qui", "impedit") {{
                                                                    typeId = "molestiae";
                                                                    value = "modi";
                                                                }};
                                                                registeredId = "cum";
                                                                rfc822Name = "esse";
                                                                uniformResourceIdentifier = "ipsum";
                                                            }};
                                                            accessMethod = new AccessMethod() {{
                                                                accessMethodType = AccessMethodTypeEnum.RESOURCE_PKI_MANIFEST;
                                                                customObjectIdentifier = "aspernatur";
                                                            }};
                                                        }}),
                                                        add(new AccessDescription(                new GeneralName() {{
                                                                            directoryName = new Asn1Subject() {{
                                                                                commonName = "reiciendis";
                                                                                country = "Virgin Islands, U.S.";
                                                                                customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                                                    add(new CustomAttribute("voluptatibus", "ipsa") {{
                                                                                        objectIdentifier = "nihil";
                                                                                        value = "praesentium";
                                                                                    }}),
                                                                                    add(new CustomAttribute("cum", "perferendis") {{
                                                                                        objectIdentifier = "omnis";
                                                                                        value = "voluptate";
                                                                                    }}),
                                                                                    add(new CustomAttribute("ut", "maiores") {{
                                                                                        objectIdentifier = "doloremque";
                                                                                        value = "reprehenderit";
                                                                                    }}),
                                                                                    add(new CustomAttribute("dolore", "iusto") {{
                                                                                        objectIdentifier = "dicta";
                                                                                        value = "corporis";
                                                                                    }}),
                                                                                }};
                                                                                distinguishedNameQualifier = "dicta";
                                                                                generationQualifier = "harum";
                                                                                givenName = "enim";
                                                                                initials = "accusamus";
                                                                                locality = "commodi";
                                                                                organization = "repudiandae";
                                                                                organizationalUnit = "quae";
                                                                                pseudonym = "ipsum";
                                                                                serialNumber = "quidem";
                                                                                state = "molestias";
                                                                                surname = "excepturi";
                                                                                title = "Dr.";
                                                                            }};;
                                                                            dnsName = "modi";
                                                                            ediPartyName = new EdiPartyName("praesentium") {{
                                                                                nameAssigner = "rem";
                                                                            }};;
                                                                            ipAddress = "voluptates";
                                                                            otherName = new OtherName("quasi", "repudiandae");;
                                                                            registeredId = "sint";
                                                                            rfc822Name = "veritatis";
                                                                            uniformResourceIdentifier = "itaque";
                                                                        }};,                 new AccessMethod() {{
                                                                            accessMethodType = AccessMethodTypeEnum.CA_REPOSITORY;
                                                                            customObjectIdentifier = "enim";
                                                                        }};) {{
                                                            accessLocation = new GeneralName() {{
                                                                directoryName = new Asn1Subject() {{
                                                                    commonName = "architecto";
                                                                    country = "Niue";
                                                                    customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                                        add(new CustomAttribute("repellat", "mollitia") {{
                                                                            objectIdentifier = "culpa";
                                                                            value = "consequuntur";
                                                                        }}),
                                                                    }};
                                                                    distinguishedNameQualifier = "occaecati";
                                                                    generationQualifier = "numquam";
                                                                    givenName = "commodi";
                                                                    initials = "quam";
                                                                    locality = "molestiae";
                                                                    organization = "velit";
                                                                    organizationalUnit = "error";
                                                                    pseudonym = "quia";
                                                                    serialNumber = "quis";
                                                                    state = "vitae";
                                                                    surname = "laborum";
                                                                    title = "Miss";
                                                                }};
                                                                dnsName = "enim";
                                                                ediPartyName = new EdiPartyName("sequi") {{
                                                                    nameAssigner = "odit";
                                                                    partyName = "quo";
                                                                }};
                                                                ipAddress = "tenetur";
                                                                otherName = new OtherName("possimus", "aut") {{
                                                                    typeId = "ipsam";
                                                                    value = "id";
                                                                }};
                                                                registeredId = "quasi";
                                                                rfc822Name = "error";
                                                                uniformResourceIdentifier = "temporibus";
                                                            }};
                                                            accessMethod = new AccessMethod() {{
                                                                accessMethodType = AccessMethodTypeEnum.RESOURCE_PKI_NOTIFY;
                                                                customObjectIdentifier = "quasi";
                                                            }};
                                                        }}),
                                                        add(new AccessDescription(                new GeneralName() {{
                                                                            directoryName = new Asn1Subject() {{
                                                                                commonName = "magnam";
                                                                                country = "Saint Vincent and the Grenadines";
                                                                                customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                                                    add(new CustomAttribute("laborum", "accusamus") {{
                                                                                        objectIdentifier = "ea";
                                                                                        value = "aliquid";
                                                                                    }}),
                                                                                    add(new CustomAttribute("enim", "accusamus") {{
                                                                                        objectIdentifier = "non";
                                                                                        value = "occaecati";
                                                                                    }}),
                                                                                    add(new CustomAttribute("provident", "nam") {{
                                                                                        objectIdentifier = "delectus";
                                                                                        value = "quidem";
                                                                                    }}),
                                                                                    add(new CustomAttribute("deleniti", "sapiente") {{
                                                                                        objectIdentifier = "id";
                                                                                        value = "blanditiis";
                                                                                    }}),
                                                                                }};
                                                                                distinguishedNameQualifier = "amet";
                                                                                generationQualifier = "deserunt";
                                                                                givenName = "nisi";
                                                                                initials = "vel";
                                                                                locality = "natus";
                                                                                organization = "omnis";
                                                                                organizationalUnit = "molestiae";
                                                                                pseudonym = "perferendis";
                                                                                serialNumber = "nihil";
                                                                                state = "magnam";
                                                                                surname = "distinctio";
                                                                                title = "Miss";
                                                                            }};;
                                                                            dnsName = "labore";
                                                                            ediPartyName = new EdiPartyName("labore") {{
                                                                                nameAssigner = "suscipit";
                                                                            }};;
                                                                            ipAddress = "natus";
                                                                            otherName = new OtherName("nobis", "eum");;
                                                                            registeredId = "vero";
                                                                            rfc822Name = "aspernatur";
                                                                            uniformResourceIdentifier = "architecto";
                                                                        }};,                 new AccessMethod() {{
                                                                            accessMethodType = AccessMethodTypeEnum.CA_REPOSITORY;
                                                                            customObjectIdentifier = "et";
                                                                        }};) {{
                                                            accessLocation = new GeneralName() {{
                                                                directoryName = new Asn1Subject() {{
                                                                    commonName = "consequatur";
                                                                    country = "Norway";
                                                                    customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                                        add(new CustomAttribute("distinctio", "quibusdam") {{
                                                                            objectIdentifier = "explicabo";
                                                                            value = "deserunt";
                                                                        }}),
                                                                        add(new CustomAttribute("qui", "aliquid") {{
                                                                            objectIdentifier = "labore";
                                                                            value = "modi";
                                                                        }}),
                                                                        add(new CustomAttribute("perferendis", "magni") {{
                                                                            objectIdentifier = "cupiditate";
                                                                            value = "quos";
                                                                        }}),
                                                                        add(new CustomAttribute("alias", "fugit") {{
                                                                            objectIdentifier = "assumenda";
                                                                            value = "ipsam";
                                                                        }}),
                                                                    }};
                                                                    distinguishedNameQualifier = "dolorum";
                                                                    generationQualifier = "excepturi";
                                                                    givenName = "tempora";
                                                                    initials = "facilis";
                                                                    locality = "tempore";
                                                                    organization = "labore";
                                                                    organizationalUnit = "delectus";
                                                                    pseudonym = "eum";
                                                                    serialNumber = "non";
                                                                    state = "eligendi";
                                                                    surname = "sint";
                                                                    title = "Mrs.";
                                                                }};
                                                                dnsName = "provident";
                                                                ediPartyName = new EdiPartyName("officia") {{
                                                                    nameAssigner = "necessitatibus";
                                                                    partyName = "sint";
                                                                }};
                                                                ipAddress = "dolor";
                                                                otherName = new OtherName("dolorum", "in") {{
                                                                    typeId = "debitis";
                                                                    value = "a";
                                                                }};
                                                                registeredId = "in";
                                                                rfc822Name = "illum";
                                                                uniformResourceIdentifier = "maiores";
                                                            }};
                                                            accessMethod = new AccessMethod() {{
                                                                accessMethodType = AccessMethodTypeEnum.RESOURCE_PKI_NOTIFY;
                                                                customObjectIdentifier = "dicta";
                                                            }};
                                                        }}),
                                                        add(new AccessDescription(                new GeneralName() {{
                                                                            directoryName = new Asn1Subject() {{
                                                                                commonName = "quo";
                                                                                country = "Suriname";
                                                                                customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                                                    add(new CustomAttribute("excepturi", "odit") {{
                                                                                        objectIdentifier = "maxime";
                                                                                        value = "ea";
                                                                                    }}),
                                                                                    add(new CustomAttribute("ab", "maiores") {{
                                                                                        objectIdentifier = "ea";
                                                                                        value = "accusantium";
                                                                                    }}),
                                                                                    add(new CustomAttribute("voluptate", "autem") {{
                                                                                        objectIdentifier = "quidem";
                                                                                        value = "ipsam";
                                                                                    }}),
                                                                                    add(new CustomAttribute("pariatur", "nemo") {{
                                                                                        objectIdentifier = "nam";
                                                                                        value = "eaque";
                                                                                    }}),
                                                                                }};
                                                                                distinguishedNameQualifier = "voluptatibus";
                                                                                generationQualifier = "perferendis";
                                                                                givenName = "fugiat";
                                                                                initials = "amet";
                                                                                locality = "aut";
                                                                                organization = "cumque";
                                                                                organizationalUnit = "corporis";
                                                                                pseudonym = "hic";
                                                                                serialNumber = "libero";
                                                                                state = "nobis";
                                                                                surname = "dolores";
                                                                                title = "Mrs.";
                                                                            }};;
                                                                            dnsName = "totam";
                                                                            ediPartyName = new EdiPartyName("dignissimos") {{
                                                                                nameAssigner = "eaque";
                                                                            }};;
                                                                            ipAddress = "quis";
                                                                            otherName = new OtherName("nesciunt", "eos");;
                                                                            registeredId = "perferendis";
                                                                            rfc822Name = "dolores";
                                                                            uniformResourceIdentifier = "minus";
                                                                        }};,                 new AccessMethod() {{
                                                                            accessMethodType = AccessMethodTypeEnum.RESOURCE_PKI_MANIFEST;
                                                                            customObjectIdentifier = "dolor";
                                                                        }};) {{
                                                            accessLocation = new GeneralName() {{
                                                                directoryName = new Asn1Subject() {{
                                                                    commonName = "excepturi";
                                                                    country = "Guatemala";
                                                                    customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                                        add(new CustomAttribute("accusantium", "mollitia") {{
                                                                            objectIdentifier = "quos";
                                                                            value = "sint";
                                                                        }}),
                                                                        add(new CustomAttribute("ad", "eum") {{
                                                                            objectIdentifier = "reiciendis";
                                                                            value = "mollitia";
                                                                        }}),
                                                                        add(new CustomAttribute("odit", "nemo") {{
                                                                            objectIdentifier = "dolor";
                                                                            value = "necessitatibus";
                                                                        }}),
                                                                    }};
                                                                    distinguishedNameQualifier = "quasi";
                                                                    generationQualifier = "iure";
                                                                    givenName = "doloribus";
                                                                    initials = "debitis";
                                                                    locality = "eius";
                                                                    organization = "maxime";
                                                                    organizationalUnit = "deleniti";
                                                                    pseudonym = "facilis";
                                                                    serialNumber = "in";
                                                                    state = "architecto";
                                                                    surname = "architecto";
                                                                    title = "Dr.";
                                                                }};
                                                                dnsName = "ullam";
                                                                ediPartyName = new EdiPartyName("repellat") {{
                                                                    nameAssigner = "expedita";
                                                                    partyName = "nihil";
                                                                }};
                                                                ipAddress = "quibusdam";
                                                                otherName = new OtherName("pariatur", "accusantium") {{
                                                                    typeId = "sed";
                                                                    value = "saepe";
                                                                }};
                                                                registeredId = "consequuntur";
                                                                rfc822Name = "praesentium";
                                                                uniformResourceIdentifier = "natus";
                                                            }};
                                                            accessMethod = new AccessMethod() {{
                                                                accessMethodType = AccessMethodTypeEnum.CA_REPOSITORY;
                                                                customObjectIdentifier = "sunt";
                                                            }};
                                                        }}),
                                                    }};
                                                }};;
                                            }};, CertificateAuthorityTypeEnum.SUBORDINATE) {{
                                idempotencyToken = "nostrum";
                                keyStorageSecurityStandard = KeyStorageSecurityStandardEnum.FIPS1402_LEVEL3_OR_HIGHER;
                                revocationConfiguration = new RevocationConfiguration() {{
                                    crlConfiguration = new CrlConfiguration(false) {{
                                        customCname = "recusandae";
                                        expirationInDays = 608253L;
                                        s3BucketName = "facilis";
                                        s3ObjectAcl = S3ObjectAclEnum.BUCKET_OWNER_FULL_CONTROL;
                                    }};;
                                    ocspConfiguration = new OcspConfiguration(false) {{
                                        ocspCustomCname = "voluptatem";
                                    }};;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("error") {{
                                        key = "consequuntur";
                                        value = "blanditiis";
                                    }}),
                                    add(new Tag("rerum") {{
                                        key = "eaque";
                                        value = "occaecati";
                                    }}),
                                    add(new Tag("earum") {{
                                        key = "adipisci";
                                        value = "asperiores";
                                    }}),
                                    add(new Tag("dolorum") {{
                                        key = "modi";
                                        value = "iste";
                                    }}),
                                }};
                                usageMode = CertificateAuthorityUsageModeEnum.SHORT_LIVED_CERTIFICATE;
                            }};, CreateCertificateAuthorityXAmzTargetEnum.ACM_PRIVATE_CA_CREATE_CERTIFICATE_AUTHORITY) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "provident";
                xAmzCredential = "nobis";
                xAmzDate = "libero";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "quos";
            }};            

            CreateCertificateAuthorityResponse res = sdk.createCertificateAuthority(req);

            if (res.createCertificateAuthorityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createCertificateAuthority](docs/sdk/README.md#createcertificateauthority) - <p>Creates a root or subordinate private certificate authority (CA). You must specify the CA configuration, an optional configuration for Online Certificate Status Protocol (OCSP) and/or a certificate revocation list (CRL), the CA type, and an optional idempotency token to avoid accidental creation of multiple CAs. The CA configuration specifies the name of the algorithm and key size to be used to create the CA private key, the type of signing algorithm that the CA uses, and X.500 subject information. The OCSP configuration can optionally specify a custom URL for the OCSP responder. The CRL configuration specifies the CRL expiration period in days (the validity period of the CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME alias for the S3 bucket that is included in certificates issued by the CA. If successful, this action returns the Amazon Resource Name (ARN) of the CA.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#crl-encryption">Encrypting Your CRLs</a>.</p>
* [createCertificateAuthorityAuditReport](docs/sdk/README.md#createcertificateauthorityauditreport) - <p>Creates an audit report that lists every time that your CA private key is used. The report is saved in the Amazon S3 bucket that you specify on input. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> and <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> actions use the private key. </p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaAuditReport.html#audit-report-encryption">Encrypting Your Audit Reports</a>.</p> <note> <p>You can generate a maximum of one report every 30 minutes.</p> </note>
* [createPermission](docs/sdk/README.md#createpermission) - <p>Grants one or more permissions on a private CA to the Certificate Manager (ACM) service principal (<code>acm.amazonaws.com</code>). These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA.</p> <p>You can list current permissions with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action and revoke them with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action.</p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>
* [deleteCertificateAuthority](docs/sdk/README.md#deletecertificateauthority) - <p>Deletes a private certificate authority (CA). You must provide the Amazon Resource Name (ARN) of the private CA that you want to delete. You can find the ARN by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. </p> <note> <p>Deleting a CA will invalidate other CAs and certificates below it in your CA hierarchy.</p> </note> <p>Before you can delete a CA that you have created and activated, you must disable it. To do this, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action and set the <b>CertificateAuthorityStatus</b> parameter to <code>DISABLED</code>. </p> <p>Additionally, you can delete a CA if you are waiting for it to be created (that is, the status of the CA is <code>CREATING</code>). You can also delete it if the CA has been created but you haven't yet imported the signed certificate into Amazon Web Services Private CA (that is, the status of the CA is <code>PENDING_CERTIFICATE</code>). </p> <p>When you successfully call <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a>, the CA's status changes to <code>DELETED</code>. However, the CA won't be permanently deleted until the restoration period has passed. By default, if you do not set the <code>PermanentDeletionTimeInDays</code> parameter, the CA remains restorable for 30 days. You can set the parameter from 7 to 30 days. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> action returns the time remaining in the restoration window of a private CA in the <code>DELETED</code> state. To restore an eligible CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RestoreCertificateAuthority.html">RestoreCertificateAuthority</a> action.</p>
* [deletePermission](docs/sdk/README.md#deletepermission) - <p>Revokes permissions on a private CA granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). </p> <p>These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. If you revoke these permissions, ACM will no longer renew the affected certificates automatically.</p> <p>Permissions can be granted with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action and listed with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action. </p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>
* [deletePolicy](docs/sdk/README.md#deletepolicy) - <p>Deletes the resource-based policy attached to a private CA. Deletion will remove any access that the policy has granted. If there is no policy attached to the private CA, this action will return successful.</p> <p>If you delete a policy that was applied through Amazon Web Services Resource Access Manager (RAM), the CA will be removed from all shares in which it was included. </p> <p>The Certificate Manager Service Linked Role that the policy supports is not affected when you delete the policy. </p> <p>The current policy can be shown with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and updated with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_PutPolicy.html">PutPolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>
* [describeCertificateAuthority](docs/sdk/README.md#describecertificateauthority) - <p>Lists information about your private certificate authority (CA) or one that has been shared with you. You specify the private CA on input by its ARN (Amazon Resource Name). The output contains the status of your CA. This can be any of the following: </p> <ul> <li> <p> <code>CREATING</code> - Amazon Web Services Private CA is creating your private certificate authority.</p> </li> <li> <p> <code>PENDING_CERTIFICATE</code> - The certificate is pending. You must use your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA to sign your private CA CSR and then import it into Amazon Web Services Private CA. </p> </li> <li> <p> <code>ACTIVE</code> - Your private CA is active.</p> </li> <li> <p> <code>DISABLED</code> - Your private CA has been disabled.</p> </li> <li> <p> <code>EXPIRED</code> - Your private CA certificate has expired.</p> </li> <li> <p> <code>FAILED</code> - Your private CA has failed. Your CA can fail because of problems such a network outage or back-end Amazon Web Services failure or other errors. A failed CA can never return to the pending state. You must create a new CA. </p> </li> <li> <p> <code>DELETED</code> - Your private CA is within the restoration period, after which it is permanently deleted. The length of time remaining in the CA's restoration period is also included in this action's output.</p> </li> </ul>
* [describeCertificateAuthorityAuditReport](docs/sdk/README.md#describecertificateauthorityauditreport) - Lists information about a specific audit report created by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action. Audit information is created every time the certificate authority (CA) private key is used. The private key is used when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action or the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> action. 
* [getCertificate](docs/sdk/README.md#getcertificate) - Retrieves a certificate from your private CA or one that has been shared with you. The ARN of the certificate is returned when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action. You must specify both the ARN of your private CA and the ARN of the issued certificate when calling the <b>GetCertificate</b> action. You can retrieve the certificate if it is in the <b>ISSUED</b> state. You can call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action to create a report that contains information about all of the certificates issued and revoked by your private CA. 
* [getCertificateAuthorityCertificate](docs/sdk/README.md#getcertificateauthoritycertificate) - Retrieves the certificate and certificate chain for your private certificate authority (CA) or one that has been shared with you. Both the certificate and the chain are base64 PEM-encoded. The chain does not include the CA certificate. Each certificate in the chain signs the one before it. 
* [getCertificateAuthorityCsr](docs/sdk/README.md#getcertificateauthoritycsr) - Retrieves the certificate signing request (CSR) for your private certificate authority (CA). The CSR is created when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. Sign the CSR with your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA. Then import the signed certificate back into Amazon Web Services Private CA by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action. The CSR is returned as a base64 PEM-encoded string. 
* [getPolicy](docs/sdk/README.md#getpolicy) - <p>Retrieves the resource-based policy attached to a private CA. If either the private CA resource or the policy cannot be found, this action returns a <code>ResourceNotFoundException</code>. </p> <p>The policy can be attached or updated with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_PutPolicy.html">PutPolicy</a> and removed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>
* [importCertificateAuthorityCertificate](docs/sdk/README.md#importcertificateauthoritycertificate) - <p>Imports a signed private CA certificate into Amazon Web Services Private CA. This action is used when you are using a chain of trust whose root is located outside Amazon Web Services Private CA. Before you can call this action, the following preparations must in place:</p> <ol> <li> <p>In Amazon Web Services Private CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create the private CA that you plan to back with the imported certificate.</p> </li> <li> <p>Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificateAuthorityCsr.html">GetCertificateAuthorityCsr</a> action to generate a certificate signing request (CSR).</p> </li> <li> <p>Sign the CSR using a root or intermediate CA hosted by either an on-premises PKI hierarchy or by a commercial CA.</p> </li> <li> <p>Create a certificate chain and copy the signed certificate and the certificate chain to your working directory.</p> </li> </ol> <p>Amazon Web Services Private CA supports three scenarios for installing a CA certificate:</p> <ul> <li> <p>Installing a certificate for a root CA hosted by Amazon Web Services Private CA.</p> </li> <li> <p>Installing a subordinate CA certificate whose parent authority is hosted by Amazon Web Services Private CA.</p> </li> <li> <p>Installing a subordinate CA certificate whose parent authority is externally hosted.</p> </li> </ul> <p>The following additional requirements apply when you import a CA certificate.</p> <ul> <li> <p>Only a self-signed certificate can be imported as a root CA.</p> </li> <li> <p>A self-signed certificate cannot be imported as a subordinate CA.</p> </li> <li> <p>Your certificate chain must not include the private CA certificate that you are importing.</p> </li> <li> <p>Your root CA must be the last certificate in your chain. The subordinate certificate, if any, that your root CA signed must be next to last. The subordinate certificate signed by the preceding subordinate CA must come next, and so on until your chain is built. </p> </li> <li> <p>The chain must be PEM-encoded.</p> </li> <li> <p>The maximum allowed size of a certificate is 32 KB.</p> </li> <li> <p>The maximum allowed size of a certificate chain is 2 MB.</p> </li> </ul> <p> <i>Enforcement of Critical Constraints</i> </p> <p>Amazon Web Services Private CA allows the following extensions to be marked critical in the imported CA certificate or chain.</p> <ul> <li> <p>Basic constraints (<i>must</i> be marked critical)</p> </li> <li> <p>Subject alternative names</p> </li> <li> <p>Key usage</p> </li> <li> <p>Extended key usage</p> </li> <li> <p>Authority key identifier</p> </li> <li> <p>Subject key identifier</p> </li> <li> <p>Issuer alternative name</p> </li> <li> <p>Subject directory attributes</p> </li> <li> <p>Subject information access</p> </li> <li> <p>Certificate policies</p> </li> <li> <p>Policy mappings</p> </li> <li> <p>Inhibit anyPolicy</p> </li> </ul> <p>Amazon Web Services Private CA rejects the following extensions when they are marked critical in an imported CA certificate or chain.</p> <ul> <li> <p>Name constraints</p> </li> <li> <p>Policy constraints</p> </li> <li> <p>CRL distribution points</p> </li> <li> <p>Authority information access</p> </li> <li> <p>Freshest CRL</p> </li> <li> <p>Any other extension</p> </li> </ul>
* [issueCertificate](docs/sdk/README.md#issuecertificate) - <p>Uses your private certificate authority (CA), or one that has been shared with you, to issue a client certificate. This action returns the Amazon Resource Name (ARN) of the certificate. You can retrieve the certificate by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificate.html">GetCertificate</a> action and specifying the ARN. </p> <note> <p>You cannot use the ACM <b>ListCertificateAuthorities</b> action to retrieve the ARNs of the certificates that you issue by using Amazon Web Services Private CA.</p> </note>
* [listCertificateAuthorities](docs/sdk/README.md#listcertificateauthorities) - Lists the private certificate authorities that you created by using the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action.
* [listPermissions](docs/sdk/README.md#listpermissions) - <p>List all permissions on a private CA, if any, granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com). </p> <p>These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA. </p> <p>Permissions can be granted with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action and revoked with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action.</p> <p class="title"> <b>About Permissions</b> </p> <ul> <li> <p>If the private CA and the certificates it issues reside in the same account, you can use <code>CreatePermission</code> to grant permissions for ACM to carry out automatic certificate renewals.</p> </li> <li> <p>For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.</p> </li> <li> <p>If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> </ul>
* [listTags](docs/sdk/README.md#listtags) - Lists the tags, if any, that are associated with your private CA or one that has been shared with you. Tags are labels that you can use to identify and organize your CAs. Each tag consists of a key and an optional value. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a> action to add one or more tags to your CA. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action to remove tags. 
* [putPolicy](docs/sdk/README.md#putpolicy) - <p>Attaches a resource-based policy to a private CA. </p> <p>A policy can also be applied by sharing a private CA through Amazon Web Services Resource Access Manager (RAM). For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> <p>The policy can be displayed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetPolicy.html">GetPolicy</a> and removed with <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePolicy.html">DeletePolicy</a>.</p> <p class="title"> <b>About Policies</b> </p> <ul> <li> <p>A policy grants access on a private CA to an Amazon Web Services customer account, to Amazon Web Services Organizations, or to an Amazon Web Services Organizations unit. Policies are under the control of a CA administrator. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource Based Policy with Amazon Web Services Private CA</a>.</p> </li> <li> <p>A policy permits a user of Certificate Manager (ACM) to issue ACM certificates signed by a CA in another account.</p> </li> <li> <p>For ACM to manage automatic renewal of these certificates, the ACM user must configure a Service Linked Role (SLR). The SLR allows the ACM service to assume the identity of the user, subject to confirmation against the Amazon Web Services Private CA policy. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html">Using a Service Linked Role with ACM</a>.</p> </li> <li> <p>Updates made in Amazon Web Services Resource Manager (RAM) are reflected in policies. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-ram.html">Attach a Policy for Cross-Account Access</a>.</p> </li> </ul>
* [restoreCertificateAuthority](docs/sdk/README.md#restorecertificateauthority) - Restores a certificate authority (CA) that is in the <code>DELETED</code> state. You can restore a CA during the period that you defined in the <b>PermanentDeletionTimeInDays</b> parameter of the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a> action. Currently, you can specify 7 to 30 days. If you did not specify a <b>PermanentDeletionTimeInDays</b> value, by default you can restore the CA at any time in a 30 day period. You can check the time remaining in the restoration period of a private CA in the <code>DELETED</code> state by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> or <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> actions. The status of a restored CA is set to its pre-deletion status when the <b>RestoreCertificateAuthority</b> action returns. To change its status to <code>ACTIVE</code>, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action. If the private CA was in the <code>PENDING_CERTIFICATE</code> state at deletion, you must use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import a certificate authority into the private CA before it can be activated. You cannot restore a CA after the restoration period has ended.
* [revokeCertificate](docs/sdk/README.md#revokecertificate) - <p>Revokes a certificate that was issued inside Amazon Web Services Private CA. If you enable a certificate revocation list (CRL) when you create or update your private CA, information about the revoked certificates will be included in the CRL. Amazon Web Services Private CA writes the CRL to an S3 bucket that you specify. A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason the CRL update fails, Amazon Web Services Private CA attempts makes further attempts every 15 minutes. With Amazon CloudWatch, you can create alarms for the metrics <code>CRLGenerated</code> and <code>MisconfiguredCRLBucket</code>. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCloudWatch.html">Supported CloudWatch Metrics</a>.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note> <p>Amazon Web Services Private CA also writes revocation information to the audit report. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a>.</p> <note> <p>You cannot revoke a root CA self-signed certificate.</p> </note>
* [tagCertificateAuthority](docs/sdk/README.md#tagcertificateauthority) - <p>Adds one or more tags to your private CA. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. You can apply a tag to just one private CA if you want to identify a specific characteristic of that CA, or you can apply the same tag to multiple private CAs if you want to filter for a common relationship among those CAs. To remove one or more tags, use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are associated with your CA. </p> <note> <p>To attach tags to a private CA during the creation procedure, a CA administrator must first associate an inline IAM policy with the <code>CreateCertificateAuthority</code> action and explicitly allow tagging. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/auth-InlinePolicies.html#policy-tag-ca">Attaching tags to a CA at the time of creation</a>.</p> </note>
* [untagCertificateAuthority](docs/sdk/README.md#untagcertificateauthority) - Remove one or more tags from your private CA. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this action, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. To add tags to a private CA, use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a>. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are associated with your CA. 
* [updateCertificateAuthority](docs/sdk/README.md#updatecertificateauthority) - <p>Updates the status or configuration of a private certificate authority (CA). Your private CA must be in the <code>ACTIVE</code> or <code>DISABLED</code> state before you can update it. You can disable a private CA that is in the <code>ACTIVE</code> state or make a CA that is in the <code>DISABLED</code> state active again.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
