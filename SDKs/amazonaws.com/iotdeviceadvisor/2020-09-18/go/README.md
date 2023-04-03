# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/iotdeviceadvisor/2020-09-18/go
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

    req := operations.CreateSuiteDefinitionRequest{
        RequestBody: operations.CreateSuiteDefinitionRequestBody{
            SuiteDefinitionConfiguration: operations.CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration{
                DevicePermissionRoleArn: "corrupti",
                Devices: []shared.DeviceUnderTest{
                    shared.DeviceUnderTest{
                        CertificateArn: "distinctio",
                        ThingArn: "quibusdam",
                    },
                    shared.DeviceUnderTest{
                        CertificateArn: "unde",
                        ThingArn: "nulla",
                    },
                    shared.DeviceUnderTest{
                        CertificateArn: "corrupti",
                        ThingArn: "illum",
                    },
                },
                IntendedForQualification: false,
                IsLongDurationTest: false,
                Protocol: "MqttV3_1_1",
                RootGroup: "error",
                SuiteDefinitionName: "deserunt",
            },
            Tags: map[string]string{
                "iure": "magnam",
                "debitis": "ipsa",
            },
        },
        XAmzAlgorithm: "delectus",
        XAmzContentSha256: "tempora",
        XAmzCredential: "suscipit",
        XAmzDate: "molestiae",
        XAmzSecurityToken: "minus",
        XAmzSignature: "placeat",
        XAmzSignedHeaders: "voluptatum",
    }

    ctx := context.Background()
    res, err := s.CreateSuiteDefinition(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSuiteDefinitionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateSuiteDefinition` - <p>Creates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSuiteDefinition</a> action.</p>
* `DeleteSuiteDefinition` - <p>Deletes a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteSuiteDefinition</a> action.</p>
* `GetEndpoint` - Gets information about an Device Advisor endpoint.
* `GetSuiteDefinition` - <p>Gets information about a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteDefinition</a> action.</p>
* `GetSuiteRun` - <p>Gets information about a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRun</a> action.</p>
* `GetSuiteRunReport` - <p>Gets a report download link for a successful Device Advisor qualifying test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRunReport</a> action.</p>
* `ListSuiteDefinitions` - <p>Lists the Device Advisor test suites you have created.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteDefinitions</a> action.</p>
* `ListSuiteRuns` - <p>Lists runs of the specified Device Advisor test suite. You can list all runs of the test suite, or the runs of a specific version of the test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteRuns</a> action.</p>
* `ListTagsForResource` - <p>Lists the tags attached to an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTagsForResource</a> action.</p>
* `StartSuiteRun` - <p>Starts a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartSuiteRun</a> action.</p>
* `StopSuiteRun` - <p>Stops a Device Advisor test suite run that is currently running.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StopSuiteRun</a> action.</p>
* `TagResource` - <p>Adds to and modifies existing tags of an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TagResource</a> action.</p>
* `UntagResource` - <p>Removes tags from an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UntagResource</a> action.</p>
* `UpdateSuiteDefinition` - <p>Updates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSuiteDefinition</a> action.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
