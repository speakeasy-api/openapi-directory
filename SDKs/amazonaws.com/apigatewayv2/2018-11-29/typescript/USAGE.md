<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateApiRequest, CreateApiResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateApiRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
  },
  request: {
    apiKeySelectionExpression: "voluptas",
    corsConfiguration: {
      allowCredentials: {
        "et": "nihil",
      },
      allowHeaders: {
        "dicta": "debitis",
        "voluptatum": "et",
        "ut": "dolorem",
      },
      allowMethods: {
        "voluptate": "iste",
        "vitae": "totam",
      },
      allowOrigins: {
        "illum": "debitis",
      },
      exposeHeaders: {
        "odio": "dolore",
        "id": "aspernatur",
      },
      maxAge: {
        "totam": "commodi",
        "quis": "est",
        "aut": "odit",
      },
    },
    credentialsArn: "non",
    description: "voluptas",
    disableExecuteApiEndpoint: true,
    disableSchemaValidation: false,
    name: "illo",
    protocolType: "WEBSOCKET",
    routeKey: "officiis",
    routeSelectionExpression: "autem",
    tags: {
      "nobis": "odio",
    },
    target: "qui",
    version: "recusandae",
  },
};

sdk.createApi(req).then((res: CreateApiResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->