<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateCertificateAuthority(ctx, operations.CreateCertificateAuthorityRequest{
        CreateCertificateAuthorityRequest: shared.CreateCertificateAuthorityRequest{
            CertificateAuthorityConfiguration: shared.CertificateAuthorityConfiguration{
                CsrExtensions: &shared.CsrExtensions{
                    KeyUsage: &shared.KeyUsage{
                        CRLSign: sdk.Bool(false),
                        DataEncipherment: sdk.Bool(false),
                        DecipherOnly: sdk.Bool(false),
                        DigitalSignature: sdk.Bool(false),
                        EncipherOnly: sdk.Bool(false),
                        KeyAgreement: sdk.Bool(false),
                        KeyCertSign: sdk.Bool(false),
                        KeyEncipherment: sdk.Bool(false),
                        NonRepudiation: sdk.Bool(false),
                    },
                    SubjectInformationAccess: []shared.AccessDescription{
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: sdk.String("provident"),
                                    Country: sdk.String("Portugal"),
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
                                    DistinguishedNameQualifier: sdk.String("iure"),
                                    GenerationQualifier: sdk.String("magnam"),
                                    GivenName: sdk.String("debitis"),
                                    Initials: sdk.String("ipsa"),
                                    Locality: sdk.String("delectus"),
                                    Organization: sdk.String("tempora"),
                                    OrganizationalUnit: sdk.String("suscipit"),
                                    Pseudonym: sdk.String("molestiae"),
                                    SerialNumber: sdk.String("minus"),
                                    State: sdk.String("placeat"),
                                    Surname: sdk.String("voluptatum"),
                                    Title: sdk.String("Ms."),
                                },
                                DNSName: sdk.String("excepturi"),
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: sdk.String("nisi"),
                                    PartyName: "recusandae",
                                },
                                IPAddress: sdk.String("temporibus"),
                                OtherName: &shared.OtherName{
                                    TypeID: "ab",
                                    Value: "quis",
                                },
                                RegisteredID: sdk.String("veritatis"),
                                Rfc822Name: sdk.String("deserunt"),
                                UniformResourceIdentifier: sdk.String("perferendis"),
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: shared.AccessMethodTypeEnumResourcePkiManifest.ToPointer(),
                                CustomObjectIdentifier: sdk.String("repellendus"),
                            },
                        },
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: sdk.String("sapiente"),
                                    Country: sdk.String("San Marino"),
                                    CustomAttributes: []shared.CustomAttribute{
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "at",
                                            Value: "at",
                                        },
                                    },
                                    DistinguishedNameQualifier: sdk.String("maiores"),
                                    GenerationQualifier: sdk.String("molestiae"),
                                    GivenName: sdk.String("quod"),
                                    Initials: sdk.String("quod"),
                                    Locality: sdk.String("esse"),
                                    Organization: sdk.String("totam"),
                                    OrganizationalUnit: sdk.String("porro"),
                                    Pseudonym: sdk.String("dolorum"),
                                    SerialNumber: sdk.String("dicta"),
                                    State: sdk.String("nam"),
                                    Surname: sdk.String("officia"),
                                    Title: sdk.String("Ms."),
                                },
                                DNSName: sdk.String("fugit"),
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: sdk.String("deleniti"),
                                    PartyName: "hic",
                                },
                                IPAddress: sdk.String("optio"),
                                OtherName: &shared.OtherName{
                                    TypeID: "totam",
                                    Value: "beatae",
                                },
                                RegisteredID: sdk.String("commodi"),
                                Rfc822Name: sdk.String("molestiae"),
                                UniformResourceIdentifier: sdk.String("modi"),
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: shared.AccessMethodTypeEnumCaRepository.ToPointer(),
                                CustomObjectIdentifier: sdk.String("impedit"),
                            },
                        },
                        shared.AccessDescription{
                            AccessLocation: shared.GeneralName{
                                DirectoryName: &shared.Asn1Subject{
                                    CommonName: sdk.String("cum"),
                                    Country: sdk.String("Kenya"),
                                    CustomAttributes: []shared.CustomAttribute{
                                        shared.CustomAttribute{
                                            ObjectIdentifier: "excepturi",
                                            Value: "aspernatur",
                                        },
                                    },
                                    DistinguishedNameQualifier: sdk.String("perferendis"),
                                    GenerationQualifier: sdk.String("ad"),
                                    GivenName: sdk.String("natus"),
                                    Initials: sdk.String("sed"),
                                    Locality: sdk.String("iste"),
                                    Organization: sdk.String("dolor"),
                                    OrganizationalUnit: sdk.String("natus"),
                                    Pseudonym: sdk.String("laboriosam"),
                                    SerialNumber: sdk.String("hic"),
                                    State: sdk.String("saepe"),
                                    Surname: sdk.String("fuga"),
                                    Title: sdk.String("Ms."),
                                },
                                DNSName: sdk.String("corporis"),
                                EdiPartyName: &shared.EdiPartyName{
                                    NameAssigner: sdk.String("iste"),
                                    PartyName: "iure",
                                },
                                IPAddress: sdk.String("saepe"),
                                OtherName: &shared.OtherName{
                                    TypeID: "quidem",
                                    Value: "architecto",
                                },
                                RegisteredID: sdk.String("ipsa"),
                                Rfc822Name: sdk.String("reiciendis"),
                                UniformResourceIdentifier: sdk.String("est"),
                            },
                            AccessMethod: shared.AccessMethod{
                                AccessMethodType: shared.AccessMethodTypeEnumResourcePkiManifest.ToPointer(),
                                CustomObjectIdentifier: sdk.String("laborum"),
                            },
                        },
                    },
                },
                KeyAlgorithm: shared.KeyAlgorithmEnumRsa2048,
                SigningAlgorithm: shared.SigningAlgorithmEnumSha384Withecdsa,
                Subject: shared.Asn1Subject{
                    CommonName: sdk.String("corporis"),
                    Country: sdk.String("Brunei Darussalam"),
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
                    DistinguishedNameQualifier: sdk.String("doloribus"),
                    GenerationQualifier: sdk.String("sapiente"),
                    GivenName: sdk.String("architecto"),
                    Initials: sdk.String("mollitia"),
                    Locality: sdk.String("dolorem"),
                    Organization: sdk.String("culpa"),
                    OrganizationalUnit: sdk.String("consequuntur"),
                    Pseudonym: sdk.String("repellat"),
                    SerialNumber: sdk.String("mollitia"),
                    State: sdk.String("occaecati"),
                    Surname: sdk.String("numquam"),
                    Title: sdk.String("Ms."),
                },
            },
            CertificateAuthorityType: shared.CertificateAuthorityTypeEnumRoot,
            IdempotencyToken: sdk.String("molestiae"),
            KeyStorageSecurityStandard: shared.KeyStorageSecurityStandardEnumFips1402Level2OrHigher.ToPointer(),
            RevocationConfiguration: &shared.RevocationConfiguration{
                CrlConfiguration: &shared.CrlConfiguration{
                    CustomCname: sdk.String("error"),
                    Enabled: false,
                    ExpirationInDays: sdk.Int64(158969),
                    S3BucketName: sdk.String("quis"),
                    S3ObjectACL: shared.S3ObjectACLEnumPublicRead.ToPointer(),
                },
                OcspConfiguration: &shared.OcspConfiguration{
                    Enabled: false,
                    OcspCustomCname: sdk.String("laborum"),
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "enim",
                    Value: sdk.String("odit"),
                },
                shared.Tag{
                    Key: "quo",
                    Value: sdk.String("sequi"),
                },
                shared.Tag{
                    Key: "tenetur",
                    Value: sdk.String("ipsam"),
                },
            },
            UsageMode: shared.CertificateAuthorityUsageModeEnumShortLivedCertificate.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.CreateCertificateAuthorityXAmzTargetEnumAcmPrivateCaCreateCertificateAuthority,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCertificateAuthorityResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->