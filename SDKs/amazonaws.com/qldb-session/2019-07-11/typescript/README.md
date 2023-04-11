# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/qldb-session/2019-07-11/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/qldb-session/2019-07-11/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  SendCommandRequest,
  SendCommandResponse,
  SendCommandXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: SendCommandRequest = {
  sendCommandRequest: {
    abortTransaction: {
      "provident": "distinctio",
      "quibusdam": "unde",
      "nulla": "corrupti",
    },
    commitTransaction: {
      commitDigest: "illum",
      transactionId: "vel",
    },
    endSession: {
      "deserunt": "suscipit",
      "iure": "magnam",
      "debitis": "ipsa",
    },
    executeStatement: {
      parameters: [
        {
          ionBinary: "tempora",
          ionText: "suscipit",
        },
        {
          ionBinary: "molestiae",
          ionText: "minus",
        },
        {
          ionBinary: "placeat",
          ionText: "voluptatum",
        },
        {
          ionBinary: "iusto",
          ionText: "excepturi",
        },
      ],
      statement: "nisi",
      transactionId: "recusandae",
    },
    fetchPage: {
      nextPageToken: "temporibus",
      transactionId: "ab",
    },
    sessionToken: "quis",
    startSession: {
      ledgerName: "veritatis",
    },
    startTransaction: {
      "perferendis": "ipsam",
      "repellendus": "sapiente",
      "quo": "odit",
    },
  },
  xAmzAlgorithm: "at",
  xAmzContentSha256: "at",
  xAmzCredential: "maiores",
  xAmzDate: "molestiae",
  xAmzSecurityToken: "quod",
  xAmzSignature: "quod",
  xAmzSignedHeaders: "esse",
  xAmzTarget: SendCommandXAmzTargetEnum.QLDBSessionSendCommand,
};

sdk.sendCommand(req).then((res: SendCommandResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `sendCommand` - <p>Sends a command to an Amazon QLDB ledger.</p> <note> <p>Instead of interacting directly with this API, we recommend using the QLDB driver or the QLDB shell to execute data transactions on a ledger.</p> <ul> <li> <p>If you are working with an AWS SDK, use the QLDB driver. The driver provides a high-level abstraction layer above this <i>QLDB Session</i> data plane and manages <code>SendCommand</code> API calls for you. For information and a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started with the driver</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> <li> <p>If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB shell. The shell is a command line interface that uses the QLDB driver to interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the QLDB shell</a>.</p> </li> </ul> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

