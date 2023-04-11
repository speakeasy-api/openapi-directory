<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAutoPredictorRequest,
  CreateAutoPredictorResponse,
  CreateAutoPredictorXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  MonthEnum,
  DayOfWeekEnum,
  OptimizationMetricEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateAutoPredictorRequest = {
  createAutoPredictorRequest: {
    dataConfig: {
      additionalDatasets: [
        {
          configuration: {
            "distinctio": [
              "unde",
              "nulla",
              "corrupti",
              "illum",
            ],
            "vel": [
              "deserunt",
              "suscipit",
              "iure",
            ],
            "magnam": [
              "ipsa",
              "delectus",
              "tempora",
              "suscipit",
            ],
          },
          name: "molestiae",
        },
        {
          configuration: {
            "placeat": [
              "iusto",
              "excepturi",
              "nisi",
            ],
            "recusandae": [
              "ab",
              "quis",
              "veritatis",
              "deserunt",
            ],
            "perferendis": [
              "repellendus",
              "sapiente",
            ],
            "quo": [
              "at",
            ],
          },
          name: "at",
        },
        {
          configuration: {
            "molestiae": [
              "quod",
              "esse",
              "totam",
              "porro",
            ],
            "dolorum": [
              "nam",
            ],
            "officia": [
              "fugit",
              "deleniti",
              "hic",
            ],
            "optio": [
              "beatae",
              "commodi",
              "molestiae",
            ],
          },
          name: "modi",
        },
      ],
      attributeConfigs: [
        {
          attributeName: "impedit",
          transformations: {
            "esse": "ipsum",
            "excepturi": "aspernatur",
            "perferendis": "ad",
          },
        },
      ],
      datasetGroupArn: "natus",
    },
    encryptionConfig: {
      kmsKeyArn: "sed",
      roleArn: "iste",
    },
    explainPredictor: false,
    forecastDimensions: [
      "natus",
    ],
    forecastFrequency: "laboriosam",
    forecastHorizon: 943749,
    forecastTypes: [
      "fuga",
      "in",
      "corporis",
      "iste",
    ],
    monitorConfig: {
      monitorName: "iure",
    },
    optimizationMetric: OptimizationMetricEnum.Mape,
    predictorName: "quidem",
    referencePredictorArn: "architecto",
    tags: [
      {
        key: "reiciendis",
        value: "est",
      },
    ],
    timeAlignmentBoundary: {
      dayOfMonth: 653140,
      dayOfWeek: DayOfWeekEnum.Friday,
      hour: 170909,
      month: MonthEnum.March,
    },
  },
  xAmzAlgorithm: "corporis",
  xAmzContentSha256: "explicabo",
  xAmzCredential: "nobis",
  xAmzDate: "enim",
  xAmzSecurityToken: "omnis",
  xAmzSignature: "nemo",
  xAmzSignedHeaders: "minima",
  xAmzTarget: CreateAutoPredictorXAmzTargetEnum.AmazonForecastCreateAutoPredictor,
};

sdk.createAutoPredictor(req).then((res: CreateAutoPredictorResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->