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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateCertificateAuthorityRequest{
        CreateCertificateAuthorityRequest: shared.CreateCertificateAuthorityRequest{
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
                                    CommonName: "provident",
                                    Country: "Portugal",
                                    CustomAttributes: []shared.CustomAttribute{
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "unde",
                                            Value: "nulla",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "corrupti",
                                            Value: "illum",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "vel",
                                            Value: "error",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "deserunt",
                                            Value: "suscipit",
                                        },
                                    },
                                    DistinguishedNameQualifier: "iure",
                                    GenerationQualifier: "magnam",
                                    GivenName: "debitis",
                                    Initials: "ipsa",
                                    Locality: "delectus",
                                    Organization: "tempora",
                                    OrganizationalUnit: "suscipit",
                                    Pseudonym: "molestiae",
                                    SerialNumber: "minus",
                                    State: "placeat",
                                    Surname: "voluptatum",
                                    Title: "Ms.",
                                },
                                DNSName: "excepturi",
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: "nisi",
                                    PartyName: "recusandae",
                                },
                                IPAddress: "temporibus",
                                OtherName: &shared.OtherName{
                                    TypeID: "ab",
                                    Value: "quis",
                                },
                                RegisteredID: "veritatis",
                                Rfc822Name: "deserunt",
                                UniformResourceIdentifier: "perferendis",
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: "RESOURCE_PKI_MANIFEST",
                                CustomObjectIdentifier: "repellendus",
                            },
                        },
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: "sapiente",
                                    Country: "San Marino",
                                    CustomAttributes: []shared.CustomAttribute{
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "at",
                                            Value: "at",
                                        },
                                    },
                                    DistinguishedNameQualifier: "maiores",
                                    GenerationQualifier: "molestiae",
                                    GivenName: "quod",
                                    Initials: "quod",
                                    Locality: "esse",
                                    Organization: "totam",
                                    OrganizationalUnit: "porro",
                                    Pseudonym: "dolorum",
                                    SerialNumber: "dicta",
                                    State: "nam",
                                    Surname: "officia",
                                    Title: "Ms.",
                                },
                                DNSName: "fugit",
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: "deleniti",
                                    PartyName: "hic",
                                },
                                IPAddress: "optio",
                                OtherName: &shared.OtherName{
                                    TypeID: "totam",
                                    Value: "beatae",
                                },
                                RegisteredID: "commodi",
                                Rfc822Name: "molestiae",
                                UniformResourceIdentifier: "modi",
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: "CA_REPOSITORY",
                                CustomObjectIdentifier: "impedit",
                            },
                        },
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: "cum",
                                    Country: "Kenya",
                                    CustomAttributes: []shared.CustomAttribute{
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "excepturi",
                                            Value: "aspernatur",
                                        },
                                    },
                                    DistinguishedNameQualifier: "perferendis",
                                    GenerationQualifier: "ad",
                                    GivenName: "natus",
                                    Initials: "sed",
                                    Locality: "iste",
                                    Organization: "dolor",
                                    OrganizationalUnit: "natus",
                                    Pseudonym: "laboriosam",
                                    SerialNumber: "hic",
                                    State: "saepe",
                                    Surname: "fuga",
                                    Title: "Ms.",
                                },
                                DNSName: "corporis",
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: "iste",
                                    PartyName: "iure",
                                },
                                IPAddress: "saepe",
                                OtherName: &shared.OtherName{
                                    TypeID: "quidem",
                                    Value: "architecto",
                                },
                                RegisteredID: "ipsa",
                                Rfc822Name: "reiciendis",
                                UniformResourceIdentifier: "est",
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: "RESOURCE_PKI_MANIFEST",
                                CustomObjectIdentifier: "laborum",
                            },
                        },
                    },
                },
                KeyAlgorithm: "RSA_2048",
                SigningAlgorithm: "SHA384WITHECDSA",
                Subject: shared.Asn1Subject{
                    CommonName: "corporis",
                    Country: "Brunei Darussalam",
                    CustomAttributes: []shared.CustomAttribute{
                        shared.CustomAttribute{
                            ObjectIdentifier: "enim",
                            Value: "omnis",
                        },
                        shared.CustomAttribute{
                            ObjectIdentifier: "nemo",
                            Value: "minima",
                        },
                        shared.CustomAttribute{
                            ObjectIdentifier: "excepturi",
                            Value: "accusantium",
                        },
                        shared.CustomAttribute{
                            ObjectIdentifier: "iure",
                            Value: "culpa",
                        },
                    },
                    DistinguishedNameQualifier: "doloribus",
                    GenerationQualifier: "sapiente",
                    GivenName: "architecto",
                    Initials: "mollitia",
                    Locality: "dolorem",
                    Organization: "culpa",
                    OrganizationalUnit: "consequuntur",
                    Pseudonym: "repellat",
                    SerialNumber: "mollitia",
                    State: "occaecati",
                    Surname: "numquam",
                    Title: "Ms.",
                },
            },
            CertificateAuthorityType: "ROOT",
            IdempotencyToken: "molestiae",
            KeyStorageSecurityStandard: "FIPS_140_2_LEVEL_2_OR_HIGHER",
            RevocationConfiguration: &shared.RevocationConfiguration{
                CrlConfiguration: &shared.CrlConfiguration{
                    CustomCname: "error",
                    Enabled: false,
                    ExpirationInDays: 158969,
                    S3BucketName: "quis",
                    S3ObjectACL: "PUBLIC_READ",
                },
                OcspConfiguration: &shared.OcspConfiguration{
                    Enabled: false,
                    OcspCustomCname: "laborum",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "enim",
                    Value: "odit",
                },
                shared.Tag{
                    Key: "quo",
                    Value: "sequi",
                },
                shared.Tag{
                    Key: "tenetur",
                    Value: "ipsam",
                },
            },
            UsageMode: "SHORT_LIVED_CERTIFICATE",
        },
        XAmzAlgorithm: "possimus",
        XAmzContentSha256: "aut",
        XAmzCredential: "quasi",
        XAmzDate: "error",
        XAmzSecurityToken: "temporibus",
        XAmzSignature: "laborum",
        XAmzSignedHeaders: "quasi",
        XAmzTarget: "ACMPrivateCA.CreateCertificateAuthority",
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