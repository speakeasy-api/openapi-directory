# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/apigatewayv2/2018-11-29/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/apigatewayv2/2018-11-29/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateApiRequest,
  CreateApiResponse,
  CreateApiRequestBodyProtocolTypeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateApiRequest = {
  requestBody: {
    apiKeySelectionExpression: "corrupti",
    corsConfiguration: {
      allowCredentials: false,
      allowHeaders: [
        "distinctio",
        "quibusdam",
        "unde",
      ],
      allowMethods: [
        "corrupti",
        "illum",
        "vel",
        "error",
      ],
      allowOrigins: [
        "suscipit",
        "iure",
        "magnam",
      ],
      exposeHeaders: [
        "ipsa",
        "delectus",
        "tempora",
        "suscipit",
      ],
      maxAge: 477665,
    },
    credentialsArn: "minus",
    description: "placeat",
    disableExecuteApiEndpoint: false,
    disableSchemaValidation: false,
    name: "voluptatum",
    protocolType: CreateApiRequestBodyProtocolTypeEnum.Websocket,
    routeKey: "excepturi",
    routeSelectionExpression: "nisi",
    tags: {
      "temporibus": "ab",
      "quis": "veritatis",
      "deserunt": "perferendis",
      "ipsam": "repellendus",
    },
    target: "sapiente",
    version: "quo",
  },
  xAmzAlgorithm: "odit",
  xAmzContentSha256: "at",
  xAmzCredential: "at",
  xAmzDate: "maiores",
  xAmzSecurityToken: "molestiae",
  xAmzSignature: "quod",
  xAmzSignedHeaders: "quod",
};

sdk.createApi(req).then((res: CreateApiResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createApi` - Creates an Api resource.
* `createApiMapping` - Creates an API mapping.
* `createAuthorizer` - Creates an Authorizer for an API.
* `createDeployment` - Creates a Deployment for an API.
* `createDomainName` - Creates a domain name.
* `createIntegration` - Creates an Integration.
* `createIntegrationResponse` - Creates an IntegrationResponses.
* `createModel` - Creates a Model for an API.
* `createRoute` - Creates a Route for an API.
* `createRouteResponse` - Creates a RouteResponse for a Route.
* `createStage` - Creates a Stage for an API.
* `createVpcLink` - Creates a VPC link.
* `deleteAccessLogSettings` - Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.
* `deleteApi` - Deletes an Api resource.
* `deleteApiMapping` - Deletes an API mapping.
* `deleteAuthorizer` - Deletes an Authorizer.
* `deleteCorsConfiguration` - Deletes a CORS configuration.
* `deleteDeployment` - Deletes a Deployment.
* `deleteDomainName` - Deletes a domain name.
* `deleteIntegration` - Deletes an Integration.
* `deleteIntegrationResponse` - Deletes an IntegrationResponses.
* `deleteModel` - Deletes a Model.
* `deleteRoute` - Deletes a Route.
* `deleteRouteRequestParameter` - Deletes a route request parameter.
* `deleteRouteResponse` - Deletes a RouteResponse.
* `deleteRouteSettings` - Deletes the RouteSettings for a stage.
* `deleteStage` - Deletes a Stage.
* `deleteVpcLink` - Deletes a VPC link.
* `exportApi`
* `getApi` - Gets an Api resource.
* `getApiMapping` - Gets an API mapping.
* `getApiMappings` - Gets API mappings.
* `getApis` - Gets a collection of Api resources.
* `getAuthorizer` - Gets an Authorizer.
* `getAuthorizers` - Gets the Authorizers for an API.
* `getDeployment` - Gets a Deployment.
* `getDeployments` - Gets the Deployments for an API.
* `getDomainName` - Gets a domain name.
* `getDomainNames` - Gets the domain names for an AWS account.
* `getIntegration` - Gets an Integration.
* `getIntegrationResponse` - Gets an IntegrationResponses.
* `getIntegrationResponses` - Gets the IntegrationResponses for an Integration.
* `getIntegrations` - Gets the Integrations for an API.
* `getModel` - Gets a Model.
* `getModelTemplate` - Gets a model template.
* `getModels` - Gets the Models for an API.
* `getRoute` - Gets a Route.
* `getRouteResponse` - Gets a RouteResponse.
* `getRouteResponses` - Gets the RouteResponses for a Route.
* `getRoutes` - Gets the Routes for an API.
* `getStage` - Gets a Stage.
* `getStages` - Gets the Stages for an API.
* `getTags` - Gets a collection of Tag resources.
* `getVpcLink` - Gets a VPC link.
* `getVpcLinks` - Gets a collection of VPC links.
* `importApi` - Imports an API.
* `reimportApi` - Puts an Api resource.
* `resetAuthorizersCache` - Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.
* `tagResource` - Creates a new Tag resource to represent a tag.
* `untagResource` - Deletes a Tag.
* `updateApi` - Updates an Api resource.
* `updateApiMapping` - The API mapping.
* `updateAuthorizer` - Updates an Authorizer.
* `updateDeployment` - Updates a Deployment.
* `updateDomainName` - Updates a domain name.
* `updateIntegration` - Updates an Integration.
* `updateIntegrationResponse` - Updates an IntegrationResponses.
* `updateModel` - Updates a Model.
* `updateRoute` - Updates a Route.
* `updateRouteResponse` - Updates a RouteResponse.
* `updateStage` - Updates a Stage.
* `updateVpcLink` - Updates a VPC link.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

