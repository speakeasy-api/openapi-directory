# SDK

## Overview

<fullname>Amazon Pinpoint Email Service</fullname> <p>Welcome to the <i>Amazon Pinpoint Email API Reference</i>. This guide provides information about the Amazon Pinpoint Email API (version 1.0), including supported operations, data types, parameters, and schemas.</p> <p> <a href="https://aws.amazon.com/pinpoint">Amazon Pinpoint</a> is an AWS service that you can use to engage with your customers across multiple messaging channels. You can use Amazon Pinpoint to send email, SMS text messages, voice messages, and push notifications. The Amazon Pinpoint Email API provides programmatic access to options that are unique to the email channel and supplement the options provided by the Amazon Pinpoint API.</p> <p>If you're new to Amazon Pinpoint, you might find it helpful to also review the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">Amazon Pinpoint Developer Guide</a>. The <i>Amazon Pinpoint Developer Guide</i> provides tutorials, code samples, and procedures that demonstrate how to use Amazon Pinpoint features programmatically and how to integrate Amazon Pinpoint functionality into mobile apps and other types of applications. The guide also provides information about key topics such as Amazon Pinpoint integration with other AWS services and the limits that apply to using the service.</p> <p>The Amazon Pinpoint Email API is available in several AWS Regions and it provides an endpoint for each of these Regions. For a list of all the Regions and endpoints where the API is currently available, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#pinpoint_region">AWS Service Endpoints</a> in the <i>Amazon Web Services General Reference</i>. To learn more about AWS Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing AWS Regions</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>In each Region, AWS maintains multiple Availability Zones. These Availability Zones are physically isolated from each other, but are united by private, low-latency, high-throughput, and highly redundant network connections. These Availability Zones enable us to provide very high levels of availability and redundancy, while also minimizing latency. To learn more about the number of Availability Zones that are available in each Region, see <a href="http://aws.amazon.com/about-aws/global-infrastructure/">AWS Global Infrastructure</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/email/>
### Available Operations

