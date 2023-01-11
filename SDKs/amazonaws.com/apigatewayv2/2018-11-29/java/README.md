# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateApiRequest req = new CreateApiRequest() {{
                headers = new CreateApiHeaders() {{
                    xAmzAlgorithm = "ex";
                    xAmzContentSha256 = "iure";
                    xAmzCredential = "et";
                    xAmzDate = "quos";
                    xAmzSecurityToken = "et";
                    xAmzSignature = "explicabo";
                    xAmzSignedHeaders = "necessitatibus";
                }};
                request = new CreateApiRequestBody() {{
                    apiKeySelectionExpression = "veniam";
                    corsConfiguration = new CreateApiRequestBodyCorsConfiguration() {{
                        allowCredentials = new java.util.HashMap<String, Object>() {{
                            put("in", "odit");
                        }};
                        allowHeaders = new java.util.HashMap<String, Object>() {{
                            put("corporis", "tenetur");
                            put("esse", "similique");
                            put("mollitia", "id");
                        }};
                        allowMethods = new java.util.HashMap<String, Object>() {{
                            put("quam", "maiores");
                            put("totam", "iusto");
                            put("aperiam", "repellendus");
                        }};
                        allowOrigins = new java.util.HashMap<String, Object>() {{
                            put("eum", "earum");
                            put("et", "officia");
                        }};
                        exposeHeaders = new java.util.HashMap<String, Object>() {{
                            put("dolor", "quia");
                        }};
                        maxAge = new java.util.HashMap<String, Object>() {{
                            put("ea", "et");
                            put("expedita", "recusandae");
                        }};
                    }};
                    credentialsArn = "qui";
                    description = "qui";
                    disableExecuteApiEndpoint = false;
                    disableSchemaValidation = true;
                    name = "cupiditate";
                    protocolType = "WEBSOCKET";
                    routeKey = "saepe";
                    routeSelectionExpression = "sed";
                    tags = new java.util.HashMap<String, String>() {{
                        put("vel", "fugiat");
                        put("nesciunt", "et");
                        put("qui", "quis");
                    }};
                    target = "eligendi";
                    version = "velit";
                }};
            }};

            CreateApiResponse res = sdk.createApi(req);

            if (res.createApiResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
