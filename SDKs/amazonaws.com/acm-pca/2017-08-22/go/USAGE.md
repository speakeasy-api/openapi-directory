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
                                Rfc822Name: "voluptas",
                                UniformResourceIdentifier: "nihil",
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: "CA_REPOSITORY",
                                CustomObjectIdentifier: "suscipit",
                            },
                        },
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: "impedit",
                                    Country: "non",
                                    DistinguishedNameQualifier: "magnam",
                                    GenerationQualifier: "ut",
                                    GivenName: "possimus",
                                    Initials: "illo",
                                    Locality: "qui",
                                    Organization: "quia",
                                    OrganizationalUnit: "ipsam",
                                    Pseudonym: "ducimus",
                                    SerialNumber: "enim",
                                    State: "blanditiis",
                                    Surname: "distinctio",
                                    Title: "delectus",
                                },
                                DNSName: "rerum",
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: "dolore",
                                    PartyName: "repellat",
                                },
                                IPAddress: "velit",
                                OtherName: &shared.OtherName{
                                    TypeID: "officia",
                                    Value: "modi",
                                },
                                RegisteredID: "sunt",
                                Rfc822Name: "voluptas",
                                UniformResourceIdentifier: "amet",
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: "RESOURCE_PKI_NOTIFY",
                                CustomObjectIdentifier: "a",
                            },
                        },
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: "qui",
                                    Country: "excepturi",
                                    DistinguishedNameQualifier: "autem",
                                    GenerationQualifier: "corporis",
                                    GivenName: "dicta",
                                    Initials: "rem",
                                    Locality: "doloremque",
                                    Organization: "quae",
                                    OrganizationalUnit: "nisi",
                                    Pseudonym: "recusandae",
                                    SerialNumber: "qui",
                                    State: "minus",
                                    Surname: "et",
                                    Title: "rerum",
                                },
                                DNSName: "ut",
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: "rem",
                                    PartyName: "eos",
                                },
                                IPAddress: "et",
                                OtherName: &shared.OtherName{
                                    TypeID: "reiciendis",
                                    Value: "aspernatur",
                                },
                                RegisteredID: "praesentium",
                                Rfc822Name: "porro",
                                UniformResourceIdentifier: "nihil",
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: "RESOURCE_PKI_MANIFEST",
                                CustomObjectIdentifier: "consequatur",
                            },
                        },
                    },
                },
                KeyAlgorithm: "EC_secp384r1",
                SigningAlgorithm: "SHA512WITHECDSA",
                Subject: shared.Asn1Subject{
                    CommonName: "atque",
                    Country: "amet",
                    DistinguishedNameQualifier: "nisi",
                    GenerationQualifier: "quidem",
                    GivenName: "est",
                    Initials: "quo",
                    Locality: "vero",
                    Organization: "alias",
                    OrganizationalUnit: "totam",
                    Pseudonym: "deserunt",
                    SerialNumber: "eius",
                    State: "repellat",
                    Surname: "beatae",
                    Title: "omnis",
                },
            },
            CertificateAuthorityType: "SUBORDINATE",
            IdempotencyToken: "aut",
            KeyStorageSecurityStandard: "FIPS_140_2_LEVEL_2_OR_HIGHER",
            RevocationConfiguration: &shared.RevocationConfiguration{
                CrlConfiguration: &shared.CrlConfiguration{
                    CustomCname: "magni",
                    Enabled: false,
                    ExpirationInDays: 4525004039791920848,
                    S3BucketName: "culpa",
                    S3ObjectACL: "BUCKET_OWNER_FULL_CONTROL",
                },
                OcspConfiguration: &shared.OcspConfiguration{
                    Enabled: false,
                    OcspCustomCname: "ut",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "architecto",
                    Value: "molestias",
                },
                shared.Tag{
                    Key: "rerum",
                    Value: "quo",
                },
                shared.Tag{
                    Key: "et",
                    Value: "saepe",
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