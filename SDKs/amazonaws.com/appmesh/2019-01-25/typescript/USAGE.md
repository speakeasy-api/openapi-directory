<!-- Start SDK Example Usage -->
```typescript
import {
  CreateGatewayRouteRequest,
  CreateGatewayRouteResponse
} from "openapi/dist/sdk/models/operations";
import {
  HttpMethodEnum,
  DefaultGatewayRouteRewriteEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateGatewayRouteRequest = {
  requestBody: {
    clientToken: "corrupti",
    gatewayRouteName: "provident",
    spec: {
      grpcRoute: {
        action: {
          rewrite: {
            hostname: {
              defaultTargetHostname: DefaultGatewayRouteRewriteEnum.Disabled,
            },
          },
          target: {
            port: 844266,
            virtualService: {
              virtualServiceName: "unde",
            },
          },
        },
        match: {
          hostname: {
            exact: "nulla",
            suffix: "corrupti",
          },
          metadata: [
            {
              invert: false,
              match: {
                exact: "vel",
                prefix: "error",
                range: {
                  end: 645894,
                  start: 384382,
                },
                regex: "iure",
                suffix: "magnam",
              },
              name: "debitis",
            },
            {
              invert: false,
              match: {
                exact: "ipsa",
                prefix: "delectus",
                range: {
                  end: 272656,
                  start: 383441,
                },
                regex: "molestiae",
                suffix: "minus",
              },
              name: "placeat",
            },
            {
              invert: false,
              match: {
                exact: "voluptatum",
                prefix: "iusto",
                range: {
                  end: 568045,
                  start: 392785,
                },
                regex: "recusandae",
                suffix: "temporibus",
              },
              name: "ab",
            },
            {
              invert: false,
              match: {
                exact: "quis",
                prefix: "veritatis",
                range: {
                  end: 648172,
                  start: 20218,
                },
                regex: "ipsam",
                suffix: "repellendus",
              },
              name: "sapiente",
            },
          ],
          port: 778157,
          serviceName: "odit",
        },
      },
      http2Route: {
        action: {
          rewrite: {
            hostname: {
              defaultTargetHostname: DefaultGatewayRouteRewriteEnum.Disabled,
            },
            path: {
              exact: "at",
            },
            prefix: {
              defaultPrefix: DefaultGatewayRouteRewriteEnum.Disabled,
              value: "molestiae",
            },
          },
          target: {
            port: 799159,
            virtualService: {
              virtualServiceName: "quod",
            },
          },
        },
        match: {
          headers: [
            {
              invert: false,
              match: {
                exact: "totam",
                prefix: "porro",
                range: {
                  end: 678880,
                  start: 118274,
                },
                regex: "nam",
                suffix: "officia",
              },
              name: "occaecati",
            },
            {
              invert: false,
              match: {
                exact: "fugit",
                prefix: "deleniti",
                range: {
                  end: 944669,
                  start: 758616,
                },
                regex: "totam",
                suffix: "beatae",
              },
              name: "commodi",
            },
          ],
          hostname: {
            exact: "molestiae",
            suffix: "modi",
          },
          method: HttpMethodEnum.Head,
          path: {
            exact: "impedit",
            regex: "cum",
          },
          port: 456150,
          prefix: "ipsum",
          queryParameters: [
            {
              match: {
                exact: "aspernatur",
              },
              name: "perferendis",
            },
            {
              match: {
                exact: "ad",
              },
              name: "natus",
            },
            {
              match: {
                exact: "sed",
              },
              name: "iste",
            },
          ],
        },
      },
      httpRoute: {
        action: {
          rewrite: {
            hostname: {
              defaultTargetHostname: DefaultGatewayRouteRewriteEnum.Enabled,
            },
            path: {
              exact: "natus",
            },
            prefix: {
              defaultPrefix: DefaultGatewayRouteRewriteEnum.Enabled,
              value: "hic",
            },
          },
          target: {
            port: 902599,
            virtualService: {
              virtualServiceName: "fuga",
            },
          },
        },
        match: {
          headers: [
            {
              invert: false,
              match: {
                exact: "corporis",
                prefix: "iste",
                range: {
                  end: 437032,
                  start: 902349,
                },
                regex: "quidem",
                suffix: "architecto",
              },
              name: "ipsa",
            },
            {
              invert: false,
              match: {
                exact: "reiciendis",
                prefix: "est",
                range: {
                  end: 653140,
                  start: 670638,
                },
                regex: "dolores",
                suffix: "dolorem",
              },
              name: "corporis",
            },
          ],
          hostname: {
            exact: "explicabo",
            suffix: "nobis",
          },
          method: HttpMethodEnum.Post,
          path: {
            exact: "omnis",
            regex: "nemo",
          },
          port: 325047,
          prefix: "excepturi",
          queryParameters: [
            {
              match: {
                exact: "iure",
              },
              name: "culpa",
            },
          ],
        },
      },
      priority: 988374,
    },
    tags: [
      {
        key: "architecto",
        value: "mollitia",
      },
      {
        key: "dolorem",
        value: "culpa",
      },
      {
        key: "consequuntur",
        value: "repellat",
      },
      {
        key: "mollitia",
        value: "occaecati",
      },
    ],
  },
  xAmzAlgorithm: "numquam",
  xAmzContentSha256: "commodi",
  xAmzCredential: "quam",
  xAmzDate: "molestiae",
  xAmzSecurityToken: "velit",
  xAmzSignature: "error",
  xAmzSignedHeaders: "quia",
  meshName: "quis",
  meshOwner: "vitae",
  virtualGatewayName: "laborum",
};

sdk.createGatewayRoute(req).then((res: CreateGatewayRouteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->