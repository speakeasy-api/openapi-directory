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