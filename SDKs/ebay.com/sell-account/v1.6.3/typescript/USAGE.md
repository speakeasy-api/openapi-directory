<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateFulfillmentPolicyRequest, CreateFulfillmentPolicyResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateFulfillmentPolicyRequest = {
  security: {
    apiAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  request: {
    categoryTypes: [
      {
        default: false,
        name: "culpa",
      },
    ],
    description: "expedita",
    freightShipping: true,
    globalShipping: false,
    handlingTime: {
      unit: "expedita",
      value: 6044372234677422456,
    },
    localPickup: true,
    marketplaceId: "et",
    name: "nihil",
    pickupDropOff: true,
    shipToLocations: {
      regionExcluded: [
        {
          regionName: "debitis",
          regionType: "voluptatum",
        },
        {
          regionName: "et",
          regionType: "ut",
        },
        {
          regionName: "dolorem",
          regionType: "et",
        },
      ],
      regionIncluded: [
        {
          regionName: "iste",
          regionType: "vitae",
        },
      ],
    },
    shippingOptions: [
      {
        costType: "dolores",
        insuranceFee: {
          currency: "illum",
          value: "debitis",
        },
        insuranceOffered: false,
        optionType: "odio",
        packageHandlingCost: {
          currency: "dolore",
          value: "id",
        },
        rateTableId: "aspernatur",
        shippingServices: [
          {
            additionalShippingCost: {
              currency: "totam",
              value: "commodi",
            },
            buyerResponsibleForPickup: true,
            buyerResponsibleForShipping: false,
            cashOnDeliveryFee: {
              currency: "aut",
              value: "odit",
            },
            freeShipping: true,
            shipToLocations: {
              regionExcluded: [
                {
                  regionName: "omnis",
                  regionType: "aut",
                },
              ],
              regionIncluded: [
                {
                  regionName: "sed",
                  regionType: "officiis",
                },
              ],
            },
            shippingCarrierCode: "autem",
            shippingCost: {
              currency: "consectetur",
              value: "nobis",
            },
            shippingServiceCode: "odio",
            sortOrder: 7699391924090763411,
            surcharge: {
              currency: "recusandae",
              value: "at",
            },
          },
          {
            additionalShippingCost: {
              currency: "ipsum",
              value: "eveniet",
            },
            buyerResponsibleForPickup: false,
            buyerResponsibleForShipping: true,
            cashOnDeliveryFee: {
              currency: "inventore",
              value: "ut",
            },
            freeShipping: false,
            shipToLocations: {
              regionExcluded: [
                {
                  regionName: "reprehenderit",
                  regionType: "tempore",
                },
                {
                  regionName: "maiores",
                  regionType: "incidunt",
                },
                {
                  regionName: "dolor",
                  regionType: "beatae",
                },
              ],
              regionIncluded: [
                {
                  regionName: "in",
                  regionType: "et",
                },
                {
                  regionName: "omnis",
                  regionType: "ipsum",
                },
              ],
            },
            shippingCarrierCode: "ex",
            shippingCost: {
              currency: "dolores",
              value: "placeat",
            },
            shippingServiceCode: "vel",
            sortOrder: 2587000937929698613,
            surcharge: {
              currency: "mollitia",
              value: "voluptas",
            },
          },
          {
            additionalShippingCost: {
              currency: "quam",
              value: "reprehenderit",
            },
            buyerResponsibleForPickup: true,
            buyerResponsibleForShipping: false,
            cashOnDeliveryFee: {
              currency: "unde",
              value: "in",
            },
            freeShipping: false,
            shipToLocations: {
              regionExcluded: [
                {
                  regionName: "ut",
                  regionType: "itaque",
                },
              ],
              regionIncluded: [
                {
                  regionName: "neque",
                  regionType: "ullam",
                },
              ],
            },
            shippingCarrierCode: "et",
            shippingCost: {
              currency: "accusantium",
              value: "esse",
            },
            shippingServiceCode: "architecto",
            sortOrder: 9021104375654741729,
            surcharge: {
              currency: "velit",
              value: "cumque",
            },
          },
        ],
      },
      {
        costType: "soluta",
        insuranceFee: {
          currency: "sunt",
          value: "voluptates",
        },
        insuranceOffered: false,
        optionType: "et",
        packageHandlingCost: {
          currency: "optio",
          value: "qui",
        },
        rateTableId: "earum",
        shippingServices: [
          {
            additionalShippingCost: {
              currency: "omnis",
              value: "ut",
            },
            buyerResponsibleForPickup: false,
            buyerResponsibleForShipping: true,
            cashOnDeliveryFee: {
              currency: "commodi",
              value: "error",
            },
            freeShipping: false,
            shipToLocations: {
              regionExcluded: [
                {
                  regionName: "nostrum",
                  regionType: "ut",
                },
              ],
              regionIncluded: [
                {
                  regionName: "sed",
                  regionType: "a",
                },
                {
                  regionName: "soluta",
                  regionType: "aut",
                },
                {
                  regionName: "quas",
                  regionType: "consequuntur",
                },
              ],
            },
            shippingCarrierCode: "laudantium",
            shippingCost: {
              currency: "autem",
              value: "ipsa",
            },
            shippingServiceCode: "expedita",
            sortOrder: 8204648627352676445,
            surcharge: {
              currency: "perferendis",
              value: "atque",
            },
          },
        ],
      },
      {
        costType: "ratione",
        insuranceFee: {
          currency: "quisquam",
          value: "explicabo",
        },
        insuranceOffered: true,
        optionType: "maxime",
        packageHandlingCost: {
          currency: "eum",
          value: "perferendis",
        },
        rateTableId: "et",
        shippingServices: [
          {
            additionalShippingCost: {
              currency: "reiciendis",
              value: "quis",
            },
            buyerResponsibleForPickup: true,
            buyerResponsibleForShipping: true,
            cashOnDeliveryFee: {
              currency: "necessitatibus",
              value: "est",
            },
            freeShipping: true,
            shipToLocations: {
              regionExcluded: [
                {
                  regionName: "labore",
                  regionType: "et",
                },
              ],
              regionIncluded: [
                {
                  regionName: "ad",
                  regionType: "expedita",
                },
                {
                  regionName: "vel",
                  regionType: "qui",
                },
              ],
            },
            shippingCarrierCode: "modi",
            shippingCost: {
              currency: "nihil",
              value: "tempora",
            },
            shippingServiceCode: "deserunt",
            sortOrder: 4745905187492708501,
            surcharge: {
              currency: "sunt",
              value: "sit",
            },
          },
        ],
      },
    ],
  },
};

sdk.fulfillmentPolicy.createFulfillmentPolicy(req).then((res: CreateFulfillmentPolicyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->