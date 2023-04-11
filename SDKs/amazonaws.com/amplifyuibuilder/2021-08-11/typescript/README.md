# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/amplifyuibuilder/2021-08-11/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/amplifyuibuilder/2021-08-11/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateComponentRequest,
  CreateComponentResponse
} from "openapi/dist/sdk/models/operations";
import {
  SortDirectionEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateComponentRequest = {
  requestBody: {
    componentToCreate: {
      bindingProperties: {
        "provident": {
          bindingProperties: {
            bucket: "distinctio",
            defaultValue: "quibusdam",
            field: "unde",
            key: "nulla",
            model: "corrupti",
            predicates: [
              {
                and: [
                  {},
                  {},
                ],
                field: "error",
                operand: "deserunt",
                operator: "suscipit",
                or: [
                  {},
                  {},
                ],
              },
              {
                and: [
                  {},
                  {},
                ],
                field: "debitis",
                operand: "ipsa",
                operator: "delectus",
                or: [
                  {},
                  {},
                ],
              },
              {
                and: [
                  {},
                  {},
                ],
                field: "molestiae",
                operand: "minus",
                operator: "placeat",
                or: [
                  {},
                  {},
                  {},
                ],
              },
              {
                and: [
                  {},
                  {},
                ],
                field: "excepturi",
                operand: "nisi",
                operator: "recusandae",
                or: [
                  {},
                  {},
                  {},
                  {},
                ],
              },
            ],
            slotName: "ab",
            userAttribute: "quis",
          },
          defaultValue: "veritatis",
          type: "deserunt",
        },
        "perferendis": {
          bindingProperties: {
            bucket: "ipsam",
            defaultValue: "repellendus",
            field: "sapiente",
            key: "quo",
            model: "odit",
            predicates: [
              {
                and: [
                  {},
                  {},
                  {},
                  {},
                ],
                field: "maiores",
                operand: "molestiae",
                operator: "quod",
                or: [
                  {},
                  {},
                  {},
                  {},
                ],
              },
              {
                and: [
                  {},
                  {},
                ],
                field: "totam",
                operand: "porro",
                operator: "dolorum",
                or: [
                  {},
                ],
              },
              {
                and: [
                  {},
                  {},
                  {},
                ],
                field: "officia",
                operand: "occaecati",
                operator: "fugit",
                or: [
                  {},
                  {},
                  {},
                ],
              },
              {
                and: [
                  {},
                  {},
                  {},
                  {},
                ],
                field: "optio",
                operand: "totam",
                operator: "beatae",
                or: [
                  {},
                  {},
                ],
              },
            ],
            slotName: "molestiae",
            userAttribute: "modi",
          },
          defaultValue: "qui",
          type: "impedit",
        },
        "cum": {
          bindingProperties: {
            bucket: "esse",
            defaultValue: "ipsum",
            field: "excepturi",
            key: "aspernatur",
            model: "perferendis",
            predicates: [
              {
                and: [
                  {},
                  {},
                  {},
                ],
                field: "sed",
                operand: "iste",
                operator: "dolor",
                or: [
                  {},
                  {},
                  {},
                ],
              },
              {
                and: [
                  {},
                  {},
                ],
                field: "hic",
                operand: "saepe",
                operator: "fuga",
                or: [
                  {},
                  {},
                ],
              },
            ],
            slotName: "corporis",
            userAttribute: "iste",
          },
          defaultValue: "iure",
          type: "saepe",
        },
      },
      children: [
        {
          children: [
            {},
          ],
          componentType: "ipsa",
          events: {
            "est": {
              action: "mollitia",
              bindingEvent: "laborum",
              parameters: {
                anchor: {
                  bindingProperties: {
                    field: "dolores",
                    property: "dolorem",
                  },
                  bindings: {
                    "explicabo": {
                      element: "nobis",
                      property: "enim",
                    },
                    "omnis": {
                      element: "nemo",
                      property: "minima",
                    },
                  },
                  collectionBindingProperties: {
                    field: "excepturi",
                    property: "accusantium",
                  },
                  componentName: "iure",
                  concat: [
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "doloribus",
                    operand: "sapiente",
                    operandType: "architecto",
                    operator: "mollitia",
                    property: "dolorem",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "culpa",
                  event: "consequuntur",
                  importedValue: "repellat",
                  model: "mollitia",
                  property: "occaecati",
                  type: "numquam",
                  userAttribute: "commodi",
                  value: "quam",
                },
                fields: {
                  "velit": {
                    bindingProperties: {
                      field: "error",
                      property: "quia",
                    },
                    bindings: {
                      "vitae": {
                        element: "laborum",
                        property: "animi",
                      },
                      "enim": {
                        element: "odit",
                        property: "quo",
                      },
                    },
                    collectionBindingProperties: {
                      field: "sequi",
                      property: "tenetur",
                    },
                    componentName: "ipsam",
                    concat: [
                      {},
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "possimus",
                      operand: "aut",
                      operandType: "quasi",
                      operator: "error",
                      property: "temporibus",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "laborum",
                    event: "quasi",
                    importedValue: "reiciendis",
                    model: "voluptatibus",
                    property: "vero",
                    type: "nihil",
                    userAttribute: "praesentium",
                    value: "voluptatibus",
                  },
                  "ipsa": {
                    bindingProperties: {
                      field: "omnis",
                      property: "voluptate",
                    },
                    bindings: {
                      "perferendis": {
                        element: "doloremque",
                        property: "reprehenderit",
                      },
                      "ut": {
                        element: "maiores",
                        property: "dicta",
                      },
                      "corporis": {
                        element: "dolore",
                        property: "iusto",
                      },
                    },
                    collectionBindingProperties: {
                      field: "dicta",
                      property: "harum",
                    },
                    componentName: "enim",
                    concat: [
                      {},
                      {},
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "commodi",
                      operand: "repudiandae",
                      operandType: "quae",
                      operator: "ipsum",
                      property: "quidem",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "molestias",
                    event: "excepturi",
                    importedValue: "pariatur",
                    model: "modi",
                    property: "praesentium",
                    type: "rem",
                    userAttribute: "voluptates",
                    value: "quasi",
                  },
                },
                global: {
                  bindingProperties: {
                    field: "repudiandae",
                    property: "sint",
                  },
                  bindings: {
                    "itaque": {
                      element: "incidunt",
                      property: "enim",
                    },
                  },
                  collectionBindingProperties: {
                    field: "consequatur",
                    property: "est",
                  },
                  componentName: "quibusdam",
                  concat: [
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "deserunt",
                    operand: "distinctio",
                    operandType: "quibusdam",
                    operator: "labore",
                    property: "modi",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "qui",
                  event: "aliquid",
                  importedValue: "cupiditate",
                  model: "quos",
                  property: "perferendis",
                  type: "magni",
                  userAttribute: "assumenda",
                  value: "ipsam",
                },
                id: {
                  bindingProperties: {
                    field: "alias",
                    property: "fugit",
                  },
                  bindings: {
                    "excepturi": {
                      element: "tempora",
                      property: "facilis",
                    },
                    "tempore": {
                      element: "labore",
                      property: "delectus",
                    },
                    "eum": {
                      element: "non",
                      property: "eligendi",
                    },
                  },
                  collectionBindingProperties: {
                    field: "sint",
                    property: "aliquid",
                  },
                  componentName: "provident",
                  concat: [
                    {},
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "sint",
                    operand: "officia",
                    operandType: "dolor",
                    operator: "debitis",
                    property: "a",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "dolorum",
                  event: "in",
                  importedValue: "in",
                  model: "illum",
                  property: "maiores",
                  type: "rerum",
                  userAttribute: "dicta",
                  value: "magnam",
                },
                model: "cumque",
                state: {
                  componentName: "facere",
                  property: "ea",
                  set: {
                    bindingProperties: {
                      field: "aliquid",
                      property: "laborum",
                    },
                    bindings: {
                      "non": {
                        element: "occaecati",
                        property: "enim",
                      },
                      "accusamus": {
                        element: "delectus",
                        property: "quidem",
                      },
                      "provident": {
                        element: "nam",
                        property: "id",
                      },
                      "blanditiis": {
                        element: "deleniti",
                        property: "sapiente",
                      },
                    },
                    collectionBindingProperties: {
                      field: "amet",
                      property: "deserunt",
                    },
                    componentName: "nisi",
                    concat: [
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "natus",
                      operand: "omnis",
                      operandType: "molestiae",
                      operator: "perferendis",
                      property: "nihil",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "magnam",
                    event: "distinctio",
                    importedValue: "id",
                    model: "labore",
                    property: "labore",
                    type: "suscipit",
                    userAttribute: "natus",
                    value: "nobis",
                  },
                },
                target: {
                  bindingProperties: {
                    field: "eum",
                    property: "vero",
                  },
                  bindings: {
                    "architecto": {
                      element: "magnam",
                      property: "et",
                    },
                  },
                  collectionBindingProperties: {
                    field: "excepturi",
                    property: "ullam",
                  },
                  componentName: "provident",
                  concat: [
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "sint",
                    operand: "accusantium",
                    operandType: "mollitia",
                    operator: "reiciendis",
                    property: "mollitia",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "ad",
                  event: "eum",
                  importedValue: "dolor",
                  model: "necessitatibus",
                  property: "odit",
                  type: "nemo",
                  userAttribute: "quasi",
                  value: "iure",
                },
                type: {
                  bindingProperties: {
                    field: "doloribus",
                    property: "debitis",
                  },
                  bindings: {
                    "maxime": {
                      element: "deleniti",
                      property: "facilis",
                    },
                    "in": {
                      element: "architecto",
                      property: "architecto",
                    },
                  },
                  collectionBindingProperties: {
                    field: "repudiandae",
                    property: "ullam",
                  },
                  componentName: "expedita",
                  concat: [
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "repellat",
                    operand: "quibusdam",
                    operandType: "sed",
                    operator: "saepe",
                    property: "pariatur",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "accusantium",
                  event: "consequuntur",
                  importedValue: "praesentium",
                  model: "natus",
                  property: "magni",
                  type: "sunt",
                  userAttribute: "quo",
                  value: "illum",
                },
                url: {
                  bindingProperties: {
                    field: "pariatur",
                    property: "maxime",
                  },
                  bindings: {
                    "excepturi": {
                      element: "odit",
                      property: "ea",
                    },
                    "accusantium": {
                      element: "ab",
                      property: "maiores",
                    },
                  },
                  collectionBindingProperties: {
                    field: "quidem",
                    property: "ipsam",
                  },
                  componentName: "voluptate",
                  concat: [
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "nam",
                    operand: "eaque",
                    operandType: "pariatur",
                    operator: "nemo",
                    property: "voluptatibus",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "perferendis",
                  event: "fugiat",
                  importedValue: "amet",
                  model: "aut",
                  property: "cumque",
                  type: "corporis",
                  userAttribute: "hic",
                  value: "libero",
                },
              },
            },
            "nobis": {
              action: "dolores",
              bindingEvent: "quis",
              parameters: {
                anchor: {
                  bindingProperties: {
                    field: "totam",
                    property: "dignissimos",
                  },
                  bindings: {
                    "quis": {
                      element: "nesciunt",
                      property: "eos",
                    },
                  },
                  collectionBindingProperties: {
                    field: "perferendis",
                    property: "dolores",
                  },
                  componentName: "minus",
                  concat: [
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "dolor",
                    operand: "vero",
                    operandType: "nostrum",
                    operator: "hic",
                    property: "recusandae",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "omnis",
                  event: "facilis",
                  importedValue: "perspiciatis",
                  model: "voluptatem",
                  property: "porro",
                  type: "consequuntur",
                  userAttribute: "blanditiis",
                  value: "error",
                },
                fields: {
                  "occaecati": {
                    bindingProperties: {
                      field: "rerum",
                      property: "adipisci",
                    },
                    bindings: {
                      "earum": {
                        element: "modi",
                        property: "iste",
                      },
                      "dolorum": {
                        element: "deleniti",
                        property: "pariatur",
                      },
                      "provident": {
                        element: "nobis",
                        property: "libero",
                      },
                      "delectus": {
                        element: "quaerat",
                        property: "quos",
                      },
                    },
                    collectionBindingProperties: {
                      field: "aliquid",
                      property: "dolorem",
                    },
                    componentName: "dolorem",
                    concat: [
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "qui",
                      operand: "ipsum",
                      operandType: "hic",
                      operator: "excepturi",
                      property: "cum",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "voluptate",
                    event: "dignissimos",
                    importedValue: "reiciendis",
                    model: "amet",
                    property: "dolorum",
                    type: "numquam",
                    userAttribute: "veritatis",
                    value: "ipsa",
                  },
                },
                global: {
                  bindingProperties: {
                    field: "ipsa",
                    property: "iure",
                  },
                  bindings: {
                    "quaerat": {
                      element: "accusamus",
                      property: "quidem",
                    },
                    "voluptatibus": {
                      element: "voluptas",
                      property: "natus",
                    },
                  },
                  collectionBindingProperties: {
                    field: "eos",
                    property: "atque",
                  },
                  componentName: "sit",
                  concat: [
                    {},
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "ab",
                    operand: "soluta",
                    operandType: "dolorum",
                    operator: "iusto",
                    property: "voluptate",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "dolorum",
                  event: "deleniti",
                  importedValue: "omnis",
                  model: "necessitatibus",
                  property: "distinctio",
                  type: "asperiores",
                  userAttribute: "nihil",
                  value: "ipsum",
                },
                id: {
                  bindingProperties: {
                    field: "voluptate",
                    property: "id",
                  },
                  bindings: {
                    "eius": {
                      element: "aspernatur",
                      property: "perferendis",
                    },
                    "amet": {
                      element: "optio",
                      property: "accusamus",
                    },
                    "ad": {
                      element: "saepe",
                      property: "suscipit",
                    },
                    "deserunt": {
                      element: "provident",
                      property: "minima",
                    },
                  },
                  collectionBindingProperties: {
                    field: "repellendus",
                    property: "totam",
                  },
                  componentName: "similique",
                  concat: [
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "at",
                    operand: "quaerat",
                    operandType: "tempora",
                    operator: "vel",
                    property: "quod",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "officiis",
                  event: "qui",
                  importedValue: "dolorum",
                  model: "a",
                  property: "esse",
                  type: "harum",
                  userAttribute: "iusto",
                  value: "ipsum",
                },
                model: "quisquam",
                state: {
                  componentName: "tenetur",
                  property: "amet",
                  set: {
                    bindingProperties: {
                      field: "tempore",
                      property: "accusamus",
                    },
                    bindings: {
                      "enim": {
                        element: "dolorem",
                        property: "sapiente",
                      },
                      "totam": {
                        element: "nihil",
                        property: "sit",
                      },
                    },
                    collectionBindingProperties: {
                      field: "expedita",
                      property: "neque",
                    },
                    componentName: "sed",
                    concat: [
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "libero",
                      operand: "voluptas",
                      operandType: "deserunt",
                      operator: "quam",
                      property: "ipsum",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "incidunt",
                    event: "qui",
                    importedValue: "cupiditate",
                    model: "maxime",
                    property: "pariatur",
                    type: "soluta",
                    userAttribute: "dicta",
                    value: "laborum",
                  },
                },
                target: {
                  bindingProperties: {
                    field: "totam",
                    property: "incidunt",
                  },
                  bindings: {
                    "dolores": {
                      element: "distinctio",
                      property: "facilis",
                    },
                  },
                  collectionBindingProperties: {
                    field: "aliquid",
                    property: "quam",
                  },
                  componentName: "molestias",
                  concat: [
                    {},
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "qui",
                    operand: "neque",
                    operandType: "fugit",
                    operator: "magni",
                    property: "odio",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "sunt",
                  event: "ullam",
                  importedValue: "nam",
                  model: "hic",
                  property: "voluptatem",
                  type: "cumque",
                  userAttribute: "soluta",
                  value: "nobis",
                },
                type: {
                  bindingProperties: {
                    field: "et",
                    property: "saepe",
                  },
                  bindings: {
                    "veritatis": {
                      element: "nobis",
                      property: "quos",
                    },
                  },
                  collectionBindingProperties: {
                    field: "tempore",
                    property: "cupiditate",
                  },
                  componentName: "aperiam",
                  concat: [
                    {},
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "dolorem",
                    operand: "dolore",
                    operandType: "labore",
                    operator: "adipisci",
                    property: "dolorum",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "architecto",
                  event: "quae",
                  importedValue: "aut",
                  model: "quas",
                  property: "itaque",
                  type: "consequatur",
                  userAttribute: "est",
                  value: "repellendus",
                },
                url: {
                  bindingProperties: {
                    field: "porro",
                    property: "doloribus",
                  },
                  bindings: {
                    "facilis": {
                      element: "cupiditate",
                      property: "qui",
                    },
                    "quae": {
                      element: "laudantium",
                      property: "odio",
                    },
                  },
                  collectionBindingProperties: {
                    field: "occaecati",
                    property: "voluptatibus",
                  },
                  componentName: "quisquam",
                  concat: [
                    {},
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "omnis",
                    operand: "quis",
                    operandType: "ipsum",
                    operator: "delectus",
                    property: "voluptate",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "consectetur",
                  event: "vero",
                  importedValue: "tenetur",
                  model: "dignissimos",
                  property: "hic",
                  type: "distinctio",
                  userAttribute: "quod",
                  value: "odio",
                },
              },
            },
            "similique": {
              action: "facilis",
              bindingEvent: "vero",
              parameters: {
                anchor: {
                  bindingProperties: {
                    field: "ducimus",
                    property: "dolore",
                  },
                  bindings: {
                    "illum": {
                      element: "sequi",
                      property: "natus",
                    },
                    "impedit": {
                      element: "aut",
                      property: "voluptatibus",
                    },
                    "exercitationem": {
                      element: "nulla",
                      property: "fugit",
                    },
                    "porro": {
                      element: "maiores",
                      property: "doloribus",
                    },
                  },
                  collectionBindingProperties: {
                    field: "iusto",
                    property: "eligendi",
                  },
                  componentName: "ducimus",
                  concat: [
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "officia",
                    operand: "tempora",
                    operandType: "ipsam",
                    operator: "ea",
                    property: "aspernatur",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "vel",
                  event: "possimus",
                  importedValue: "magnam",
                  model: "ratione",
                  property: "ex",
                  type: "laudantium",
                  userAttribute: "dicta",
                  value: "dolor",
                },
                fields: {
                  "quasi": {
                    bindingProperties: {
                      field: "ex",
                      property: "nulla",
                    },
                    bindings: {
                      "voluptatibus": {
                        element: "nostrum",
                        property: "sapiente",
                      },
                      "quisquam": {
                        element: "saepe",
                        property: "ea",
                      },
                      "impedit": {
                        element: "corporis",
                        property: "veniam",
                      },
                    },
                    collectionBindingProperties: {
                      field: "aliquid",
                      property: "inventore",
                    },
                    componentName: "magnam",
                    concat: [
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "quo",
                      operand: "consectetur",
                      operandType: "recusandae",
                      operator: "aspernatur",
                      property: "minima",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "eaque",
                    event: "a",
                    importedValue: "libero",
                    model: "aut",
                    property: "aut",
                    type: "deleniti",
                    userAttribute: "impedit",
                    value: "aliquam",
                  },
                  "fugit": {
                    bindingProperties: {
                      field: "accusamus",
                      property: "inventore",
                    },
                    bindings: {
                      "et": {
                        element: "dolorum",
                        property: "laborum",
                      },
                      "placeat": {
                        element: "velit",
                        property: "eum",
                      },
                    },
                    collectionBindingProperties: {
                      field: "autem",
                      property: "nobis",
                    },
                    componentName: "quas",
                    concat: [
                      {},
                      {},
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "nulla",
                      operand: "voluptas",
                      operandType: "libero",
                      operator: "quasi",
                      property: "tempora",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "numquam",
                    event: "explicabo",
                    importedValue: "provident",
                    model: "ipsa",
                    property: "molestiae",
                    type: "magnam",
                    userAttribute: "odio",
                    value: "eius",
                  },
                  "esse": {
                    bindingProperties: {
                      field: "esse",
                      property: "rem",
                    },
                    bindings: {
                      "reprehenderit": {
                        element: "quidem",
                        property: "fugiat",
                      },
                      "ut": {
                        element: "eum",
                        property: "suscipit",
                      },
                      "assumenda": {
                        element: "eos",
                        property: "praesentium",
                      },
                    },
                    collectionBindingProperties: {
                      field: "quisquam",
                      property: "veritatis",
                    },
                    componentName: "ipsa",
                    concat: [
                      {},
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "quidem",
                      operand: "neque",
                      operandType: "quo",
                      operator: "illum",
                      property: "quo",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "fuga",
                    event: "eius",
                    importedValue: "eos",
                    model: "voluptas",
                    property: "ab",
                    type: "cupiditate",
                    userAttribute: "consequatur",
                    value: "tempora",
                  },
                  "debitis": {
                    bindingProperties: {
                      field: "ipsam",
                      property: "aspernatur",
                    },
                    bindings: {
                      "quo": {
                        element: "esse",
                        property: "recusandae",
                      },
                    },
                    collectionBindingProperties: {
                      field: "aperiam",
                      property: "distinctio",
                    },
                    componentName: "quod",
                    concat: [
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "inventore",
                      operand: "nihil",
                      operandType: "totam",
                      operator: "accusamus",
                      property: "aliquam",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "odio",
                    event: "occaecati",
                    importedValue: "commodi",
                    model: "sapiente",
                    property: "dolores",
                    type: "deserunt",
                    userAttribute: "molestiae",
                    value: "accusantium",
                  },
                },
                global: {
                  bindingProperties: {
                    field: "porro",
                    property: "eum",
                  },
                  bindings: {
                    "praesentium": {
                      element: "consequuntur",
                      property: "deleniti",
                    },
                    "fugit": {
                      element: "fuga",
                      property: "mollitia",
                    },
                    "incidunt": {
                      element: "atque",
                      property: "explicabo",
                    },
                  },
                  collectionBindingProperties: {
                    field: "minima",
                    property: "nisi",
                  },
                  componentName: "fugit",
                  concat: [
                    {},
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "consequuntur",
                    operand: "ratione",
                    operandType: "explicabo",
                    operator: "saepe",
                    property: "occaecati",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "atque",
                  event: "et",
                  importedValue: "esse",
                  model: "eveniet",
                  property: "accusamus",
                  type: "veritatis",
                  userAttribute: "esse",
                  value: "quod",
                },
                id: {
                  bindingProperties: {
                    field: "nam",
                    property: "vero",
                  },
                  bindings: {
                    "quasi": {
                      element: "saepe",
                      property: "vel",
                    },
                    "harum": {
                      element: "molestiae",
                      property: "rerum",
                    },
                  },
                  collectionBindingProperties: {
                    field: "occaecati",
                    property: "minima",
                  },
                  componentName: "distinctio",
                  concat: [
                    {},
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "sit",
                    operand: "culpa",
                    operandType: "tempore",
                    operator: "adipisci",
                    property: "cumque",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "consequuntur",
                  event: "consequatur",
                  importedValue: "minus",
                  model: "quaerat",
                  property: "sapiente",
                  type: "consectetur",
                  userAttribute: "esse",
                  value: "blanditiis",
                },
                model: "provident",
                state: {
                  componentName: "a",
                  property: "nulla",
                  set: {
                    bindingProperties: {
                      field: "quas",
                      property: "esse",
                    },
                    bindings: {
                      "a": {
                        element: "error",
                        property: "sint",
                      },
                    },
                    collectionBindingProperties: {
                      field: "pariatur",
                      property: "possimus",
                    },
                    componentName: "quia",
                    concat: [
                      {},
                      {},
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "asperiores",
                      operand: "facere",
                      operandType: "veritatis",
                      operator: "consequuntur",
                      property: "quasi",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "similique",
                    event: "culpa",
                    importedValue: "aliquid",
                    model: "tenetur",
                    property: "quae",
                    type: "earum",
                    userAttribute: "vel",
                    value: "in",
                  },
                },
                target: {
                  bindingProperties: {
                    field: "eius",
                    property: "libero",
                  },
                  bindings: {
                    "soluta": {
                      element: "accusantium",
                      property: "aliquam",
                    },
                    "sapiente": {
                      element: "dicta",
                      property: "ullam",
                    },
                    "reprehenderit": {
                      element: "ullam",
                      property: "nisi",
                    },
                    "aut": {
                      element: "voluptatum",
                      property: "qui",
                    },
                  },
                  collectionBindingProperties: {
                    field: "quibusdam",
                    property: "ex",
                  },
                  componentName: "deleniti",
                  concat: [
                    {},
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "dolorum",
                    operand: "architecto",
                    operandType: "omnis",
                    operator: "tenetur",
                    property: "quasi",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "at",
                  event: "et",
                  importedValue: "voluptate",
                  model: "ipsa",
                  property: "minima",
                  type: "veritatis",
                  userAttribute: "consectetur",
                  value: "adipisci",
                },
                type: {
                  bindingProperties: {
                    field: "iste",
                    property: "temporibus",
                  },
                  bindings: {
                    "rem": {
                      element: "aut",
                      property: "laudantium",
                    },
                  },
                  collectionBindingProperties: {
                    field: "eum",
                    property: "mollitia",
                  },
                  componentName: "ab",
                  concat: [
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "non",
                    operand: "voluptatem",
                    operandType: "dolor",
                    operator: "occaecati",
                    property: "numquam",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "impedit",
                  event: "explicabo",
                  importedValue: "voluptas",
                  model: "aut",
                  property: "dignissimos",
                  type: "dicta",
                  userAttribute: "maiores",
                  value: "natus",
                },
                url: {
                  bindingProperties: {
                    field: "velit",
                    property: "voluptatibus",
                  },
                  bindings: {
                    "asperiores": {
                      element: "aperiam",
                      property: "ea",
                    },
                    "quaerat": {
                      element: "consequuntur",
                      property: "repellendus",
                    },
                  },
                  collectionBindingProperties: {
                    field: "officia",
                    property: "maxime",
                  },
                  componentName: "dignissimos",
                  concat: [
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "asperiores",
                    operand: "nemo",
                    operandType: "quae",
                    operator: "quaerat",
                    property: "porro",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "quod",
                  event: "labore",
                  importedValue: "ab",
                  model: "adipisci",
                  property: "fuga",
                  type: "id",
                  userAttribute: "suscipit",
                  value: "velit",
                },
              },
            },
            "culpa": {
              action: "est",
              bindingEvent: "recusandae",
              parameters: {
                anchor: {
                  bindingProperties: {
                    field: "totam",
                    property: "fugiat",
                  },
                  bindings: {
                    "ducimus": {
                      element: "quos",
                      property: "vel",
                    },
                    "labore": {
                      element: "possimus",
                      property: "facilis",
                    },
                  },
                  collectionBindingProperties: {
                    field: "cum",
                    property: "commodi",
                  },
                  componentName: "in",
                  concat: [
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "reiciendis",
                    operand: "assumenda",
                    operandType: "nemo",
                    operator: "recusandae",
                    property: "aliquid",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "aperiam",
                  event: "cum",
                  importedValue: "consectetur",
                  model: "in",
                  property: "exercitationem",
                  type: "earum",
                  userAttribute: "facere",
                  value: "numquam",
                },
                fields: {
                  "suscipit": {
                    bindingProperties: {
                      field: "reiciendis",
                      property: "quidem",
                    },
                    bindings: {
                      "necessitatibus": {
                        element: "dolore",
                        property: "sunt",
                      },
                      "asperiores": {
                        element: "adipisci",
                        property: "non",
                      },
                      "amet": {
                        element: "beatae",
                        property: "dignissimos",
                      },
                      "a": {
                        element: "debitis",
                        property: "consectetur",
                      },
                    },
                    collectionBindingProperties: {
                      field: "corporis",
                      property: "harum",
                    },
                    componentName: "laboriosam",
                    concat: [
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "voluptates",
                      operand: "libero",
                      operandType: "vitae",
                      operator: "accusamus",
                      property: "similique",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "tempora",
                    event: "aspernatur",
                    importedValue: "voluptas",
                    model: "voluptas",
                    property: "voluptas",
                    type: "minima",
                    userAttribute: "nobis",
                    value: "dolorum",
                  },
                  "adipisci": {
                    bindingProperties: {
                      field: "minus",
                      property: "dolores",
                    },
                    bindings: {
                      "in": {
                        element: "dolore",
                        property: "aliquam",
                      },
                      "officiis": {
                        element: "temporibus",
                        property: "ullam",
                      },
                      "adipisci": {
                        element: "cum",
                        property: "blanditiis",
                      },
                    },
                    collectionBindingProperties: {
                      field: "quas",
                      property: "hic",
                    },
                    componentName: "nesciunt",
                    concat: [
                      {},
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "corrupti",
                      operand: "pariatur",
                      operandType: "totam",
                      operator: "hic",
                      property: "exercitationem",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "nobis",
                    event: "sit",
                    importedValue: "rerum",
                    model: "sed",
                    property: "reiciendis",
                    type: "explicabo",
                    userAttribute: "asperiores",
                    value: "facilis",
                  },
                  "voluptate": {
                    bindingProperties: {
                      field: "expedita",
                      property: "ab",
                    },
                    bindings: {
                      "dolore": {
                        element: "laborum",
                        property: "sed",
                      },
                      "in": {
                        element: "commodi",
                        property: "quidem",
                      },
                      "explicabo": {
                        element: "voluptas",
                        property: "unde",
                      },
                    },
                    collectionBindingProperties: {
                      field: "architecto",
                      property: "suscipit",
                    },
                    componentName: "sapiente",
                    concat: [
                      {},
                      {},
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "illo",
                      operand: "reiciendis",
                      operandType: "perferendis",
                      operator: "corrupti",
                      property: "maiores",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "incidunt",
                    event: "sed",
                    importedValue: "provident",
                    model: "eius",
                    property: "necessitatibus",
                    type: "ipsum",
                    userAttribute: "ea",
                    value: "occaecati",
                  },
                  "quos": {
                    bindingProperties: {
                      field: "voluptatibus",
                      property: "tempora",
                    },
                    bindings: {
                      "voluptate": {
                        element: "reiciendis",
                        property: "ex",
                      },
                      "sit": {
                        element: "non",
                        property: "officiis",
                      },
                    },
                    collectionBindingProperties: {
                      field: "praesentium",
                      property: "facilis",
                    },
                    componentName: "quaerat",
                    concat: [
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "ipsam",
                      operand: "debitis",
                      operandType: "rem",
                      operator: "sit",
                      property: "nobis",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "error",
                    event: "veniam",
                    importedValue: "minima",
                    model: "recusandae",
                    property: "reiciendis",
                    type: "nulla",
                    userAttribute: "magni",
                    value: "aperiam",
                  },
                },
                global: {
                  bindingProperties: {
                    field: "saepe",
                    property: "numquam",
                  },
                  bindings: {
                    "in": {
                      element: "officiis",
                      property: "beatae",
                    },
                    "laudantium": {
                      element: "exercitationem",
                      property: "praesentium",
                    },
                  },
                  collectionBindingProperties: {
                    field: "cum",
                    property: "laboriosam",
                  },
                  componentName: "dolorum",
                  concat: [
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "error",
                    operand: "hic",
                    operandType: "expedita",
                    operator: "debitis",
                    property: "neque",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "dolorum",
                  event: "nostrum",
                  importedValue: "officia",
                  model: "dolorum",
                  property: "corrupti",
                  type: "accusamus",
                  userAttribute: "tempora",
                  value: "atque",
                },
                id: {
                  bindingProperties: {
                    field: "fugit",
                    property: "ut",
                  },
                  bindings: {
                    "voluptatem": {
                      element: "culpa",
                      property: "expedita",
                    },
                    "magnam": {
                      element: "consequatur",
                      property: "esse",
                    },
                    "ipsam": {
                      element: "sit",
                      property: "voluptatum",
                    },
                    "quas": {
                      element: "repudiandae",
                      property: "corporis",
                    },
                  },
                  collectionBindingProperties: {
                    field: "et",
                    property: "blanditiis",
                  },
                  componentName: "ex",
                  concat: [
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "sit",
                    operand: "vel",
                    operandType: "nostrum",
                    operator: "saepe",
                    property: "error",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "consequatur",
                  event: "incidunt",
                  importedValue: "reiciendis",
                  model: "dolorem",
                  property: "harum",
                  type: "dicta",
                  userAttribute: "architecto",
                  value: "occaecati",
                },
                model: "labore",
                state: {
                  componentName: "quidem",
                  property: "atque",
                  set: {
                    bindingProperties: {
                      field: "laborum",
                      property: "nam",
                    },
                    bindings: {
                      "laboriosam": {
                        element: "alias",
                        property: "amet",
                      },
                      "deserunt": {
                        element: "voluptate",
                        property: "unde",
                      },
                      "reiciendis": {
                        element: "provident",
                        property: "repellendus",
                      },
                      "delectus": {
                        element: "voluptates",
                        property: "perferendis",
                      },
                    },
                    collectionBindingProperties: {
                      field: "est",
                      property: "quidem",
                    },
                    componentName: "reprehenderit",
                    concat: [
                      {},
                      {},
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "fuga",
                      operand: "praesentium",
                      operandType: "mollitia",
                      operator: "veniam",
                      property: "voluptatem",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "quisquam",
                    event: "repudiandae",
                    importedValue: "quasi",
                    model: "atque",
                    property: "reprehenderit",
                    type: "asperiores",
                    userAttribute: "totam",
                    value: "suscipit",
                  },
                },
                target: {
                  bindingProperties: {
                    field: "quidem",
                    property: "maxime",
                  },
                  bindings: {
                    "esse": {
                      element: "amet",
                      property: "assumenda",
                    },
                  },
                  collectionBindingProperties: {
                    field: "ea",
                    property: "atque",
                  },
                  componentName: "error",
                  concat: [
                    {},
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "officiis",
                    operand: "accusamus",
                    operandType: "natus",
                    operator: "minima",
                    property: "aspernatur",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "ex",
                  event: "maiores",
                  importedValue: "corrupti",
                  model: "at",
                  property: "error",
                  type: "blanditiis",
                  userAttribute: "suscipit",
                  value: "repudiandae",
                },
                type: {
                  bindingProperties: {
                    field: "atque",
                    property: "atque",
                  },
                  bindings: {
                    "recusandae": {
                      element: "dolorum",
                      property: "repellendus",
                    },
                  },
                  collectionBindingProperties: {
                    field: "labore",
                    property: "reiciendis",
                  },
                  componentName: "doloremque",
                  concat: [
                    {},
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "dicta",
                    operand: "accusantium",
                    operandType: "beatae",
                    operator: "dolores",
                    property: "enim",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "laboriosam",
                  event: "velit",
                  importedValue: "a",
                  model: "molestias",
                  property: "magnam",
                  type: "saepe",
                  userAttribute: "consequuntur",
                  value: "occaecati",
                },
                url: {
                  bindingProperties: {
                    field: "officiis",
                    property: "perspiciatis",
                  },
                  bindings: {
                    "adipisci": {
                      element: "eveniet",
                      property: "occaecati",
                    },
                    "consequuntur": {
                      element: "fugit",
                      property: "id",
                    },
                  },
                  collectionBindingProperties: {
                    field: "quis",
                    property: "reprehenderit",
                  },
                  componentName: "error",
                  concat: [
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "corporis",
                    operand: "quidem",
                    operandType: "eveniet",
                    operator: "non",
                    property: "vero",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "doloremque",
                  event: "iure",
                  importedValue: "ipsa",
                  model: "totam",
                  property: "quae",
                  type: "molestiae",
                  userAttribute: "eveniet",
                  value: "qui",
                },
              },
            },
          },
          name: "cum",
          properties: "iure",
          sourceId: "necessitatibus",
        },
        {
          children: [
            {},
          ],
          componentType: "laborum",
          events: {
            "voluptatum": {
              action: "rem",
              bindingEvent: "aliquam",
              parameters: {
                anchor: {
                  bindingProperties: {
                    field: "ad",
                    property: "repellat",
                  },
                  bindings: {
                    "corporis": {
                      element: "perspiciatis",
                      property: "nihil",
                    },
                  },
                  collectionBindingProperties: {
                    field: "mollitia",
                    property: "voluptas",
                  },
                  componentName: "alias",
                  concat: [
                    {},
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "reiciendis",
                    operand: "dolores",
                    operandType: "id",
                    operator: "minima",
                    property: "dolore",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "dolorum",
                  event: "nesciunt",
                  importedValue: "quae",
                  model: "recusandae",
                  property: "omnis",
                  type: "quaerat",
                  userAttribute: "molestiae",
                  value: "ex",
                },
                fields: {
                  "culpa": {
                    bindingProperties: {
                      field: "adipisci",
                      property: "debitis",
                    },
                    bindings: {
                      "eum": {
                        element: "nemo",
                        property: "recusandae",
                      },
                      "esse": {
                        element: "provident",
                        property: "quis",
                      },
                      "eum": {
                        element: "reiciendis",
                        property: "provident",
                      },
                    },
                    collectionBindingProperties: {
                      field: "aspernatur",
                      property: "ullam",
                    },
                    componentName: "quasi",
                    concat: [
                      {},
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "nostrum",
                      operand: "mollitia",
                      operandType: "provident",
                      operator: "possimus",
                      property: "animi",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "ex",
                    event: "aliquid",
                    importedValue: "accusantium",
                    model: "repellat",
                    property: "doloribus",
                    type: "ullam",
                    userAttribute: "in",
                    value: "nam",
                  },
                  "earum": {
                    bindingProperties: {
                      field: "officia",
                      property: "laborum",
                    },
                    bindings: {
                      "modi": {
                        element: "voluptatibus",
                        property: "molestias",
                      },
                      "officiis": {
                        element: "sapiente",
                        property: "cumque",
                      },
                      "vitae": {
                        element: "rerum",
                        property: "tempora",
                      },
                      "quis": {
                        element: "inventore",
                        property: "fugit",
                      },
                    },
                    collectionBindingProperties: {
                      field: "cumque",
                      property: "quae",
                    },
                    componentName: "perferendis",
                    concat: [
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "aspernatur",
                      operand: "eum",
                      operandType: "eius",
                      operator: "rem",
                      property: "at",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "impedit",
                    event: "eos",
                    importedValue: "sapiente",
                    model: "eum",
                    property: "dicta",
                    type: "minima",
                    userAttribute: "beatae",
                    value: "cupiditate",
                  },
                },
                global: {
                  bindingProperties: {
                    field: "provident",
                    property: "earum",
                  },
                  bindings: {
                    "hic": {
                      element: "illum",
                      property: "eaque",
                    },
                    "earum": {
                      element: "perspiciatis",
                      property: "maiores",
                    },
                    "debitis": {
                      element: "aliquid",
                      property: "porro",
                    },
                  },
                  collectionBindingProperties: {
                    field: "suscipit",
                    property: "dolorem",
                  },
                  componentName: "fugit",
                  concat: [
                    {},
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "fuga",
                    operand: "ratione",
                    operandType: "animi",
                    operator: "necessitatibus",
                    property: "nulla",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "consequatur",
                  event: "quasi",
                  importedValue: "et",
                  model: "ducimus",
                  property: "natus",
                  type: "occaecati",
                  userAttribute: "suscipit",
                  value: "adipisci",
                },
                id: {
                  bindingProperties: {
                    field: "quasi",
                    property: "magni",
                  },
                  bindings: {
                    "nulla": {
                      element: "necessitatibus",
                      property: "ipsa",
                    },
                    "tempora": {
                      element: "nihil",
                      property: "molestiae",
                    },
                    "dicta": {
                      element: "iusto",
                      property: "esse",
                    },
                    "praesentium": {
                      element: "maiores",
                      property: "reiciendis",
                    },
                  },
                  collectionBindingProperties: {
                    field: "vel",
                    property: "architecto",
                  },
                  componentName: "fugiat",
                  concat: [
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "dicta",
                    operand: "odio",
                    operandType: "tempora",
                    operator: "esse",
                    property: "ex",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "consectetur",
                  event: "aliquid",
                  importedValue: "ipsa",
                  model: "laborum",
                  property: "sunt",
                  type: "nostrum",
                  userAttribute: "fugiat",
                  value: "expedita",
                },
                model: "aliquid",
                state: {
                  componentName: "officia",
                  property: "suscipit",
                  set: {
                    bindingProperties: {
                      field: "aliquid",
                      property: "perferendis",
                    },
                    bindings: {
                      "voluptas": {
                        element: "iste",
                        property: "id",
                      },
                      "ab": {
                        element: "error",
                        property: "possimus",
                      },
                    },
                    collectionBindingProperties: {
                      field: "voluptates",
                      property: "mollitia",
                    },
                    componentName: "laborum",
                    concat: [
                      {},
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "ad",
                      operand: "deleniti",
                      operandType: "enim",
                      operator: "vitae",
                      property: "repellendus",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "ex",
                    event: "quo",
                    importedValue: "ex",
                    model: "ut",
                    property: "ad",
                    type: "expedita",
                    userAttribute: "voluptatem",
                    value: "molestias",
                  },
                },
                target: {
                  bindingProperties: {
                    field: "cum",
                    property: "aliquid",
                  },
                  bindings: {
                    "voluptatum": {
                      element: "omnis",
                      property: "veritatis",
                    },
                  },
                  collectionBindingProperties: {
                    field: "rerum",
                    property: "est",
                  },
                  componentName: "culpa",
                  concat: [
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "sapiente",
                    operand: "officiis",
                    operandType: "architecto",
                    operator: "fuga",
                    property: "pariatur",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "debitis",
                  event: "voluptatem",
                  importedValue: "alias",
                  model: "deleniti",
                  property: "earum",
                  type: "ex",
                  userAttribute: "sapiente",
                  value: "rem",
                },
                type: {
                  bindingProperties: {
                    field: "minus",
                    property: "nemo",
                  },
                  bindings: {
                    "ratione": {
                      element: "ullam",
                      property: "perferendis",
                    },
                    "illum": {
                      element: "totam",
                      property: "impedit",
                    },
                    "quibusdam": {
                      element: "nam",
                      property: "ipsam",
                    },
                    "culpa": {
                      element: "dolor",
                      property: "aliquam",
                    },
                  },
                  collectionBindingProperties: {
                    field: "inventore",
                    property: "deleniti",
                  },
                  componentName: "veritatis",
                  concat: [
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "dolor",
                    operand: "consequatur",
                    operandType: "architecto",
                    operator: "sit",
                    property: "modi",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "fugit",
                  event: "ab",
                  importedValue: "laudantium",
                  model: "quae",
                  property: "dolor",
                  type: "fugiat",
                  userAttribute: "ipsam",
                  value: "consequuntur",
                },
                url: {
                  bindingProperties: {
                    field: "ipsa",
                    property: "quas",
                  },
                  bindings: {
                    "impedit": {
                      element: "officiis",
                      property: "esse",
                    },
                    "necessitatibus": {
                      element: "sed",
                      property: "veniam",
                    },
                    "nesciunt": {
                      element: "expedita",
                      property: "eum",
                    },
                    "vel": {
                      element: "voluptatum",
                      property: "magnam",
                    },
                  },
                  collectionBindingProperties: {
                    field: "exercitationem",
                    property: "ab",
                  },
                  componentName: "porro",
                  concat: [
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "nobis",
                    operand: "laboriosam",
                    operandType: "recusandae",
                    operator: "consequuntur",
                    property: "voluptatem",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "exercitationem",
                  event: "necessitatibus",
                  importedValue: "quasi",
                  model: "nisi",
                  property: "at",
                  type: "vero",
                  userAttribute: "est",
                  value: "harum",
                },
              },
            },
            "sequi": {
              action: "doloribus",
              bindingEvent: "repudiandae",
              parameters: {
                anchor: {
                  bindingProperties: {
                    field: "optio",
                    property: "occaecati",
                  },
                  bindings: {
                    "voluptate": {
                      element: "blanditiis",
                      property: "officia",
                    },
                    "voluptas": {
                      element: "numquam",
                      property: "nemo",
                    },
                  },
                  collectionBindingProperties: {
                    field: "quos",
                    property: "eius",
                  },
                  componentName: "aspernatur",
                  concat: [
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "nesciunt",
                    operand: "fuga",
                    operandType: "laudantium",
                    operator: "incidunt",
                    property: "quasi",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "rem",
                  event: "fugiat",
                  importedValue: "dicta",
                  model: "nisi",
                  property: "consequuntur",
                  type: "consectetur",
                  userAttribute: "aperiam",
                  value: "cupiditate",
                },
                fields: {
                  "soluta": {
                    bindingProperties: {
                      field: "alias",
                      property: "omnis",
                    },
                    bindings: {
                      "occaecati": {
                        element: "iste",
                        property: "magni",
                      },
                    },
                    collectionBindingProperties: {
                      field: "inventore",
                      property: "fuga",
                    },
                    componentName: "accusamus",
                    concat: [
                      {},
                      {},
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "distinctio",
                      operand: "omnis",
                      operandType: "delectus",
                      operator: "minima",
                      property: "praesentium",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "maxime",
                    event: "magnam",
                    importedValue: "temporibus",
                    model: "quos",
                    property: "commodi",
                    type: "itaque",
                    userAttribute: "commodi",
                    value: "totam",
                  },
                  "earum": {
                    bindingProperties: {
                      field: "modi",
                      property: "nam",
                    },
                    bindings: {
                      "voluptatem": {
                        element: "ipsam",
                        property: "vel",
                      },
                      "alias": {
                        element: "quasi",
                        property: "non",
                      },
                      "maiores": {
                        element: "enim",
                        property: "sint",
                      },
                      "nulla": {
                        element: "deserunt",
                        property: "esse",
                      },
                    },
                    collectionBindingProperties: {
                      field: "nemo",
                      property: "reprehenderit",
                    },
                    componentName: "est",
                    concat: [
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "sint",
                      operand: "accusamus",
                      operandType: "impedit",
                      operator: "hic",
                      property: "necessitatibus",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "asperiores",
                    event: "ex",
                    importedValue: "voluptas",
                    model: "debitis",
                    property: "delectus",
                    type: "quae",
                    userAttribute: "minus",
                    value: "fuga",
                  },
                  "laborum": {
                    bindingProperties: {
                      field: "consectetur",
                      property: "velit",
                    },
                    bindings: {
                      "ipsum": {
                        element: "impedit",
                        property: "magni",
                      },
                      "soluta": {
                        element: "repudiandae",
                        property: "nam",
                      },
                      "dolore": {
                        element: "iusto",
                        property: "voluptate",
                      },
                    },
                    collectionBindingProperties: {
                      field: "sequi",
                      property: "dignissimos",
                    },
                    componentName: "neque",
                    concat: [
                      {},
                      {},
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "deleniti",
                      operand: "quibusdam",
                      operandType: "iure",
                      operator: "odit",
                      property: "voluptatibus",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "vel",
                    event: "magnam",
                    importedValue: "quibusdam",
                    model: "inventore",
                    property: "facere",
                    type: "libero",
                    userAttribute: "architecto",
                    value: "voluptatibus",
                  },
                  "quia": {
                    bindingProperties: {
                      field: "porro",
                      property: "aliquam",
                    },
                    bindings: {
                      "illo": {
                        element: "accusantium",
                        property: "vel",
                      },
                    },
                    collectionBindingProperties: {
                      field: "ea",
                      property: "beatae",
                    },
                    componentName: "vero",
                    concat: [
                      {},
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "eum",
                      operand: "velit",
                      operandType: "ut",
                      operator: "perspiciatis",
                      property: "earum",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "dicta",
                    event: "impedit",
                    importedValue: "voluptatibus",
                    model: "iste",
                    property: "itaque",
                    type: "alias",
                    userAttribute: "nisi",
                    value: "itaque",
                  },
                },
                global: {
                  bindingProperties: {
                    field: "velit",
                    property: "laborum",
                  },
                  bindings: {
                    "dolor": {
                      element: "iusto",
                      property: "sit",
                    },
                    "doloremque": {
                      element: "consequatur",
                      property: "officia",
                    },
                  },
                  collectionBindingProperties: {
                    field: "recusandae",
                    property: "ea",
                  },
                  componentName: "quidem",
                  concat: [
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "facilis",
                    operand: "placeat",
                    operandType: "perspiciatis",
                    operator: "expedita",
                    property: "deleniti",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "a",
                  event: "voluptate",
                  importedValue: "ullam",
                  model: "unde",
                  property: "necessitatibus",
                  type: "animi",
                  userAttribute: "impedit",
                  value: "ipsam",
                },
                id: {
                  bindingProperties: {
                    field: "corporis",
                    property: "est",
                  },
                  bindings: {
                    "esse": {
                      element: "labore",
                      property: "veritatis",
                    },
                    "vero": {
                      element: "consectetur",
                      property: "vitae",
                    },
                    "inventore": {
                      element: "dolorem",
                      property: "ad",
                    },
                  },
                  collectionBindingProperties: {
                    field: "qui",
                    property: "iste",
                  },
                  componentName: "ex",
                  concat: [
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "soluta",
                    operand: "libero",
                    operandType: "rem",
                    operator: "dolorum",
                    property: "odio",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "fugit",
                  event: "alias",
                  importedValue: "magni",
                  model: "vel",
                  property: "quae",
                  type: "quae",
                  userAttribute: "modi",
                  value: "neque",
                },
                model: "exercitationem",
                state: {
                  componentName: "itaque",
                  property: "et",
                  set: {
                    bindingProperties: {
                      field: "ipsum",
                      property: "unde",
                    },
                    bindings: {
                      "distinctio": {
                        element: "maxime",
                        property: "quia",
                      },
                      "quia": {
                        element: "nostrum",
                        property: "omnis",
                      },
                      "libero": {
                        element: "dicta",
                        property: "id",
                      },
                      "libero": {
                        element: "fugiat",
                        property: "officia",
                      },
                    },
                    collectionBindingProperties: {
                      field: "quos",
                      property: "placeat",
                    },
                    componentName: "sit",
                    concat: [
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "ipsa",
                      operand: "voluptates",
                      operandType: "inventore",
                      operator: "aperiam",
                      property: "totam",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "dolore",
                    event: "eligendi",
                    importedValue: "distinctio",
                    model: "voluptatem",
                    property: "autem",
                    type: "esse",
                    userAttribute: "dolores",
                    value: "assumenda",
                  },
                },
                target: {
                  bindingProperties: {
                    field: "beatae",
                    property: "est",
                  },
                  bindings: {
                    "corrupti": {
                      element: "molestiae",
                      property: "provident",
                    },
                    "accusamus": {
                      element: "necessitatibus",
                      property: "tempore",
                    },
                    "sint": {
                      element: "ea",
                      property: "autem",
                    },
                    "ipsam": {
                      element: "rerum",
                      property: "laudantium",
                    },
                  },
                  collectionBindingProperties: {
                    field: "corporis",
                    property: "officiis",
                  },
                  componentName: "voluptatibus",
                  concat: [
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "at",
                    operand: "alias",
                    operandType: "quia",
                    operator: "quidem",
                    property: "fuga",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "repudiandae",
                  event: "accusantium",
                  importedValue: "expedita",
                  model: "officiis",
                  property: "eos",
                  type: "quibusdam",
                  userAttribute: "odio",
                  value: "praesentium",
                },
                type: {
                  bindingProperties: {
                    field: "odit",
                    property: "explicabo",
                  },
                  bindings: {
                    "error": {
                      element: "earum",
                      property: "adipisci",
                    },
                    "recusandae": {
                      element: "similique",
                      property: "ut",
                    },
                  },
                  collectionBindingProperties: {
                    field: "quidem",
                    property: "quis",
                  },
                  componentName: "beatae",
                  concat: [
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "molestiae",
                    operand: "delectus",
                    operandType: "cupiditate",
                    operator: "fugit",
                    property: "numquam",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "numquam",
                  event: "nesciunt",
                  importedValue: "at",
                  model: "officia",
                  property: "dignissimos",
                  type: "optio",
                  userAttribute: "necessitatibus",
                  value: "corporis",
                },
                url: {
                  bindingProperties: {
                    field: "qui",
                    property: "expedita",
                  },
                  bindings: {
                    "cupiditate": {
                      element: "minima",
                      property: "placeat",
                    },
                    "enim": {
                      element: "neque",
                      property: "in",
                    },
                    "minus": {
                      element: "eum",
                      property: "modi",
                    },
                  },
                  collectionBindingProperties: {
                    field: "corporis",
                    property: "magnam",
                  },
                  componentName: "voluptates",
                  concat: [
                    {},
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "tempore",
                    operand: "aperiam",
                    operandType: "libero",
                    operator: "ratione",
                    property: "labore",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "totam",
                  event: "occaecati",
                  importedValue: "voluptas",
                  model: "quo",
                  property: "velit",
                  type: "minus",
                  userAttribute: "fuga",
                  value: "nostrum",
                },
              },
            },
            "est": {
              action: "impedit",
              bindingEvent: "delectus",
              parameters: {
                anchor: {
                  bindingProperties: {
                    field: "tempore",
                    property: "vero",
                  },
                  bindings: {
                    "repellat": {
                      element: "pariatur",
                      property: "nemo",
                    },
                  },
                  collectionBindingProperties: {
                    field: "reprehenderit",
                    property: "aperiam",
                  },
                  componentName: "odio",
                  concat: [
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "in",
                    operand: "ducimus",
                    operandType: "excepturi",
                    operator: "dolores",
                    property: "error",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "veritatis",
                  event: "ducimus",
                  importedValue: "voluptate",
                  model: "pariatur",
                  property: "itaque",
                  type: "similique",
                  userAttribute: "optio",
                  value: "ex",
                },
                fields: {
                  "commodi": {
                    bindingProperties: {
                      field: "officiis",
                      property: "placeat",
                    },
                    bindings: {
                      "exercitationem": {
                        element: "quam",
                        property: "dolorem",
                      },
                      "modi": {
                        element: "ipsa",
                        property: "sint",
                      },
                      "vero": {
                        element: "sequi",
                        property: "repudiandae",
                      },
                    },
                    collectionBindingProperties: {
                      field: "cum",
                      property: "dicta",
                    },
                    componentName: "earum",
                    concat: [
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "animi",
                      operand: "dolores",
                      operandType: "nam",
                      operator: "dicta",
                      property: "consequuntur",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "necessitatibus",
                    event: "nobis",
                    importedValue: "ipsa",
                    model: "ducimus",
                    property: "maiores",
                    type: "veritatis",
                    userAttribute: "quasi",
                    value: "laboriosam",
                  },
                  "pariatur": {
                    bindingProperties: {
                      field: "libero",
                      property: "excepturi",
                    },
                    bindings: {
                      "nemo": {
                        element: "aliquam",
                        property: "nostrum",
                      },
                      "doloribus": {
                        element: "eligendi",
                        property: "sint",
                      },
                      "enim": {
                        element: "hic",
                        property: "animi",
                      },
                    },
                    collectionBindingProperties: {
                      field: "quas",
                      property: "totam",
                    },
                    componentName: "molestias",
                    concat: [
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "eaque",
                      operand: "saepe",
                      operandType: "architecto",
                      operator: "quos",
                      property: "iste",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "assumenda",
                    event: "tempore",
                    importedValue: "libero",
                    model: "velit",
                    property: "doloremque",
                    type: "delectus",
                    userAttribute: "impedit",
                    value: "cum",
                  },
                },
                global: {
                  bindingProperties: {
                    field: "ipsum",
                    property: "adipisci",
                  },
                  bindings: {
                    "deserunt": {
                      element: "doloremque",
                      property: "quis",
                    },
                    "veniam": {
                      element: "libero",
                      property: "architecto",
                    },
                    "cupiditate": {
                      element: "molestiae",
                      property: "eligendi",
                    },
                    "possimus": {
                      element: "non",
                      property: "magnam",
                    },
                  },
                  collectionBindingProperties: {
                    field: "itaque",
                    property: "sed",
                  },
                  componentName: "asperiores",
                  concat: [
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "consequuntur",
                    operand: "facere",
                    operandType: "laudantium",
                    operator: "odit",
                    property: "pariatur",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "amet",
                  event: "exercitationem",
                  importedValue: "ab",
                  model: "velit",
                  property: "facilis",
                  type: "tempore",
                  userAttribute: "nisi",
                  value: "voluptatibus",
                },
                id: {
                  bindingProperties: {
                    field: "quaerat",
                    property: "blanditiis",
                  },
                  bindings: {
                    "nisi": {
                      element: "quis",
                      property: "nisi",
                    },
                    "libero": {
                      element: "minus",
                      property: "facere",
                    },
                    "facilis": {
                      element: "ipsum",
                      property: "ad",
                    },
                  },
                  collectionBindingProperties: {
                    field: "voluptatibus",
                    property: "voluptatibus",
                  },
                  componentName: "consequuntur",
                  concat: [
                    {},
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "labore",
                    operand: "rerum",
                    operandType: "eos",
                    operator: "reprehenderit",
                    property: "nostrum",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "neque",
                  event: "iusto",
                  importedValue: "est",
                  model: "rem",
                  property: "eligendi",
                  type: "fugiat",
                  userAttribute: "unde",
                  value: "officiis",
                },
                model: "ducimus",
                state: {
                  componentName: "dolor",
                  property: "dicta",
                  set: {
                    bindingProperties: {
                      field: "error",
                      property: "porro",
                    },
                    bindings: {
                      "dignissimos": {
                        element: "esse",
                        property: "fugiat",
                      },
                    },
                    collectionBindingProperties: {
                      field: "ad",
                      property: "aspernatur",
                    },
                    componentName: "enim",
                    concat: [
                      {},
                      {},
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "iusto",
                      operand: "dignissimos",
                      operandType: "libero",
                      operator: "illo",
                      property: "ab",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "incidunt",
                    event: "accusamus",
                    importedValue: "saepe",
                    model: "tempore",
                    property: "veniam",
                    type: "eos",
                    userAttribute: "reiciendis",
                    value: "earum",
                  },
                },
                target: {
                  bindingProperties: {
                    field: "reprehenderit",
                    property: "praesentium",
                  },
                  bindings: {
                    "repellat": {
                      element: "quisquam",
                      property: "sequi",
                    },
                    "nihil": {
                      element: "deleniti",
                      property: "illo",
                    },
                  },
                  collectionBindingProperties: {
                    field: "labore",
                    property: "assumenda",
                  },
                  componentName: "aliquam",
                  concat: [
                    {},
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "provident",
                    operand: "laudantium",
                    operandType: "repudiandae",
                    operator: "consequatur",
                    property: "maxime",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "aspernatur",
                  event: "nam",
                  importedValue: "expedita",
                  model: "quas",
                  property: "provident",
                  type: "repudiandae",
                  userAttribute: "rerum",
                  value: "dignissimos",
                },
                type: {
                  bindingProperties: {
                    field: "corporis",
                    property: "vero",
                  },
                  bindings: {
                    "repellendus": {
                      element: "iure",
                      property: "dolorem",
                    },
                    "commodi": {
                      element: "impedit",
                      property: "commodi",
                    },
                    "aut": {
                      element: "voluptatem",
                      property: "ad",
                    },
                  },
                  collectionBindingProperties: {
                    field: "quae",
                    property: "amet",
                  },
                  componentName: "illum",
                  concat: [
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "quidem",
                    operand: "cum",
                    operandType: "amet",
                    operator: "quasi",
                    property: "dicta",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "laudantium",
                  event: "doloremque",
                  importedValue: "earum",
                  model: "iusto",
                  property: "amet",
                  type: "provident",
                  userAttribute: "dolorum",
                  value: "necessitatibus",
                },
                url: {
                  bindingProperties: {
                    field: "provident",
                    property: "repudiandae",
                  },
                  bindings: {
                    "nemo": {
                      element: "molestiae",
                      property: "itaque",
                    },
                  },
                  collectionBindingProperties: {
                    field: "facilis",
                    property: "corrupti",
                  },
                  componentName: "aperiam",
                  concat: [
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "accusamus",
                    operand: "eos",
                    operandType: "totam",
                    operator: "dicta",
                    property: "voluptatem",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "velit",
                  event: "dolor",
                  importedValue: "sunt",
                  model: "a",
                  property: "dolor",
                  type: "occaecati",
                  userAttribute: "atque",
                  value: "beatae",
                },
              },
            },
          },
          name: "at",
          properties: "labore",
          sourceId: "minus",
        },
        {
          children: [
            {},
            {},
          ],
          componentType: "voluptatem",
          events: {
            "rerum": {
              action: "ea",
              bindingEvent: "aperiam",
              parameters: {
                anchor: {
                  bindingProperties: {
                    field: "dignissimos",
                    property: "repellat",
                  },
                  bindings: {
                    "porro": {
                      element: "provident",
                      property: "consectetur",
                    },
                  },
                  collectionBindingProperties: {
                    field: "eligendi",
                    property: "dignissimos",
                  },
                  componentName: "consectetur",
                  concat: [
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "natus",
                    operand: "temporibus",
                    operandType: "officia",
                    operator: "amet",
                    property: "tenetur",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "aspernatur",
                  event: "quo",
                  importedValue: "itaque",
                  model: "illum",
                  property: "laborum",
                  type: "dignissimos",
                  userAttribute: "vero",
                  value: "qui",
                },
                fields: {
                  "repellat": {
                    bindingProperties: {
                      field: "explicabo",
                      property: "explicabo",
                    },
                    bindings: {
                      "nihil": {
                        element: "non",
                        property: "ab",
                      },
                      "illo": {
                        element: "hic",
                        property: "deserunt",
                      },
                    },
                    collectionBindingProperties: {
                      field: "delectus",
                      property: "non",
                    },
                    componentName: "distinctio",
                    concat: [
                      {},
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "exercitationem",
                      operand: "labore",
                      operandType: "numquam",
                      operator: "repudiandae",
                      property: "modi",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "in",
                    event: "explicabo",
                    importedValue: "accusamus",
                    model: "rem",
                    property: "aperiam",
                    type: "odit",
                    userAttribute: "deleniti",
                    value: "enim",
                  },
                },
                global: {
                  bindingProperties: {
                    field: "voluptate",
                    property: "similique",
                  },
                  bindings: {
                    "libero": {
                      element: "magnam",
                      property: "sit",
                    },
                    "modi": {
                      element: "eum",
                      property: "nesciunt",
                    },
                  },
                  collectionBindingProperties: {
                    field: "mollitia",
                    property: "dignissimos",
                  },
                  componentName: "fugiat",
                  concat: [
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "molestiae",
                    operand: "veniam",
                    operandType: "reiciendis",
                    operator: "ab",
                    property: "modi",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "aut",
                  event: "aut",
                  importedValue: "eveniet",
                  model: "odio",
                  property: "commodi",
                  type: "numquam",
                  userAttribute: "dolorum",
                  value: "possimus",
                },
                id: {
                  bindingProperties: {
                    field: "voluptate",
                    property: "consectetur",
                  },
                  bindings: {
                    "quaerat": {
                      element: "itaque",
                      property: "minus",
                    },
                  },
                  collectionBindingProperties: {
                    field: "sunt",
                    property: "distinctio",
                  },
                  componentName: "iusto",
                  concat: [
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "et",
                    operand: "facilis",
                    operandType: "amet",
                    operator: "autem",
                    property: "fuga",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "alias",
                  event: "rem",
                  importedValue: "aut",
                  model: "quos",
                  property: "laudantium",
                  type: "repellendus",
                  userAttribute: "veritatis",
                  value: "quae",
                },
                model: "eaque",
                state: {
                  componentName: "saepe",
                  property: "delectus",
                  set: {
                    bindingProperties: {
                      field: "mollitia",
                      property: "nulla",
                    },
                    bindings: {
                      "sed": {
                        element: "voluptatem",
                        property: "alias",
                      },
                      "eveniet": {
                        element: "hic",
                        property: "voluptatem",
                      },
                      "incidunt": {
                        element: "qui",
                        property: "qui",
                      },
                    },
                    collectionBindingProperties: {
                      field: "necessitatibus",
                      property: "harum",
                    },
                    componentName: "explicabo",
                    concat: [
                      {},
                    ],
                    condition: {
                      else: {},
                      field: "aliquid",
                      operand: "modi",
                      operandType: "optio",
                      operator: "voluptatibus",
                      property: "molestias",
                      then: {},
                    },
                    configured: false,
                    defaultValue: "officia",
                    event: "libero",
                    importedValue: "totam",
                    model: "sequi",
                    property: "aliquid",
                    type: "ea",
                    userAttribute: "impedit",
                    value: "ducimus",
                  },
                },
                target: {
                  bindingProperties: {
                    field: "odit",
                    property: "velit",
                  },
                  bindings: {
                    "repellat": {
                      element: "nulla",
                      property: "laborum",
                    },
                    "natus": {
                      element: "accusamus",
                      property: "doloremque",
                    },
                    "nisi": {
                      element: "rerum",
                      property: "recusandae",
                    },
                    "voluptates": {
                      element: "non",
                      property: "rem",
                    },
                  },
                  collectionBindingProperties: {
                    field: "quia",
                    property: "ullam",
                  },
                  componentName: "quisquam",
                  concat: [
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "voluptatibus",
                    operand: "eligendi",
                    operandType: "quae",
                    operator: "officiis",
                    property: "architecto",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "architecto",
                  event: "enim",
                  importedValue: "optio",
                  model: "rem",
                  property: "perferendis",
                  type: "facilis",
                  userAttribute: "reiciendis",
                  value: "a",
                },
                type: {
                  bindingProperties: {
                    field: "iste",
                    property: "dicta",
                  },
                  bindings: {
                    "ullam": {
                      element: "dolore",
                      property: "modi",
                    },
                    "itaque": {
                      element: "maxime",
                      property: "modi",
                    },
                    "consequuntur": {
                      element: "assumenda",
                      property: "vero",
                    },
                  },
                  collectionBindingProperties: {
                    field: "doloribus",
                    property: "impedit",
                  },
                  componentName: "porro",
                  concat: [
                    {},
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "totam",
                    operand: "reiciendis",
                    operandType: "ab",
                    operator: "sint",
                    property: "nihil",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "esse",
                  event: "iure",
                  importedValue: "odio",
                  model: "nesciunt",
                  property: "debitis",
                  type: "vel",
                  userAttribute: "neque",
                  value: "corporis",
                },
                url: {
                  bindingProperties: {
                    field: "voluptas",
                    property: "consequuntur",
                  },
                  bindings: {
                    "reprehenderit": {
                      element: "distinctio",
                      property: "eius",
                    },
                    "ipsa": {
                      element: "rem",
                      property: "maiores",
                    },
                    "accusantium": {
                      element: "veniam",
                      property: "saepe",
                    },
                  },
                  collectionBindingProperties: {
                    field: "neque",
                    property: "facere",
                  },
                  componentName: "aliquam",
                  concat: [
                    {},
                    {},
                    {},
                  ],
                  condition: {
                    else: {},
                    field: "doloribus",
                    operand: "fugiat",
                    operandType: "est",
                    operator: "delectus",
                    property: "velit",
                    then: {},
                  },
                  configured: false,
                  defaultValue: "vitae",
                  event: "nesciunt",
                  importedValue: "similique",
                  model: "illo",
                  property: "repellat",
                  type: "nemo",
                  userAttribute: "doloribus",
                  value: "possimus",
                },
              },
            },
          },
          name: "unde",
          properties: "incidunt",
          sourceId: "explicabo",
        },
      ],
      collectionProperties: {
        "cupiditate": {
          identifiers: [
            "alias",
            "quidem",
            "nesciunt",
            "commodi",
          ],
          model: "sapiente",
          predicate: {
            and: [
              {},
            ],
            field: "veniam",
            operand: "debitis",
            operator: "officia",
            or: [
              {},
              {},
              {},
            ],
          },
          sort: [
            {
              direction: SortDirectionEnum.Asc,
              field: "tenetur",
            },
            {
              direction: SortDirectionEnum.Asc,
              field: "libero",
            },
          ],
        },
        "in": {
          identifiers: [
            "ex",
            "minus",
          ],
          model: "ab",
          predicate: {
            and: [
              {},
            ],
            field: "hic",
            operand: "nisi",
            operator: "quisquam",
            or: [
              {},
            ],
          },
          sort: [
            {
              direction: SortDirectionEnum.Desc,
              field: "minima",
            },
            {
              direction: SortDirectionEnum.Asc,
              field: "qui",
            },
          ],
        },
      },
      componentType: "aliquid",
      events: {
        "incidunt": {
          action: "adipisci",
          bindingEvent: "praesentium",
          parameters: {
            anchor: {
              bindingProperties: {
                field: "dolor",
                property: "exercitationem",
              },
              bindings: {
                "facilis": {
                  element: "impedit",
                  property: "sit",
                },
                "nemo": {
                  element: "culpa",
                  property: "consequuntur",
                },
                "amet": {
                  element: "deserunt",
                  property: "modi",
                },
              },
              collectionBindingProperties: {
                field: "veniam",
                property: "quod",
              },
              componentName: "itaque",
              concat: [
                {},
                {},
                {},
                {},
              ],
              condition: {
                else: {},
                field: "quisquam",
                operand: "enim",
                operandType: "doloribus",
                operator: "assumenda",
                property: "officiis",
                then: {},
              },
              configured: false,
              defaultValue: "architecto",
              event: "alias",
              importedValue: "culpa",
              model: "ipsa",
              property: "nobis",
              type: "necessitatibus",
              userAttribute: "quia",
              value: "dicta",
            },
            fields: {
              "perspiciatis": {
                bindingProperties: {
                  field: "debitis",
                  property: "ullam",
                },
                bindings: {
                  "accusantium": {
                    element: "perferendis",
                    property: "veritatis",
                  },
                },
                collectionBindingProperties: {
                  field: "provident",
                  property: "cumque",
                },
                componentName: "iure",
                concat: [
                  {},
                  {},
                  {},
                  {},
                ],
                condition: {
                  else: {},
                  field: "quod",
                  operand: "nemo",
                  operandType: "recusandae",
                  operator: "velit",
                  property: "magnam",
                  then: {},
                },
                configured: false,
                defaultValue: "dignissimos",
                event: "laboriosam",
                importedValue: "sed",
                model: "odio",
                property: "natus",
                type: "provident",
                userAttribute: "cum",
                value: "doloribus",
              },
              "facilis": {
                bindingProperties: {
                  field: "quidem",
                  property: "itaque",
                },
                bindings: {
                  "unde": {
                    element: "modi",
                    property: "perspiciatis",
                  },
                  "hic": {
                    element: "cum",
                    property: "aspernatur",
                  },
                },
                collectionBindingProperties: {
                  field: "libero",
                  property: "nam",
                },
                componentName: "incidunt",
                concat: [
                  {},
                  {},
                  {},
                  {},
                ],
                condition: {
                  else: {},
                  field: "quod",
                  operand: "id",
                  operandType: "saepe",
                  operator: "autem",
                  property: "quo",
                  then: {},
                },
                configured: false,
                defaultValue: "nesciunt",
                event: "illum",
                importedValue: "nemo",
                model: "illum",
                property: "facilis",
                type: "non",
                userAttribute: "mollitia",
                value: "assumenda",
              },
            },
            global: {
              bindingProperties: {
                field: "recusandae",
                property: "distinctio",
              },
              bindings: {
                "ad": {
                  element: "facere",
                  property: "laborum",
                },
                "eveniet": {
                  element: "laborum",
                  property: "incidunt",
                },
                "maxime": {
                  element: "ipsam",
                  property: "alias",
                },
                "suscipit": {
                  element: "deserunt",
                  property: "molestias",
                },
              },
              collectionBindingProperties: {
                field: "laborum",
                property: "est",
              },
              componentName: "occaecati",
              concat: [
                {},
                {},
              ],
              condition: {
                else: {},
                field: "quo",
                operand: "perferendis",
                operandType: "fugit",
                operator: "aliquid",
                property: "magnam",
                then: {},
              },
              configured: false,
              defaultValue: "quaerat",
              event: "eligendi",
              importedValue: "hic",
              model: "nostrum",
              property: "officiis",
              type: "unde",
              userAttribute: "nulla",
              value: "error",
            },
            id: {
              bindingProperties: {
                field: "mollitia",
                property: "magnam",
              },
              bindings: {
                "esse": {
                  element: "corrupti",
                  property: "fuga",
                },
                "facere": {
                  element: "impedit",
                  property: "quasi",
                },
              },
              collectionBindingProperties: {
                field: "deserunt",
                property: "quod",
              },
              componentName: "laboriosam",
              concat: [
                {},
              ],
              condition: {
                else: {},
                field: "voluptatem",
                operand: "facere",
                operandType: "necessitatibus",
                operator: "maxime",
                property: "consequatur",
                then: {},
              },
              configured: false,
              defaultValue: "eaque",
              event: "architecto",
              importedValue: "similique",
              model: "porro",
              property: "blanditiis",
              type: "quae",
              userAttribute: "magni",
              value: "officiis",
            },
            model: "sed",
            state: {
              componentName: "necessitatibus",
              property: "impedit",
              set: {
                bindingProperties: {
                  field: "ipsa",
                  property: "excepturi",
                },
                bindings: {
                  "maiores": {
                    element: "laudantium",
                    property: "maiores",
                  },
                  "alias": {
                    element: "asperiores",
                    property: "rem",
                  },
                  "dicta": {
                    element: "suscipit",
                    property: "earum",
                  },
                  "doloribus": {
                    element: "velit",
                    property: "eius",
                  },
                },
                collectionBindingProperties: {
                  field: "esse",
                  property: "in",
                },
                componentName: "eligendi",
                concat: [
                  {},
                ],
                condition: {
                  else: {},
                  field: "neque",
                  operand: "vero",
                  operandType: "excepturi",
                  operator: "accusantium",
                  property: "qui",
                  then: {},
                },
                configured: false,
                defaultValue: "impedit",
                event: "beatae",
                importedValue: "incidunt",
                model: "dicta",
                property: "odit",
                type: "corporis",
                userAttribute: "rerum",
                value: "alias",
              },
            },
            target: {
              bindingProperties: {
                field: "error",
                property: "vel",
              },
              bindings: {
                "id": {
                  element: "laboriosam",
                  property: "ex",
                },
              },
              collectionBindingProperties: {
                field: "quas",
                property: "veritatis",
              },
              componentName: "ullam",
              concat: [
                {},
              ],
              condition: {
                else: {},
                field: "similique",
                operand: "incidunt",
                operandType: "quam",
                operator: "magni",
                property: "deserunt",
                then: {},
              },
              configured: false,
              defaultValue: "delectus",
              event: "omnis",
              importedValue: "sed",
              model: "nesciunt",
              property: "maxime",
              type: "quis",
              userAttribute: "cupiditate",
              value: "aliquam",
            },
            type: {
              bindingProperties: {
                field: "excepturi",
                property: "maiores",
              },
              bindings: {
                "velit": {
                  element: "reiciendis",
                  property: "amet",
                },
                "nemo": {
                  element: "ipsa",
                  property: "quisquam",
                },
                "tenetur": {
                  element: "quas",
                  property: "molestiae",
                },
              },
              collectionBindingProperties: {
                field: "aliquid",
                property: "asperiores",
              },
              componentName: "a",
              concat: [
                {},
                {},
                {},
              ],
              condition: {
                else: {},
                field: "perspiciatis",
                operand: "accusantium",
                operandType: "dicta",
                operator: "minus",
                property: "commodi",
                then: {},
              },
              configured: false,
              defaultValue: "eveniet",
              event: "porro",
              importedValue: "tempore",
              model: "quidem",
              property: "modi",
              type: "voluptates",
              userAttribute: "fugit",
              value: "eius",
            },
            url: {
              bindingProperties: {
                field: "sequi",
                property: "eligendi",
              },
              bindings: {
                "esse": {
                  element: "blanditiis",
                  property: "sint",
                },
                "repellat": {
                  element: "a",
                  property: "animi",
                },
                "maiores": {
                  element: "itaque",
                  property: "nulla",
                },
                "deserunt": {
                  element: "corporis",
                  property: "velit",
                },
              },
              collectionBindingProperties: {
                field: "officiis",
                property: "enim",
              },
              componentName: "officia",
              concat: [
                {},
                {},
                {},
                {},
              ],
              condition: {
                else: {},
                field: "eum",
                operand: "repudiandae",
                operandType: "accusantium",
                operator: "officia",
                property: "impedit",
                then: {},
              },
              configured: false,
              defaultValue: "quasi",
              event: "blanditiis",
              importedValue: "eius",
              model: "quisquam",
              property: "eos",
              type: "nobis",
              userAttribute: "natus",
              value: "minus",
            },
          },
        },
      },
      name: "quia",
      overrides: {
        "reprehenderit": {
          "quos": "corrupti",
          "amet": "molestiae",
          "amet": "laborum",
          "modi": "perferendis",
        },
        "necessitatibus": {
          "molestias": "dolore",
        },
      },
      properties: "sunt",
      schemaVersion: "maiores",
      sourceId: "neque",
      tags: {
        "earum": "veniam",
      },
      variants: [
        {
          overrides: {
            "exercitationem": {
              "nihil": "ad",
              "nisi": "tenetur",
            },
          },
          variantValues: {
            "quibusdam": "nemo",
            "suscipit": "pariatur",
          },
        },
        {
          overrides: {
            "quidem": {
              "perferendis": "id",
              "sapiente": "sed",
              "possimus": "repellat",
              "repudiandae": "architecto",
            },
          },
          variantValues: {
            "pariatur": "harum",
          },
        },
      ],
    },
  },
  xAmzAlgorithm: "dolore",
  xAmzContentSha256: "voluptatibus",
  xAmzCredential: "iure",
  xAmzDate: "explicabo",
  xAmzSecurityToken: "minus",
  xAmzSignature: "soluta",
  xAmzSignedHeaders: "dolorum",
  appId: "velit",
  clientToken: "earum",
  environmentName: "praesentium",
};

sdk.createComponent(req).then((res: CreateComponentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createComponent` - Creates a new component for an Amplify app.
* `createForm` - Creates a new form for an Amplify app.
* `createTheme` - Creates a theme to apply to the components in an Amplify app.
* `deleteComponent` - Deletes a component from an Amplify app.
* `deleteForm` - Deletes a form from an Amplify app.
* `deleteTheme` - Deletes a theme from an Amplify app.
* `exchangeCodeForToken` - Exchanges an access code for a token.
* `exportComponents` - Exports component configurations to code that is ready to integrate into an Amplify app.
* `exportForms` - Exports form configurations to code that is ready to integrate into an Amplify app.
* `exportThemes` - Exports theme configurations to code that is ready to integrate into an Amplify app.
* `getComponent` - Returns an existing component for an Amplify app.
* `getForm` - Returns an existing form for an Amplify app.
* `getMetadata` - Returns existing metadata for an Amplify app.
* `getTheme` - Returns an existing theme for an Amplify app.
* `listComponents` - Retrieves a list of components for a specified Amplify app and backend environment.
* `listForms` - Retrieves a list of forms for a specified Amplify app and backend environment.
* `listThemes` - Retrieves a list of themes for a specified Amplify app and backend environment.
* `putMetadataFlag` - Stores the metadata information about a feature on a form or view.
* `refreshToken` - Refreshes a previously issued access token that might have expired.
* `updateComponent` - Updates an existing component.
* `updateForm` - Updates an existing form.
* `updateTheme` - Updates an existing theme.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

