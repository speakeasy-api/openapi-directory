<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateCertificateAuthorityXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateCertificateAuthorityRequest;
import org.openapis.openapi.models.operations.CreateCertificateAuthorityResponse;
import org.openapis.openapi.models.shared.CreateCertificateAuthorityRequest;
import org.openapis.openapi.models.shared.CertificateAuthorityUsageModeEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.RevocationConfiguration;
import org.openapis.openapi.models.shared.OcspConfiguration;
import org.openapis.openapi.models.shared.CrlConfiguration;
import org.openapis.openapi.models.shared.S3ObjectAclEnum;
import org.openapis.openapi.models.shared.KeyStorageSecurityStandardEnum;
import org.openapis.openapi.models.shared.CertificateAuthorityTypeEnum;
import org.openapis.openapi.models.shared.CertificateAuthorityConfiguration;
import org.openapis.openapi.models.shared.Asn1Subject;
import org.openapis.openapi.models.shared.CustomAttribute;
import org.openapis.openapi.models.shared.SigningAlgorithmEnum;
import org.openapis.openapi.models.shared.KeyAlgorithmEnum;
import org.openapis.openapi.models.shared.CsrExtensions;
import org.openapis.openapi.models.shared.AccessDescription;
import org.openapis.openapi.models.shared.AccessMethod;
import org.openapis.openapi.models.shared.AccessMethodTypeEnum;
import org.openapis.openapi.models.shared.GeneralName;
import org.openapis.openapi.models.shared.OtherName;
import org.openapis.openapi.models.shared.EdiPartyName;
import org.openapis.openapi.models.shared.KeyUsage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCertificateAuthorityRequest req = new CreateCertificateAuthorityRequest() {{
                createCertificateAuthorityRequest = new CreateCertificateAuthorityRequest() {{
                    certificateAuthorityConfiguration = new CertificateAuthorityConfiguration() {{
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
                            }};
                            subjectInformationAccess = new org.openapis.openapi.models.shared.AccessDescription[]{{
                                add(new AccessDescription() {{
                                    accessLocation = new GeneralName() {{
                                        directoryName = new Asn1Subject() {{
                                            commonName = "provident";
                                            country = "Portugal";
                                            customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                add(new CustomAttribute() {{
                                                    objectIdentifier = "unde";
                                                    value = "nulla";
                                                }}),
                                                add(new CustomAttribute() {{
                                                    objectIdentifier = "corrupti";
                                                    value = "illum";
                                                }}),
                                                add(new CustomAttribute() {{
                                                    objectIdentifier = "vel";
                                                    value = "error";
                                                }}),
                                                add(new CustomAttribute() {{
                                                    objectIdentifier = "deserunt";
                                                    value = "suscipit";
                                                }}),
                                            }};
                                            distinguishedNameQualifier = "iure";
                                            generationQualifier = "magnam";
                                            givenName = "debitis";
                                            initials = "ipsa";
                                            locality = "delectus";
                                            organization = "tempora";
                                            organizationalUnit = "suscipit";
                                            pseudonym = "molestiae";
                                            serialNumber = "minus";
                                            state = "placeat";
                                            surname = "voluptatum";
                                            title = "Ms.";
                                        }};
                                        dnsName = "excepturi";
                                        ediPartyName = new EdiPartyName() {{
                                            nameAssigner = "nisi";
                                            partyName = "recusandae";
                                        }};
                                        ipAddress = "temporibus";
                                        otherName = new OtherName() {{
                                            typeId = "ab";
                                            value = "quis";
                                        }};
                                        registeredId = "veritatis";
                                        rfc822Name = "deserunt";
                                        uniformResourceIdentifier = "perferendis";
                                    }};
                                    accessMethod = new AccessMethod() {{
                                        accessMethodType = "RESOURCE_PKI_MANIFEST";
                                        customObjectIdentifier = "repellendus";
                                    }};
                                }}),
                                add(new AccessDescription() {{
                                    accessLocation = new GeneralName() {{
                                        directoryName = new Asn1Subject() {{
                                            commonName = "sapiente";
                                            country = "San Marino";
                                            customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                add(new CustomAttribute() {{
                                                    objectIdentifier = "at";
                                                    value = "at";
                                                }}),
                                            }};
                                            distinguishedNameQualifier = "maiores";
                                            generationQualifier = "molestiae";
                                            givenName = "quod";
                                            initials = "quod";
                                            locality = "esse";
                                            organization = "totam";
                                            organizationalUnit = "porro";
                                            pseudonym = "dolorum";
                                            serialNumber = "dicta";
                                            state = "nam";
                                            surname = "officia";
                                            title = "Ms.";
                                        }};
                                        dnsName = "fugit";
                                        ediPartyName = new EdiPartyName() {{
                                            nameAssigner = "deleniti";
                                            partyName = "hic";
                                        }};
                                        ipAddress = "optio";
                                        otherName = new OtherName() {{
                                            typeId = "totam";
                                            value = "beatae";
                                        }};
                                        registeredId = "commodi";
                                        rfc822Name = "molestiae";
                                        uniformResourceIdentifier = "modi";
                                    }};
                                    accessMethod = new AccessMethod() {{
                                        accessMethodType = "CA_REPOSITORY";
                                        customObjectIdentifier = "impedit";
                                    }};
                                }}),
                                add(new AccessDescription() {{
                                    accessLocation = new GeneralName() {{
                                        directoryName = new Asn1Subject() {{
                                            commonName = "cum";
                                            country = "Kenya";
                                            customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                add(new CustomAttribute() {{
                                                    objectIdentifier = "excepturi";
                                                    value = "aspernatur";
                                                }}),
                                            }};
                                            distinguishedNameQualifier = "perferendis";
                                            generationQualifier = "ad";
                                            givenName = "natus";
                                            initials = "sed";
                                            locality = "iste";
                                            organization = "dolor";
                                            organizationalUnit = "natus";
                                            pseudonym = "laboriosam";
                                            serialNumber = "hic";
                                            state = "saepe";
                                            surname = "fuga";
                                            title = "Ms.";
                                        }};
                                        dnsName = "corporis";
                                        ediPartyName = new EdiPartyName() {{
                                            nameAssigner = "iste";
                                            partyName = "iure";
                                        }};
                                        ipAddress = "saepe";
                                        otherName = new OtherName() {{
                                            typeId = "quidem";
                                            value = "architecto";
                                        }};
                                        registeredId = "ipsa";
                                        rfc822Name = "reiciendis";
                                        uniformResourceIdentifier = "est";
                                    }};
                                    accessMethod = new AccessMethod() {{
                                        accessMethodType = "RESOURCE_PKI_MANIFEST";
                                        customObjectIdentifier = "laborum";
                                    }};
                                }}),
                            }};
                        }};
                        keyAlgorithm = "RSA_2048";
                        signingAlgorithm = "SHA384WITHECDSA";
                        subject = new Asn1Subject() {{
                            commonName = "corporis";
                            country = "Brunei Darussalam";
                            customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                add(new CustomAttribute() {{
                                    objectIdentifier = "enim";
                                    value = "omnis";
                                }}),
                                add(new CustomAttribute() {{
                                    objectIdentifier = "nemo";
                                    value = "minima";
                                }}),
                                add(new CustomAttribute() {{
                                    objectIdentifier = "excepturi";
                                    value = "accusantium";
                                }}),
                                add(new CustomAttribute() {{
                                    objectIdentifier = "iure";
                                    value = "culpa";
                                }}),
                            }};
                            distinguishedNameQualifier = "doloribus";
                            generationQualifier = "sapiente";
                            givenName = "architecto";
                            initials = "mollitia";
                            locality = "dolorem";
                            organization = "culpa";
                            organizationalUnit = "consequuntur";
                            pseudonym = "repellat";
                            serialNumber = "mollitia";
                            state = "occaecati";
                            surname = "numquam";
                            title = "Ms.";
                        }};
                    }};
                    certificateAuthorityType = "ROOT";
                    idempotencyToken = "molestiae";
                    keyStorageSecurityStandard = "FIPS_140_2_LEVEL_2_OR_HIGHER";
                    revocationConfiguration = new RevocationConfiguration() {{
                        crlConfiguration = new CrlConfiguration() {{
                            customCname = "error";
                            enabled = false;
                            expirationInDays = 158969;
                            s3BucketName = "quis";
                            s3ObjectAcl = "PUBLIC_READ";
                        }};
                        ocspConfiguration = new OcspConfiguration() {{
                            enabled = false;
                            ocspCustomCname = "laborum";
                        }};
                    }};
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "enim";
                            value = "odit";
                        }}),
                        add(new Tag() {{
                            key = "quo";
                            value = "sequi";
                        }}),
                        add(new Tag() {{
                            key = "tenetur";
                            value = "ipsam";
                        }}),
                    }};
                    usageMode = "SHORT_LIVED_CERTIFICATE";
                }};
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quasi";
                xAmzDate = "error";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "quasi";
                xAmzTarget = "ACMPrivateCA.CreateCertificateAuthority";
            }}            

            CreateCertificateAuthorityResponse res = sdk.createCertificateAuthority(req);

            if (res.createCertificateAuthorityResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->