<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateGatewayRouteRequest, CreateGatewayRouteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateGatewayRouteRequest = {
  pathParams: {
    meshName: "sit",
    virtualGatewayName: "voluptas",
  },
  queryParams: {
    meshOwner: "culpa",
  },
  headers: {
    xAmzAlgorithm: "expedita",
    xAmzContentSha256: "consequuntur",
    xAmzCredential: "dolor",
    xAmzDate: "expedita",
    xAmzSecurityToken: "voluptas",
    xAmzSignature: "fugit",
    xAmzSignedHeaders: "et",
  },
  request: {
    clientToken: "nihil",
    gatewayRouteName: "rerum",
    spec: {
      grpcRoute: {
        action: {
          rewrite: {
            hostname: {
              defaultTargetHostname: "DISABLED",
            },
          },
          target: {
            virtualService: {
              virtualServiceName: "debitis",
            },
          },
        },
        match: {
          hostname: {
            exact: "voluptatum",
            suffix: "et",
          },
          metadata: [
            {
              invert: true,
              match: {
                exact: "et",
                prefix: "voluptate",
                range: {
                  end: 3287288577352441706,
                  start: 3930927879439176946,
                },
                regex: "totam",
                suffix: "dolores",
              },
              name: "illum",
            },
            {
              invert: true,
              match: {
                exact: "vel",
                prefix: "odio",
                range: {
                  end: 6303220950515014660,
                  start: 4035568504096476779,
                },
                regex: "aspernatur",
                suffix: "accusantium",
              },
              name: "totam",
            },
            {
              invert: false,
              match: {
                exact: "quis",
                prefix: "est",
                range: {
                  end: 5974317550424871033,
                  start: 3317123977833389635,
                },
                regex: "non",
                suffix: "voluptas",
              },
              name: "omnis",
            },
          ],
          serviceName: "aut",
        },
      },
      http2Route: {
        action: {
          rewrite: {
            hostname: {
              defaultTargetHostname: "ENABLED",
            },
            path: {
              exact: "sed",
            },
            prefix: {
              defaultPrefix: "DISABLED",
              value: "autem",
            },
          },
          target: {
            virtualService: {
              virtualServiceName: "consectetur",
            },
          },
        },
        match: {
          headers: [
            {
              invert: false,
              match: {
                exact: "qui",
                prefix: "recusandae",
                range: {
                  end: 7561811714888168464,
                  start: 3959279844101328186,
                },
                regex: "eveniet",
                suffix: "modi",
              },
              name: "sint",
            },
          ],
          hostname: {
            exact: "inventore",
            suffix: "ut",
          },
          method: "CONNECT",
          path: {
            exact: "aut",
            regex: "reprehenderit",
          },
          prefix: "tempore",
          queryParameters: [
            {
              match: {
                exact: "incidunt",
              },
              name: "dolor",
            },
          ],
        },
      },
      httpRoute: {
        action: {
          rewrite: {
            hostname: {
              defaultTargetHostname: "DISABLED",
            },
            path: {
              exact: "veritatis",
            },
            prefix: {
              defaultPrefix: "ENABLED",
              value: "et",
            },
          },
          target: {
            virtualService: {
              virtualServiceName: "omnis",
            },
          },
        },
        match: {
          headers: [
            {
              invert: true,
              match: {
                exact: "dolores",
                prefix: "placeat",
                range: {
                  end: 2118716725206170867,
                  start: 2587000937929698613,
                },
                regex: "mollitia",
                suffix: "voluptas",
              },
              name: "quam",
            },
          ],
          hostname: {
            exact: "reprehenderit",
            suffix: "qui",
          },
          method: "OPTIONS",
          path: {
            exact: "unde",
            regex: "in",
          },
          prefix: "autem",
          queryParameters: [
            {
              match: {
                exact: "ut",
              },
              name: "itaque",
            },
          ],
        },
      },
      priority: 2006924026344156168,
    },
    tags: [
      {
        key: "ullam",
        value: "et",
      },
    ],
  },
};

sdk.createGatewayRoute(req).then((res: CreateGatewayRouteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->