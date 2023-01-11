<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateCertificateAuthorityRequest req = new CreateCertificateAuthorityRequest() {{
                headers = new CreateCertificateAuthorityHeaders() {{
                    xAmzAlgorithm = "molestiae";
                    xAmzContentSha256 = "pariatur";
                    xAmzCredential = "quasi";
                    xAmzDate = "corrupti";
                    xAmzSecurityToken = "enim";
                    xAmzSignature = "qui";
                    xAmzSignedHeaders = "sit";
                    xAmzTarget = "ACMPrivateCA.CreateCertificateAuthority";
                }};
                request = new CreateCertificateAuthorityRequest() {{
                    certificateAuthorityConfiguration = new CertificateAuthorityConfiguration() {{
                        csrExtensions = new CsrExtensions() {{
                            keyUsage = new KeyUsage() {{
                                crlSign = true;
                                dataEncipherment = true;
                                decipherOnly = false;
                                digitalSignature = true;
                                encipherOnly = true;
                                keyAgreement = true;
                                keyCertSign = false;
                                keyEncipherment = false;
                                nonRepudiation = true;
                            }};
                            subjectInformationAccess = new openapisdk.models.shared.AccessDescription[]() {{
                                add(new AccessDescription() {{
                                    accessLocation = new GeneralName() {{
                                        directoryName = new Asn1Subject() {{
                                            commonName = "temporibus";
                                            country = "velit";
                                            distinguishedNameQualifier = "quae";
                                            generationQualifier = "est";
                                            givenName = "ut";
                                            initials = "necessitatibus";
                                            locality = "in";
                                            organization = "possimus";
                                            organizationalUnit = "voluptatem";
                                            pseudonym = "dolorum";
                                            serialNumber = "doloribus";
                                            state = "saepe";
                                            surname = "sunt";
                                            title = "earum";
                                        }};
                                        dnsName = "et";
                                        ediPartyName = new EdiPartyName() {{
                                            nameAssigner = "ut";
                                            partyName = "asperiores";
                                        }};
                                        ipAddress = "et";
                                        otherName = new OtherName() {{
                                            typeId = "est";
                                            value = "ipsum";
                                        }};
                                        registeredId = "quam";
                                        rfc822Name = "voluptas";
                                        uniformResourceIdentifier = "nihil";
                                    }};
                                    accessMethod = new AccessMethod() {{
                                        accessMethodType = "CA_REPOSITORY";
                                        customObjectIdentifier = "suscipit";
                                    }};
                                }}),
                                add(new AccessDescription() {{
                                    accessLocation = new GeneralName() {{
                                        directoryName = new Asn1Subject() {{
                                            commonName = "impedit";
                                            country = "non";
                                            distinguishedNameQualifier = "magnam";
                                            generationQualifier = "ut";
                                            givenName = "possimus";
                                            initials = "illo";
                                            locality = "qui";
                                            organization = "quia";
                                            organizationalUnit = "ipsam";
                                            pseudonym = "ducimus";
                                            serialNumber = "enim";
                                            state = "blanditiis";
                                            surname = "distinctio";
                                            title = "delectus";
                                        }};
                                        dnsName = "rerum";
                                        ediPartyName = new EdiPartyName() {{
                                            nameAssigner = "dolore";
                                            partyName = "repellat";
                                        }};
                                        ipAddress = "velit";
                                        otherName = new OtherName() {{
                                            typeId = "officia";
                                            value = "modi";
                                        }};
                                        registeredId = "sunt";
                                        rfc822Name = "voluptas";
                                        uniformResourceIdentifier = "amet";
                                    }};
                                    accessMethod = new AccessMethod() {{
                                        accessMethodType = "RESOURCE_PKI_NOTIFY";
                                        customObjectIdentifier = "a";
                                    }};
                                }}),
                                add(new AccessDescription() {{
                                    accessLocation = new GeneralName() {{
                                        directoryName = new Asn1Subject() {{
                                            commonName = "qui";
                                            country = "excepturi";
                                            distinguishedNameQualifier = "autem";
                                            generationQualifier = "corporis";
                                            givenName = "dicta";
                                            initials = "rem";
                                            locality = "doloremque";
                                            organization = "quae";
                                            organizationalUnit = "nisi";
                                            pseudonym = "recusandae";
                                            serialNumber = "qui";
                                            state = "minus";
                                            surname = "et";
                                            title = "rerum";
                                        }};
                                        dnsName = "ut";
                                        ediPartyName = new EdiPartyName() {{
                                            nameAssigner = "rem";
                                            partyName = "eos";
                                        }};
                                        ipAddress = "et";
                                        otherName = new OtherName() {{
                                            typeId = "reiciendis";
                                            value = "aspernatur";
                                        }};
                                        registeredId = "praesentium";
                                        rfc822Name = "porro";
                                        uniformResourceIdentifier = "nihil";
                                    }};
                                    accessMethod = new AccessMethod() {{
                                        accessMethodType = "RESOURCE_PKI_MANIFEST";
                                        customObjectIdentifier = "consequatur";
                                    }};
                                }}),
                            }};
                        }};
                        keyAlgorithm = "EC_secp384r1";
                        signingAlgorithm = "SHA512WITHECDSA";
                        subject = new Asn1Subject() {{
                            commonName = "atque";
                            country = "amet";
                            distinguishedNameQualifier = "nisi";
                            generationQualifier = "quidem";
                            givenName = "est";
                            initials = "quo";
                            locality = "vero";
                            organization = "alias";
                            organizationalUnit = "totam";
                            pseudonym = "deserunt";
                            serialNumber = "eius";
                            state = "repellat";
                            surname = "beatae";
                            title = "omnis";
                        }};
                    }};
                    certificateAuthorityType = "SUBORDINATE";
                    idempotencyToken = "aut";
                    keyStorageSecurityStandard = "FIPS_140_2_LEVEL_2_OR_HIGHER";
                    revocationConfiguration = new RevocationConfiguration() {{
                        crlConfiguration = new CrlConfiguration() {{
                            customCname = "magni";
                            enabled = false;
                            expirationInDays = 4525004039791920848;
                            s3BucketName = "culpa";
                            s3ObjectAcl = "BUCKET_OWNER_FULL_CONTROL";
                        }};
                        ocspConfiguration = new OcspConfiguration() {{
                            enabled = false;
                            ocspCustomCname = "ut";
                        }};
                    }};
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "architecto";
                            value = "molestias";
                        }}),
                        add(new Tag() {{
                            key = "rerum";
                            value = "quo";
                        }}),
                        add(new Tag() {{
                            key = "et";
                            value = "saepe";
                        }}),
                    }};
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