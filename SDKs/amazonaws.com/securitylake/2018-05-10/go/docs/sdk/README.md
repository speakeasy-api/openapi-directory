# SDK

## Overview

<note> <p>Amazon Security Lake is in preview release. Your use of the Security Lake preview is subject to Section 2 of the <a href="http://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a>("Betas and Previews").</p> </note> <p>Amazon Security Lake is a fully managed security data lake service. You can use Security Lake to automatically centralize security data from cloud, on-premises, and custom sources into a data lake that's stored in your Amazon Web Servicesaccount. Amazon Web Services Organizations is an account management service that lets you consolidate multiple Amazon Web Services accounts into an organization that you create and centrally manage. With Organizations, you can create member accounts and invite existing accounts to join your organization. Security Lake helps you analyze security data for a more complete understanding of your security posture across the entire organization. It can also help you improve the protection of your workloads, applications, and data.</p> <p>The data lake is backed by Amazon Simple Storage Service (Amazon S3) buckets, and you retain ownership over your data. </p> <p>Amazon Security Lake integrates with CloudTrail, a service that provides a record of actions taken by a user, role, or an Amazon Web Services service in Security Lake CloudTrail captures API calls for Security Lake as events. The calls captured include calls from the Security Lake console and code calls to the Security Lake API operations. If you create a trail, you can enable continuous delivery of CloudTrail events to an Amazon S3 bucket, including events for Security Lake. If you don't configure a trail, you can still view the most recent events in the CloudTrail console in Event history. Using the information collected by CloudTrail you can determine the request that was made to Security Lake, the IP address from which the request was made, who made the request, when it was made, and additional details. To learn more about Security Lake information in CloudTrail, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/securitylake-cloudtrail.html">Amazon Security Lake User Guide</a>.</p> <p>Security Lake automates the collection of security-related log and event data from integrated Amazon Web Services and third-party services. It also helps you manage the lifecycle of data with customizable retention and replication settings. Security Lake converts ingested data into Apache Parquet format and a standard open-source schema called the Open Cybersecurity Schema Framework (OCSF).</p> <p>Other Amazon Web Services and third-party services can subscribe to the data that's stored in Security Lake for incident response and security data analytics.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/securitylake/>
### Available Operations