* [CreateConfigurationSet](#createconfigurationset) - Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails you send using Amazon Pinpoint. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email. 
* [CreateConfigurationSetEventDestination](#createconfigurationseteventdestination) - <p>Create an event destination. In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>
* [CreateDedicatedIPPool](#creatededicatedippool) - Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Pinpoint account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, Amazon Pinpoint sends it using only the IP addresses in the associated pool.
* [CreateDeliverabilityTestReport](#createdeliverabilitytestreport) - Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.
* [CreateEmailIdentity](#createemailidentity) - <p>Verifies an email identity for use with Amazon Pinpoint. In Amazon Pinpoint, an identity is an email address or domain that you use when you send email. Before you can use an identity to send email with Amazon Pinpoint, you first have to verify it. By verifying an address, you demonstrate that you're the owner of the address, and that you've given Amazon Pinpoint permission to send email from the address.</p> <p>When you verify an email address, Amazon Pinpoint sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS configuration for your domain. It usually takes around 72 hours to complete the domain verification process.</p>
* [DeleteConfigurationSet](#deleteconfigurationset) - <p>Delete an existing configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* [DeleteConfigurationSetEventDestination](#deleteconfigurationseteventdestination) - <p>Delete an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
* [DeleteDedicatedIPPool](#deletededicatedippool) - Delete a dedicated IP pool.
* [DeleteEmailIdentity](#deleteemailidentity) - Deletes an email identity that you previously verified for use with Amazon Pinpoint. An identity can be either an email address or a domain name.
* [GetAccount](#getaccount) - Obtain information about the email-sending status and capabilities of your Amazon Pinpoint account in the current AWS Region.
* [GetBlacklistReports](#getblacklistreports) - Retrieve a list of the blacklists that your dedicated IP addresses appear on.
* [GetConfigurationSet](#getconfigurationset) - <p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* [GetConfigurationSetEventDestinations](#getconfigurationseteventdestinations) - <p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
* [GetDedicatedIP](#getdedicatedip) - Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.
* [GetDedicatedIps](#getdedicatedips) - List the dedicated IP addresses that are associated with your Amazon Pinpoint account.
* [GetDeliverabilityDashboardOptions](#getdeliverabilitydashboardoptions) - <p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
* [GetDeliverabilityTestReport](#getdeliverabilitytestreport) - Retrieve the results of a predictive inbox placement test.
* [GetDomainDeliverabilityCampaign](#getdomaindeliverabilitycampaign) - Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).
* [GetDomainStatisticsReport](#getdomainstatisticsreport) - Retrieve inbox placement and engagement rates for the domains that you use to send email.
* [GetEmailIdentity](#getemailidentity) - Provides information about a specific identity associated with your Amazon Pinpoint account, including the identity's verification status, its DKIM authentication status, and its custom Mail-From settings.
* [ListConfigurationSets](#listconfigurationsets) - <p>List all of the configuration sets associated with your Amazon Pinpoint account in the current region.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
* [ListDedicatedIPPools](#listdedicatedippools) - List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current AWS Region.
* [ListDeliverabilityTestReports](#listdeliverabilitytestreports) - Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results.
* [ListDomainDeliverabilityCampaigns](#listdomaindeliverabilitycampaigns) - Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.
* [ListEmailIdentities](#listemailidentities) - Returns a list of all of the email identities that are associated with your Amazon Pinpoint account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't.
* [ListTagsForResource](#listtagsforresource) - Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
* [PutAccountDedicatedIPWarmupAttributes](#putaccountdedicatedipwarmupattributes) - Enable or disable the automatic warm-up feature for dedicated IP addresses.
* [PutAccountSendingAttributes](#putaccountsendingattributes) - Enable or disable the ability of your account to send email.
* [PutConfigurationSetDeliveryOptions](#putconfigurationsetdeliveryoptions) - Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.
* [PutConfigurationSetReputationOptions](#putconfigurationsetreputationoptions) - Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region.
* [PutConfigurationSetSendingOptions](#putconfigurationsetsendingoptions) - Enable or disable email sending for messages that use a particular configuration set in a specific AWS Region.
* [PutConfigurationSetTrackingOptions](#putconfigurationsettrackingoptions) - Specify a custom domain to use for open and click tracking elements in email that you send using Amazon Pinpoint.
* [PutDedicatedIPInPool](#putdedicatedipinpool) - <p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Pinpoint account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>
* [PutDedicatedIPWarmupAttributes](#putdedicatedipwarmupattributes) - <p/>
* [PutDeliverabilityDashboardOption](#putdeliverabilitydashboardoption) - <p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
* [PutEmailIdentityDkimAttributes](#putemailidentitydkimattributes) - Used to enable or disable DKIM authentication for an email identity.
* [PutEmailIdentityFeedbackAttributes](#putemailidentityfeedbackattributes) - <p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you disable feedback forwarding, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p>
* [PutEmailIdentityMailFromAttributes](#putemailidentitymailfromattributes) - Used to enable or disable the custom Mail-From domain configuration for an email identity.
* [SendEmail](#sendemail) - <p>Sends an email message. You can use the Amazon Pinpoint Email API to send two types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon Pinpoint assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> </ul>
* [TagResource](#tagresource) - <p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
* [UntagResource](#untagresource) - Remove one or more tags (keys and values) from a specified resource.
* [UpdateConfigurationSetEventDestination](#updateconfigurationseteventdestination) - <p>Update the configuration of an event destination for a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

## CreateConfigurationSet

Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails you send using Amazon Pinpoint. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateConfigurationSet(ctx, operations.CreateConfigurationSetRequest{
        RequestBody: operations.CreateConfigurationSetRequestBody{
            ConfigurationSetName: "voluptatum",
            DeliveryOptions: &operations.CreateConfigurationSetRequestBodyDeliveryOptions{
                SendingPoolName: sdk.String("iusto"),
                TLSPolicy: shared.TLSPolicyEnumOptional.ToPointer(),
            },
            ReputationOptions: &operations.CreateConfigurationSetRequestBodyReputationOptions{
                LastFreshStart: types.MustTimeFromString("2022-01-28T03:46:24.500Z"),
                ReputationMetricsEnabled: sdk.Bool(false),
            },
            SendingOptions: &operations.CreateConfigurationSetRequestBodySendingOptions{
                SendingEnabled: sdk.Bool(false),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ab",
                    Value: "quis",
                },
                shared.Tag{
                    Key: "veritatis",
                    Value: "deserunt",
                },
                shared.Tag{
                    Key: "perferendis",
                    Value: "ipsam",
                },
                shared.Tag{
                    Key: "repellendus",
                    Value: "sapiente",
                },
            },
            TrackingOptions: &operations.CreateConfigurationSetRequestBodyTrackingOptions{
                CustomRedirectDomain: sdk.String("quo"),
            },
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConfigurationSetResponse != nil {
        // handle response
    }
}
```

## CreateConfigurationSetEventDestination

<p>Create an event destination. In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>

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
    res, err := s.SDK.CreateConfigurationSetEventDestination(ctx, operations.CreateConfigurationSetEventDestinationRequest{
        ConfigurationSetName: "esse",
        RequestBody: operations.CreateConfigurationSetEventDestinationRequestBody{
            EventDestination: operations.CreateConfigurationSetEventDestinationRequestBodyEventDestination{
                CloudWatchDestination: &shared.CloudWatchDestination{
                    DimensionConfigurations: []shared.CloudWatchDimensionConfiguration{
                        shared.CloudWatchDimensionConfiguration{
                            DefaultDimensionValue: "porro",
                            DimensionName: "dolorum",
                            DimensionValueSource: shared.DimensionValueSourceEnumMessageTag,
                        },
                        shared.CloudWatchDimensionConfiguration{
                            DefaultDimensionValue: "nam",
                            DimensionName: "officia",
                            DimensionValueSource: shared.DimensionValueSourceEnumEmailHeader,
                        },
                        shared.CloudWatchDimensionConfiguration{
                            DefaultDimensionValue: "fugit",
                            DimensionName: "deleniti",
                            DimensionValueSource: shared.DimensionValueSourceEnumLinkTag,
                        },
                    },
                },
                Enabled: sdk.Bool(false),
                KinesisFirehoseDestination: &shared.KinesisFirehoseDestination{
                    DeliveryStreamArn: "optio",
                    IamRoleArn: "totam",
                },
                MatchingEventTypes: []shared.EventTypeEnum{
                    shared.EventTypeEnumComplaint,
                },
                PinpointDestination: &shared.PinpointDestination{
                    ApplicationArn: sdk.String("molestiae"),
                },
                SnsDestination: &shared.SnsDestination{
                    TopicArn: "modi",
                },
            },
            EventDestinationName: "qui",
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConfigurationSetEventDestinationResponse != nil {
        // handle response
    }
}
```

## CreateDedicatedIPPool

Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Pinpoint account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, Amazon Pinpoint sends it using only the IP addresses in the associated pool.

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
    res, err := s.SDK.CreateDedicatedIPPool(ctx, operations.CreateDedicatedIPPoolRequest{
        RequestBody: operations.CreateDedicatedIPPoolRequestBody{
            PoolName: "ad",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "sed",
                    Value: "iste",
                },
                shared.Tag{
                    Key: "dolor",
                    Value: "natus",
                },
                shared.Tag{
                    Key: "laboriosam",
                    Value: "hic",
                },
            },
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDedicatedIPPoolResponse != nil {
        // handle response
    }
}
```

## CreateDeliverabilityTestReport

Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.

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
    res, err := s.SDK.CreateDeliverabilityTestReport(ctx, operations.CreateDeliverabilityTestReportRequest{
        RequestBody: operations.CreateDeliverabilityTestReportRequestBody{
            Content: operations.CreateDeliverabilityTestReportRequestBodyContent{
                Raw: &shared.RawMessage{
                    Data: "quidem",
                },
                Simple: &shared.Message{
                    Body: shared.Body{
                        HTML: &shared.Content{
                            Charset: sdk.String("architecto"),
                            Data: "ipsa",
                        },
                        Text: &shared.Content{
                            Charset: sdk.String("reiciendis"),
                            Data: "est",
                        },
                    },
                    Subject: shared.Content{
                        Charset: sdk.String("mollitia"),
                        Data: "laborum",
                    },
                },
                Template: &shared.Template{
                    TemplateArn: sdk.String("dolores"),
                    TemplateData: sdk.String("dolorem"),
                },
            },
            FromEmailAddress: "corporis",
            ReportName: sdk.String("explicabo"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "enim",
                    Value: "omnis",
                },
                shared.Tag{
                    Key: "nemo",
                    Value: "minima",
                },
                shared.Tag{
                    Key: "excepturi",
                    Value: "accusantium",
                },
                shared.Tag{
                    Key: "iure",
                    Value: "culpa",
                },
            },
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeliverabilityTestReportResponse != nil {
        // handle response
    }
}
```

## CreateEmailIdentity

<p>Verifies an email identity for use with Amazon Pinpoint. In Amazon Pinpoint, an identity is an email address or domain that you use when you send email. Before you can use an identity to send email with Amazon Pinpoint, you first have to verify it. By verifying an address, you demonstrate that you're the owner of the address, and that you've given Amazon Pinpoint permission to send email from the address.</p> <p>When you verify an email address, Amazon Pinpoint sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS configuration for your domain. It usually takes around 72 hours to complete the domain verification process.</p>

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
    res, err := s.SDK.CreateEmailIdentity(ctx, operations.CreateEmailIdentityRequest{
        RequestBody: operations.CreateEmailIdentityRequestBody{
            EmailIdentity: "repellat",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "occaecati",
                    Value: "numquam",
                },
                shared.Tag{
                    Key: "commodi",
                    Value: "quam",
                },
                shared.Tag{
                    Key: "molestiae",
                    Value: "velit",
                },
            },
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("quia"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("animi"),
        XAmzSignedHeaders: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEmailIdentityResponse != nil {
        // handle response
    }
}
```

## DeleteConfigurationSet

<p>Delete an existing configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

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
    res, err := s.SDK.DeleteConfigurationSet(ctx, operations.DeleteConfigurationSetRequest{
        ConfigurationSetName: "odit",
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("aut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteConfigurationSetResponse != nil {
        // handle response
    }
}
```

## DeleteConfigurationSetEventDestination

<p>Delete an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

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
    res, err := s.SDK.DeleteConfigurationSetEventDestination(ctx, operations.DeleteConfigurationSetEventDestinationRequest{
        ConfigurationSetName: "quasi",
        EventDestinationName: "error",
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteConfigurationSetEventDestinationResponse != nil {
        // handle response
    }
}
```

## DeleteDedicatedIPPool

Delete a dedicated IP pool.

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
    res, err := s.SDK.DeleteDedicatedIPPool(ctx, operations.DeleteDedicatedIPPoolRequest{
        PoolName: "praesentium",
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("doloremque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDedicatedIPPoolResponse != nil {
        // handle response
    }
}
```

## DeleteEmailIdentity

Deletes an email identity that you previously verified for use with Amazon Pinpoint. An identity can be either an email address or a domain name.

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
    res, err := s.SDK.DeleteEmailIdentity(ctx, operations.DeleteEmailIdentityRequest{
        EmailIdentity: "reprehenderit",
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEmailIdentityResponse != nil {
        // handle response
    }
}
```

## GetAccount

Obtain information about the email-sending status and capabilities of your Amazon Pinpoint account in the current AWS Region.

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
    res, err := s.SDK.GetAccount(ctx, operations.GetAccountRequest{
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccountResponse != nil {
        // handle response
    }
}
```

## GetBlacklistReports

Retrieve a list of the blacklists that your dedicated IP addresses appear on.

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
    res, err := s.SDK.GetBlacklistReports(ctx, operations.GetBlacklistReportsRequest{
        BlacklistItemNames: []string{
            "molestias",
            "excepturi",
            "pariatur",
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("voluptates"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBlacklistReportsResponse != nil {
        // handle response
    }
}
```

## GetConfigurationSet

<p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

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
    res, err := s.SDK.GetConfigurationSet(ctx, operations.GetConfigurationSetRequest{
        ConfigurationSetName: "veritatis",
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConfigurationSetResponse != nil {
        // handle response
    }
}
```

## GetConfigurationSetEventDestinations

<p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

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
    res, err := s.SDK.GetConfigurationSetEventDestinations(ctx, operations.GetConfigurationSetEventDestinationsRequest{
        ConfigurationSetName: "deserunt",
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConfigurationSetEventDestinationsResponse != nil {
        // handle response
    }
}
```

## GetDedicatedIP

Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.

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
    res, err := s.SDK.GetDedicatedIP(ctx, operations.GetDedicatedIPRequest{
        IP: "quos",
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDedicatedIPResponse != nil {
        // handle response
    }
}
```

## GetDedicatedIps

List the dedicated IP addresses that are associated with your Amazon Pinpoint account.

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
    res, err := s.SDK.GetDedicatedIps(ctx, operations.GetDedicatedIpsRequest{
        NextToken: sdk.String("excepturi"),
        PageSize: sdk.Int64(270008),
        PoolName: sdk.String("facilis"),
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

    if res.GetDedicatedIpsResponse != nil {
        // handle response
    }
}
```

## GetDeliverabilityDashboardOptions

<p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>

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
    res, err := s.SDK.GetDeliverabilityDashboardOptions(ctx, operations.GetDeliverabilityDashboardOptionsRequest{
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeliverabilityDashboardOptionsResponse != nil {
        // handle response
    }
}
```

## GetDeliverabilityTestReport

Retrieve the results of a predictive inbox placement test.

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
    res, err := s.SDK.GetDeliverabilityTestReport(ctx, operations.GetDeliverabilityTestReportRequest{
        ReportID: "a",
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeliverabilityTestReportResponse != nil {
        // handle response
    }
}
```

## GetDomainDeliverabilityCampaign

Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).

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
    res, err := s.SDK.GetDomainDeliverabilityCampaign(ctx, operations.GetDomainDeliverabilityCampaignRequest{
        CampaignID: "magnam",
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDomainDeliverabilityCampaignResponse != nil {
        // handle response
    }
}
```

## GetDomainStatisticsReport

Retrieve inbox placement and engagement rates for the domains that you use to send email.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDomainStatisticsReport(ctx, operations.GetDomainStatisticsReportRequest{
        Domain: "occaecati",
        EndDate: types.MustTimeFromString("2022-02-13T03:59:53.583Z"),
        StartDate: types.MustTimeFromString("2020-12-03T16:16:10.882Z"),
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDomainStatisticsReportResponse != nil {
        // handle response
    }
}
```

## GetEmailIdentity

Provides information about a specific identity associated with your Amazon Pinpoint account, including the identity's verification status, its DKIM authentication status, and its custom Mail-From settings.

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
    res, err := s.SDK.GetEmailIdentity(ctx, operations.GetEmailIdentityRequest{
        EmailIdentity: "deserunt",
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEmailIdentityResponse != nil {
        // handle response
    }
}
```

## ListConfigurationSets

<p>List all of the configuration sets associated with your Amazon Pinpoint account in the current region.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

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
    res, err := s.SDK.ListConfigurationSets(ctx, operations.ListConfigurationSetsRequest{
        NextToken: sdk.String("magnam"),
        PageSize: sdk.Int64(716075),
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConfigurationSetsResponse != nil {
        // handle response
    }
}
```

## ListDedicatedIPPools

List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current AWS Region.

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
    res, err := s.SDK.ListDedicatedIPPools(ctx, operations.ListDedicatedIPPoolsRequest{
        NextToken: sdk.String("vero"),
        PageSize: sdk.Int64(135474),
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDedicatedIPPoolsResponse != nil {
        // handle response
    }
}
```

## ListDeliverabilityTestReports

Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results.

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
    res, err := s.SDK.ListDeliverabilityTestReports(ctx, operations.ListDeliverabilityTestReportsRequest{
        NextToken: sdk.String("sint"),
        PageSize: sdk.Int64(33625),
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeliverabilityTestReportsResponse != nil {
        // handle response
    }
}
```

## ListDomainDeliverabilityCampaigns

Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDomainDeliverabilityCampaigns(ctx, operations.ListDomainDeliverabilityCampaignsRequest{
        EndDate: types.MustTimeFromString("2022-08-19T20:09:28.183Z"),
        NextToken: sdk.String("quasi"),
        PageSize: sdk.Int64(435865),
        StartDate: types.MustTimeFromString("2020-04-29T08:15:14.819Z"),
        SubscribedDomain: "eius",
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDomainDeliverabilityCampaignsResponse != nil {
        // handle response
    }
}
```

## ListEmailIdentities

Returns a list of all of the email identities that are associated with your Amazon Pinpoint account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't.

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
    res, err := s.SDK.ListEmailIdentities(ctx, operations.ListEmailIdentitiesRequest{
        NextToken: sdk.String("ullam"),
        PageSize: sdk.Int64(714242),
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEmailIdentitiesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ResourceArn: "consequuntur",
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## PutAccountDedicatedIPWarmupAttributes

Enable or disable the automatic warm-up feature for dedicated IP addresses.

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
    res, err := s.SDK.PutAccountDedicatedIPWarmupAttributes(ctx, operations.PutAccountDedicatedIPWarmupAttributesRequest{
        RequestBody: operations.PutAccountDedicatedIPWarmupAttributesRequestBody{
            AutoWarmupEnabled: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAccountDedicatedIPWarmupAttributesResponse != nil {
        // handle response
    }
}
```

## PutAccountSendingAttributes

Enable or disable the ability of your account to send email.

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
    res, err := s.SDK.PutAccountSendingAttributes(ctx, operations.PutAccountSendingAttributesRequest{
        RequestBody: operations.PutAccountSendingAttributesRequestBody{
            SendingEnabled: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("eaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAccountSendingAttributesResponse != nil {
        // handle response
    }
}
```

## PutConfigurationSetDeliveryOptions

Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.

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
    res, err := s.SDK.PutConfigurationSetDeliveryOptions(ctx, operations.PutConfigurationSetDeliveryOptionsRequest{
        ConfigurationSetName: "pariatur",
        RequestBody: operations.PutConfigurationSetDeliveryOptionsRequestBody{
            SendingPoolName: sdk.String("nemo"),
            TLSPolicy: operations.PutConfigurationSetDeliveryOptionsRequestBodyTLSPolicyEnumOptional.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutConfigurationSetDeliveryOptionsResponse != nil {
        // handle response
    }
}
```

## PutConfigurationSetReputationOptions

Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region.

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
    res, err := s.SDK.PutConfigurationSetReputationOptions(ctx, operations.PutConfigurationSetReputationOptionsRequest{
        ConfigurationSetName: "libero",
        RequestBody: operations.PutConfigurationSetReputationOptionsRequestBody{
            ReputationMetricsEnabled: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutConfigurationSetReputationOptionsResponse != nil {
        // handle response
    }
}
```

## PutConfigurationSetSendingOptions

Enable or disable email sending for messages that use a particular configuration set in a specific AWS Region.

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
    res, err := s.SDK.PutConfigurationSetSendingOptions(ctx, operations.PutConfigurationSetSendingOptionsRequest{
        ConfigurationSetName: "nesciunt",
        RequestBody: operations.PutConfigurationSetSendingOptionsRequestBody{
            SendingEnabled: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutConfigurationSetSendingOptionsResponse != nil {
        // handle response
    }
}
```

## PutConfigurationSetTrackingOptions

Specify a custom domain to use for open and click tracking elements in email that you send using Amazon Pinpoint.

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
    res, err := s.SDK.PutConfigurationSetTrackingOptions(ctx, operations.PutConfigurationSetTrackingOptionsRequest{
        ConfigurationSetName: "nostrum",
        RequestBody: operations.PutConfigurationSetTrackingOptionsRequestBody{
            CustomRedirectDomain: sdk.String("hic"),
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("perspiciatis"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutConfigurationSetTrackingOptionsResponse != nil {
        // handle response
    }
}
```

## PutDedicatedIPInPool

<p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Pinpoint account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>

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
    res, err := s.SDK.PutDedicatedIPInPool(ctx, operations.PutDedicatedIPInPoolRequest{
        IP: "blanditiis",
        RequestBody: operations.PutDedicatedIPInPoolRequestBody{
            DestinationPoolName: "error",
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutDedicatedIPInPoolResponse != nil {
        // handle response
    }
}
```

## PutDedicatedIPWarmupAttributes

<p/>

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
    res, err := s.SDK.PutDedicatedIPWarmupAttributes(ctx, operations.PutDedicatedIPWarmupAttributesRequest{
        IP: "iste",
        RequestBody: operations.PutDedicatedIPWarmupAttributesRequestBody{
            WarmupPercentage: 679091,
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutDedicatedIPWarmupAttributesResponse != nil {
        // handle response
    }
}
```

## PutDeliverabilityDashboardOption

<p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutDeliverabilityDashboardOption(ctx, operations.PutDeliverabilityDashboardOptionRequest{
        RequestBody: operations.PutDeliverabilityDashboardOptionRequestBody{
            DashboardEnabled: false,
            SubscribedDomains: []shared.DomainDeliverabilityTrackingOption{
                shared.DomainDeliverabilityTrackingOption{
                    Domain: sdk.String("aliquid"),
                    InboxPlacementTrackingOption: &shared.InboxPlacementTrackingOption{
                        Global: sdk.Bool(false),
                        TrackedIsps: []string{
                            "dolorem",
                        },
                    },
                    SubscriptionStartDate: types.MustTimeFromString("2022-10-25T00:56:56.568Z"),
                },
                shared.DomainDeliverabilityTrackingOption{
                    Domain: sdk.String("ipsum"),
                    InboxPlacementTrackingOption: &shared.InboxPlacementTrackingOption{
                        Global: sdk.Bool(false),
                        TrackedIsps: []string{
                            "excepturi",
                            "cum",
                            "voluptate",
                            "dignissimos",
                        },
                    },
                    SubscriptionStartDate: types.MustTimeFromString("2022-04-26T23:32:35.989Z"),
                },
                shared.DomainDeliverabilityTrackingOption{
                    Domain: sdk.String("dolorum"),
                    InboxPlacementTrackingOption: &shared.InboxPlacementTrackingOption{
                        Global: sdk.Bool(false),
                        TrackedIsps: []string{
                            "veritatis",
                            "ipsa",
                        },
                    },
                    SubscriptionStartDate: types.MustTimeFromString("2022-07-26T10:30:36.625Z"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutDeliverabilityDashboardOptionResponse != nil {
        // handle response
    }
}
```

## PutEmailIdentityDkimAttributes

Used to enable or disable DKIM authentication for an email identity.

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
    res, err := s.SDK.PutEmailIdentityDkimAttributes(ctx, operations.PutEmailIdentityDkimAttributesRequest{
        EmailIdentity: "eos",
        RequestBody: operations.PutEmailIdentityDkimAttributesRequestBody{
            SigningEnabled: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutEmailIdentityDkimAttributesResponse != nil {
        // handle response
    }
}
```

## PutEmailIdentityFeedbackAttributes

<p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you disable feedback forwarding, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p>

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
    res, err := s.SDK.PutEmailIdentityFeedbackAttributes(ctx, operations.PutEmailIdentityFeedbackAttributesRequest{
        EmailIdentity: "voluptate",
        RequestBody: operations.PutEmailIdentityFeedbackAttributesRequestBody{
            EmailForwardingEnabled: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutEmailIdentityFeedbackAttributesResponse != nil {
        // handle response
    }
}
```

## PutEmailIdentityMailFromAttributes

Used to enable or disable the custom Mail-From domain configuration for an email identity.

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
    res, err := s.SDK.PutEmailIdentityMailFromAttributes(ctx, operations.PutEmailIdentityMailFromAttributesRequest{
        EmailIdentity: "ipsum",
        RequestBody: operations.PutEmailIdentityMailFromAttributesRequestBody{
            BehaviorOnMxFailure: operations.PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnumUseDefaultValue.ToPointer(),
            MailFromDomain: sdk.String("id"),
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutEmailIdentityMailFromAttributesResponse != nil {
        // handle response
    }
}
```

## SendEmail

<p>Sends an email message. You can use the Amazon Pinpoint Email API to send two types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon Pinpoint assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> </ul>

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
    res, err := s.SDK.SendEmail(ctx, operations.SendEmailRequest{
        RequestBody: operations.SendEmailRequestBody{
            ConfigurationSetName: sdk.String("ad"),
            Content: operations.SendEmailRequestBodyContent{
                Raw: &shared.RawMessage{
                    Data: "saepe",
                },
                Simple: &shared.Message{
                    Body: shared.Body{
                        HTML: &shared.Content{
                            Charset: sdk.String("suscipit"),
                            Data: "deserunt",
                        },
                        Text: &shared.Content{
                            Charset: sdk.String("provident"),
                            Data: "minima",
                        },
                    },
                    Subject: shared.Content{
                        Charset: sdk.String("repellendus"),
                        Data: "totam",
                    },
                },
                Template: &shared.Template{
                    TemplateArn: sdk.String("similique"),
                    TemplateData: sdk.String("alias"),
                },
            },
            Destination: operations.SendEmailRequestBodyDestination{
                BccAddresses: []string{
                    "quaerat",
                    "tempora",
                    "vel",
                    "quod",
                },
                CcAddresses: []string{
                    "qui",
                    "dolorum",
                    "a",
                    "esse",
                },
                ToAddresses: []string{
                    "iusto",
                    "ipsum",
                    "quisquam",
                },
            },
            EmailTags: []shared.MessageTag{
                shared.MessageTag{
                    Name: "Kelli Thompson",
                    Value: "dolorem",
                },
                shared.MessageTag{
                    Name: "Miss Jimmie Kozey",
                    Value: "sed",
                },
                shared.MessageTag{
                    Name: "Kelli Hintz",
                    Value: "ipsum",
                },
                shared.MessageTag{
                    Name: "Norma McGlynn",
                    Value: "soluta",
                },
            },
            FeedbackForwardingEmailAddress: sdk.String("dicta"),
            FromEmailAddress: sdk.String("laborum"),
            ReplyToAddresses: []string{
                "incidunt",
                "aspernatur",
                "dolores",
            },
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendEmailResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>

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
        RequestBody: operations.TagResourceRequestBody{
            ResourceArn: "neque",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "magni",
                    Value: "odio",
                },
            },
        },
        XAmzAlgorithm: sdk.String("sunt"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("soluta"),
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

Remove one or more tags (keys and values) from a specified resource.

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        ResourceArn: "nobis",
        TagKeys: []string{
            "saepe",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateConfigurationSetEventDestination

<p>Update the configuration of an event destination for a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

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
    res, err := s.SDK.UpdateConfigurationSetEventDestination(ctx, operations.UpdateConfigurationSetEventDestinationRequest{
        ConfigurationSetName: "delectus",
        EventDestinationName: "dolorem",
        RequestBody: operations.UpdateConfigurationSetEventDestinationRequestBody{
            EventDestination: operations.UpdateConfigurationSetEventDestinationRequestBodyEventDestination{
                CloudWatchDestination: &shared.CloudWatchDestination{
                    DimensionConfigurations: []shared.CloudWatchDimensionConfiguration{
                        shared.CloudWatchDimensionConfiguration{
                            DefaultDimensionValue: "labore",
                            DimensionName: "adipisci",
                            DimensionValueSource: shared.DimensionValueSourceEnumLinkTag,
                        },
                        shared.CloudWatchDimensionConfiguration{
                            DefaultDimensionValue: "architecto",
                            DimensionName: "quae",
                            DimensionValueSource: shared.DimensionValueSourceEnumMessageTag,
                        },
                    },
                },
                Enabled: sdk.Bool(false),
                KinesisFirehoseDestination: &shared.KinesisFirehoseDestination{
                    DeliveryStreamArn: "quas",
                    IamRoleArn: "itaque",
                },
                MatchingEventTypes: []shared.EventTypeEnum{
                    shared.EventTypeEnumOpen,
                },
                PinpointDestination: &shared.PinpointDestination{
                    ApplicationArn: sdk.String("repellendus"),
                },
                SnsDestination: &shared.SnsDestination{
                    TopicArn: "porro",
                },
            },
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConfigurationSetEventDestinationResponse != nil {
        // handle response
    }
}
```
