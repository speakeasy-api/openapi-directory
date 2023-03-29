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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
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
                                    CommonName: "fuga",
                                    Country: "Niger",
                                    CustomAttributes: []shared.CustomAttribute{
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "iusto",
                                            Value: "ullam",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "saepe",
                                            Value: "inventore",
                                        },
                                    },
                                    DistinguishedNameQualifier: "sapiente",
                                    GenerationQualifier: "enim",
                                    GivenName: "eum",
                                    Initials: "voluptatum",
                                    Locality: "autem",
                                    Organization: "vel",
                                    OrganizationalUnit: "non",
                                    Pseudonym: "deleniti",
                                    SerialNumber: "similique",
                                    State: "reprehenderit",
                                    Surname: "molestiae",
                                    Title: "Internal Brand Director",
                                },
                                DNSName: "dicta",
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: "est",
                                    PartyName: "voluptatem",
                                },
                                IPAddress: "consequatur",
                                OtherName: &shared.OtherName{
                                    TypeID: "fugiat",
                                    Value: "a",
                                },
                                RegisteredID: "omnis",
                                Rfc822Name: "eos",
                                UniformResourceIdentifier: "accusamus",
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: "RESOURCE_PKI_NOTIFY",
                                CustomObjectIdentifier: "reiciendis",
                            },
                        },
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: "rem",
                                    Country: "Seychelles",
                                    CustomAttributes: []shared.CustomAttribute{
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "praesentium",
                                            Value: "occaecati",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "dolor",
                                            Value: "soluta",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "sed",
                                            Value: "quisquam",
                                        },
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "rerum",
                                            Value: "culpa",
                                        },
                                    },
                                    DistinguishedNameQualifier: "qui",
                                    GenerationQualifier: "sed",
                                    GivenName: "rerum",
                                    Initials: "possimus",
                                    Locality: "occaecati",
                                    Organization: "odit",
                                    OrganizationalUnit: "esse",
                                    Pseudonym: "rem",
                                    SerialNumber: "voluptatem",
                                    State: "amet",
                                    Surname: "est",
                                    Title: "Legacy Division Manager",
                                },
                                DNSName: "similique",
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: "dolores",
                                    PartyName: "sit",
                                },
                                IPAddress: "quia",
                                OtherName: &shared.OtherName{
                                    TypeID: "et",
                                    Value: "voluptatem",
                                },
                                RegisteredID: "laborum",
                                Rfc822Name: "modi",
                                UniformResourceIdentifier: "et",
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: "RESOURCE_PKI_MANIFEST",
                                CustomObjectIdentifier: "earum",
                            },
                        },
                    },
                },
                KeyAlgorithm: "EC_secp384r1",
                SigningAlgorithm: "SHA384WITHRSA",
                Subject: shared.Asn1Subject{
                    CommonName: "qui",
                    Country: "Guernsey",
                    CustomAttributes: []shared.CustomAttribute{
                        shared.CustomAttribute{
                            ObjectIdentifier: "iusto",
                            Value: "ut",
                        },
                        shared.CustomAttribute{
                            ObjectIdentifier: "optio",
                            Value: "aspernatur",
                        },
                        shared.CustomAttribute{
                            ObjectIdentifier: "inventore",
                            Value: "ut",
                        },
                    },
                    DistinguishedNameQualifier: "libero",
                    GenerationQualifier: "et",
                    GivenName: "libero",
                    Initials: "ipsum",
                    Locality: "non",
                    Organization: "ea",
                    OrganizationalUnit: "magni",
                    Pseudonym: "placeat",
                    SerialNumber: "ipsam",
                    State: "est",
                    Surname: "commodi",
                    Title: "National Intranet Supervisor",
                },
            },
            CertificateAuthorityType: "ROOT",
            IdempotencyToken: "harum",
            KeyStorageSecurityStandard: "FIPS_140_2_LEVEL_3_OR_HIGHER",
            RevocationConfiguration: &shared.RevocationConfiguration{
                CrlConfiguration: &shared.CrlConfiguration{
                    CustomCname: "a",
                    Enabled: false,
                    ExpirationInDays: 102044,
                    S3BucketName: "et",
                    S3ObjectACL: "PUBLIC_READ",
                },
                OcspConfiguration: &shared.OcspConfiguration{
                    Enabled: false,
                    OcspCustomCname: "quidem",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "asperiores",
                    Value: "et",
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