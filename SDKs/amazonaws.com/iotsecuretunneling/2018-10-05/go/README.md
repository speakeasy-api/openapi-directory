# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/iotsecuretunneling/2018-10-05/go
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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CloseTunnelRequest{
        CloseTunnelRequest: shared.CloseTunnelRequest{
            Delete: false,
            TunnelID: "corrupti",
        },
        XAmzAlgorithm: "provident",
        XAmzContentSha256: "distinctio",
        XAmzCredential: "quibusdam",
        XAmzDate: "unde",
        XAmzSecurityToken: "nulla",
        XAmzSignature: "corrupti",
        XAmzSignedHeaders: "illum",
        XAmzTarget: "IoTSecuredTunneling.CloseTunnel",
    }

    ctx := context.Background()
    res, err := s.CloseTunnel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CloseTunnelResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CloseTunnel` - <p>Closes a tunnel identified by the unique tunnel id. When a <code>CloseTunnel</code> request is received, we close the WebSocket connections between the client and proxy server so no data can be transmitted.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CloseTunnel</a> action.</p>
* `DescribeTunnel` - <p>Gets information about a tunnel identified by the unique tunnel id.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeTunnel</a> action.</p>
* `ListTagsForResource` - Lists the tags for the specified resource.
* `ListTunnels` - <p>List all tunnels for an Amazon Web Services account. Tunnels are listed by creation time in descending order, newer tunnels will be listed before older tunnels.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTunnels</a> action.</p>
* `OpenTunnel` - <p>Creates a new tunnel, and returns two client access tokens for clients to use to connect to the IoT Secure Tunneling proxy server.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">OpenTunnel</a> action.</p>
* `RotateTunnelAccessToken` - <p>Revokes the current client access token (CAT) and returns new CAT for clients to use when reconnecting to secure tunneling to access the same tunnel.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RotateTunnelAccessToken</a> action.</p> <note> <p>Rotating the CAT doesn't extend the tunnel duration. For example, say the tunnel duration is 12 hours and the tunnel has already been open for 4 hours. When you rotate the access tokens, the new tokens that are generated can only be used for the remaining 8 hours.</p> </note>
* `TagResource` - A resource tag.
* `UntagResource` - Removes a tag from a resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