* [CreateAwsLogSource](#createawslogsource) - <p>Adds a natively supported Amazon Web Service as an Amazon Security Lake source. Enables source types for member accounts in required Amazon Web Services Regions, based on the parameters you specify. You can choose any source type in any Region for either accounts that are part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, you can supply any combination of the three dimensions to this API. </p> <p>By default, a dimension refers to the entire set. When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when you do not specify members, the API enables all Security Lake member accounts for all sources. Similarly, when you do not specify Regions, Security Lake is enabled for all the Regions where Security Lake is available as a service.</p> <p>You can use this API only to enable natively supported Amazon Web Services as a source. Use <code>CreateCustomLogSource</code> to enable data collection from a custom source. </p>
* [CreateCustomLogSource](#createcustomlogsource) - Adds a third-party custom source in Amazon Security Lake, from the Amazon Web Services Region where you want to create a custom source. Security Lake can collect logs and events from third-party custom sources. After creating the appropriate IAM role to invoke Glue crawler, use this API to add a custom source name in Security Lake. This operation creates a partition in the Amazon S3 bucket for Security Lake as the target location for log files from the custom source in addition to an associated Glue table and an Glue crawler.
* [CreateDatalake](#createdatalake) - <p>Initializes an Amazon Security Lake instance with the provided (or default) configuration. You can enable Security Lake in Amazon Web Services Regions with customized settings before enabling log collection in Regions. You can either use the <code>enableAll</code> parameter to specify all Regions or specify the Regions where you want to enable Security Lake. To specify particular Regions, use the <code>Regions</code> parameter and then configure these Regions using the <code>configurations</code> parameter. If you have already enabled Security Lake in a Region when you call this command, the command will update the Region if you provide new configuration parameters. If you have not already enabled Security Lake in the Region when you call this API, it will set up the data lake in the Region with the specified configurations.</p> <p>When you enable Security Lake, it starts ingesting security data after the <code>CreateAwsLogSource</code> call. This includes ingesting security data from sources, storing data, and making data accessible to subscribers. Security Lake also enables all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/what-is-security-lake.html">Amazon Security Lake User Guide</a>.</p>
* [CreateDatalakeAutoEnable](#createdatalakeautoenable) - Automatically enables Amazon Security Lake for new member accounts in your organization. Security Lake is not automatically enabled for any existing member accounts in your organization.
* [CreateDatalakeDelegatedAdmin](#createdatalakedelegatedadmin) - Designates the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.
* [CreateDatalakeExceptionsSubscription](#createdatalakeexceptionssubscription) - Creates the specified notification subscription in Amazon Security Lake for the organization you specify.
* [CreateSubscriber](#createsubscriber) - Creates a subscription permission for accounts that are already enabled in Amazon Security Lake. You can create a subscriber with access to data in the current Amazon Web Services Region.
* [CreateSubscriptionNotificationConfiguration](#createsubscriptionnotificationconfiguration) - Notifies the subscriber when new data is written to the data lake for the sources that the subscriber consumes in Security Lake. You can create only one subscriber notification per subscriber.
* [DeleteAwsLogSource](#deleteawslogsource) - <p>Removes a natively supported Amazon Web Service as an Amazon Security Lake source. When you remove the source, Security Lake stops collecting data from that source, and subscribers can no longer consume new data from the source. Subscribers can still consume data that Security Lake collected from the source before disablement.</p> <p>You can choose any source type in any Amazon Web Services Region for either accounts that are part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, you can supply any combination of the three dimensions to this API. </p> <p>By default, a dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when you do not specify members, the API disables all Security Lake member accounts for sources. Similarly, when you do not specify Regions, Security Lake is disabled for all the Regions where Security Lake is available as a service.</p> <p>When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. For example, if you don't provide specific accounts, the API applies to the entire set of accounts in your organization.</p>
* [DeleteCustomLogSource](#deletecustomlogsource) - Removes a custom log source from Amazon Security Lake.
* [DeleteDatalake](#deletedatalake) - <p>When you delete Amazon Security Lake from your account, Security Lake is disabled in all Amazon Web Services Regions. Also, this API automatically takes steps to remove the account from Security Lake . </p> <p>This operation disables security data collection from sources, deletes data stored, and stops making data accessible to subscribers. Security Lake also deletes all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. The <code>DeleteDatalake</code> operation does not delete the Amazon S3 bucket, which is owned by your Amazon Web Services account. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/disable-security-lake.html">Amazon Security Lake User Guide</a>.</p>
* [DeleteDatalakeAutoEnable](#deletedatalakeautoenable) -  <code>DeleteDatalakeAutoEnable</code> removes automatic enablement of configuration settings for new member accounts (but keeps settings for the delegated administrator) from Amazon Security Lake. You must run this API using credentials of the delegated administrator. When you run this API, new member accounts that are added after the organization enables Security Lake won't contribute to the data lake.
* [DeleteDatalakeDelegatedAdmin](#deletedatalakedelegatedadmin) - Deletes the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.
* [DeleteDatalakeExceptionsSubscription](#deletedatalakeexceptionssubscription) - Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.
* [DeleteSubscriber](#deletesubscriber) - Deletes the subscription permission for accounts that are already enabled in Amazon Security Lake. You can delete a subscriber and remove access to data in the current Amazon Web Services Region.
* [DeleteSubscriptionNotificationConfiguration](#deletesubscriptionnotificationconfiguration) - Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.
* [GetDatalake](#getdatalake) - Retrieves the Amazon Security Lake configuration object for the specified Amazon Web Services account ID. You can use the <code>GetDatalake</code> API to know whether Security Lake is enabled for the current Region. This API does not take input parameters. 
* [GetDatalakeAutoEnable](#getdatalakeautoenable) - Retrieves the configuration that will be automatically set up for accounts added to the organization after the organization has onboarded to Amazon Security Lake. This API does not take input parameters.
* [GetDatalakeExceptionsExpiry](#getdatalakeexceptionsexpiry) - Retrieves the expiration period and time-to-live (TTL) for which the exception message will remain. Exceptions are stored by default, for 2 weeks from when a record was created in Amazon Security Lake. This API does not take input parameters.
* [GetDatalakeExceptionsSubscription](#getdatalakeexceptionssubscription) - Retrieves the details of exception notifications for the account in Amazon Security Lake.
* [GetDatalakeStatus](#getdatalakestatus) - Retrieves a snapshot of the current Region, including whether Amazon Security Lake is enabled for those accounts and which sources Security Lake is collecting data from. 
* [GetSubscriber](#getsubscriber) - Retrieves the subscription information for the specified subscription ID. You can get information about a specific subscriber.
* [ListDatalakeExceptions](#listdatalakeexceptions) - Lists the Amazon Security Lake exceptions that you can use to find the source of problems and fix them.
* [ListLogSources](#listlogsources) - Retrieves the log sources in the current Amazon Web Services Region. 
* [ListSubscribers](#listsubscribers) - List all subscribers for the specific Amazon Security Lake account ID. You can retrieve a list of subscriptions associated with a specific organization or Amazon Web Services account.
* [UpdateDatalake](#updatedatalake) - Specifies where to store your security data and for how long. You can add a rollup Region to consolidate data from multiple Amazon Web Services Regions. 
* [UpdateDatalakeExceptionsExpiry](#updatedatalakeexceptionsexpiry) - Update the expiration period for the exception message to your preferred time, and control the time-to-live (TTL) for the exception message to remain. Exceptions are stored by default for 2 weeks from when a record was created in Amazon Security Lake. 
* [UpdateDatalakeExceptionsSubscription](#updatedatalakeexceptionssubscription) - Updates the specified notification subscription in Amazon Security Lake for the organization you specify.
* [UpdateSubscriber](#updatesubscriber) - Updates an existing subscription for the given Amazon Security Lake account ID. You can update a subscriber by changing the sources that the subscriber consumes data from. 
* [UpdateSubscriptionNotificationConfiguration](#updatesubscriptionnotificationconfiguration) - Updates an existing notification method for the subscription (SQS or HTTPs endpoint) or switches the notification subscription endpoint for a subscriber.

## CreateAwsLogSource

<p>Adds a natively supported Amazon Web Service as an Amazon Security Lake source. Enables source types for member accounts in required Amazon Web Services Regions, based on the parameters you specify. You can choose any source type in any Region for either accounts that are part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, you can supply any combination of the three dimensions to this API. </p> <p>By default, a dimension refers to the entire set. When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when you do not specify members, the API enables all Security Lake member accounts for all sources. Similarly, when you do not specify Regions, Security Lake is enabled for all the Regions where Security Lake is available as a service.</p> <p>You can use this API only to enable natively supported Amazon Web Services as a source. Use <code>CreateCustomLogSource</code> to enable data collection from a custom source. </p>

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
    res, err := s.SDK.CreateAwsLogSource(ctx, operations.CreateAwsLogSourceRequest{
        RequestBody: operations.CreateAwsLogSourceRequestBody{
            EnableAllDimensions: map[string]map[string][]string{
                "saepe": map[string][]string{
                    "architecto": []string{
                        "reiciendis",
                    },
                    "est": []string{
                        "laborum",
                        "dolores",
                        "dolorem",
                    },
                    "corporis": []string{
                        "nobis",
                    },
                },
                "enim": map[string][]string{
                    "nemo": []string{
                        "excepturi",
                        "accusantium",
                    },
                    "iure": []string{
                        "doloribus",
                        "sapiente",
                        "architecto",
                    },
                    "mollitia": []string{
                        "culpa",
                    },
                },
            },
            EnableSingleDimension: []string{
                "repellat",
            },
            EnableTwoDimensions: map[string][]string{
                "occaecati": []string{
                    "commodi",
                    "quam",
                },
                "molestiae": []string{
                    "error",
                },
                "quia": []string{
                    "vitae",
                    "laborum",
                },
            },
            InputOrder: []shared.DimensionEnum{
                shared.DimensionEnumRegion,
                shared.DimensionEnumRegion,
                shared.DimensionEnumMember,
            },
        },
        XAmzAlgorithm: sdk.String("sequi"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAwsLogSourceResponse != nil {
        // handle response
    }
}
```

## CreateCustomLogSource

Adds a third-party custom source in Amazon Security Lake, from the Amazon Web Services Region where you want to create a custom source. Security Lake can collect logs and events from third-party custom sources. After creating the appropriate IAM role to invoke Glue crawler, use this API to add a custom source name in Security Lake. This operation creates a partition in the Amazon S3 bucket for Security Lake as the target location for log files from the custom source in addition to an associated Glue table and an Glue crawler.

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
    res, err := s.SDK.CreateCustomLogSource(ctx, operations.CreateCustomLogSourceRequest{
        RequestBody: operations.CreateCustomLogSourceRequestBody{
            CustomSourceName: "error",
            EventClass: operations.CreateCustomLogSourceRequestBodyEventClassEnumConfigState,
            GlueInvocationRoleArn: "laborum",
            LogProviderAccountID: "quasi",
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCustomLogSourceResponse != nil {
        // handle response
    }
}
```

## CreateDatalake

<p>Initializes an Amazon Security Lake instance with the provided (or default) configuration. You can enable Security Lake in Amazon Web Services Regions with customized settings before enabling log collection in Regions. You can either use the <code>enableAll</code> parameter to specify all Regions or specify the Regions where you want to enable Security Lake. To specify particular Regions, use the <code>Regions</code> parameter and then configure these Regions using the <code>configurations</code> parameter. If you have already enabled Security Lake in a Region when you call this command, the command will update the Region if you provide new configuration parameters. If you have not already enabled Security Lake in the Region when you call this API, it will set up the data lake in the Region with the specified configurations.</p> <p>When you enable Security Lake, it starts ingesting security data after the <code>CreateAwsLogSource</code> call. This includes ingesting security data from sources, storing data, and making data accessible to subscribers. Security Lake also enables all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/what-is-security-lake.html">Amazon Security Lake User Guide</a>.</p>

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
    res, err := s.SDK.CreateDatalake(ctx, operations.CreateDatalakeRequest{
        RequestBody: operations.CreateDatalakeRequestBody{
            Configurations: map[string]shared.LakeConfigurationRequest{
                "voluptate": shared.LakeConfigurationRequest{
                    EncryptionKey: sdk.String("cum"),
                    ReplicationDestinationRegions: []shared.RegionEnum{
                        shared.RegionEnumUsEast1,
                    },
                    ReplicationRoleArn: sdk.String("reprehenderit"),
                    RetentionSettings: []shared.RetentionSetting{
                        shared.RetentionSetting{
                            RetentionPeriod: sdk.Int64(979587),
                            StorageClass: shared.StorageClassEnumStandardIa.ToPointer(),
                        },
                        shared.RetentionSetting{
                            RetentionPeriod: sdk.Int64(359444),
                            StorageClass: shared.StorageClassEnumIntelligentTiering.ToPointer(),
                        },
                    },
                    TagsMap: map[string]string{
                        "dicta": "harum",
                        "enim": "accusamus",
                    },
                },
                "commodi": shared.LakeConfigurationRequest{
                    EncryptionKey: sdk.String("repudiandae"),
                    ReplicationDestinationRegions: []shared.RegionEnum{
                        shared.RegionEnumUsWest2,
                    },
                    ReplicationRoleArn: sdk.String("quidem"),
                    RetentionSettings: []shared.RetentionSetting{
                        shared.RetentionSetting{
                            RetentionPeriod: sdk.Int64(566602),
                            StorageClass: shared.StorageClassEnumExpire.ToPointer(),
                        },
                        shared.RetentionSetting{
                            RetentionPeriod: sdk.Int64(265389),
                            StorageClass: shared.StorageClassEnumGlacierIr.ToPointer(),
                        },
                        shared.RetentionSetting{
                            RetentionPeriod: sdk.Int64(523248),
                            StorageClass: shared.StorageClassEnumExpire.ToPointer(),
                        },
                    },
                    TagsMap: map[string]string{
                        "repudiandae": "sint",
                    },
                },
                "veritatis": shared.LakeConfigurationRequest{
                    EncryptionKey: sdk.String("itaque"),
                    ReplicationDestinationRegions: []shared.RegionEnum{
                        shared.RegionEnumEuCentral1,
                        shared.RegionEnumUsEast1,
                    },
                    ReplicationRoleArn: sdk.String("est"),
                    RetentionSettings: []shared.RetentionSetting{
                        shared.RetentionSetting{
                            RetentionPeriod: sdk.Int64(131797),
                            StorageClass: shared.StorageClassEnumGlacier.ToPointer(),
                        },
                        shared.RetentionSetting{
                            RetentionPeriod: sdk.Int64(716327),
                            StorageClass: shared.StorageClassEnumDeepArchive.ToPointer(),
                        },
                        shared.RetentionSetting{
                            RetentionPeriod: sdk.Int64(289406),
                            StorageClass: shared.StorageClassEnumOnezoneIa.ToPointer(),
                        },
                        shared.RetentionSetting{
                            RetentionPeriod: sdk.Int64(183191),
                            StorageClass: shared.StorageClassEnumIntelligentTiering.ToPointer(),
                        },
                    },
                    TagsMap: map[string]string{
                        "quos": "perferendis",
                        "magni": "assumenda",
                        "ipsam": "alias",
                    },
                },
            },
            EnableAll: sdk.Bool(false),
            MetaStoreManagerRoleArn: sdk.String("fugit"),
            Regions: []shared.RegionEnum{
                shared.RegionEnumUsEast2,
                shared.RegionEnumUsWest2,
                shared.RegionEnumEuWest1,
            },
        },
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatalakeResponse != nil {
        // handle response
    }
}
```

## CreateDatalakeAutoEnable

Automatically enables Amazon Security Lake for new member accounts in your organization. Security Lake is not automatically enabled for any existing member accounts in your organization.

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
    res, err := s.SDK.CreateDatalakeAutoEnable(ctx, operations.CreateDatalakeAutoEnableRequest{
        RequestBody: operations.CreateDatalakeAutoEnableRequestBody{
            ConfigurationForNewAccounts: []shared.AutoEnableNewRegionConfiguration{
                shared.AutoEnableNewRegionConfiguration{
                    Region: shared.RegionEnumEuWest1,
                    Sources: []shared.AwsLogSourceTypeEnum{
                        shared.AwsLogSourceTypeEnumCloudTrail,
                        shared.AwsLogSourceTypeEnumCloudTrail,
                        shared.AwsLogSourceTypeEnumRoute53,
                        shared.AwsLogSourceTypeEnumShFindings,
                    },
                },
                shared.AutoEnableNewRegionConfiguration{
                    Region: shared.RegionEnumApSoutheast2,
                    Sources: []shared.AwsLogSourceTypeEnum{
                        shared.AwsLogSourceTypeEnumVpcFlow,
                        shared.AwsLogSourceTypeEnumVpcFlow,
                        shared.AwsLogSourceTypeEnumShFindings,
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatalakeAutoEnableResponse != nil {
        // handle response
    }
}
```

## CreateDatalakeDelegatedAdmin

Designates the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.

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
    res, err := s.SDK.CreateDatalakeDelegatedAdmin(ctx, operations.CreateDatalakeDelegatedAdminRequest{
        RequestBody: operations.CreateDatalakeDelegatedAdminRequestBody{
            Account: "aliquid",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatalakeDelegatedAdminResponse != nil {
        // handle response
    }
}
```

## CreateDatalakeExceptionsSubscription

Creates the specified notification subscription in Amazon Security Lake for the organization you specify.

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
    res, err := s.SDK.CreateDatalakeExceptionsSubscription(ctx, operations.CreateDatalakeExceptionsSubscriptionRequest{
        RequestBody: operations.CreateDatalakeExceptionsSubscriptionRequestBody{
            NotificationEndpoint: "quidem",
            SubscriptionProtocol: operations.CreateDatalakeExceptionsSubscriptionRequestBodySubscriptionProtocolEnumSqs,
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatalakeExceptionsSubscriptionResponse != nil {
        // handle response
    }
}
```

## CreateSubscriber

Creates a subscription permission for accounts that are already enabled in Amazon Security Lake. You can create a subscriber with access to data in the current Amazon Web Services Region.

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
    res, err := s.SDK.CreateSubscriber(ctx, operations.CreateSubscriberRequest{
        RequestBody: operations.CreateSubscriberRequestBody{
            AccessTypes: []shared.AccessTypeEnum{
                shared.AccessTypeEnumLakeformation,
                shared.AccessTypeEnumS3,
            },
            AccountID: "omnis",
            ExternalID: "molestiae",
            SourceTypes: []shared.SourceType{
                shared.SourceType{
                    AwsSourceType: shared.AwsLogSourceTypeEnumVpcFlow.ToPointer(),
                    CustomSourceType: sdk.String("magnam"),
                },
            },
            SubscriberDescription: sdk.String("distinctio"),
            SubscriberName: "id",
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSubscriberResponse != nil {
        // handle response
    }
}
```

## CreateSubscriptionNotificationConfiguration

Notifies the subscriber when new data is written to the data lake for the sources that the subscriber consumes in Security Lake. You can create only one subscriber notification per subscriber.

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
    res, err := s.SDK.CreateSubscriptionNotificationConfiguration(ctx, operations.CreateSubscriptionNotificationConfigurationRequest{
        RequestBody: operations.CreateSubscriptionNotificationConfigurationRequestBody{
            CreateSqs: sdk.Bool(false),
            HTTPSAPIKeyName: sdk.String("aspernatur"),
            HTTPSAPIKeyValue: sdk.String("architecto"),
            HTTPSMethod: operations.CreateSubscriptionNotificationConfigurationRequestBodyHTTPSMethodEnumPost.ToPointer(),
            RoleArn: sdk.String("et"),
            SubscriptionEndpoint: sdk.String("excepturi"),
        },
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        SubscriptionID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSubscriptionNotificationConfigurationResponse != nil {
        // handle response
    }
}
```

## DeleteAwsLogSource

<p>Removes a natively supported Amazon Web Service as an Amazon Security Lake source. When you remove the source, Security Lake stops collecting data from that source, and subscribers can no longer consume new data from the source. Subscribers can still consume data that Security Lake collected from the source before disablement.</p> <p>You can choose any source type in any Amazon Web Services Region for either accounts that are part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, you can supply any combination of the three dimensions to this API. </p> <p>By default, a dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when you do not specify members, the API disables all Security Lake member accounts for sources. Similarly, when you do not specify Regions, Security Lake is disabled for all the Regions where Security Lake is available as a service.</p> <p>When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. For example, if you don't provide specific accounts, the API applies to the entire set of accounts in your organization.</p>

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
    res, err := s.SDK.DeleteAwsLogSource(ctx, operations.DeleteAwsLogSourceRequest{
        RequestBody: operations.DeleteAwsLogSourceRequestBody{
            DisableAllDimensions: map[string]map[string][]string{
                "eum": map[string][]string{
                    "necessitatibus": []string{
                        "nemo",
                    },
                },
                "quasi": map[string][]string{
                    "doloribus": []string{
                        "eius",
                        "maxime",
                        "deleniti",
                        "facilis",
                    },
                    "in": []string{
                        "architecto",
                    },
                },
            },
            DisableSingleDimension: []string{
                "ullam",
                "expedita",
                "nihil",
                "repellat",
            },
            DisableTwoDimensions: map[string][]string{
                "sed": []string{
                    "pariatur",
                    "accusantium",
                    "consequuntur",
                    "praesentium",
                },
                "natus": []string{
                    "sunt",
                },
                "quo": []string{
                    "pariatur",
                    "maxime",
                    "ea",
                    "excepturi",
                },
                "odit": []string{
                    "accusantium",
                    "ab",
                },
            },
            InputOrder: []shared.DimensionEnum{
                shared.DimensionEnumMember,
                shared.DimensionEnumSourceType,
                shared.DimensionEnumSourceType,
                shared.DimensionEnumSourceType,
            },
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("fugiat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAwsLogSourceResponse != nil {
        // handle response
    }
}
```

## DeleteCustomLogSource

Removes a custom log source from Amazon Security Lake.

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
    res, err := s.SDK.DeleteCustomLogSource(ctx, operations.DeleteCustomLogSourceRequest{
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("nobis"),
        CustomSourceName: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCustomLogSourceResponse != nil {
        // handle response
    }
}
```

## DeleteDatalake

<p>When you delete Amazon Security Lake from your account, Security Lake is disabled in all Amazon Web Services Regions. Also, this API automatically takes steps to remove the account from Security Lake . </p> <p>This operation disables security data collection from sources, deletes data stored, and stops making data accessible to subscribers. Security Lake also deletes all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. The <code>DeleteDatalake</code> operation does not delete the Amazon S3 bucket, which is owned by your Amazon Web Services account. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/disable-security-lake.html">Amazon Security Lake User Guide</a>.</p>

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
    res, err := s.SDK.DeleteDatalake(ctx, operations.DeleteDatalakeRequest{
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("eos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDatalakeResponse != nil {
        // handle response
    }
}
```

## DeleteDatalakeAutoEnable

 <code>DeleteDatalakeAutoEnable</code> removes automatic enablement of configuration settings for new member accounts (but keeps settings for the delegated administrator) from Amazon Security Lake. You must run this API using credentials of the delegated administrator. When you run this API, new member accounts that are added after the organization enables Security Lake won't contribute to the data lake.

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
    res, err := s.SDK.DeleteDatalakeAutoEnable(ctx, operations.DeleteDatalakeAutoEnableRequest{
        RequestBody: operations.DeleteDatalakeAutoEnableRequestBody{
            RemoveFromConfigurationForNewAccounts: []shared.AutoEnableNewRegionConfiguration{
                shared.AutoEnableNewRegionConfiguration{
                    Region: shared.RegionEnumUsWest2,
                    Sources: []shared.AwsLogSourceTypeEnum{
                        shared.AwsLogSourceTypeEnumVpcFlow,
                        shared.AwsLogSourceTypeEnumRoute53,
                        shared.AwsLogSourceTypeEnumShFindings,
                        shared.AwsLogSourceTypeEnumVpcFlow,
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("perspiciatis"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDatalakeAutoEnableResponse != nil {
        // handle response
    }
}
```

## DeleteDatalakeDelegatedAdmin

Deletes the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.

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
    res, err := s.SDK.DeleteDatalakeDelegatedAdmin(ctx, operations.DeleteDatalakeDelegatedAdminRequest{
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        Account: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDatalakeDelegatedAdminResponse != nil {
        // handle response
    }
}
```

## DeleteDatalakeExceptionsSubscription

Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.

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
    res, err := s.SDK.DeleteDatalakeExceptionsSubscription(ctx, operations.DeleteDatalakeExceptionsSubscriptionRequest{
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDatalakeExceptionsSubscriptionResponse != nil {
        // handle response
    }
}
```

## DeleteSubscriber

Deletes the subscription permission for accounts that are already enabled in Amazon Security Lake. You can delete a subscriber and remove access to data in the current Amazon Web Services Region.

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
    res, err := s.SDK.DeleteSubscriber(ctx, operations.DeleteSubscriberRequest{
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        ID: "3323f9b7-7f3a-4410-8674-ebf69280d1ba",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSubscriberResponse != nil {
        // handle response
    }
}
```

## DeleteSubscriptionNotificationConfiguration

Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.

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
    res, err := s.SDK.DeleteSubscriptionNotificationConfiguration(ctx, operations.DeleteSubscriptionNotificationConfigurationRequest{
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        SubscriptionID: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSubscriptionNotificationConfigurationResponse != nil {
        // handle response
    }
}
```

## GetDatalake

Retrieves the Amazon Security Lake configuration object for the specified Amazon Web Services account ID. You can use the <code>GetDatalake</code> API to know whether Security Lake is enabled for the current Region. This API does not take input parameters. 

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
    res, err := s.SDK.GetDatalake(ctx, operations.GetDatalakeRequest{
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDatalakeResponse != nil {
        // handle response
    }
}
```

## GetDatalakeAutoEnable

Retrieves the configuration that will be automatically set up for accounts added to the organization after the organization has onboarded to Amazon Security Lake. This API does not take input parameters.

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
    res, err := s.SDK.GetDatalakeAutoEnable(ctx, operations.GetDatalakeAutoEnableRequest{
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDatalakeAutoEnableResponse != nil {
        // handle response
    }
}
```

## GetDatalakeExceptionsExpiry

Retrieves the expiration period and time-to-live (TTL) for which the exception message will remain. Exceptions are stored by default, for 2 weeks from when a record was created in Amazon Security Lake. This API does not take input parameters.

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
    res, err := s.SDK.GetDatalakeExceptionsExpiry(ctx, operations.GetDatalakeExceptionsExpiryRequest{
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDatalakeExceptionsExpiryResponse != nil {
        // handle response
    }
}
```

## GetDatalakeExceptionsSubscription

Retrieves the details of exception notifications for the account in Amazon Security Lake.

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
    res, err := s.SDK.GetDatalakeExceptionsSubscription(ctx, operations.GetDatalakeExceptionsSubscriptionRequest{
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDatalakeExceptionsSubscriptionResponse != nil {
        // handle response
    }
}
```

## GetDatalakeStatus

Retrieves a snapshot of the current Region, including whether Amazon Security Lake is enabled for those accounts and which sources Security Lake is collecting data from. 

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
    res, err := s.SDK.GetDatalakeStatus(ctx, operations.GetDatalakeStatusRequest{
        RequestBody: operations.GetDatalakeStatusRequestBody{
            AccountSet: []string{
                "a",
                "esse",
                "harum",
            },
            MaxAccountResults: sdk.Int64(483409),
            NextToken: sdk.String("ipsum"),
        },
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("enim"),
        MaxAccountResults: sdk.String("dolorem"),
        NextToken: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDatalakeStatusResponse != nil {
        // handle response
    }
}
```

## GetSubscriber

Retrieves the subscription information for the specified subscription ID. You can get information about a specific subscriber.

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
    res, err := s.SDK.GetSubscriber(ctx, operations.GetSubscriberRequest{
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("vel"),
        ID: "b5a73429-cdb1-4a84-a2bb-679d2322715b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSubscriberResponse != nil {
        // handle response
    }
}
```

## ListDatalakeExceptions

Lists the Amazon Security Lake exceptions that you can use to find the source of problems and fix them.

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
    res, err := s.SDK.ListDatalakeExceptions(ctx, operations.ListDatalakeExceptionsRequest{
        RequestBody: operations.ListDatalakeExceptionsRequestBody{
            MaxFailures: sdk.Int64(940432),
            NextToken: sdk.String("voluptatem"),
            RegionSet: []shared.RegionEnum{
                shared.RegionEnumApNortheast1,
                shared.RegionEnumApNortheast1,
                shared.RegionEnumUsEast1,
                shared.RegionEnumApSoutheast2,
            },
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("aperiam"),
        MaxFailures: sdk.String("delectus"),
        NextToken: sdk.String("dolorem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDatalakeExceptionsResponse != nil {
        // handle response
    }
}
```

## ListLogSources

Retrieves the log sources in the current Amazon Web Services Region. 

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
    res, err := s.SDK.ListLogSources(ctx, operations.ListLogSourcesRequest{
        RequestBody: operations.ListLogSourcesRequestBody{
            InputOrder: []shared.DimensionEnum{
                shared.DimensionEnumRegion,
                shared.DimensionEnumRegion,
            },
            ListAllDimensions: map[string]map[string][]string{
                "architecto": map[string][]string{
                    "aut": []string{
                        "itaque",
                        "consequatur",
                        "est",
                    },
                },
                "repellendus": map[string][]string{
                    "doloribus": []string{
                        "facilis",
                        "cupiditate",
                    },
                    "qui": []string{
                        "laudantium",
                    },
                    "odio": []string{
                        "voluptatibus",
                        "quisquam",
                        "vero",
                    },
                    "omnis": []string{
                        "ipsum",
                        "delectus",
                    },
                },
                "voluptate": map[string][]string{
                    "vero": []string{
                        "dignissimos",
                        "hic",
                        "distinctio",
                        "quod",
                    },
                },
            },
            ListSingleDimension: []string{
                "similique",
                "facilis",
            },
            ListTwoDimensions: map[string][]string{
                "ducimus": []string{
                    "quibusdam",
                    "illum",
                },
                "sequi": []string{
                    "impedit",
                    "aut",
                    "voluptatibus",
                },
                "exercitationem": []string{
                    "fugit",
                    "porro",
                    "maiores",
                    "doloribus",
                },
                "iusto": []string{
                    "ducimus",
                    "alias",
                    "officia",
                    "tempora",
                },
            },
            MaxResults: sdk.Int64(368584),
            NextToken: sdk.String("ea"),
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("ratione"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("laudantium"),
        MaxResults: sdk.String("dicta"),
        NextToken: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLogSourcesResponse != nil {
        // handle response
    }
}
```

## ListSubscribers

List all subscribers for the specific Amazon Security Lake account ID. You can retrieve a list of subscriptions associated with a specific organization or Amazon Web Services account.

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
    res, err := s.SDK.ListSubscribers(ctx, operations.ListSubscribersRequest{
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("nostrum"),
        MaxResults: sdk.Int64(960835),
        NextToken: sdk.String("quisquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSubscribersResponse != nil {
        // handle response
    }
}
```

## UpdateDatalake

Specifies where to store your security data and for how long. You can add a rollup Region to consolidate data from multiple Amazon Web Services Regions. 

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
    res, err := s.SDK.UpdateDatalake(ctx, operations.UpdateDatalakeRequest{
        RequestBody: operations.UpdateDatalakeRequestBody{
            Configurations: map[string]shared.LakeConfigurationRequest{
                "ea": shared.LakeConfigurationRequest{
                    EncryptionKey: sdk.String("impedit"),
                    ReplicationDestinationRegions: []shared.RegionEnum{
                        shared.RegionEnumEuCentral1,
                        shared.RegionEnumEuCentral1,
                    },
                    ReplicationRoleArn: sdk.String("inventore"),
                    RetentionSettings: []shared.RetentionSetting{
                        shared.RetentionSetting{
                            RetentionPeriod: sdk.Int64(407241),
                            StorageClass: shared.StorageClassEnumDeepArchive.ToPointer(),
                        },
                        shared.RetentionSetting{
                            RetentionPeriod: sdk.Int64(232234),
                            StorageClass: shared.StorageClassEnumExpire.ToPointer(),
                        },
                    },
                    TagsMap: map[string]string{
                        "minima": "eaque",
                    },
                },
                "a": shared.LakeConfigurationRequest{
                    EncryptionKey: sdk.String("libero"),
                    ReplicationDestinationRegions: []shared.RegionEnum{
                        shared.RegionEnumUsEast1,
                    },
                    ReplicationRoleArn: sdk.String("deleniti"),
                    RetentionSettings: []shared.RetentionSetting{
                        shared.RetentionSetting{
                            RetentionPeriod: sdk.Int64(304582),
                            StorageClass: shared.StorageClassEnumOnezoneIa.ToPointer(),
                        },
                        shared.RetentionSetting{
                            RetentionPeriod: sdk.Int64(882860),
                            StorageClass: shared.StorageClassEnumStandardIa.ToPointer(),
                        },
                        shared.RetentionSetting{
                            RetentionPeriod: sdk.Int64(250622),
                            StorageClass: shared.StorageClassEnumStandardIa.ToPointer(),
                        },
                        shared.RetentionSetting{
                            RetentionPeriod: sdk.Int64(677412),
                            StorageClass: shared.StorageClassEnumGlacier.ToPointer(),
                        },
                    },
                    TagsMap: map[string]string{
                        "velit": "eum",
                        "autem": "nobis",
                        "quas": "assumenda",
                        "nulla": "voluptas",
                    },
                },
                "libero": shared.LakeConfigurationRequest{
                    EncryptionKey: sdk.String("quasi"),
                    ReplicationDestinationRegions: []shared.RegionEnum{
                        shared.RegionEnumUsWest2,
                        shared.RegionEnumUsEast1,
                    },
                    ReplicationRoleArn: sdk.String("provident"),
                    RetentionSettings: []shared.RetentionSetting{
                        shared.RetentionSetting{
                            RetentionPeriod: sdk.Int64(476477),
                            StorageClass: shared.StorageClassEnumIntelligentTiering.ToPointer(),
                        },
                    },
                    TagsMap: map[string]string{
                        "eius": "esse",
                        "esse": "rem",
                    },
                },
                "fuga": shared.LakeConfigurationRequest{
                    EncryptionKey: sdk.String("reprehenderit"),
                    ReplicationDestinationRegions: []shared.RegionEnum{
                        shared.RegionEnumApNortheast1,
                        shared.RegionEnumUsWest2,
                        shared.RegionEnumUsEast2,
                    },
                    ReplicationRoleArn: sdk.String("suscipit"),
                    RetentionSettings: []shared.RetentionSetting{
                        shared.RetentionSetting{
                            RetentionPeriod: sdk.Int64(181151),
                            StorageClass: shared.StorageClassEnumGlacierIr.ToPointer(),
                        },
                        shared.RetentionSetting{
                            RetentionPeriod: sdk.Int64(788546),
                            StorageClass: shared.StorageClassEnumStandardIa.ToPointer(),
                        },
                        shared.RetentionSetting{
                            RetentionPeriod: sdk.Int64(56848),
                            StorageClass: shared.StorageClassEnumGlacier.ToPointer(),
                        },
                        shared.RetentionSetting{
                            RetentionPeriod: sdk.Int64(696997),
                            StorageClass: shared.StorageClassEnumOnezoneIa.ToPointer(),
                        },
                    },
                    TagsMap: map[string]string{
                        "illum": "quo",
                        "fuga": "eius",
                        "eos": "voluptas",
                        "ab": "cupiditate",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDatalakeResponse != nil {
        // handle response
    }
}
```

## UpdateDatalakeExceptionsExpiry

Update the expiration period for the exception message to your preferred time, and control the time-to-live (TTL) for the exception message to remain. Exceptions are stored by default for 2 weeks from when a record was created in Amazon Security Lake. 

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
    res, err := s.SDK.UpdateDatalakeExceptionsExpiry(ctx, operations.UpdateDatalakeExceptionsExpiryRequest{
        RequestBody: operations.UpdateDatalakeExceptionsExpiryRequestBody{
            ExceptionMessageExpiry: 459856,
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDatalakeExceptionsExpiryResponse != nil {
        // handle response
    }
}
```

## UpdateDatalakeExceptionsSubscription

Updates the specified notification subscription in Amazon Security Lake for the organization you specify.

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
    res, err := s.SDK.UpdateDatalakeExceptionsSubscription(ctx, operations.UpdateDatalakeExceptionsSubscriptionRequest{
        RequestBody: operations.UpdateDatalakeExceptionsSubscriptionRequestBody{
            NotificationEndpoint: "totam",
            SubscriptionProtocol: operations.UpdateDatalakeExceptionsSubscriptionRequestBodySubscriptionProtocolEnumApp,
        },
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDatalakeExceptionsSubscriptionResponse != nil {
        // handle response
    }
}
```

## UpdateSubscriber

Updates an existing subscription for the given Amazon Security Lake account ID. You can update a subscriber by changing the sources that the subscriber consumes data from. 

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
    res, err := s.SDK.UpdateSubscriber(ctx, operations.UpdateSubscriberRequest{
        RequestBody: operations.UpdateSubscriberRequestBody{
            ExternalID: sdk.String("molestiae"),
            SourceTypes: []shared.SourceType{
                shared.SourceType{
                    AwsSourceType: shared.AwsLogSourceTypeEnumShFindings.ToPointer(),
                    CustomSourceType: sdk.String("eum"),
                },
            },
            SubscriberDescription: sdk.String("quas"),
            SubscriberName: sdk.String("praesentium"),
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("atque"),
        ID: "2562f222-e981-47ee-97cb-e61e6b7b95bc",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSubscriberResponse != nil {
        // handle response
    }
}
```

## UpdateSubscriptionNotificationConfiguration

Updates an existing notification method for the subscription (SQS or HTTPs endpoint) or switches the notification subscription endpoint for a subscriber.

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
    res, err := s.SDK.UpdateSubscriptionNotificationConfiguration(ctx, operations.UpdateSubscriptionNotificationConfigurationRequest{
        RequestBody: operations.UpdateSubscriptionNotificationConfigurationRequestBody{
            CreateSqs: sdk.Bool(false),
            HTTPSAPIKeyName: sdk.String("sit"),
            HTTPSAPIKeyValue: sdk.String("culpa"),
            HTTPSMethod: operations.UpdateSubscriptionNotificationConfigurationRequestBodyHTTPSMethodEnumPut.ToPointer(),
            RoleArn: sdk.String("adipisci"),
            SubscriptionEndpoint: sdk.String("cumque"),
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("esse"),
        SubscriptionID: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSubscriptionNotificationConfigurationResponse != nil {
        // handle response
    }
}
```
