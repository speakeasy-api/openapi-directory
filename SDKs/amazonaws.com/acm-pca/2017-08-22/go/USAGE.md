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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "ACMPrivateCA.CreateCertificateAuthority",
        },
        Request: shared.CreateCertificateAuthorityRequest{
            CertificateAuthorityConfiguration: shared.CertificateAuthorityConfiguration{
                CsrExtensions: &shared.CsrExtensions{
                    KeyUsage: &shared.KeyUsage{
                        CRLSign: true,
                        DataEncipherment: false,
                        DecipherOnly: true,
                        DigitalSignature: true,
                        EncipherOnly: false,
                        KeyAgreement: true,
                        KeyCertSign: true,
                        KeyEncipherment: false,
                        NonRepudiation: false,
                    },
                    SubjectInformationAccess: []shared.AccessDescription{
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: "et",
                                    Country: "voluptate",
                                    DistinguishedNameQualifier: "iste",
                                    GenerationQualifier: "vitae",
                                    GivenName: "totam",
                                    Initials: "dolores",
                                    Locality: "illum",
                                    Organization: "debitis",
                                    OrganizationalUnit: "vel",
                                    Pseudonym: "odio",
                                    SerialNumber: "dolore",
                                    State: "id",
                                    Surname: "aspernatur",
                                    Title: "accusantium",
                                },
                                DNSName: "totam",
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: "commodi",
                                    PartyName: "quis",
                                },
                                IPAddress: "est",
                                OtherName: &shared.OtherName{
                                    TypeID: "aut",
                                    Value: "odit",
                                },
                                RegisteredID: "non",
                                Rfc822Name: "voluptas",
                                UniformResourceIdentifier: "omnis",
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: "CA_REPOSITORY",
                                CustomObjectIdentifier: "illo",
                            },
                        },
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: "sed",
                                    Country: "officiis",
                                    DistinguishedNameQualifier: "autem",
                                    GenerationQualifier: "consectetur",
                                    GivenName: "nobis",
                                    Initials: "odio",
                                    Locality: "qui",
                                    Organization: "recusandae",
                                    OrganizationalUnit: "at",
                                    Pseudonym: "ipsum",
                                    SerialNumber: "eveniet",
                                    State: "modi",
                                    Surname: "sint",
                                    Title: "inventore",
                                },
                                DNSName: "ut",
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: "exercitationem",
                                    PartyName: "aut",
                                },
                                IPAddress: "reprehenderit",
                                OtherName: &shared.OtherName{
                                    TypeID: "tempore",
                                    Value: "maiores",
                                },
                                RegisteredID: "incidunt",
                                Rfc822Name: "dolor",
                                UniformResourceIdentifier: "beatae",
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: "RESOURCE_PKI_MANIFEST",
                                CustomObjectIdentifier: "in",
                            },
                        },
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: "et",
                                    Country: "omnis",
                                    DistinguishedNameQualifier: "ipsum",
                                    GenerationQualifier: "ex",
                                    GivenName: "dolores",
                                    Initials: "placeat",
                                    Locality: "vel",
                                    Organization: "rerum",
                                    OrganizationalUnit: "mollitia",
                                    Pseudonym: "voluptas",
                                    SerialNumber: "quam",
                                    State: "reprehenderit",
                                    Surname: "qui",
                                    Title: "qui",
                                },
                                DNSName: "unde",
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: "in",
                                    PartyName: "autem",
                                },
                                IPAddress: "qui",
                                OtherName: &shared.OtherName{
                                    TypeID: "ut",
                                    Value: "itaque",
                                },
                                RegisteredID: "ab",
                                Rfc822Name: "neque",
                                UniformResourceIdentifier: "ullam",
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: "RESOURCE_PKI_NOTIFY",
                                CustomObjectIdentifier: "accusantium",
                            },
                        },
                    },
                },
                KeyAlgorithm: "RSA_2048",
                SigningAlgorithm: "SHA384WITHRSA",
                Subject: shared.Asn1Subject{
                    CommonName: "quam",
                    Country: "velit",
                    DistinguishedNameQualifier: "cumque",
                    GenerationQualifier: "soluta",
                    GivenName: "sunt",
                    Initials: "voluptates",
                    Locality: "magni",
                    Organization: "et",
                    OrganizationalUnit: "optio",
                    Pseudonym: "qui",
                    SerialNumber: "earum",
                    State: "illo",
                    Surname: "omnis",
                    Title: "ut",
                },
            },
            CertificateAuthorityType: "ROOT",
            IdempotencyToken: "dolor",
            KeyStorageSecurityStandard: "FIPS_140_2_LEVEL_2_OR_HIGHER",
            RevocationConfiguration: &shared.RevocationConfiguration{
                CrlConfiguration: &shared.CrlConfiguration{
                    CustomCname: "error",
                    Enabled: false,
                    ExpirationInDays: 4989862523986425397,
                    S3BucketName: "nostrum",
                    S3ObjectACL: "BUCKET_OWNER_FULL_CONTROL",
                },
                OcspConfiguration: &shared.OcspConfiguration{
                    Enabled: false,
                    OcspCustomCname: "sed",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "soluta",
                    Value: "aut",
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