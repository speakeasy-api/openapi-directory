<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateCertificateAuthorityRequest{
        Headers: operations.CreateCertificateAuthorityHeaders{
            XAmzAlgorithm: "molestiae",
            XAmzContentSha256: "pariatur",
            XAmzCredential: "quasi",
            XAmzDate: "corrupti",
            XAmzSecurityToken: "enim",
            XAmzSignature: "qui",
            XAmzSignedHeaders: "sit",
            XAmzTarget: "ACMPrivateCA.CreateCertificateAuthority",
        },
        Request: shared.CreateCertificateAuthorityRequest{
            CertificateAuthorityConfiguration: shared.CertificateAuthorityConfiguration{
                CsrExtensions: &shared.CsrExtensions{
                    KeyUsage: &shared.KeyUsage{
                        CRLSign: true,
                        DataEncipherment: true,
                        DecipherOnly: false,
                        DigitalSignature: true,
                        EncipherOnly: true,
                        KeyAgreement: true,
                        KeyCertSign: false,
                        KeyEncipherment: false,
                        NonRepudiation: true,
                    },
                    SubjectInformationAccess: []shared.AccessDescription{
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: "temporibus",
                                    Country: "velit",
                                    DistinguishedNameQualifier: "quae",
                                    GenerationQualifier: "est",
                                    GivenName: "ut",
                                    Initials: "necessitatibus",
                                    Locality: "in",
                                    Organization: "possimus",
                                    OrganizationalUnit: "voluptatem",
                                    Pseudonym: "dolorum",
                                    SerialNumber: "doloribus",
                                    State: "saepe",
                                    Surname: "sunt",
                                    Title: "earum",
                                },
                                DNSName: "et",
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: "ut",
                                    PartyName: "asperiores",
                                },
                                IPAddress: "et",
                                OtherName: &shared.OtherName{
                                    TypeID: "est",
                                    Value: "ipsum",
                                },
                                RegisteredID: "quam",
                                Rfc822Name: map[string]interface{}{
                                    "nihil": "dolores",
                                },
                                UniformResourceIdentifier: "suscipit",
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: "RESOURCE_PKI_MANIFEST",
                                CustomObjectIdentifier: "non",
                            },
                        },
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: "magnam",
                                    Country: "ut",
                                    DistinguishedNameQualifier: "possimus",
                                    GenerationQualifier: "illo",
                                    GivenName: "qui",
                                    Initials: "quia",
                                    Locality: "ipsam",
                                    Organization: "ducimus",
                                    OrganizationalUnit: "enim",
                                    Pseudonym: "blanditiis",
                                    SerialNumber: "distinctio",
                                    State: "delectus",
                                    Surname: "rerum",
                                    Title: "dolore",
                                },
                                DNSName: "repellat",
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: "velit",
                                    PartyName: "officia",
                                },
                                IPAddress: "modi",
                                OtherName: &shared.OtherName{
                                    TypeID: "sunt",
                                    Value: "voluptas",
                                },
                                RegisteredID: "amet",
                                Rfc822Name: map[string]interface{}{
                                    "a": "qui",
                                    "excepturi": "autem",
                                    "corporis": "dicta",
                                },
                                UniformResourceIdentifier: "rem",
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: "CA_REPOSITORY",
                                CustomObjectIdentifier: "quae",
                            },
                        },
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: "nisi",
                                    Country: "recusandae",
                                    DistinguishedNameQualifier: "qui",
                                    GenerationQualifier: "minus",
                                    GivenName: "et",
                                    Initials: "rerum",
                                    Locality: "ut",
                                    Organization: "rem",
                                    OrganizationalUnit: "eos",
                                    Pseudonym: "et",
                                    SerialNumber: "reiciendis",
                                    State: "aspernatur",
                                    Surname: "praesentium",
                                    Title: "porro",
                                },
                                DNSName: "nihil",
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: "adipisci",
                                    PartyName: "consequatur",
                                },
                                IPAddress: "illum",
                                OtherName: &shared.OtherName{
                                    TypeID: "accusantium",
                                    Value: "atque",
                                },
                                RegisteredID: "amet",
                                Rfc822Name: map[string]interface{}{
                                    "quidem": "est",
                                    "quo": "vero",
                                },
                                UniformResourceIdentifier: "alias",
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: "RESOURCE_PKI_NOTIFY",
                                CustomObjectIdentifier: "deserunt",
                            },
                        },
                    },
                },
                KeyAlgorithm: "EC_prime256v1",
                SigningAlgorithm: "SHA256WITHRSA",
                Subject: shared.Asn1Subject{
                    CommonName: "beatae",
                    Country: "omnis",
                    DistinguishedNameQualifier: "totam",
                    GenerationQualifier: "aut",
                    GivenName: "et",
                    Initials: "magni",
                    Locality: "necessitatibus",
                    Organization: "et",
                    OrganizationalUnit: "culpa",
                    Pseudonym: "repellendus",
                    SerialNumber: "voluptas",
                    State: "ut",
                    Surname: "veniam",
                    Title: "architecto",
                },
            },
            CertificateAuthorityType: "SUBORDINATE",
            IdempotencyToken: "rerum",
            KeyStorageSecurityStandard: "FIPS_140_2_LEVEL_2_OR_HIGHER",
            RevocationConfiguration: &shared.RevocationConfiguration{
                CrlConfiguration: &shared.CrlConfiguration{
                    CustomCname: "et",
                    Enabled: true,
                    ExpirationInDays: 1215184329252422444,
                    S3BucketName: "in",
                    S3ObjectACL: "PUBLIC_READ",
                },
                OcspConfiguration: &shared.OcspConfiguration{
                    Enabled: true,
                    OcspCustomCname: "quo",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "soluta",
                    Value: "tempora",
                },
            },
        },
    }
    
    res, err := s.CreateCertificateAuthority(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCertificateAuthorityResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->