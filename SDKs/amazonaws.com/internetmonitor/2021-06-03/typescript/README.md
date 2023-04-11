# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/internetmonitor/2021-06-03/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/internetmonitor/2021-06-03/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateMonitorRequest,
  CreateMonitorResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateMonitorRequest = {
  requestBody: {
    clientToken: "corrupti",
    maxCityNetworksToMonitor: 592845,
    monitorName: "distinctio",
    resources: [
      "unde",
      "nulla",
      "corrupti",
      "illum",
    ],
    tags: {
      "error": "deserunt",
      "suscipit": "iure",
    },
  },
  xAmzAlgorithm: "magnam",
  xAmzContentSha256: "debitis",
  xAmzCredential: "ipsa",
  xAmzDate: "delectus",
  xAmzSecurityToken: "tempora",
  xAmzSignature: "suscipit",
  xAmzSignedHeaders: "molestiae",
};

sdk.createMonitor(req).then((res: CreateMonitorResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createMonitor` - <p>Creates a monitor in Amazon CloudWatch Internet Monitor. A monitor is built based on information from the application resources that you add: Virtual Private Clouds (VPCs), Amazon CloudFront distributions, and WorkSpaces directories. </p> <p>After you create a monitor, you can view the internet performance for your application, scoped to a location, as well as any health events that are impairing traffic. Internet Monitor can also diagnose whether the impairment is on the Amazon Web Services network or is an issue with an internet service provider (ISP).</p>
* `deleteMonitor` - Deletes a monitor in Amazon CloudWatch Internet Monitor. 
* `getHealthEvent` - <p>Gets information the Amazon CloudWatch Internet Monitor has created and stored about a health event for a specified monitor. This information includes the impacted locations, and all of the information related to the event by location.</p> <p>The information returned includes the performance, availability, and round-trip time impact, information about the network providers, the event type, and so on.</p> <p>Information rolled up at the global traffic level is also returned, including the impact type and total traffic impact.</p>
* `getMonitor` - Gets information about a monitor in Amazon CloudWatch Internet Monitor based on a monitor name. The information returned includes the Amazon Resource Name (ARN), create time, modified time, resources included in the monitor, and status information.
* `listHealthEvents` - <p>Lists all health events for a monitor in Amazon CloudWatch Internet Monitor. Returns all information for health events including the client location information the network cause and status, event start and end time, percentage of total traffic impacted, and status.</p> <note> <p>Health events that have start times during the time frame that is requested are not included in the list of health events.</p> </note>
* `listMonitors` - Lists all of your monitors for Amazon CloudWatch Internet Monitor and their statuses, along with the Amazon Resource Name (ARN) and name of each monitor.
* `listTagsForResource` - Lists the tags for a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor.
* `tagResource` - <p>Adds a tag to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor. You can add a maximum of 50 tags in Internet Monitor.</p> <p>A minimum of one tag is required for this call. It returns an error if you use the <code>TagResource</code> request with 0 tags.</p>
* `untagResource` - Removes a tag from a resource.
* `updateMonitor` - Updates a monitor. You can update a monitor to add or remove resources, or to change the status of the monitor. You can't change the name of a monitor.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

