# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/appflow/2020-08-23/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/appflow/2020-08-23/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateConnectorProfileRequest,
  CreateConnectorProfileResponse,
  CreateConnectorProfileRequestBodyConnectionModeEnum,
  CreateConnectorProfileRequestBodyConnectorTypeEnum,
} from "openapi/dist/sdk/models/operations";
import {
  OAuth2GrantTypeEnum,
  AuthenticationTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateConnectorProfileRequest = {
  requestBody: {
    connectionMode: CreateConnectorProfileRequestBodyConnectionModeEnum.Private,
    connectorLabel: "provident",
    connectorProfileConfig: {
      connectorProfileCredentials: {
        amplitude: {
          apiKey: "distinctio",
          secretKey: "quibusdam",
        },
        customConnector: {
          apiKey: {
            apiKey: "unde",
            apiSecretKey: "nulla",
          },
          authenticationType: AuthenticationTypeEnum.Basic,
          basic: {
            password: "illum",
            username: "Henry.Mueller",
          },
          custom: {
            credentialsMap: {
              "magnam": "debitis",
              "ipsa": "delectus",
            },
            customAuthenticationType: "tempora",
          },
          oauth2: {
            accessToken: "suscipit",
            clientId: "molestiae",
            clientSecret: "minus",
            oAuthRequest: {
              authCode: "placeat",
              redirectUri: "voluptatum",
            },
            refreshToken: "iusto",
          },
        },
        datadog: {
          apiKey: "excepturi",
          applicationKey: "nisi",
        },
        dynatrace: {
          apiToken: "recusandae",
        },
        googleAnalytics: {
          accessToken: "temporibus",
          clientId: "ab",
          clientSecret: "quis",
          oAuthRequest: {
            authCode: "veritatis",
            redirectUri: "deserunt",
          },
          refreshToken: "perferendis",
        },
        honeycode: {
          accessToken: "ipsam",
          oAuthRequest: {
            authCode: "repellendus",
            redirectUri: "sapiente",
          },
          refreshToken: "quo",
        },
        inforNexus: {
          accessKeyId: "odit",
          datakey: "at",
          secretAccessKey: "at",
          userId: "maiores",
        },
        marketo: {
          accessToken: "molestiae",
          clientId: "quod",
          clientSecret: "quod",
          oAuthRequest: {
            authCode: "esse",
            redirectUri: "totam",
          },
        },
        pardot: {
          accessToken: "porro",
          clientCredentialsArn: "dolorum",
          oAuthRequest: {
            authCode: "dicta",
            redirectUri: "nam",
          },
          refreshToken: "officia",
        },
        redshift: {
          password: "occaecati",
          username: "Buck_Lind52",
        },
        sapoData: {
          basicAuthCredentials: {
            password: "beatae",
            username: "Haskell18",
          },
          oAuthCredentials: {
            accessToken: "impedit",
            clientId: "cum",
            clientSecret: "esse",
            oAuthRequest: {
              authCode: "ipsum",
              redirectUri: "excepturi",
            },
            refreshToken: "aspernatur",
          },
        },
        salesforce: {
          accessToken: "perferendis",
          clientCredentialsArn: "ad",
          oAuthRequest: {
            authCode: "natus",
            redirectUri: "sed",
          },
          refreshToken: "iste",
        },
        serviceNow: {
          password: "dolor",
          username: "Lexie_Howe68",
        },
        singular: {
          apiKey: "in",
        },
        slack: {
          accessToken: "corporis",
          clientId: "iste",
          clientSecret: "iure",
          oAuthRequest: {
            authCode: "saepe",
            redirectUri: "quidem",
          },
        },
        snowflake: {
          password: "architecto",
          username: "Andy_Wisozk67",
        },
        trendmicro: {
          apiSecretKey: "dolores",
        },
        veeva: {
          password: "dolorem",
          username: "Florian.Champlin60",
        },
        zendesk: {
          accessToken: "nemo",
          clientId: "minima",
          clientSecret: "excepturi",
          oAuthRequest: {
            authCode: "accusantium",
            redirectUri: "iure",
          },
        },
      },
      connectorProfileProperties: {
        amplitude: {
          "doloribus": "sapiente",
          "architecto": "mollitia",
          "dolorem": "culpa",
        },
        customConnector: {
          oAuth2Properties: {
            oAuth2GrantType: OAuth2GrantTypeEnum.ClientCredentials,
            tokenUrl: "repellat",
            tokenUrlCustomProperties: {
              "occaecati": "numquam",
              "commodi": "quam",
              "molestiae": "velit",
            },
          },
          profileProperties: {
            "quia": "quis",
            "vitae": "laborum",
            "animi": "enim",
          },
        },
        datadog: {
          instanceUrl: "odit",
        },
        dynatrace: {
          instanceUrl: "quo",
        },
        googleAnalytics: {
          "tenetur": "ipsam",
        },
        honeycode: {
          "possimus": "aut",
          "quasi": "error",
          "temporibus": "laborum",
        },
        inforNexus: {
          instanceUrl: "quasi",
        },
        marketo: {
          instanceUrl: "reiciendis",
        },
        pardot: {
          businessUnitId: "voluptatibus",
          instanceUrl: "vero",
          isSandboxEnvironment: false,
        },
        redshift: {
          bucketName: "nihil",
          bucketPrefix: "praesentium",
          clusterIdentifier: "voluptatibus",
          dataApiRoleArn: "ipsa",
          databaseName: "omnis",
          databaseUrl: "voluptate",
          isRedshiftServerless: false,
          roleArn: "cum",
          workgroupName: "perferendis",
        },
        sapoData: {
          applicationHostUrl: "doloremque",
          applicationServicePath: "reprehenderit",
          clientNumber: "ut",
          logonLanguage: "maiores",
          oAuthProperties: {
            authCodeUrl: "dicta",
            oAuthScopes: [
              "dolore",
              "iusto",
            ],
            tokenUrl: "dicta",
          },
          portNumber: 688661,
          privateLinkServiceName: "enim",
        },
        salesforce: {
          instanceUrl: "accusamus",
          isSandboxEnvironment: false,
          usePrivateLinkForMetadataAndAuthorization: false,
        },
        serviceNow: {
          instanceUrl: "commodi",
        },
        singular: {
          "quae": "ipsum",
          "quidem": "molestias",
          "excepturi": "pariatur",
          "modi": "praesentium",
        },
        slack: {
          instanceUrl: "rem",
        },
        snowflake: {
          accountName: "voluptates",
          bucketName: "quasi",
          bucketPrefix: "repudiandae",
          privateLinkServiceName: "sint",
          region: "veritatis",
          stage: "itaque",
          warehouse: "incidunt",
        },
        trendmicro: {
          "consequatur": "est",
          "quibusdam": "explicabo",
        },
        veeva: {
          instanceUrl: "deserunt",
        },
        zendesk: {
          instanceUrl: "distinctio",
        },
      },
    },
    connectorProfileName: "quibusdam",
    connectorType: CreateConnectorProfileRequestBodyConnectorTypeEnum.Googleanalytics,
    kmsArn: "modi",
  },
  xAmzAlgorithm: "qui",
  xAmzContentSha256: "aliquid",
  xAmzCredential: "cupiditate",
  xAmzDate: "quos",
  xAmzSecurityToken: "perferendis",
  xAmzSignature: "magni",
  xAmzSignedHeaders: "assumenda",
};

sdk.createConnectorProfile(req).then((res: CreateConnectorProfileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createConnectorProfile` -  Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector.
* `createFlow` -  Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once. 
* `deleteConnectorProfile` -  Enables you to delete an existing connector profile. 
* `deleteFlow` -  Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time. 
* `describeConnector` - Describes the given custom connector registered in your Amazon Web Services account. This API can be used for custom connectors that are registered in your account and also for Amazon authored connectors.
* `describeConnectorEntity` -  Provides details regarding the entity used with the connector, with a description of the data model for each field in that entity. 
* `describeConnectorProfiles` - <p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
* `describeConnectors` -  Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page. 
* `describeFlow` -  Provides a description of the specified flow. 
* `describeFlowExecutionRecords` -  Fetches the execution history of the flow. 
* `listConnectorEntities` -  Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity. 
* `listConnectors` - Returns the list of all registered custom connectors in your Amazon Web Services account. This API lists only custom connectors registered in this account, not the Amazon Web Services authored connectors. 
* `listFlows` -  Lists all of the flows associated with your account. 
* `listTagsForResource` -  Retrieves the tags that are associated with a specified flow. 
* `registerConnector` - Registers a new custom connector with your Amazon Web Services account. Before you can register the connector, you must deploy the associated AWS lambda function in your account.
* `startFlow` -  Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow. 
* `stopFlow` -  Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow. 
* `tagResource` -  Applies a tag to the specified flow. 
* `unregisterConnector` - Unregisters the custom connector registered in your account that matches the connector label provided in the request.
* `untagResource` -  Removes a tag from the specified flow. 
* `updateConnectorProfile` -  Updates a given connector profile associated with your account. 
* `updateConnectorRegistration` - <p>Updates a custom connector that you've previously registered. This operation updates the connector with one of the following:</p> <ul> <li> <p>The latest version of the AWS Lambda function that's assigned to the connector</p> </li> <li> <p>A new AWS Lambda function that you specify</p> </li> </ul>
* `updateFlow` -  Updates an existing flow. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

