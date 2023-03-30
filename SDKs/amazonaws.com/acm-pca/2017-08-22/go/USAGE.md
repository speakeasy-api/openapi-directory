<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateCertificateAuthorityRequest{
        Headers: operations.CreateCertificateAuthorityHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "ACMPrivateCA.CreateCertificateAuthority",
        },
        Request: shared.CreateCertificateAuthorityRequest{
            CertificateAuthorityConfiguration: shared.CertificateAuthorityConfiguration{
                CsrExtensions: &shared.CsrExtensions{
                    KeyUsage: &shared.KeyUsage{
                        CRLSign: false,
                        DataEncipherment: false,
                        DecipherOnly: false,
                        DigitalSignature: false,
                        EncipherOnly: false,
                        KeyAgreement: false,
                        KeyCertSign: false,
                        KeyEncipherment: false,
                        NonRepudiation: false,
                    },
                    SubjectInformationAccess: []shared.AccessDescription{
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: "vel",
                                    Country: "Netherlands Antilles",
                                    CustomAttributes: []shared.CustomAttribute{
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "suscipit",
                                            Value: "iure",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "magnam",
                                            Value: "debitis",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "ipsa",
                                            Value: "delectus",
                                        },
                                    },
                                    DistinguishedNameQualifier: "tempora",
                                    GenerationQualifier: "suscipit",
                                    GivenName: "molestiae",
                                    Initials: "minus",
                                    Locality: "placeat",
                                    Organization: "voluptatum",
                                    OrganizationalUnit: "iusto",
                                    Pseudonym: "excepturi",
                                    SerialNumber: "nisi",
                                    State: "recusandae",
                                    Surname: "temporibus",
                                    Title: "Mr.",
                                },
                                DNSName: "quis",
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: "veritatis",
                                    PartyName: "deserunt",
                                },
                                IPAddress: "perferendis",
                                OtherName: &shared.OtherName{
                                    TypeID: "ipsam",
                                    Value: "repellendus",
                                },
                                RegisteredID: "sapiente",
                                Rfc822Name: "quo",
                                UniformResourceIdentifier: "odit",
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: "RESOURCE_PKI_NOTIFY",
                                CustomObjectIdentifier: "at",
                            },
                        },
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: "maiores",
                                    Country: "Kuwait",
                                    CustomAttributes: []shared.CustomAttribute{
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "quod",
                                            Value: "esse",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "totam",
                                            Value: "porro",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "dolorum",
                                            Value: "dicta",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "nam",
                                            Value: "officia",
                                        },
                                    },
                                    DistinguishedNameQualifier: "occaecati",
                                    GenerationQualifier: "fugit",
                                    GivenName: "deleniti",
                                    Initials: "hic",
                                    Locality: "optio",
                                    Organization: "totam",
                                    OrganizationalUnit: "beatae",
                                    Pseudonym: "commodi",
                                    SerialNumber: "molestiae",
                                    State: "modi",
                                    Surname: "qui",
                                    Title: "Miss",
                                },
                                DNSName: "cum",
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: "esse",
                                    PartyName: "ipsum",
                                },
                                IPAddress: "excepturi",
                                OtherName: &shared.OtherName{
                                    TypeID: "aspernatur",
                                    Value: "perferendis",
                                },
                                RegisteredID: "ad",
                                Rfc822Name: "natus",
                                UniformResourceIdentifier: "sed",
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: "RESOURCE_PKI_MANIFEST",
                                CustomObjectIdentifier: "dolor",
                            },
                        },
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: "natus",
                                    Country: "Honduras",
                                    CustomAttributes: []shared.CustomAttribute{
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "saepe",
                                            Value: "fuga",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "in",
                                            Value: "corporis",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "iste",
                                            Value: "iure",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "saepe",
                                            Value: "quidem",
                                        },
                                    },
                                    DistinguishedNameQualifier: "architecto",
                                    GenerationQualifier: "ipsa",
                                    GivenName: "reiciendis",
                                    Initials: "est",
                                    Locality: "mollitia",
                                    Organization: "laborum",
                                    OrganizationalUnit: "dolores",
                                    Pseudonym: "dolorem",
                                    SerialNumber: "corporis",
                                    State: "explicabo",
                                    Surname: "nobis",
                                    Title: "Mrs.",
                                },
                                DNSName: "omnis",
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: "nemo",
                                    PartyName: "minima",
                                },
                                IPAddress: "excepturi",
                                OtherName: &shared.OtherName{
                                    TypeID: "accusantium",
                                    Value: "iure",
                                },
                                RegisteredID: "culpa",
                                Rfc822Name: "doloribus",
                                UniformResourceIdentifier: "sapiente",
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: "CA_REPOSITORY",
                                CustomObjectIdentifier: "mollitia",
                            },
                        },
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: "dolorem",
                                    Country: "New Caledonia",
                                    CustomAttributes: []shared.CustomAttribute{
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "repellat",
                                            Value: "mollitia",
                                        },
                                    },
                                    DistinguishedNameQualifier: "occaecati",
                                    GenerationQualifier: "numquam",
                                    GivenName: "commodi",
                                    Initials: "quam",
                                    Locality: "molestiae",
                                    Organization: "velit",
                                    OrganizationalUnit: "error",
                                    Pseudonym: "quia",
                                    SerialNumber: "quis",
                                    State: "vitae",
                                    Surname: "laborum",
                                    Title: "Miss",
                                },
                                DNSName: "enim",
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: "odit",
                                    PartyName: "quo",
                                },
                                IPAddress: "sequi",
                                OtherName: &shared.OtherName{
                                    TypeID: "tenetur",
                                    Value: "ipsam",
                                },
                                RegisteredID: "id",
                                Rfc822Name: "possimus",
                                UniformResourceIdentifier: "aut",
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: "CA_REPOSITORY",
                                CustomObjectIdentifier: "error",
                            },
                        },
                    },
                },
                KeyAlgorithm: "EC_secp384r1",
                SigningAlgorithm: "SHA384WITHRSA",
                Subject: shared.Asn1Subject{
                    CommonName: "quasi",
                    Country: "Virgin Islands, British",
                    CustomAttributes: []shared.CustomAttribute{
                        shared.CustomAttribute{
                            ObjectIdentifier: "vero",
                            Value: "nihil",
                        },
                        shared.CustomAttribute{
                            ObjectIdentifier: "praesentium",
                            Value: "voluptatibus",
                        },
                        shared.CustomAttribute{
                            ObjectIdentifier: "ipsa",
                            Value: "omnis",
                        },
                        shared.CustomAttribute{
                            ObjectIdentifier: "voluptate",
                            Value: "cum",
                        },
                    },
                    DistinguishedNameQualifier: "perferendis",
                    GenerationQualifier: "doloremque",
                    GivenName: "reprehenderit",
                    Initials: "ut",
                    Locality: "maiores",
                    Organization: "dicta",
                    OrganizationalUnit: "corporis",
                    Pseudonym: "dolore",
                    SerialNumber: "iusto",
                    State: "dicta",
                    Surname: "harum",
                    Title: "Mrs.",
                },
            },
            CertificateAuthorityType: "SUBORDINATE",
            IdempotencyToken: "commodi",
            KeyStorageSecurityStandard: "FIPS_140_2_LEVEL_3_OR_HIGHER",
            RevocationConfiguration: &shared.RevocationConfiguration{
                CrlConfiguration: &shared.CrlConfiguration{
                    CustomCname: "quae",
                    Enabled: false,
                    ExpirationInDays: 216822,
                    S3BucketName: "quidem",
                    S3ObjectACL: "BUCKET_OWNER_FULL_CONTROL",
                },
                OcspConfiguration: &shared.OcspConfiguration{
                    Enabled: false,
                    OcspCustomCname: "excepturi",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "modi",
                    Value: "praesentium",
                },
                shared.Tag{
                    Key: "rem",
                    Value: "voluptates",
                },
                shared.Tag{
                    Key: "quasi",
                    Value: "repudiandae",
                },
                shared.Tag{
                    Key: "sint",
                    Value: "veritatis",
                },
            },
            UsageMode: "SHORT_LIVED_CERTIFICATE",
        },
    }

    ctx := context.Background()
    res, err := s.CreateCertificateAuthority(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCertificateAuthorityResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->