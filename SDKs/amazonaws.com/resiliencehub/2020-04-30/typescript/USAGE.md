<!-- Start SDK Example Usage -->
```typescript
import {
  AddDraftAppVersionResourceMappingsRequest,
  AddDraftAppVersionResourceMappingsResponse
} from "openapi/dist/sdk/models/operations";
import {
  PhysicalIdentifierTypeEnum,
  ResourceMappingTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddDraftAppVersionResourceMappingsRequest = {
  requestBody: {
    appArn: "corrupti",
    resourceMappings: [
      {
        appRegistryAppName: "distinctio",
        eksSourceName: "quibusdam",
        logicalStackName: "unde",
        mappingType: ResourceMappingTypeEnum.Eks,
        physicalResourceId: {
          awsAccountId: "corrupti",
          awsRegion: "illum",
          identifier: "vel",
          type: PhysicalIdentifierTypeEnum.Native,
        },
        resourceGroupName: "deserunt",
        resourceName: "suscipit",
        terraformSourceName: "iure",
      },
      {
        appRegistryAppName: "magnam",
        eksSourceName: "debitis",
        logicalStackName: "ipsa",
        mappingType: ResourceMappingTypeEnum.Eks,
        physicalResourceId: {
          awsAccountId: "tempora",
          awsRegion: "suscipit",
          identifier: "molestiae",
          type: PhysicalIdentifierTypeEnum.Native,
        },
        resourceGroupName: "placeat",
        resourceName: "voluptatum",
        terraformSourceName: "iusto",
      },
      {
        appRegistryAppName: "excepturi",
        eksSourceName: "nisi",
        logicalStackName: "recusandae",
        mappingType: ResourceMappingTypeEnum.Eks,
        physicalResourceId: {
          awsAccountId: "ab",
          awsRegion: "quis",
          identifier: "veritatis",
          type: PhysicalIdentifierTypeEnum.Native,
        },
        resourceGroupName: "perferendis",
        resourceName: "ipsam",
        terraformSourceName: "repellendus",
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
};

sdk.addDraftAppVersionResourceMappings(req).then((res: AddDraftAppVersionResourceMappingsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->