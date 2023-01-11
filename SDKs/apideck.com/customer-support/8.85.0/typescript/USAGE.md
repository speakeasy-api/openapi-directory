<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CustomersAddRequest, CustomersAddResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CustomersAddRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    raw: false,
  },
  headers: {
    xApideckAppId: "voluptas",
    xApideckConsumerId: "culpa",
    xApideckServiceId: "expedita",
  },
  request: {
    addresses: [
      {
        city: "dolor",
        contactName: "expedita",
        country: "voluptas",
        county: "fugit",
        email: "et",
        fax: "nihil",
        id: "rerum",
        latitude: "dicta",
        line1: "debitis",
        line2: "voluptatum",
        line3: "et",
        line4: "ut",
        longitude: "dolorem",
        name: "et",
        phoneNumber: "voluptate",
        postalCode: "iste",
        rowVersion: "vitae",
        salutation: "totam",
        state: "dolores",
        streetNumber: "illum",
        string: "debitis",
        type: "secondary",
        website: "odio",
      },
      {
        city: "dolore",
        contactName: "id",
        country: "aspernatur",
        county: "accusantium",
        email: "totam",
        fax: "commodi",
        id: "quis",
        latitude: "est",
        line1: "aut",
        line2: "odit",
        line3: "non",
        line4: "voluptas",
        longitude: "omnis",
        name: "aut",
        phoneNumber: "illo",
        postalCode: "sed",
        rowVersion: "officiis",
        salutation: "autem",
        state: "consectetur",
        streetNumber: "nobis",
        string: "odio",
        type: "office",
        website: "recusandae",
      },
      {
        city: "at",
        contactName: "ipsum",
        country: "eveniet",
        county: "modi",
        email: "sint",
        fax: "inventore",
        id: "ut",
        latitude: "exercitationem",
        line1: "aut",
        line2: "reprehenderit",
        line3: "tempore",
        line4: "maiores",
        longitude: "incidunt",
        name: "dolor",
        phoneNumber: "beatae",
        postalCode: "veritatis",
        rowVersion: "in",
        salutation: "et",
        state: "omnis",
        streetNumber: "ipsum",
        string: "ex",
        type: "shipping",
        website: "placeat",
      },
    ],
    bankAccounts: {
      accountName: "vel",
      accountNumber: "rerum",
      accountType: "credit_card",
      bankCode: "voluptas",
      bic: "quam",
      branchIdentifier: "reprehenderit",
      bsbNumber: "qui",
      currency: "CVE",
      iban: "unde",
    },
    companyName: "in",
    currency: "XBB",
    emails: [
      {
        email: "ut",
        id: "itaque",
        type: "primary",
      },
    ],
    firstName: "neque",
    individual: true,
    lastName: "et",
    notes: "accusantium",
    phoneNumbers: [
      {
        areaCode: "architecto",
        countryCode: "quam",
        extension: "velit",
        id: "cumque",
        number: "soluta",
        type: "secondary",
      },
      {
        areaCode: "voluptates",
        countryCode: "magni",
        extension: "et",
        id: "optio",
        number: "qui",
        type: "direct-dial-in",
      },
    ],
    status: "unknown",
    taxNumber: "omnis",
  },
};

sdk.customers.customersAdd(req).then((res: CustomersAddResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->