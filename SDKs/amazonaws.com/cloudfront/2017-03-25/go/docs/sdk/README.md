# SDK

## Overview

<fullname>Amazon CloudFront</fullname> <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers who need detailed information about CloudFront API actions, data types, and errors. For detailed information about CloudFront features, see the <i>Amazon CloudFront Developer Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cloudfront/>
### Available Operations

* [CreateCloudFrontOriginAccessIdentity20170325](#createcloudfrontoriginaccessidentity20170325) - Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.
* [CreateDistribution20170325](#createdistribution20170325) - Creates a new web distribution. Send a <code>POST</code> request to the <code>/<i>CloudFront API version</i>/distribution</code>/<code>distribution ID</code> resource.
* [CreateDistributionWithTags20170325](#createdistributionwithtags20170325) - Create a new distribution with tags.
* [CreateInvalidation20170325](#createinvalidation20170325) - Create a new invalidation. 
* [CreateStreamingDistribution20170325](#createstreamingdistribution20170325) - <p>Creates a new RMTP distribution. An RTMP distribution is similar to a web distribution, but an RTMP distribution streams media files using the Adobe Real-Time Messaging Protocol (RTMP) instead of serving files using HTTP. </p> <p>To create a new web distribution, submit a <code>POST</code> request to the <i>CloudFront API version</i>/distribution resource. The request body must include a document with a <i>StreamingDistributionConfig</i> element. The response echoes the <code>StreamingDistributionConfig</code> element and returns other information about the RTMP distribution.</p> <p>To get the status of your request, use the <i>GET StreamingDistribution</i> API action. When the value of <code>Enabled</code> is <code>true</code> and the value of <code>Status</code> is <code>Deployed</code>, your distribution is ready. A distribution usually deploys in less than 15 minutes.</p> <p>For more information about web distributions, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-rtmp.html">Working with RTMP Distributions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <important> <p>Beginning with the 2012-05-05 version of the CloudFront API, we made substantial changes to the format of the XML document that you include in the request body when you create or update a web distribution or an RTMP distribution, and when you invalidate objects. With previous versions of the API, we discovered that it was too easy to accidentally delete one or more values for an element that accepts multiple values, for example, CNAMEs and trusted signers. Our changes for the 2012-05-05 release are intended to prevent these accidental deletions and to notify you when there's a mismatch between the number of values you say you're specifying in the <code>Quantity</code> element and the number of values specified.</p> </important>
* [CreateStreamingDistributionWithTags20170325](#createstreamingdistributionwithtags20170325) - Create a new streaming distribution with tags.
* [DeleteCloudFrontOriginAccessIdentity20170325](#deletecloudfrontoriginaccessidentity20170325) - Delete an origin access identity. 
* [DeleteDistribution20170325](#deletedistribution20170325) - Delete a distribution. 
* [DeleteServiceLinkedRole20170325](#deleteservicelinkedrole20170325)
* [DeleteStreamingDistribution20170325](#deletestreamingdistribution20170325) - <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
* [GetCloudFrontOriginAccessIdentity20170325](#getcloudfrontoriginaccessidentity20170325) - Get the information about an origin access identity. 
* [GetCloudFrontOriginAccessIdentityConfig20170325](#getcloudfrontoriginaccessidentityconfig20170325) - Get the configuration information about an origin access identity. 
* [GetDistribution20170325](#getdistribution20170325) - Get the information about a distribution. 
* [GetDistributionConfig20170325](#getdistributionconfig20170325) - Get the configuration information about a distribution. 
* [GetInvalidation20170325](#getinvalidation20170325) - Get the information about an invalidation. 
* [GetStreamingDistribution20170325](#getstreamingdistribution20170325) - Gets information about a specified RTMP distribution, including the distribution configuration.
* [GetStreamingDistributionConfig20170325](#getstreamingdistributionconfig20170325) - Get the configuration information about a streaming distribution. 
* [ListCloudFrontOriginAccessIdentities20170325](#listcloudfrontoriginaccessidentities20170325) - Lists origin access identities.
* [ListDistributions20170325](#listdistributions20170325) - List distributions. 
* [ListDistributionsByWebACLId20170325](#listdistributionsbywebaclid20170325) - List the distributions that are associated with a specified AWS WAF web ACL. 
* [ListInvalidations20170325](#listinvalidations20170325) - Lists invalidation batches. 
* [ListStreamingDistributions20170325](#liststreamingdistributions20170325) - List streaming distributions. 
* [ListTagsForResource20170325](#listtagsforresource20170325) - List tags for a CloudFront resource.
* [TagResource20170325](#tagresource20170325) - Add tags to a CloudFront resource.
* [UntagResource20170325](#untagresource20170325) - Remove tags from a CloudFront resource.
* [UpdateCloudFrontOriginAccessIdentity20170325](#updatecloudfrontoriginaccessidentity20170325) - Update an origin access identity. 
* [UpdateDistribution20170325](#updatedistribution20170325) - <p>Updates the configuration for a web distribution. Perform the following steps.</p> <p>For information about updating a distribution using the CloudFront console, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-creating-console.html">Creating or Updating a Web Distribution Using the CloudFront Console </a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p> <b>To update a web distribution using the CloudFront API</b> </p> <ol> <li> <p>Submit a <a>GetDistributionConfig</a> request to get the current configuration and an <code>Etag</code> header for the distribution.</p> <note> <p>If you update the distribution again, you need to get a new <code>Etag</code> header.</p> </note> </li> <li> <p>Update the XML document that was returned in the response to your <code>GetDistributionConfig</code> request to include the desired changes. You can't change the value of <code>CallerReference</code>. If you try to change this value, CloudFront returns an <code>IllegalUpdate</code> error.</p> <important> <p>The new configuration replaces the existing configuration; the values that you specify in an <code>UpdateDistribution</code> request are not merged into the existing configuration. When you add, delete, or replace values in an element that allows multiple values (for example, <code>CNAME</code>), you must specify all of the values that you want to appear in the updated distribution. In addition, you must update the corresponding <code>Quantity</code> element.</p> </important> </li> <li> <p>Submit an <code>UpdateDistribution</code> request to update the configuration for your distribution:</p> <ul> <li> <p>In the request body, include the XML document that you updated in Step 2. The request body must include an XML document with a <code>DistributionConfig</code> element.</p> </li> <li> <p>Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GetDistributionConfig</code> request in Step 1.</p> </li> </ul> </li> <li> <p>Review the response to the <code>UpdateDistribution</code> request to confirm that the configuration was successfully updated.</p> </li> <li> <p>Optional: Submit a <a>GetDistribution</a> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> <important> <p>Beginning with the 2012-05-05 version of the CloudFront API, we made substantial changes to the format of the XML document that you include in the request body when you create or update a distribution. With previous versions of the API, we discovered that it was too easy to accidentally delete one or more values for an element that accepts multiple values, for example, CNAMEs and trusted signers. Our changes for the 2012-05-05 release are intended to prevent these accidental deletions and to notify you when there's a mismatch between the number of values you say you're specifying in the <code>Quantity</code> element and the number of values you're actually specifying.</p> </important> </li> </ol>
* [UpdateStreamingDistribution20170325](#updatestreamingdistribution20170325) - Update a streaming distribution. 

## CreateCloudFrontOriginAccessIdentity20170325

Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.

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
    res, err := s.SDK.CreateCloudFrontOriginAccessIdentity20170325(ctx, operations.CreateCloudFrontOriginAccessIdentity20170325Request{
        RequestBody: []byte("vel"),
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateDistribution20170325

Creates a new web distribution. Send a <code>POST</code> request to the <code>/<i>CloudFront API version</i>/distribution</code>/<code>distribution ID</code> resource.

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
    res, err := s.SDK.CreateDistribution20170325(ctx, operations.CreateDistribution20170325Request{
        RequestBody: []byte("delectus"),
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateDistributionWithTags20170325

Create a new distribution with tags.

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
    res, err := s.SDK.CreateDistributionWithTags20170325(ctx, operations.CreateDistributionWithTags20170325Request{
        RequestBody: []byte("excepturi"),
        WithTags: false,
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateInvalidation20170325

Create a new invalidation. 

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
    res, err := s.SDK.CreateInvalidation20170325(ctx, operations.CreateInvalidation20170325Request{
        DistributionID: "perferendis",
        RequestBody: []byte("ipsam"),
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateStreamingDistribution20170325

<p>Creates a new RMTP distribution. An RTMP distribution is similar to a web distribution, but an RTMP distribution streams media files using the Adobe Real-Time Messaging Protocol (RTMP) instead of serving files using HTTP. </p> <p>To create a new web distribution, submit a <code>POST</code> request to the <i>CloudFront API version</i>/distribution resource. The request body must include a document with a <i>StreamingDistributionConfig</i> element. The response echoes the <code>StreamingDistributionConfig</code> element and returns other information about the RTMP distribution.</p> <p>To get the status of your request, use the <i>GET StreamingDistribution</i> API action. When the value of <code>Enabled</code> is <code>true</code> and the value of <code>Status</code> is <code>Deployed</code>, your distribution is ready. A distribution usually deploys in less than 15 minutes.</p> <p>For more information about web distributions, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-rtmp.html">Working with RTMP Distributions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <important> <p>Beginning with the 2012-05-05 version of the CloudFront API, we made substantial changes to the format of the XML document that you include in the request body when you create or update a web distribution or an RTMP distribution, and when you invalidate objects. With previous versions of the API, we discovered that it was too easy to accidentally delete one or more values for an element that accepts multiple values, for example, CNAMEs and trusted signers. Our changes for the 2012-05-05 release are intended to prevent these accidental deletions and to notify you when there's a mismatch between the number of values you say you're specifying in the <code>Quantity</code> element and the number of values specified.</p> </important>

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
    res, err := s.SDK.CreateStreamingDistribution20170325(ctx, operations.CreateStreamingDistribution20170325Request{
        RequestBody: []byte("molestiae"),
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateStreamingDistributionWithTags20170325

Create a new streaming distribution with tags.

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
    res, err := s.SDK.CreateStreamingDistributionWithTags20170325(ctx, operations.CreateStreamingDistributionWithTags20170325Request{
        RequestBody: []byte("nam"),
        WithTags: false,
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## DeleteCloudFrontOriginAccessIdentity20170325

Delete an origin access identity. 

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
    res, err := s.SDK.DeleteCloudFrontOriginAccessIdentity20170325(ctx, operations.DeleteCloudFrontOriginAccessIdentity20170325Request{
        ID: "16742cb7-3920-4592-9396-fea7596eb10f",
        IfMatch: sdk.String("est"),
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDistribution20170325

Delete a distribution. 

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
    res, err := s.SDK.DeleteDistribution20170325(ctx, operations.DeleteDistribution20170325Request{
        ID: "5955907a-ff1a-43a2-ba94-67739251aa52",
        IfMatch: sdk.String("quo"),
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

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteServiceLinkedRole20170325

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
    res, err := s.SDK.DeleteServiceLinkedRole20170325(ctx, operations.DeleteServiceLinkedRole20170325Request{
        RoleName: "error",
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

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteStreamingDistribution20170325

<p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

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
    res, err := s.SDK.DeleteStreamingDistribution20170325(ctx, operations.DeleteStreamingDistribution20170325Request{
        ID: "8f097b00-74f1-4547-9b5e-6e13b99d488e",
        IfMatch: sdk.String("quasi"),
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("consequatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCloudFrontOriginAccessIdentity20170325

Get the information about an origin access identity. 

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
    res, err := s.SDK.GetCloudFrontOriginAccessIdentity20170325(ctx, operations.GetCloudFrontOriginAccessIdentity20170325Request{
        ID: "ad2abd44-2698-402d-902a-94bb4f63c969",
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetCloudFrontOriginAccessIdentityConfig20170325

Get the configuration information about an origin access identity. 

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
    res, err := s.SDK.GetCloudFrontOriginAccessIdentityConfig20170325(ctx, operations.GetCloudFrontOriginAccessIdentityConfig20170325Request{
        ID: "77dfb14c-d66a-4e39-9efb-9ba88f3a6699",
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDistribution20170325

Get the information about a distribution. 

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
    res, err := s.SDK.GetDistribution20170325(ctx, operations.GetDistribution20170325Request{
        ID: "469b6e21-4195-4989-8afa-563e2516fe4c",
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDistributionConfig20170325

Get the configuration information about a distribution. 

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
    res, err := s.SDK.GetDistributionConfig20170325(ctx, operations.GetDistributionConfig20170325Request{
        ID: "b7fd2ed0-2892-41cd-9c69-2601fb576b0d",
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("cumque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetInvalidation20170325

Get the information about an invalidation. 

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
    res, err := s.SDK.GetInvalidation20170325(ctx, operations.GetInvalidation20170325Request{
        DistributionID: "corporis",
        ID: "fbb25870-5320-42c7-bd5f-e9b90c28909b",
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetStreamingDistribution20170325

Gets information about a specified RTMP distribution, including the distribution configuration.

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
    res, err := s.SDK.GetStreamingDistribution20170325(ctx, operations.GetStreamingDistribution20170325Request{
        ID: "d9cbf486-3332-43f9-b77f-3a4100674ebf",
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetStreamingDistributionConfig20170325

Get the configuration information about a streaming distribution. 

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
    res, err := s.SDK.GetStreamingDistributionConfig20170325(ctx, operations.GetStreamingDistributionConfig20170325Request{
        ID: "ba77a89e-bf73-47ae-8203-ce5e6a95d8a0",
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

    if res.Body != nil {
        // handle response
    }
}
```

## ListCloudFrontOriginAccessIdentities20170325

Lists origin access identities.

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
    res, err := s.SDK.ListCloudFrontOriginAccessIdentities20170325(ctx, operations.ListCloudFrontOriginAccessIdentities20170325Request{
        Marker: sdk.String("dolorum"),
        MaxItems: sdk.String("a"),
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListDistributions20170325

List distributions. 

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
    res, err := s.SDK.ListDistributions20170325(ctx, operations.ListDistributions20170325Request{
        Marker: sdk.String("tempore"),
        MaxItems: sdk.String("accusamus"),
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("sit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListDistributionsByWebACLId20170325

List the distributions that are associated with a specified AWS WAF web ACL. 

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
    res, err := s.SDK.ListDistributionsByWebACLId20170325(ctx, operations.ListDistributionsByWebACLId20170325Request{
        Marker: sdk.String("expedita"),
        MaxItems: sdk.String("neque"),
        WebACLID: "sed",
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("incidunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListInvalidations20170325

Lists invalidation batches. 

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
    res, err := s.SDK.ListInvalidations20170325(ctx, operations.ListInvalidations20170325Request{
        DistributionID: "qui",
        Marker: sdk.String("cupiditate"),
        MaxItems: sdk.String("maxime"),
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListStreamingDistributions20170325

List streaming distributions. 

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
    res, err := s.SDK.ListStreamingDistributions20170325(ctx, operations.ListStreamingDistributions20170325Request{
        Marker: sdk.String("dolores"),
        MaxItems: sdk.String("distinctio"),
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("neque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListTagsForResource20170325

List tags for a CloudFront resource.

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
    res, err := s.SDK.ListTagsForResource20170325(ctx, operations.ListTagsForResource20170325Request{
        Resource: "fugit",
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("sunt"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## TagResource20170325

Add tags to a CloudFront resource.

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
    res, err := s.SDK.TagResource20170325(ctx, operations.TagResource20170325Request{
        Operation: operations.TagResource20170325OperationEnumTag,
        RequestBody: []byte("cumque"),
        Resource: "soluta",
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UntagResource20170325

Remove tags from a CloudFront resource.

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
    res, err := s.SDK.UntagResource20170325(ctx, operations.UntagResource20170325Request{
        Operation: operations.UntagResource20170325OperationEnumUntag,
        RequestBody: []byte("tempore"),
        Resource: "cupiditate",
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCloudFrontOriginAccessIdentity20170325

Update an origin access identity. 

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
    res, err := s.SDK.UpdateCloudFrontOriginAccessIdentity20170325(ctx, operations.UpdateCloudFrontOriginAccessIdentity20170325Request{
        ID: "1108e0ad-cf4b-4921-879f-ce953f73ef7f",
        IfMatch: sdk.String("distinctio"),
        RequestBody: []byte("quod"),
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdateDistribution20170325

<p>Updates the configuration for a web distribution. Perform the following steps.</p> <p>For information about updating a distribution using the CloudFront console, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-creating-console.html">Creating or Updating a Web Distribution Using the CloudFront Console </a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p> <b>To update a web distribution using the CloudFront API</b> </p> <ol> <li> <p>Submit a <a>GetDistributionConfig</a> request to get the current configuration and an <code>Etag</code> header for the distribution.</p> <note> <p>If you update the distribution again, you need to get a new <code>Etag</code> header.</p> </note> </li> <li> <p>Update the XML document that was returned in the response to your <code>GetDistributionConfig</code> request to include the desired changes. You can't change the value of <code>CallerReference</code>. If you try to change this value, CloudFront returns an <code>IllegalUpdate</code> error.</p> <important> <p>The new configuration replaces the existing configuration; the values that you specify in an <code>UpdateDistribution</code> request are not merged into the existing configuration. When you add, delete, or replace values in an element that allows multiple values (for example, <code>CNAME</code>), you must specify all of the values that you want to appear in the updated distribution. In addition, you must update the corresponding <code>Quantity</code> element.</p> </important> </li> <li> <p>Submit an <code>UpdateDistribution</code> request to update the configuration for your distribution:</p> <ul> <li> <p>In the request body, include the XML document that you updated in Step 2. The request body must include an XML document with a <code>DistributionConfig</code> element.</p> </li> <li> <p>Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GetDistributionConfig</code> request in Step 1.</p> </li> </ul> </li> <li> <p>Review the response to the <code>UpdateDistribution</code> request to confirm that the configuration was successfully updated.</p> </li> <li> <p>Optional: Submit a <a>GetDistribution</a> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> <important> <p>Beginning with the 2012-05-05 version of the CloudFront API, we made substantial changes to the format of the XML document that you include in the request body when you create or update a distribution. With previous versions of the API, we discovered that it was too easy to accidentally delete one or more values for an element that accepts multiple values, for example, CNAMEs and trusted signers. Our changes for the 2012-05-05 release are intended to prevent these accidental deletions and to notify you when there's a mismatch between the number of values you say you're specifying in the <code>Quantity</code> element and the number of values you're actually specifying.</p> </important> </li> </ol>

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
    res, err := s.SDK.UpdateDistribution20170325(ctx, operations.UpdateDistribution20170325Request{
        ID: "d39c0f5d-2cff-47c7-8a45-626d436813f1",
        IfMatch: sdk.String("ex"),
        RequestBody: []byte("nulla"),
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdateStreamingDistribution20170325

Update a streaming distribution. 

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
    res, err := s.SDK.UpdateStreamingDistribution20170325(ctx, operations.UpdateStreamingDistribution20170325Request{
        ID: "c556146c-3e25-40fb-808c-42e141aac366",
        IfMatch: sdk.String("nobis"),
        RequestBody: []byte("quas"),
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("numquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
