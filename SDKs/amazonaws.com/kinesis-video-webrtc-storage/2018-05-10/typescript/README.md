# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/kinesis-video-webrtc-storage/2018-05-10/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/kinesis-video-webrtc-storage/2018-05-10/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  JoinStorageSessionRequest,
  JoinStorageSessionResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: JoinStorageSessionRequest = {
  requestBody: {
    channelArn: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
};

sdk.joinStorageSession(req).then((res: JoinStorageSessionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `joinStorageSession` - <p> Join the ongoing one way-video and/or multi-way audio WebRTC session as a video producing device for an input channel. If there’s no existing session for the channel, a new streaming session needs to be created, and the Amazon Resource Name (ARN) of the signaling channel must be provided. </p> <p>Currently for the <code>SINGLE_MASTER</code> type, a video producing device is able to ingest both audio and video media into a stream, while viewers can only ingest audio. Both a video producing device and viewers can join the session first, and wait for other participants.</p> <p>While participants are having peer to peer conversations through webRTC, the ingested media session will be stored into the Kinesis Video Stream. Multiple viewers are able to playback real-time media.</p> <p>Customers can also use existing Kinesis Video Streams features like <code>HLS</code> or <code>DASH</code> playback, Image generation, and more with ingested WebRTC media.</p> <note> <p>Assume that only one video producing device client can be associated with a session for the channel. If more than one client joins the session of a specific channel as a video producing device, the most recent client request takes precedence. </p> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

