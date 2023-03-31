<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateCertificateAuthorityXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateCertificateAuthorityHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateCertificateAuthorityRequest req = new CreateCertificateAuthorityRequest() {{
                headers = new CreateCertificateAuthorityHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "ACMPrivateCA.CreateCertificateAuthority";
                }};
                request = new CreateCertificateAuthorityRequest() {{
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
                                            commonName = "vel";
                                            country = "Netherlands Antilles";
                                            customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                add(new CustomAttribute() {{
                                                    objectIdentifier = "suscipit";
                                                    value = "iure";
                                                }}),
                                                add(new CustomAttribute() {{
                                                    objectIdentifier = "magnam";
                                                    value = "debitis";
                                                }}),
                                                add(new CustomAttribute() {{
                                                    objectIdentifier = "ipsa";
                                                    value = "delectus";
                                                }}),
                                            }};
                                            distinguishedNameQualifier = "tempora";
                                            generationQualifier = "suscipit";
                                            givenName = "molestiae";
                                            initials = "minus";
                                            locality = "placeat";
                                            organization = "voluptatum";
                                            organizationalUnit = "iusto";
                                            pseudonym = "excepturi";
                                            serialNumber = "nisi";
                                            state = "recusandae";
                                            surname = "temporibus";
                                            title = "Mr.";
                                        }};
                                        dnsName = "quis";
                                        ediPartyName = new EdiPartyName() {{
                                            nameAssigner = "veritatis";
                                            partyName = "deserunt";
                                        }};
                                        ipAddress = "perferendis";
                                        otherName = new OtherName() {{
                                            typeId = "ipsam";
                                            value = "repellendus";
                                        }};
                                        registeredId = "sapiente";
                                        rfc822Name = "quo";
                                        uniformResourceIdentifier = "odit";
                                    }};
                                    accessMethod = new AccessMethod() {{
                                        accessMethodType = "RESOURCE_PKI_NOTIFY";
                                        customObjectIdentifier = "at";
                                    }};
                                }}),
                                add(new AccessDescription() {{
                                    accessLocation = new GeneralName() {{
                                        directoryName = new Asn1Subject() {{
                                            commonName = "maiores";
                                            country = "Kuwait";
                                            customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                add(new CustomAttribute() {{
                                                    objectIdentifier = "quod";
                                                    value = "esse";
                                                }}),
                                                add(new CustomAttribute() {{
                                                    objectIdentifier = "totam";
                                                    value = "porro";
                                                }}),
                                                add(new CustomAttribute() {{
                                                    objectIdentifier = "dolorum";
                                                    value = "dicta";
                                                }}),
                                                add(new CustomAttribute() {{
                                                    objectIdentifier = "nam";
                                                    value = "officia";
                                                }}),
                                            }};
                                            distinguishedNameQualifier = "occaecati";
                                            generationQualifier = "fugit";
                                            givenName = "deleniti";
                                            initials = "hic";
                                            locality = "optio";
                                            organization = "totam";
                                            organizationalUnit = "beatae";
                                            pseudonym = "commodi";
                                            serialNumber = "molestiae";
                                            state = "modi";
                                            surname = "qui";
                                            title = "Miss";
                                        }};
                                        dnsName = "cum";
                                        ediPartyName = new EdiPartyName() {{
                                            nameAssigner = "esse";
                                            partyName = "ipsum";
                                        }};
                                        ipAddress = "excepturi";
                                        otherName = new OtherName() {{
                                            typeId = "aspernatur";
                                            value = "perferendis";
                                        }};
                                        registeredId = "ad";
                                        rfc822Name = "natus";
                                        uniformResourceIdentifier = "sed";
                                    }};
                                    accessMethod = new AccessMethod() {{
                                        accessMethodType = "RESOURCE_PKI_MANIFEST";
                                        customObjectIdentifier = "dolor";
                                    }};
                                }}),
                                add(new AccessDescription() {{
                                    accessLocation = new GeneralName() {{
                                        directoryName = new Asn1Subject() {{
                                            commonName = "natus";
                                            country = "Honduras";
                                            customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                add(new CustomAttribute() {{
                                                    objectIdentifier = "saepe";
                                                    value = "fuga";
                                                }}),
                                                add(new CustomAttribute() {{
                                                    objectIdentifier = "in";
                                                    value = "corporis";
                                                }}),
                                                add(new CustomAttribute() {{
                                                    objectIdentifier = "iste";
                                                    value = "iure";
                                                }}),
                                                add(new CustomAttribute() {{
                                                    objectIdentifier = "saepe";
                                                    value = "quidem";
                                                }}),
                                            }};
                                            distinguishedNameQualifier = "architecto";
                                            generationQualifier = "ipsa";
                                            givenName = "reiciendis";
                                            initials = "est";
                                            locality = "mollitia";
                                            organization = "laborum";
                                            organizationalUnit = "dolores";
                                            pseudonym = "dolorem";
                                            serialNumber = "corporis";
                                            state = "explicabo";
                                            surname = "nobis";
                                            title = "Mrs.";
                                        }};
                                        dnsName = "omnis";
                                        ediPartyName = new EdiPartyName() {{
                                            nameAssigner = "nemo";
                                            partyName = "minima";
                                        }};
                                        ipAddress = "excepturi";
                                        otherName = new OtherName() {{
                                            typeId = "accusantium";
                                            value = "iure";
                                        }};
                                        registeredId = "culpa";
                                        rfc822Name = "doloribus";
                                        uniformResourceIdentifier = "sapiente";
                                    }};
                                    accessMethod = new AccessMethod() {{
                                        accessMethodType = "CA_REPOSITORY";
                                        customObjectIdentifier = "mollitia";
                                    }};
                                }}),
                                add(new AccessDescription() {{
                                    accessLocation = new GeneralName() {{
                                        directoryName = new Asn1Subject() {{
                                            commonName = "dolorem";
                                            country = "New Caledonia";
                                            customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                                add(new CustomAttribute() {{
                                                    objectIdentifier = "repellat";
                                                    value = "mollitia";
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
                                        ediPartyName = new EdiPartyName() {{
                                            nameAssigner = "odit";
                                            partyName = "quo";
                                        }};
                                        ipAddress = "sequi";
                                        otherName = new OtherName() {{
                                            typeId = "tenetur";
                                            value = "ipsam";
                                        }};
                                        registeredId = "id";
                                        rfc822Name = "possimus";
                                        uniformResourceIdentifier = "aut";
                                    }};
                                    accessMethod = new AccessMethod() {{
                                        accessMethodType = "CA_REPOSITORY";
                                        customObjectIdentifier = "error";
                                    }};
                                }}),
                            }};
                        }};
                        keyAlgorithm = "EC_secp384r1";
                        signingAlgorithm = "SHA384WITHRSA";
                        subject = new Asn1Subject() {{
                            commonName = "quasi";
                            country = "Virgin Islands, British";
                            customAttributes = new org.openapis.openapi.models.shared.CustomAttribute[]{{
                                add(new CustomAttribute() {{
                                    objectIdentifier = "vero";
                                    value = "nihil";
                                }}),
                                add(new CustomAttribute() {{
                                    objectIdentifier = "praesentium";
                                    value = "voluptatibus";
                                }}),
                                add(new CustomAttribute() {{
                                    objectIdentifier = "ipsa";
                                    value = "omnis";
                                }}),
                                add(new CustomAttribute() {{
                                    objectIdentifier = "voluptate";
                                    value = "cum";
                                }}),
                            }};
                            distinguishedNameQualifier = "perferendis";
                            generationQualifier = "doloremque";
                            givenName = "reprehenderit";
                            initials = "ut";
                            locality = "maiores";
                            organization = "dicta";
                            organizationalUnit = "corporis";
                            pseudonym = "dolore";
                            serialNumber = "iusto";
                            state = "dicta";
                            surname = "harum";
                            title = "Mrs.";
                        }};
                    }};
                    certificateAuthorityType = "SUBORDINATE";
                    idempotencyToken = "commodi";
                    keyStorageSecurityStandard = "FIPS_140_2_LEVEL_3_OR_HIGHER";
                    revocationConfiguration = new RevocationConfiguration() {{
                        crlConfiguration = new CrlConfiguration() {{
                            customCname = "quae";
                            enabled = false;
                            expirationInDays = 216822;
                            s3BucketName = "quidem";
                            s3ObjectAcl = "BUCKET_OWNER_FULL_CONTROL";
                        }};
                        ocspConfiguration = new OcspConfiguration() {{
                            enabled = false;
                            ocspCustomCname = "excepturi";
                        }};
                    }};
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "modi";
                            value = "praesentium";
                        }}),
                        add(new Tag() {{
                            key = "rem";
                            value = "voluptates";
                        }}),
                        add(new Tag() {{
                            key = "quasi";
                            value = "repudiandae";
                        }}),
                        add(new Tag() {{
                            key = "sint";
                            value = "veritatis";
                        }}),
                    }};
                    usageMode = "SHORT_LIVED_CERTIFICATE";
                }};
            }};            

            CreateCertificateAuthorityResponse res = sdk.createCertificateAuthority(req);

            if (res.createCertificateAuthorityResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->