<!-- Start SDK Example Usage -->
```typescript
import {
  AddCustomAttributesRequest,
  AddCustomAttributesResponse,
  AddCustomAttributesXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AttributeDataTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddCustomAttributesRequest = {
  addCustomAttributesRequest: {
    customAttributes: [
      {
        attributeDataType: AttributeDataTypeEnum.DateTime,
        developerOnlyAttribute: false,
        mutable: false,
        name: "distinctio",
        numberAttributeConstraints: {
          maxValue: "quibusdam",
          minValue: "unde",
        },
        required: false,
        stringAttributeConstraints: {
          maxLength: "nulla",
          minLength: "corrupti",
        },
      },
      {
        attributeDataType: AttributeDataTypeEnum.Boolean,
        developerOnlyAttribute: false,
        mutable: false,
        name: "vel",
        numberAttributeConstraints: {
          maxValue: "error",
          minValue: "deserunt",
        },
        required: false,
        stringAttributeConstraints: {
          maxLength: "suscipit",
          minLength: "iure",
        },
      },
      {
        attributeDataType: AttributeDataTypeEnum.Number,
        developerOnlyAttribute: false,
        mutable: false,
        name: "debitis",
        numberAttributeConstraints: {
          maxValue: "ipsa",
          minValue: "delectus",
        },
        required: false,
        stringAttributeConstraints: {
          maxLength: "tempora",
          minLength: "suscipit",
        },
      },
    ],
    userPoolId: "molestiae",
  },
  xAmzAlgorithm: "minus",
  xAmzContentSha256: "placeat",
  xAmzCredential: "voluptatum",
  xAmzDate: "iusto",
  xAmzSecurityToken: "excepturi",
  xAmzSignature: "nisi",
  xAmzSignedHeaders: "recusandae",
  xAmzTarget: AddCustomAttributesXAmzTargetEnum.AWSCognitoIdentityProviderServiceAddCustomAttributes,
};

sdk.addCustomAttributes(req).then((res: AddCustomAttributesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->