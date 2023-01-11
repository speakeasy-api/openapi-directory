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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "ACMPrivateCA.CreateCertificateAuthority";
                }};
                request = new CreateCertificateAuthorityRequest() {{
                    certificateAuthorityConfiguration = new CertificateAuthorityConfiguration() {{
                        csrExtensions = new CsrExtensions() {{
                            keyUsage = new KeyUsage() {{
                                crlSign = true;
                                dataEncipherment = false;
                                decipherOnly = true;
                                digitalSignature = true;
                                encipherOnly = false;
                                keyAgreement = true;
                                keyCertSign = true;
                                keyEncipherment = false;
                                nonRepudiation = false;
                            }};
                            subjectInformationAccess = new openapisdk.models.shared.AccessDescription[]() {{
                                add(new AccessDescription() {{
                                    accessLocation = new GeneralName() {{
                                        directoryName = new Asn1Subject() {{
                                            commonName = "et";
                                            country = "voluptate";
                                            distinguishedNameQualifier = "iste";
                                            generationQualifier = "vitae";
                                            givenName = "totam";
                                            initials = "dolores";
                                            locality = "illum";
                                            organization = "debitis";
                                            organizationalUnit = "vel";
                                            pseudonym = "odio";
                                            serialNumber = "dolore";
                                            state = "id";
                                            surname = "aspernatur";
                                            title = "accusantium";
                                        }};
                                        dnsName = "totam";
                                        ediPartyName = new EdiPartyName() {{
                                            nameAssigner = "commodi";
                                            partyName = "quis";
                                        }};
                                        ipAddress = "est";
                                        otherName = new OtherName() {{
                                            typeId = "aut";
                                            value = "odit";
                                        }};
                                        registeredId = "non";
                                        rfc822Name = "voluptas";
                                        uniformResourceIdentifier = "omnis";
                                    }};
                                    accessMethod = new AccessMethod() {{
                                        accessMethodType = "CA_REPOSITORY";
                                        customObjectIdentifier = "illo";
                                    }};
                                }}),
                                add(new AccessDescription() {{
                                    accessLocation = new GeneralName() {{
                                        directoryName = new Asn1Subject() {{
                                            commonName = "sed";
                                            country = "officiis";
                                            distinguishedNameQualifier = "autem";
                                            generationQualifier = "consectetur";
                                            givenName = "nobis";
                                            initials = "odio";
                                            locality = "qui";
                                            organization = "recusandae";
                                            organizationalUnit = "at";
                                            pseudonym = "ipsum";
                                            serialNumber = "eveniet";
                                            state = "modi";
                                            surname = "sint";
                                            title = "inventore";
                                        }};
                                        dnsName = "ut";
                                        ediPartyName = new EdiPartyName() {{
                                            nameAssigner = "exercitationem";
                                            partyName = "aut";
                                        }};
                                        ipAddress = "reprehenderit";
                                        otherName = new OtherName() {{
                                            typeId = "tempore";
                                            value = "maiores";
                                        }};
                                        registeredId = "incidunt";
                                        rfc822Name = "dolor";
                                        uniformResourceIdentifier = "beatae";
                                    }};
                                    accessMethod = new AccessMethod() {{
                                        accessMethodType = "RESOURCE_PKI_MANIFEST";
                                        customObjectIdentifier = "in";
                                    }};
                                }}),
                                add(new AccessDescription() {{
                                    accessLocation = new GeneralName() {{
                                        directoryName = new Asn1Subject() {{
                                            commonName = "et";
                                            country = "omnis";
                                            distinguishedNameQualifier = "ipsum";
                                            generationQualifier = "ex";
                                            givenName = "dolores";
                                            initials = "placeat";
                                            locality = "vel";
                                            organization = "rerum";
                                            organizationalUnit = "mollitia";
                                            pseudonym = "voluptas";
                                            serialNumber = "quam";
                                            state = "reprehenderit";
                                            surname = "qui";
                                            title = "qui";
                                        }};
                                        dnsName = "unde";
                                        ediPartyName = new EdiPartyName() {{
                                            nameAssigner = "in";
                                            partyName = "autem";
                                        }};
                                        ipAddress = "qui";
                                        otherName = new OtherName() {{
                                            typeId = "ut";
                                            value = "itaque";
                                        }};
                                        registeredId = "ab";
                                        rfc822Name = "neque";
                                        uniformResourceIdentifier = "ullam";
                                    }};
                                    accessMethod = new AccessMethod() {{
                                        accessMethodType = "RESOURCE_PKI_NOTIFY";
                                        customObjectIdentifier = "accusantium";
                                    }};
                                }}),
                            }};
                        }};
                        keyAlgorithm = "RSA_2048";
                        signingAlgorithm = "SHA384WITHRSA";
                        subject = new Asn1Subject() {{
                            commonName = "quam";
                            country = "velit";
                            distinguishedNameQualifier = "cumque";
                            generationQualifier = "soluta";
                            givenName = "sunt";
                            initials = "voluptates";
                            locality = "magni";
                            organization = "et";
                            organizationalUnit = "optio";
                            pseudonym = "qui";
                            serialNumber = "earum";
                            state = "illo";
                            surname = "omnis";
                            title = "ut";
                        }};
                    }};
                    certificateAuthorityType = "ROOT";
                    idempotencyToken = "dolor";
                    keyStorageSecurityStandard = "FIPS_140_2_LEVEL_2_OR_HIGHER";
                    revocationConfiguration = new RevocationConfiguration() {{
                        crlConfiguration = new CrlConfiguration() {{
                            customCname = "error";
                            enabled = false;
                            expirationInDays = 4989862523986425397;
                            s3BucketName = "nostrum";
                            s3ObjectAcl = "BUCKET_OWNER_FULL_CONTROL";
                        }};
                        ocspConfiguration = new OcspConfiguration() {{
                            enabled = false;
                            ocspCustomCname = "sed";
                        }};
                    }};
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "soluta";
                            value = "aut";
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