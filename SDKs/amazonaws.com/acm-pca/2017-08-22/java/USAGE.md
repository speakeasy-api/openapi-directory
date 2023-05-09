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