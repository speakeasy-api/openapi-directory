# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/oam/2022-06-10/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

    req := operations.CreateLinkRequest{
        Headers: operations.CreateLinkHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateLinkRequestBody{
            LabelTemplate: "illum",
            ResourceTypes: []shared.ResourceTypeEnum{
                "AWS::Logs::LogGroup",
                "AWS::Logs::LogGroup",
            },
            SinkIdentifier: "suscipit",
            Tags: map[string]string{
                "magnam": "debitis",
                "ipsa": "delectus",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateLink(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLinkOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateLink` - <p>Creates a link between a source account and a sink that you have created in a monitoring account.</p> <p>Before you create a link, you must create a sink in the monitoring account and create a sink policy in that account. The sink policy must permit the source account to link to it. You can grant permission to source accounts by granting permission to an entire organization or to individual accounts.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_CreateSink.html">CreateSink</a> and <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html">PutSinkPolicy</a>.</p> <p>Each monitoring account can be linked to as many as 100,000 source accounts.</p> <p>Each source account can be linked to as many as five monitoring accounts.</p>
* `CreateSink` - <p>Use this to create a <i>sink</i> in the current account, so that it can be used as a monitoring account in CloudWatch cross-account observability. A sink is a resource that represents an attachment point in a monitoring account. Source accounts can link to the sink to send observability data.</p> <p>After you create a sink, you must create a sink policy that allows source accounts to attach to it. For more information, see <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html">PutSinkPolicy</a>.</p> <p>Each account can contain one sink. If you delete a sink, you can then create a new one in that account.</p>
* `DeleteLink` - Deletes a link between a monitoring account sink and a source account. You must run this operation in the source account.
* `DeleteSink` - Deletes a sink. You must delete all links to a sink before you can delete that sink.
* `GetLink` - <p>Returns complete information about one link.</p> <p>To use this operation, provide the link ARN. To retrieve a list of link ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListLinks.html">ListLinks</a>.</p>
* `GetSink` - <p>Returns complete information about one monitoring account sink.</p> <p>To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a>.</p>
* `GetSinkPolicy` - Returns the current sink policy attached to this sink. The sink policy specifies what accounts can attach to this sink as source accounts, and what types of data they can share.
* `ListAttachedLinks` - <p>Returns a list of source account links that are linked to this monitoring account sink.</p> <p>To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a>.</p> <p>To find a list of links for one source account, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListLinks.html">ListLinks</a>.</p>
* `ListLinks` - <p>Use this operation in a source account to return a list of links to monitoring account sinks that this source account has.</p> <p>To find a list of links for one monitoring account sink, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListAttachedLinks.html">ListAttachedLinks</a> from within the monitoring account.</p>
* `ListSinks` - Use this operation in a monitoring account to return the list of sinks created in that account.
* `ListTagsForResource` - Displays the tags associated with a resource. Both sinks and links support tagging.
* `PutSinkPolicy` - <p>Creates or updates the resource policy that grants permissions to source accounts to link to the monitoring account sink. When you create a sink policy, you can grant permissions to all accounts in an organization or to individual accounts.</p> <p>You can also use a sink policy to limit the types of data that is shared. The three types that you can allow or deny are:</p> <ul> <li> <p> <b>Metrics</b> - Specify with <code>AWS::CloudWatch::Metric</code> </p> </li> <li> <p> <b>Log groups</b> - Specify with <code>AWS::Logs::LogGroup</code> </p> </li> <li> <p> <b>Traces</b> - Specify with <code>AWS::XRay::Trace</code> </p> </li> </ul> <p>See the examples in this section to see how to specify permitted source accounts and data types.</p>
* `TagResource` - <p>Assigns one or more tags (key-value pairs) to the specified resource. Both sinks and links can be tagged. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p> <important> <p>Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and sinks you must have the <code>oam:ResourceTag</code> permission. The <code>iam:ResourceTag</code> permission does not allow you to tag and untag links and sinks.</p> </important>
* `UntagResource` - <p>Removes one or more tags from the specified resource.</p> <important> <p>Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and sinks you must have the <code>oam:ResourceTag</code> permission. The <code>iam:TagResource</code> permission does not allow you to tag and untag links and sinks.</p> </important>
* `UpdateLink` - <p>Use this operation to change what types of data are shared from a source account to its linked monitoring account sink. You can't change the sink or change the monitoring account with this operation.</p> <p>To update the list of tags associated with the sink, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_TagResource.html">TagResource</a>.</p>
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
