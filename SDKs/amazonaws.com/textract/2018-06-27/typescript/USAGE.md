<!-- Start SDK Example Usage -->
```typescript
import {
  AnalyzeDocumentRequest,
  AnalyzeDocumentResponse,
  AnalyzeDocumentXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  ContentClassifierEnum,
  FeatureTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AnalyzeDocumentRequest = {
  analyzeDocumentRequest: {
    document: {
      bytes: "corrupti",
      s3Object: {
        bucket: "provident",
        name: "distinctio",
        version: "quibusdam",
      },
    },
    featureTypes: [
      FeatureTypeEnum.Signatures,
      FeatureTypeEnum.Queries,
      FeatureTypeEnum.Signatures,
    ],
    humanLoopConfig: {
      dataAttributes: {
        contentClassifiers: [
          ContentClassifierEnum.FreeOfAdultContent,
          ContentClassifierEnum.FreeOfAdultContent,
        ],
      },
      flowDefinitionArn: "suscipit",
      humanLoopName: "iure",
    },
    queriesConfig: {
      queries: [
        {
          alias: "debitis",
          pages: [
            "delectus",
          ],
          text: "tempora",
        },
        {
          alias: "suscipit",
          pages: [
            "minus",
            "placeat",
          ],
          text: "voluptatum",
        },
      ],
    },
  },
  xAmzAlgorithm: "iusto",
  xAmzContentSha256: "excepturi",
  xAmzCredential: "nisi",
  xAmzDate: "recusandae",
  xAmzSecurityToken: "temporibus",
  xAmzSignature: "ab",
  xAmzSignedHeaders: "quis",
  xAmzTarget: AnalyzeDocumentXAmzTargetEnum.TextractAnalyzeDocument,
};

sdk.analyzeDocument(req).then((res: AnalyzeDocumentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->