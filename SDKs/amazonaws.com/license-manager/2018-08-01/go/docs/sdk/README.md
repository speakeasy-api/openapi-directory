# SDK

## Overview

License Manager makes it easier to manage licenses from software vendors across multiple Amazon Web Services accounts and on-premises servers.

Amazon Web Services documentation
<https://docs.aws.amazon.com/license-manager/>
### Available Operations

* [AcceptGrant](#acceptgrant) - Accepts the specified grant.
* [CheckInLicense](#checkinlicense) - Checks in the specified license. Check in a license when it is no longer in use.
* [CheckoutBorrowLicense](#checkoutborrowlicense) - Checks out the specified license for offline use.
* [CheckoutLicense](#checkoutlicense) - <p>Checks out the specified license.</p> <note> <p>If the account that created the license is the same that is performing the check out, you must specify the account as the beneficiary.</p> </note>
* [CreateGrant](#creategrant) - Creates a grant for the specified license. A grant shares the use of license entitlements with a specific Amazon Web Services account, an organization, or an organizational unit (OU). For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.
* [CreateGrantVersion](#creategrantversion) - Creates a new version of the specified grant. For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.
* [CreateLicense](#createlicense) - Creates a license.
* [CreateLicenseConfiguration](#createlicenseconfiguration) - <p>Creates a license configuration.</p> <p>A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), license affinity to host (how long a license must be associated with a host), and the number of licenses purchased and used.</p>
* [CreateLicenseConversionTaskForResource](#createlicenseconversiontaskforresource) - Creates a new license conversion task.
* [CreateLicenseManagerReportGenerator](#createlicensemanagerreportgenerator) - Creates a report generator.
* [CreateLicenseVersion](#createlicenseversion) - Creates a new version of the specified license.
* [CreateToken](#createtoken) - <p>Creates a long-lived token.</p> <p>A refresh token is a JWT token used to get an access token. With an access token, you can call AssumeRoleWithWebIdentity to get role credentials that you can use to call License Manager to manage the specified license.</p>
* [DeleteGrant](#deletegrant) - Deletes the specified grant.
* [DeleteLicense](#deletelicense) - Deletes the specified license.
* [DeleteLicenseConfiguration](#deletelicenseconfiguration) - <p>Deletes the specified license configuration.</p> <p>You cannot delete a license configuration that is in use.</p>
* [DeleteLicenseManagerReportGenerator](#deletelicensemanagerreportgenerator) - <p>Deletes the specified report generator.</p> <p>This action deletes the report generator, which stops it from generating future reports. The action cannot be reversed. It has no effect on the previous reports from this generator.</p>
* [DeleteToken](#deletetoken) - Deletes the specified token. Must be called in the license home Region.
* [ExtendLicenseConsumption](#extendlicenseconsumption) - Extends the expiration date for license consumption.
* [GetAccessToken](#getaccesstoken) - Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens are valid for one hour.
* [GetGrant](#getgrant) - Gets detailed information about the specified grant.
* [GetLicense](#getlicense) - Gets detailed information about the specified license.
* [GetLicenseConfiguration](#getlicenseconfiguration) - Gets detailed information about the specified license configuration.
* [GetLicenseConversionTask](#getlicenseconversiontask) - Gets information about the specified license type conversion task.
* [GetLicenseManagerReportGenerator](#getlicensemanagerreportgenerator) - Gets information about the specified report generator.
* [GetLicenseUsage](#getlicenseusage) - Gets detailed information about the usage of the specified license.
* [GetServiceSettings](#getservicesettings) - Gets the License Manager settings for the current Region.
* [ListAssociationsForLicenseConfiguration](#listassociationsforlicenseconfiguration) - <p>Lists the resource associations for the specified license configuration.</p> <p>Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance might not consume a license (depending on the license rules).</p>
* [ListDistributedGrants](#listdistributedgrants) - Lists the grants distributed for the specified license.
* [ListFailuresForLicenseConfigurationOperations](#listfailuresforlicenseconfigurationoperations) - Lists the license configuration operations that failed.
* [ListLicenseConfigurations](#listlicenseconfigurations) - Lists the license configurations for your account.
* [ListLicenseConversionTasks](#listlicenseconversiontasks) - Lists the license type conversion tasks for your account.
* [ListLicenseManagerReportGenerators](#listlicensemanagerreportgenerators) - Lists the report generators for your account.
* [ListLicenseSpecificationsForResource](#listlicensespecificationsforresource) - Describes the license configurations for the specified resource.
* [ListLicenseVersions](#listlicenseversions) - Lists all versions of the specified license.
* [ListLicenses](#listlicenses) - Lists the licenses for your account.
* [ListReceivedGrants](#listreceivedgrants) - Lists grants that are received. Received grants are grants created while specifying the recipient as this Amazon Web Services account, your organization, or an organizational unit (OU) to which this member account belongs.
* [ListReceivedGrantsForOrganization](#listreceivedgrantsfororganization) - Lists the grants received for all accounts in the organization.
* [ListReceivedLicenses](#listreceivedlicenses) - Lists received licenses.
* [ListReceivedLicensesForOrganization](#listreceivedlicensesfororganization) - Lists the licenses received for all accounts in the organization.
* [ListResourceInventory](#listresourceinventory) - Lists resources managed using Systems Manager inventory.
* [ListTagsForResource](#listtagsforresource) - Lists the tags for the specified license configuration.
* [ListTokens](#listtokens) - Lists your tokens.
* [ListUsageForLicenseConfiguration](#listusageforlicenseconfiguration) - Lists all license usage records for a license configuration, displaying license consumption details by resource at a selected point in time. Use this action to audit the current license consumption for any license inventory and configuration.
* [RejectGrant](#rejectgrant) - Rejects the specified grant.
* [TagResource](#tagresource) - Adds the specified tags to the specified license configuration.
* [UntagResource](#untagresource) - Removes the specified tags from the specified license configuration.
* [UpdateLicenseConfiguration](#updatelicenseconfiguration) - Modifies the attributes of an existing license configuration.
* [UpdateLicenseManagerReportGenerator](#updatelicensemanagerreportgenerator) - <p>Updates a report generator.</p> <p>After you make changes to a report generator, it starts generating new reports within 60 minutes of being updated.</p>
* [UpdateLicenseSpecificationsForResource](#updatelicensespecificationsforresource) - <p>Adds or removes the specified license configurations for the specified Amazon Web Services resource.</p> <p>You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and CloudFormation templates, as they send license configurations to the operation that creates the resource.</p>
* [UpdateServiceSettings](#updateservicesettings) - Updates License Manager settings for the current Region.

## AcceptGrant

Accepts the specified grant.

### Example Usage

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
    res, err := s.SDK.AcceptGrant(ctx, operations.AcceptGrantRequest{
        AcceptGrantRequest: shared.AcceptGrantRequest{
            GrantArn: "vel",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.AcceptGrantXAmzTargetEnumAwsLicenseManagerAcceptGrant,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptGrantResponse != nil {
        // handle response
    }
}
```

## CheckInLicense

Checks in the specified license. Check in a license when it is no longer in use.

### Example Usage

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
    res, err := s.SDK.CheckInLicense(ctx, operations.CheckInLicenseRequest{
        CheckInLicenseRequest: shared.CheckInLicenseRequest{
            Beneficiary: sdk.String("delectus"),
            LicenseConsumptionToken: "tempora",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.CheckInLicenseXAmzTargetEnumAwsLicenseManagerCheckInLicense,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckInLicenseResponse != nil {
        // handle response
    }
}
```

## CheckoutBorrowLicense

Checks out the specified license for offline use.

### Example Usage

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
    res, err := s.SDK.CheckoutBorrowLicense(ctx, operations.CheckoutBorrowLicenseRequest{
        CheckoutBorrowLicenseRequest: shared.CheckoutBorrowLicenseRequest{
            CheckoutMetadata: []shared.Metadata{
                shared.Metadata{
                    Name: sdk.String("Jake Bernier MD"),
                    Value: sdk.String("perferendis"),
                },
                shared.Metadata{
                    Name: sdk.String("Estelle Will"),
                    Value: sdk.String("at"),
                },
            },
            ClientToken: "at",
            DigitalSignatureMethod: shared.DigitalSignatureMethodEnumJwtPs384,
            Entitlements: []shared.EntitlementData{
                shared.EntitlementData{
                    Name: "Bernadette Schmidt",
                    Unit: shared.EntitlementDataUnitEnumBitsSecond,
                    Value: sdk.String("dolorum"),
                },
                shared.EntitlementData{
                    Name: "Antoinette Nikolaus",
                    Unit: shared.EntitlementDataUnitEnumTerabits,
                    Value: sdk.String("hic"),
                },
                shared.EntitlementData{
                    Name: "Everett Breitenberg",
                    Unit: shared.EntitlementDataUnitEnumMegabytes,
                    Value: sdk.String("qui"),
                },
                shared.EntitlementData{
                    Name: "Jonathon Klocko",
                    Unit: shared.EntitlementDataUnitEnumMicroseconds,
                    Value: sdk.String("perferendis"),
                },
            },
            LicenseArn: "ad",
            NodeID: sdk.String("natus"),
        },
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.CheckoutBorrowLicenseXAmzTargetEnumAwsLicenseManagerCheckoutBorrowLicense,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckoutBorrowLicenseResponse != nil {
        // handle response
    }
}
```

## CheckoutLicense

<p>Checks out the specified license.</p> <note> <p>If the account that created the license is the same that is performing the check out, you must specify the account as the beneficiary.</p> </note>

### Example Usage

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
    res, err := s.SDK.CheckoutLicense(ctx, operations.CheckoutLicenseRequest{
        CheckoutLicenseRequest: shared.CheckoutLicenseRequest{
            Beneficiary: sdk.String("fuga"),
            CheckoutType: shared.CheckoutTypeEnumProvisional,
            ClientToken: "corporis",
            Entitlements: []shared.EntitlementData{
                shared.EntitlementData{
                    Name: "Mr. Kerry Predovic",
                    Unit: shared.EntitlementDataUnitEnumMegabytesSecond,
                    Value: sdk.String("mollitia"),
                },
                shared.EntitlementData{
                    Name: "Ernest Ebert",
                    Unit: shared.EntitlementDataUnitEnumTerabytesSecond,
                    Value: sdk.String("enim"),
                },
                shared.EntitlementData{
                    Name: "Corey Hane III",
                    Unit: shared.EntitlementDataUnitEnumKilobytesSecond,
                    Value: sdk.String("doloribus"),
                },
            },
            KeyFingerprint: "sapiente",
            NodeID: sdk.String("architecto"),
            ProductSKU: "mollitia",
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.CheckoutLicenseXAmzTargetEnumAwsLicenseManagerCheckoutLicense,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckoutLicenseResponse != nil {
        // handle response
    }
}
```

## CreateGrant

Creates a grant for the specified license. A grant shares the use of license entitlements with a specific Amazon Web Services account, an organization, or an organizational unit (OU). For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.

### Example Usage

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
    res, err := s.SDK.CreateGrant(ctx, operations.CreateGrantRequest{
        CreateGrantRequest: shared.CreateGrantRequest{
            AllowedOperations: []shared.AllowedOperationEnum{
                shared.AllowedOperationEnumCheckInLicense,
                shared.AllowedOperationEnumCheckInLicense,
            },
            ClientToken: "velit",
            GrantName: "error",
            HomeRegion: "quia",
            LicenseArn: "quis",
            Principals: []string{
                "laborum",
            },
        },
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.CreateGrantXAmzTargetEnumAwsLicenseManagerCreateGrant,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGrantResponse != nil {
        // handle response
    }
}
```

## CreateGrantVersion

Creates a new version of the specified grant. For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.

### Example Usage

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
    res, err := s.SDK.CreateGrantVersion(ctx, operations.CreateGrantVersionRequest{
        CreateGrantVersionRequest: shared.CreateGrantVersionRequest{
            AllowedOperations: []shared.AllowedOperationEnum{
                shared.AllowedOperationEnumListPurchasedLicenses,
                shared.AllowedOperationEnumCreateGrant,
                shared.AllowedOperationEnumCreateGrant,
            },
            ClientToken: "error",
            GrantArn: "temporibus",
            GrantName: sdk.String("laborum"),
            Options: &shared.Options{
                ActivationOverrideBehavior: shared.ActivationOverrideBehaviorEnumDistributedGrantsOnly.ToPointer(),
            },
            SourceVersion: sdk.String("reiciendis"),
            Status: shared.GrantStatusEnumWorkflowCompleted.ToPointer(),
            StatusReason: sdk.String("vero"),
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.CreateGrantVersionXAmzTargetEnumAwsLicenseManagerCreateGrantVersion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGrantVersionResponse != nil {
        // handle response
    }
}
```

## CreateLicense

Creates a license.

### Example Usage

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
    res, err := s.SDK.CreateLicense(ctx, operations.CreateLicenseRequest{
        CreateLicenseRequest: shared.CreateLicenseRequest{
            Beneficiary: "perferendis",
            ClientToken: "doloremque",
            ConsumptionConfiguration: shared.ConsumptionConfiguration{
                BorrowConfiguration: &shared.BorrowConfiguration{
                    AllowEarlyCheckIn: false,
                    MaxTimeToLiveInMinutes: 441711,
                },
                ProvisionalConfiguration: &shared.ProvisionalConfiguration{
                    MaxTimeToLiveInMinutes: 282807,
                },
                RenewType: shared.RenewTypeEnumMonthly.ToPointer(),
            },
            Entitlements: []shared.Entitlement{
                shared.Entitlement{
                    AllowCheckIn: sdk.Bool(false),
                    MaxCount: sdk.Int64(359444),
                    Name: "Heidi Carter",
                    Overage: sdk.Bool(false),
                    Unit: shared.EntitlementUnitEnumMegabitsSecond,
                    Value: sdk.String("commodi"),
                },
            },
            HomeRegion: "repudiandae",
            Issuer: shared.Issuer{
                Name: "Edna Pouros",
                SignKey: sdk.String("pariatur"),
            },
            LicenseMetadata: []shared.Metadata{
                shared.Metadata{
                    Name: sdk.String("Dr. Jordan Von"),
                    Value: sdk.String("veritatis"),
                },
                shared.Metadata{
                    Name: sdk.String("Miss Randall Hamill"),
                    Value: sdk.String("explicabo"),
                },
            },
            LicenseName: "deserunt",
            ProductName: "distinctio",
            ProductSKU: "quibusdam",
            Validity: shared.DatetimeRange{
                Begin: "labore",
                End: sdk.String("modi"),
            },
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("assumenda"),
        XAmzTarget: operations.CreateLicenseXAmzTargetEnumAwsLicenseManagerCreateLicense,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLicenseResponse != nil {
        // handle response
    }
}
```

## CreateLicenseConfiguration

<p>Creates a license configuration.</p> <p>A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), license affinity to host (how long a license must be associated with a host), and the number of licenses purchased and used.</p>

### Example Usage

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
    res, err := s.SDK.CreateLicenseConfiguration(ctx, operations.CreateLicenseConfigurationRequest{
        CreateLicenseConfigurationRequest: shared.CreateLicenseConfigurationRequest{
            Description: sdk.String("ipsam"),
            DisassociateWhenNotFound: sdk.Bool(false),
            LicenseCount: sdk.Int64(4695),
            LicenseCountHardLimit: sdk.Bool(false),
            LicenseCountingType: shared.LicenseCountingTypeEnumVCPU,
            LicenseRules: []string{
                "excepturi",
                "tempora",
                "facilis",
            },
            Name: "Francisco Windler",
            ProductInformationList: []shared.ProductInformation{
                shared.ProductInformation{
                    ProductInformationFilterList: []shared.ProductInformationFilter{
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "aliquid",
                            ProductInformationFilterName: "provident",
                            ProductInformationFilterValue: []string{
                                "sint",
                                "officia",
                                "dolor",
                                "debitis",
                            },
                        },
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "a",
                            ProductInformationFilterName: "dolorum",
                            ProductInformationFilterValue: []string{
                                "in",
                                "illum",
                            },
                        },
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "maiores",
                            ProductInformationFilterName: "rerum",
                            ProductInformationFilterValue: []string{
                                "magnam",
                            },
                        },
                    },
                    ResourceType: "cumque",
                },
                shared.ProductInformation{
                    ProductInformationFilterList: []shared.ProductInformationFilter{
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "ea",
                            ProductInformationFilterName: "aliquid",
                            ProductInformationFilterValue: []string{
                                "accusamus",
                                "non",
                                "occaecati",
                            },
                        },
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "enim",
                            ProductInformationFilterName: "accusamus",
                            ProductInformationFilterValue: []string{
                                "quidem",
                                "provident",
                                "nam",
                                "id",
                            },
                        },
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "blanditiis",
                            ProductInformationFilterName: "deleniti",
                            ProductInformationFilterValue: []string{
                                "amet",
                                "deserunt",
                                "nisi",
                                "vel",
                            },
                        },
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "natus",
                            ProductInformationFilterName: "omnis",
                            ProductInformationFilterValue: []string{
                                "perferendis",
                                "nihil",
                            },
                        },
                    },
                    ResourceType: "magnam",
                },
                shared.ProductInformation{
                    ProductInformationFilterList: []shared.ProductInformationFilter{
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "id",
                            ProductInformationFilterName: "labore",
                            ProductInformationFilterValue: []string{
                                "suscipit",
                                "natus",
                            },
                        },
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "nobis",
                            ProductInformationFilterName: "eum",
                            ProductInformationFilterValue: []string{
                                "aspernatur",
                                "architecto",
                                "magnam",
                                "et",
                            },
                        },
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "excepturi",
                            ProductInformationFilterName: "ullam",
                            ProductInformationFilterValue: []string{
                                "quos",
                                "sint",
                                "accusantium",
                            },
                        },
                    },
                    ResourceType: "mollitia",
                },
                shared.ProductInformation{
                    ProductInformationFilterList: []shared.ProductInformationFilter{
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "mollitia",
                            ProductInformationFilterName: "ad",
                            ProductInformationFilterValue: []string{
                                "dolor",
                                "necessitatibus",
                            },
                        },
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "odit",
                            ProductInformationFilterName: "nemo",
                            ProductInformationFilterValue: []string{
                                "iure",
                            },
                        },
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "doloribus",
                            ProductInformationFilterName: "debitis",
                            ProductInformationFilterValue: []string{
                                "maxime",
                                "deleniti",
                            },
                        },
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "facilis",
                            ProductInformationFilterName: "in",
                            ProductInformationFilterValue: []string{
                                "architecto",
                            },
                        },
                    },
                    ResourceType: "repudiandae",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("expedita"),
                    Value: sdk.String("nihil"),
                },
                shared.Tag{
                    Key: sdk.String("repellat"),
                    Value: sdk.String("quibusdam"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.CreateLicenseConfigurationXAmzTargetEnumAwsLicenseManagerCreateLicenseConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLicenseConfigurationResponse != nil {
        // handle response
    }
}
```

## CreateLicenseConversionTaskForResource

Creates a new license conversion task.

### Example Usage

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
    res, err := s.SDK.CreateLicenseConversionTaskForResource(ctx, operations.CreateLicenseConversionTaskForResourceRequest{
        CreateLicenseConversionTaskForResourceRequest: shared.CreateLicenseConversionTaskForResourceRequest{
            DestinationLicenseContext: shared.LicenseConversionContext{
                UsageOperation: sdk.String("magni"),
            },
            ResourceArn: "sunt",
            SourceLicenseContext: shared.LicenseConversionContext{
                UsageOperation: sdk.String("quo"),
            },
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.CreateLicenseConversionTaskForResourceXAmzTargetEnumAwsLicenseManagerCreateLicenseConversionTaskForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLicenseConversionTaskForResourceResponse != nil {
        // handle response
    }
}
```

## CreateLicenseManagerReportGenerator

Creates a report generator.

### Example Usage

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
    res, err := s.SDK.CreateLicenseManagerReportGenerator(ctx, operations.CreateLicenseManagerReportGeneratorRequest{
        CreateLicenseManagerReportGeneratorRequest: shared.CreateLicenseManagerReportGeneratorRequest{
            ClientToken: "accusantium",
            Description: sdk.String("ab"),
            ReportContext: shared.ReportContext{
                LicenseConfigurationArns: []string{
                    "quidem",
                    "ipsam",
                    "voluptate",
                    "autem",
                },
            },
            ReportFrequency: shared.ReportFrequency{
                Period: shared.ReportFrequencyTypeEnumMonth.ToPointer(),
                Value: sdk.Int64(50588),
            },
            ReportGeneratorName: "pariatur",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("voluptatibus"),
                    Value: sdk.String("perferendis"),
                },
                shared.Tag{
                    Key: sdk.String("fugiat"),
                    Value: sdk.String("amet"),
                },
            },
            Type: []shared.ReportTypeEnum{
                shared.ReportTypeEnumLicenseConfigurationUsageReport,
            },
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.CreateLicenseManagerReportGeneratorXAmzTargetEnumAwsLicenseManagerCreateLicenseManagerReportGenerator,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLicenseManagerReportGeneratorResponse != nil {
        // handle response
    }
}
```

## CreateLicenseVersion

Creates a new version of the specified license.

### Example Usage

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
    res, err := s.SDK.CreateLicenseVersion(ctx, operations.CreateLicenseVersionRequest{
        CreateLicenseVersionRequest: shared.CreateLicenseVersionRequest{
            ClientToken: "dignissimos",
            ConsumptionConfiguration: shared.ConsumptionConfiguration{
                BorrowConfiguration: &shared.BorrowConfiguration{
                    AllowEarlyCheckIn: false,
                    MaxTimeToLiveInMinutes: 54338,
                },
                ProvisionalConfiguration: &shared.ProvisionalConfiguration{
                    MaxTimeToLiveInMinutes: 338985,
                },
                RenewType: shared.RenewTypeEnumNone.ToPointer(),
            },
            Entitlements: []shared.Entitlement{
                shared.Entitlement{
                    AllowCheckIn: sdk.Bool(false),
                    MaxCount: sdk.Int64(18521),
                    Name: "Brooke Kohler",
                    Overage: sdk.Bool(false),
                    Unit: shared.EntitlementUnitEnumTerabytes,
                    Value: sdk.String("hic"),
                },
            },
            HomeRegion: "recusandae",
            Issuer: shared.Issuer{
                Name: "Miss Cesar Metz",
                SignKey: sdk.String("blanditiis"),
            },
            LicenseArn: "error",
            LicenseMetadata: []shared.Metadata{
                shared.Metadata{
                    Name: sdk.String("Jean Ferry"),
                    Value: sdk.String("modi"),
                },
            },
            LicenseName: "iste",
            ProductName: "dolorum",
            SourceVersion: sdk.String("deleniti"),
            Status: shared.LicenseStatusEnumDeleted,
            Validity: shared.DatetimeRange{
                Begin: "provident",
                End: sdk.String("nobis"),
            },
        },
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.CreateLicenseVersionXAmzTargetEnumAwsLicenseManagerCreateLicenseVersion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLicenseVersionResponse != nil {
        // handle response
    }
}
```

## CreateToken

<p>Creates a long-lived token.</p> <p>A refresh token is a JWT token used to get an access token. With an access token, you can call AssumeRoleWithWebIdentity to get role credentials that you can use to call License Manager to manage the specified license.</p>

### Example Usage

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
    res, err := s.SDK.CreateToken(ctx, operations.CreateTokenRequest{
        CreateTokenRequest: shared.CreateTokenRequest{
            ClientToken: "dolor",
            ExpirationInDays: sdk.Int64(186193),
            LicenseArn: "ipsum",
            RoleArns: []string{
                "excepturi",
                "cum",
                "voluptate",
                "dignissimos",
            },
            TokenProperties: []string{
                "amet",
                "dolorum",
                "numquam",
                "veritatis",
            },
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.CreateTokenXAmzTargetEnumAwsLicenseManagerCreateToken,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTokenResponse != nil {
        // handle response
    }
}
```

## DeleteGrant

Deletes the specified grant.

### Example Usage

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
    res, err := s.SDK.DeleteGrant(ctx, operations.DeleteGrantRequest{
        DeleteGrantRequest: shared.DeleteGrantRequest{
            GrantArn: "voluptatibus",
            StatusReason: sdk.String("voluptas"),
            Version: "natus",
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.DeleteGrantXAmzTargetEnumAwsLicenseManagerDeleteGrant,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteGrantResponse != nil {
        // handle response
    }
}
```

## DeleteLicense

Deletes the specified license.

### Example Usage

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
    res, err := s.SDK.DeleteLicense(ctx, operations.DeleteLicenseRequest{
        DeleteLicenseRequest: shared.DeleteLicenseRequest{
            LicenseArn: "iusto",
            SourceVersion: "voluptate",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.DeleteLicenseXAmzTargetEnumAwsLicenseManagerDeleteLicense,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLicenseResponse != nil {
        // handle response
    }
}
```

## DeleteLicenseConfiguration

<p>Deletes the specified license configuration.</p> <p>You cannot delete a license configuration that is in use.</p>

### Example Usage

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
    res, err := s.SDK.DeleteLicenseConfiguration(ctx, operations.DeleteLicenseConfigurationRequest{
        DeleteLicenseConfigurationRequest: shared.DeleteLicenseConfigurationRequest{
            LicenseConfigurationArn: "ipsum",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.DeleteLicenseConfigurationXAmzTargetEnumAwsLicenseManagerDeleteLicenseConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLicenseConfigurationResponse != nil {
        // handle response
    }
}
```

## DeleteLicenseManagerReportGenerator

<p>Deletes the specified report generator.</p> <p>This action deletes the report generator, which stops it from generating future reports. The action cannot be reversed. It has no effect on the previous reports from this generator.</p>

### Example Usage

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
    res, err := s.SDK.DeleteLicenseManagerReportGenerator(ctx, operations.DeleteLicenseManagerReportGeneratorRequest{
        DeleteLicenseManagerReportGeneratorRequest: shared.DeleteLicenseManagerReportGeneratorRequest{
            LicenseManagerReportGeneratorArn: "optio",
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.DeleteLicenseManagerReportGeneratorXAmzTargetEnumAwsLicenseManagerDeleteLicenseManagerReportGenerator,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLicenseManagerReportGeneratorResponse != nil {
        // handle response
    }
}
```

## DeleteToken

Deletes the specified token. Must be called in the license home Region.

### Example Usage

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
    res, err := s.SDK.DeleteToken(ctx, operations.DeleteTokenRequest{
        DeleteTokenRequest: shared.DeleteTokenRequest{
            TokenID: "repellendus",
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.DeleteTokenXAmzTargetEnumAwsLicenseManagerDeleteToken,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTokenResponse != nil {
        // handle response
    }
}
```

## ExtendLicenseConsumption

Extends the expiration date for license consumption.

### Example Usage

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
    res, err := s.SDK.ExtendLicenseConsumption(ctx, operations.ExtendLicenseConsumptionRequest{
        ExtendLicenseConsumptionRequest: shared.ExtendLicenseConsumptionRequest{
            DryRun: sdk.Bool(false),
            LicenseConsumptionToken: "quod",
        },
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.ExtendLicenseConsumptionXAmzTargetEnumAwsLicenseManagerExtendLicenseConsumption,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExtendLicenseConsumptionResponse != nil {
        // handle response
    }
}
```

## GetAccessToken

Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens are valid for one hour.

### Example Usage

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
    res, err := s.SDK.GetAccessToken(ctx, operations.GetAccessTokenRequest{
        GetAccessTokenRequest: shared.GetAccessTokenRequest{
            Token: "ipsum",
            TokenProperties: []string{
                "tenetur",
                "amet",
                "tempore",
                "accusamus",
            },
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("sit"),
        XAmzTarget: operations.GetAccessTokenXAmzTargetEnumAwsLicenseManagerGetAccessToken,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccessTokenResponse != nil {
        // handle response
    }
}
```

## GetGrant

Gets detailed information about the specified grant.

### Example Usage

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
    res, err := s.SDK.GetGrant(ctx, operations.GetGrantRequest{
        GetGrantRequest: shared.GetGrantRequest{
            GrantArn: "expedita",
            Version: sdk.String("neque"),
        },
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.GetGrantXAmzTargetEnumAwsLicenseManagerGetGrant,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGrantResponse != nil {
        // handle response
    }
}
```

## GetLicense

Gets detailed information about the specified license.

### Example Usage

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
    res, err := s.SDK.GetLicense(ctx, operations.GetLicenseRequest{
        GetLicenseRequest: shared.GetLicenseRequest{
            LicenseArn: "incidunt",
            Version: sdk.String("qui"),
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.GetLicenseXAmzTargetEnumAwsLicenseManagerGetLicense,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLicenseResponse != nil {
        // handle response
    }
}
```

## GetLicenseConfiguration

Gets detailed information about the specified license configuration.

### Example Usage

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
    res, err := s.SDK.GetLicenseConfiguration(ctx, operations.GetLicenseConfigurationRequest{
        GetLicenseConfigurationRequest: shared.GetLicenseConfigurationRequest{
            LicenseConfigurationArn: "incidunt",
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("molestias"),
        XAmzTarget: operations.GetLicenseConfigurationXAmzTargetEnumAwsLicenseManagerGetLicenseConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLicenseConfigurationResponse != nil {
        // handle response
    }
}
```

## GetLicenseConversionTask

Gets information about the specified license type conversion task.

### Example Usage

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
    res, err := s.SDK.GetLicenseConversionTask(ctx, operations.GetLicenseConversionTaskRequest{
        GetLicenseConversionTaskRequest: shared.GetLicenseConversionTaskRequest{
            LicenseConversionTaskID: "temporibus",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("ullam"),
        XAmzTarget: operations.GetLicenseConversionTaskXAmzTargetEnumAwsLicenseManagerGetLicenseConversionTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLicenseConversionTaskResponse != nil {
        // handle response
    }
}
```

## GetLicenseManagerReportGenerator

Gets information about the specified report generator.

### Example Usage

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
    res, err := s.SDK.GetLicenseManagerReportGenerator(ctx, operations.GetLicenseManagerReportGeneratorRequest{
        GetLicenseManagerReportGeneratorRequest: shared.GetLicenseManagerReportGeneratorRequest{
            LicenseManagerReportGeneratorArn: "nam",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.GetLicenseManagerReportGeneratorXAmzTargetEnumAwsLicenseManagerGetLicenseManagerReportGenerator,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLicenseManagerReportGeneratorResponse != nil {
        // handle response
    }
}
```

## GetLicenseUsage

Gets detailed information about the usage of the specified license.

### Example Usage

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
    res, err := s.SDK.GetLicenseUsage(ctx, operations.GetLicenseUsageRequest{
        GetLicenseUsageRequest: shared.GetLicenseUsageRequest{
            LicenseArn: "ipsum",
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.GetLicenseUsageXAmzTargetEnumAwsLicenseManagerGetLicenseUsage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLicenseUsageResponse != nil {
        // handle response
    }
}
```

## GetServiceSettings

Gets the License Manager settings for the current Region.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetServiceSettings(ctx, operations.GetServiceSettingsRequest{
        RequestBody: map[string]interface{}{
            "dolore": "labore",
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("itaque"),
        XAmzTarget: operations.GetServiceSettingsXAmzTargetEnumAwsLicenseManagerGetServiceSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceSettingsResponse != nil {
        // handle response
    }
}
```

## ListAssociationsForLicenseConfiguration

<p>Lists the resource associations for the specified license configuration.</p> <p>Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance might not consume a license (depending on the license rules).</p>

### Example Usage

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
    res, err := s.SDK.ListAssociationsForLicenseConfiguration(ctx, operations.ListAssociationsForLicenseConfigurationRequest{
        ListAssociationsForLicenseConfigurationRequest: shared.ListAssociationsForLicenseConfigurationRequest{
            LicenseConfigurationArn: "consequatur",
            MaxResults: sdk.Int64(669917),
            NextToken: sdk.String("repellendus"),
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.ListAssociationsForLicenseConfigurationXAmzTargetEnumAwsLicenseManagerListAssociationsForLicenseConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssociationsForLicenseConfigurationResponse != nil {
        // handle response
    }
}
```

## ListDistributedGrants

Lists the grants distributed for the specified license.

### Example Usage

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
    res, err := s.SDK.ListDistributedGrants(ctx, operations.ListDistributedGrantsRequest{
        ListDistributedGrantsRequest: shared.ListDistributedGrantsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Toni Wolff"),
                    Values: []string{
                        "quis",
                        "ipsum",
                        "delectus",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Victoria Thiel"),
                    Values: []string{
                        "distinctio",
                        "quod",
                        "odio",
                        "similique",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Hugo Kuphal"),
                    Values: []string{
                        "sequi",
                        "natus",
                        "impedit",
                        "aut",
                    },
                },
            },
            GrantArns: []string{
                "exercitationem",
                "nulla",
                "fugit",
                "porro",
            },
            MaxResults: sdk.Int64(981830),
            NextToken: sdk.String("doloribus"),
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("ducimus"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.ListDistributedGrantsXAmzTargetEnumAwsLicenseManagerListDistributedGrants,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDistributedGrantsResponse != nil {
        // handle response
    }
}
```

## ListFailuresForLicenseConfigurationOperations

Lists the license configuration operations that failed.

### Example Usage

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
    res, err := s.SDK.ListFailuresForLicenseConfigurationOperations(ctx, operations.ListFailuresForLicenseConfigurationOperationsRequest{
        ListFailuresForLicenseConfigurationOperationsRequest: shared.ListFailuresForLicenseConfigurationOperationsRequest{
            LicenseConfigurationArn: "ea",
            MaxResults: sdk.Int64(136900),
            NextToken: sdk.String("vel"),
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.ListFailuresForLicenseConfigurationOperationsXAmzTargetEnumAwsLicenseManagerListFailuresForLicenseConfigurationOperations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFailuresForLicenseConfigurationOperationsResponse != nil {
        // handle response
    }
}
```

## ListLicenseConfigurations

Lists the license configurations for your account.

### Example Usage

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
    res, err := s.SDK.ListLicenseConfigurations(ctx, operations.ListLicenseConfigurationsRequest{
        ListLicenseConfigurationsRequest: shared.ListLicenseConfigurationsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Rosemary Stoltenberg"),
                    Values: []string{
                        "sapiente",
                        "quisquam",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Nathaniel Ryan"),
                    Values: []string{
                        "inventore",
                        "magnam",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Krista Feeney"),
                    Values: []string{
                        "eaque",
                        "a",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Richard Anderson"),
                    Values: []string{
                        "fugit",
                        "accusamus",
                    },
                },
            },
            LicenseConfigurationArns: []string{
                "non",
            },
            MaxResults: sdk.Int64(89603),
            NextToken: sdk.String("dolorum"),
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("quas"),
        XAmzTarget: operations.ListLicenseConfigurationsXAmzTargetEnumAwsLicenseManagerListLicenseConfigurations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLicenseConfigurationsResponse != nil {
        // handle response
    }
}
```

## ListLicenseConversionTasks

Lists the license type conversion tasks for your account.

### Example Usage

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
    res, err := s.SDK.ListLicenseConversionTasks(ctx, operations.ListLicenseConversionTasksRequest{
        ListLicenseConversionTasksRequest: shared.ListLicenseConversionTasksRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Mrs. Shane Reinger"),
                    Values: []string{
                        "provident",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Minnie Gutkowski"),
                    Values: []string{
                        "esse",
                        "rem",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Mitchell Predovic"),
                    Values: []string{
                        "suscipit",
                        "assumenda",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Mr. Irma Schaefer"),
                    Values: []string{
                        "neque",
                        "quo",
                        "illum",
                    },
                },
            },
            MaxResults: sdk.Int64(777408),
            NextToken: sdk.String("fuga"),
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.ListLicenseConversionTasksXAmzTargetEnumAwsLicenseManagerListLicenseConversionTasks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLicenseConversionTasksResponse != nil {
        // handle response
    }
}
```

## ListLicenseManagerReportGenerators

Lists the report generators for your account.

### Example Usage

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
    res, err := s.SDK.ListLicenseManagerReportGenerators(ctx, operations.ListLicenseManagerReportGeneratorsRequest{
        ListLicenseManagerReportGeneratorsRequest: shared.ListLicenseManagerReportGeneratorsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Kelly Donnelly"),
                    Values: []string{
                        "aperiam",
                        "distinctio",
                        "quod",
                        "dignissimos",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Jackie Leannon"),
                    Values: []string{
                        "occaecati",
                        "commodi",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Todd Oberbrunner DDS"),
                    Values: []string{
                        "quas",
                        "praesentium",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Cassandra Considine"),
                    Values: []string{
                        "atque",
                        "explicabo",
                    },
                },
            },
            MaxResults: sdk.Int64(325685),
            NextToken: sdk.String("nisi"),
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.ListLicenseManagerReportGeneratorsXAmzTargetEnumAwsLicenseManagerListLicenseManagerReportGenerators,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLicenseManagerReportGeneratorsResponse != nil {
        // handle response
    }
}
```

## ListLicenseSpecificationsForResource

Describes the license configurations for the specified resource.

### Example Usage

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
    res, err := s.SDK.ListLicenseSpecificationsForResource(ctx, operations.ListLicenseSpecificationsForResourceRequest{
        ListLicenseSpecificationsForResourceRequest: shared.ListLicenseSpecificationsForResourceRequest{
            MaxResults: sdk.Int64(543806),
            NextToken: sdk.String("et"),
            ResourceArn: "esse",
        },
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.ListLicenseSpecificationsForResourceXAmzTargetEnumAwsLicenseManagerListLicenseSpecificationsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLicenseSpecificationsForResourceResponse != nil {
        // handle response
    }
}
```

## ListLicenseVersions

Lists all versions of the specified license.

### Example Usage

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
    res, err := s.SDK.ListLicenseVersions(ctx, operations.ListLicenseVersionsRequest{
        ListLicenseVersionsRequest: shared.ListLicenseVersionsRequest{
            LicenseArn: "aliquid",
            MaxResults: sdk.Int64(93459),
            NextToken: sdk.String("saepe"),
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.ListLicenseVersionsXAmzTargetEnumAwsLicenseManagerListLicenseVersions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLicenseVersionsResponse != nil {
        // handle response
    }
}
```

## ListLicenses

Lists the licenses for your account.

### Example Usage

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
    res, err := s.SDK.ListLicenses(ctx, operations.ListLicensesRequest{
        ListLicensesRequest: shared.ListLicensesRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Kristi Renner"),
                    Values: []string{
                        "consequatur",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Calvin Williamson"),
                    Values: []string{
                        "provident",
                        "a",
                        "nulla",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Cory Boyle"),
                    Values: []string{
                        "pariatur",
                        "possimus",
                        "quia",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Mr. Marlon Schultz V"),
                    Values: []string{
                        "aliquid",
                        "tenetur",
                        "quae",
                    },
                },
            },
            LicenseArns: []string{
                "vel",
                "in",
                "eius",
                "libero",
            },
            MaxResults: sdk.Int64(849039),
            NextToken: sdk.String("soluta"),
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("ullam"),
        XAmzTarget: operations.ListLicensesXAmzTargetEnumAwsLicenseManagerListLicenses,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLicensesResponse != nil {
        // handle response
    }
}
```

## ListReceivedGrants

Lists grants that are received. Received grants are grants created while specifying the recipient as this Amazon Web Services account, your organization, or an organizational unit (OU) to which this member account belongs.

### Example Usage

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
    res, err := s.SDK.ListReceivedGrants(ctx, operations.ListReceivedGrantsRequest{
        ListReceivedGrantsRequest: shared.ListReceivedGrantsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Nora Denesik"),
                    Values: []string{
                        "itaque",
                        "dolorum",
                        "architecto",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Irvin Boyle III"),
                    Values: []string{
                        "minima",
                    },
                },
            },
            GrantArns: []string{
                "consectetur",
            },
            MaxResults: sdk.Int64(237173),
            NextToken: sdk.String("iste"),
        },
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.ListReceivedGrantsXAmzTargetEnumAwsLicenseManagerListReceivedGrants,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReceivedGrantsResponse != nil {
        // handle response
    }
}
```

## ListReceivedGrantsForOrganization

Lists the grants received for all accounts in the organization.

### Example Usage

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
    res, err := s.SDK.ListReceivedGrantsForOrganization(ctx, operations.ListReceivedGrantsForOrganizationRequest{
        ListReceivedGrantsForOrganizationRequest: shared.ListReceivedGrantsForOrganizationRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Kyle Bartoletti"),
                    Values: []string{
                        "impedit",
                        "explicabo",
                    },
                },
            },
            LicenseArn: "voluptas",
            MaxResults: sdk.Int64(12036),
            NextToken: sdk.String("dignissimos"),
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.ListReceivedGrantsForOrganizationXAmzTargetEnumAwsLicenseManagerListReceivedGrantsForOrganization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReceivedGrantsForOrganizationResponse != nil {
        // handle response
    }
}
```

## ListReceivedLicenses

Lists received licenses.

### Example Usage

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
    res, err := s.SDK.ListReceivedLicenses(ctx, operations.ListReceivedLicensesRequest{
        ListReceivedLicensesRequest: shared.ListReceivedLicensesRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Bertha Cruickshank"),
                    Values: []string{
                        "dignissimos",
                        "officia",
                        "asperiores",
                        "nemo",
                    },
                },
            },
            LicenseArns: []string{
                "quaerat",
            },
            MaxResults: sdk.Int64(783235),
            NextToken: sdk.String("quod"),
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("velit"),
        XAmzTarget: operations.ListReceivedLicensesXAmzTargetEnumAwsLicenseManagerListReceivedLicenses,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReceivedLicensesResponse != nil {
        // handle response
    }
}
```

## ListReceivedLicensesForOrganization

Lists the licenses received for all accounts in the organization.

### Example Usage

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
    res, err := s.SDK.ListReceivedLicensesForOrganization(ctx, operations.ListReceivedLicensesForOrganizationRequest{
        ListReceivedLicensesForOrganizationRequest: shared.ListReceivedLicensesForOrganizationRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Clay Larson"),
                    Values: []string{
                        "quos",
                        "vel",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Elena Quigley"),
                    Values: []string{
                        "corporis",
                        "reiciendis",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Corey Walsh DDS"),
                    Values: []string{
                        "in",
                    },
                },
            },
            MaxResults: sdk.Int64(348519),
            NextToken: sdk.String("earum"),
        },
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.ListReceivedLicensesForOrganizationXAmzTargetEnumAwsLicenseManagerListReceivedLicensesForOrganization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReceivedLicensesForOrganizationResponse != nil {
        // handle response
    }
}
```

## ListResourceInventory

Lists resources managed using Systems Manager inventory.

### Example Usage

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
    res, err := s.SDK.ListResourceInventory(ctx, operations.ListResourceInventoryRequest{
        ListResourceInventoryRequest: shared.ListResourceInventoryRequest{
            Filters: []shared.InventoryFilter{
                shared.InventoryFilter{
                    Condition: shared.InventoryFilterConditionEnumNotEquals,
                    Name: "Ollie Flatley",
                    Value: sdk.String("beatae"),
                },
                shared.InventoryFilter{
                    Condition: shared.InventoryFilterConditionEnumNotEquals,
                    Name: "Doyle Feest",
                    Value: sdk.String("laboriosam"),
                },
                shared.InventoryFilter{
                    Condition: shared.InventoryFilterConditionEnumEquals,
                    Name: "Randolph Bruen",
                    Value: sdk.String("tempora"),
                },
                shared.InventoryFilter{
                    Condition: shared.InventoryFilterConditionEnumEquals,
                    Name: "Melanie Hirthe",
                    Value: sdk.String("dolorum"),
                },
            },
            MaxResults: sdk.Int64(237807),
            NextToken: sdk.String("minus"),
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        XAmzTarget: operations.ListResourceInventoryXAmzTargetEnumAwsLicenseManagerListResourceInventory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourceInventoryResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags for the specified license configuration.

### Example Usage

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceArn: "ullam",
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("culpa"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAwsLicenseManagerListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListTokens

Lists your tokens.

### Example Usage

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
    res, err := s.SDK.ListTokens(ctx, operations.ListTokensRequest{
        ListTokensRequest: shared.ListTokensRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Jimmie Weimann"),
                    Values: []string{
                        "rerum",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Faith Cole"),
                    Values: []string{
                        "expedita",
                        "ab",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Micheal Osinski"),
                    Values: []string{
                        "quidem",
                        "explicabo",
                    },
                },
            },
            MaxResults: sdk.Int64(378326),
            NextToken: sdk.String("unde"),
            TokenIds: []string{
                "suscipit",
            },
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("illo"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.ListTokensXAmzTargetEnumAwsLicenseManagerListTokens,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTokensResponse != nil {
        // handle response
    }
}
```

## ListUsageForLicenseConfiguration

Lists all license usage records for a license configuration, displaying license consumption details by resource at a selected point in time. Use this action to audit the current license consumption for any license inventory and configuration.

### Example Usage

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
    res, err := s.SDK.ListUsageForLicenseConfiguration(ctx, operations.ListUsageForLicenseConfigurationRequest{
        ListUsageForLicenseConfigurationRequest: shared.ListUsageForLicenseConfigurationRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Sherri Gerlach"),
                    Values: []string{
                        "occaecati",
                        "quos",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Eddie Goodwin"),
                    Values: []string{
                        "sit",
                        "non",
                    },
                },
            },
            LicenseConfigurationArn: "officiis",
            MaxResults: sdk.Int64(505866),
            NextToken: sdk.String("facilis"),
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.ListUsageForLicenseConfigurationXAmzTargetEnumAwsLicenseManagerListUsageForLicenseConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsageForLicenseConfigurationResponse != nil {
        // handle response
    }
}
```

## RejectGrant

Rejects the specified grant.

### Example Usage

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
    res, err := s.SDK.RejectGrant(ctx, operations.RejectGrantRequest{
        RejectGrantRequest: shared.RejectGrantRequest{
            GrantArn: "error",
        },
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("aperiam"),
        XAmzTarget: operations.RejectGrantXAmzTargetEnumAwsLicenseManagerRejectGrant,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RejectGrantResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds the specified tags to the specified license configuration.

### Example Usage

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceArn: "saepe",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("veniam"),
                    Value: sdk.String("in"),
                },
                shared.Tag{
                    Key: sdk.String("officiis"),
                    Value: sdk.String("beatae"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAwsLicenseManagerTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes the specified tags from the specified license configuration.

### Example Usage

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceArn: "error",
            TagKeys: []string{
                "expedita",
                "debitis",
                "neque",
                "dolorum",
            },
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("corrupti"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAwsLicenseManagerUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateLicenseConfiguration

Modifies the attributes of an existing license configuration.

### Example Usage

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
    res, err := s.SDK.UpdateLicenseConfiguration(ctx, operations.UpdateLicenseConfigurationRequest{
        UpdateLicenseConfigurationRequest: shared.UpdateLicenseConfigurationRequest{
            Description: sdk.String("fugit"),
            DisassociateWhenNotFound: sdk.Bool(false),
            LicenseConfigurationArn: "ut",
            LicenseConfigurationStatus: shared.LicenseConfigurationStatusEnumDisabled.ToPointer(),
            LicenseCount: sdk.Int64(30235),
            LicenseCountHardLimit: sdk.Bool(false),
            LicenseRules: []string{
                "expedita",
                "magnam",
                "consequatur",
            },
            Name: sdk.String("Brittany Bailey"),
            ProductInformationList: []shared.ProductInformation{
                shared.ProductInformation{
                    ProductInformationFilterList: []shared.ProductInformationFilter{
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "et",
                            ProductInformationFilterName: "blanditiis",
                            ProductInformationFilterValue: []string{
                                "sed",
                                "sit",
                            },
                        },
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "vel",
                            ProductInformationFilterName: "nostrum",
                            ProductInformationFilterValue: []string{
                                "error",
                                "consequatur",
                                "incidunt",
                                "reiciendis",
                            },
                        },
                    },
                    ResourceType: "dolorem",
                },
                shared.ProductInformation{
                    ProductInformationFilterList: []shared.ProductInformationFilter{
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "dicta",
                            ProductInformationFilterName: "architecto",
                            ProductInformationFilterValue: []string{
                                "labore",
                                "quidem",
                                "atque",
                            },
                        },
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "laborum",
                            ProductInformationFilterName: "nam",
                            ProductInformationFilterValue: []string{
                                "laboriosam",
                                "alias",
                                "amet",
                                "deserunt",
                            },
                        },
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "voluptate",
                            ProductInformationFilterName: "unde",
                            ProductInformationFilterValue: []string{
                                "provident",
                                "repellendus",
                                "delectus",
                                "voluptates",
                            },
                        },
                    },
                    ResourceType: "perferendis",
                },
                shared.ProductInformation{
                    ProductInformationFilterList: []shared.ProductInformationFilter{
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "quidem",
                            ProductInformationFilterName: "reprehenderit",
                            ProductInformationFilterValue: []string{
                                "fuga",
                                "praesentium",
                                "mollitia",
                                "veniam",
                            },
                        },
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "voluptatem",
                            ProductInformationFilterName: "quisquam",
                            ProductInformationFilterValue: []string{
                                "quasi",
                                "atque",
                                "reprehenderit",
                                "asperiores",
                            },
                        },
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "totam",
                            ProductInformationFilterName: "suscipit",
                            ProductInformationFilterValue: []string{
                                "maxime",
                                "et",
                                "esse",
                            },
                        },
                    },
                    ResourceType: "amet",
                },
                shared.ProductInformation{
                    ProductInformationFilterList: []shared.ProductInformationFilter{
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "ea",
                            ProductInformationFilterName: "atque",
                            ProductInformationFilterValue: []string{
                                "officiis",
                                "officiis",
                                "accusamus",
                            },
                        },
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "natus",
                            ProductInformationFilterName: "minima",
                            ProductInformationFilterValue: []string{
                                "ex",
                            },
                        },
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "maiores",
                            ProductInformationFilterName: "corrupti",
                            ProductInformationFilterValue: []string{
                                "error",
                                "blanditiis",
                                "suscipit",
                                "repudiandae",
                            },
                        },
                        shared.ProductInformationFilter{
                            ProductInformationFilterComparator: "atque",
                            ProductInformationFilterName: "atque",
                            ProductInformationFilterValue: []string{
                                "recusandae",
                            },
                        },
                    },
                    ResourceType: "dolorum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.UpdateLicenseConfigurationXAmzTargetEnumAwsLicenseManagerUpdateLicenseConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLicenseConfigurationResponse != nil {
        // handle response
    }
}
```

## UpdateLicenseManagerReportGenerator

<p>Updates a report generator.</p> <p>After you make changes to a report generator, it starts generating new reports within 60 minutes of being updated.</p>

### Example Usage

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
    res, err := s.SDK.UpdateLicenseManagerReportGenerator(ctx, operations.UpdateLicenseManagerReportGeneratorRequest{
        UpdateLicenseManagerReportGeneratorRequest: shared.UpdateLicenseManagerReportGeneratorRequest{
            ClientToken: "beatae",
            Description: sdk.String("dolores"),
            LicenseManagerReportGeneratorArn: "enim",
            ReportContext: shared.ReportContext{
                LicenseConfigurationArns: []string{
                    "velit",
                    "a",
                },
            },
            ReportFrequency: shared.ReportFrequency{
                Period: shared.ReportFrequencyTypeEnumWeek.ToPointer(),
                Value: sdk.Int64(300029),
            },
            ReportGeneratorName: "saepe",
            Type: []shared.ReportTypeEnum{
                shared.ReportTypeEnumLicenseConfigurationUsageReport,
            },
        },
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("perspiciatis"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("eveniet"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.UpdateLicenseManagerReportGeneratorXAmzTargetEnumAwsLicenseManagerUpdateLicenseManagerReportGenerator,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLicenseManagerReportGeneratorResponse != nil {
        // handle response
    }
}
```

## UpdateLicenseSpecificationsForResource

<p>Adds or removes the specified license configurations for the specified Amazon Web Services resource.</p> <p>You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and CloudFormation templates, as they send license configurations to the operation that creates the resource.</p>

### Example Usage

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
    res, err := s.SDK.UpdateLicenseSpecificationsForResource(ctx, operations.UpdateLicenseSpecificationsForResourceRequest{
        UpdateLicenseSpecificationsForResourceRequest: shared.UpdateLicenseSpecificationsForResourceRequest{
            AddLicenseSpecifications: []shared.LicenseSpecification{
                shared.LicenseSpecification{
                    AmiAssociationScope: sdk.String("id"),
                    LicenseConfigurationArn: "quis",
                },
            },
            RemoveLicenseSpecifications: []shared.LicenseSpecification{
                shared.LicenseSpecification{
                    AmiAssociationScope: sdk.String("error"),
                    LicenseConfigurationArn: "illo",
                },
                shared.LicenseSpecification{
                    AmiAssociationScope: sdk.String("corporis"),
                    LicenseConfigurationArn: "quidem",
                },
            },
            ResourceArn: "eveniet",
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("doloremque"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.UpdateLicenseSpecificationsForResourceXAmzTargetEnumAwsLicenseManagerUpdateLicenseSpecificationsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLicenseSpecificationsForResourceResponse != nil {
        // handle response
    }
}
```

## UpdateServiceSettings

Updates License Manager settings for the current Region.

### Example Usage

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
    res, err := s.SDK.UpdateServiceSettings(ctx, operations.UpdateServiceSettingsRequest{
        UpdateServiceSettingsRequest: shared.UpdateServiceSettingsRequest{
            EnableCrossAccountsDiscovery: sdk.Bool(false),
            OrganizationConfiguration: &shared.OrganizationConfiguration{
                EnableIntegration: false,
            },
            S3BucketArn: sdk.String("molestiae"),
            SnsTopicArn: sdk.String("eveniet"),
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("ratione"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.UpdateServiceSettingsXAmzTargetEnumAwsLicenseManagerUpdateServiceSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateServiceSettingsResponse != nil {
        // handle response
    }
}
```
