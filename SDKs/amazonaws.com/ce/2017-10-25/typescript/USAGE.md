<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAnomalyMonitorRequest,
  CreateAnomalyMonitorResponse,
  CreateAnomalyMonitorXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  MonitorTypeEnum,
  MatchOptionEnum,
  DimensionEnum,
  MonitorDimensionEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateAnomalyMonitorRequest = {
  createAnomalyMonitorRequest: {
    anomalyMonitor: {
      creationDate: "corrupti",
      dimensionalValueCount: 592845,
      lastEvaluatedDate: "distinctio",
      lastUpdatedDate: "quibusdam",
      monitorArn: "unde",
      monitorDimension: MonitorDimensionEnum.Service,
      monitorName: "nulla",
      monitorSpecification: {
        and: [
          {},
          {},
          {},
        ],
        costCategories: {
          key: "illum",
          matchOptions: [
            MatchOptionEnum.Contains,
            MatchOptionEnum.CaseSensitive,
          ],
          values: [
            "iure",
            "magnam",
          ],
        },
        dimensions: {
          key: DimensionEnum.AgreementEndDateTimeBefore,
          matchOptions: [
            MatchOptionEnum.GreaterThanOrEqual,
          ],
          values: [
            "suscipit",
            "molestiae",
          ],
        },
        not: {},
        or: [
          {},
          {},
          {},
          {},
        ],
        tags: {
          key: "placeat",
          matchOptions: [
            MatchOptionEnum.EndsWith,
            MatchOptionEnum.Contains,
            MatchOptionEnum.EndsWith,
          ],
          values: [
            "temporibus",
            "ab",
            "quis",
            "veritatis",
          ],
        },
      },
      monitorType: MonitorTypeEnum.Custom,
    },
    resourceTags: [
      {
        key: "ipsam",
        value: "repellendus",
      },
    ],
  },
  xAmzAlgorithm: "sapiente",
  xAmzContentSha256: "quo",
  xAmzCredential: "odit",
  xAmzDate: "at",
  xAmzSecurityToken: "at",
  xAmzSignature: "maiores",
  xAmzSignedHeaders: "molestiae",
  xAmzTarget: CreateAnomalyMonitorXAmzTargetEnum.AWSInsightsIndexServiceCreateAnomalyMonitor,
};

sdk.createAnomalyMonitor(req).then((res: CreateAnomalyMonitorResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->