<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { LeadsAddRequest, LeadsAddResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
    applicationId: {
      apiKey: "YOUR_API_KEY_HERE",
    },
    consumerId: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: LeadsAddRequest = {
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
    companyId: "vel",
    companyName: "rerum",
    contactId: "mollitia",
    currency: "FJD",
    customFields: [
      {
        description: "reprehenderit",
        id: "qui",
        name: "qui",
        value: "unde",
      },
    ],
    description: "in",
    emails: [
      {
        email: "qui",
        id: "ut",
        type: "work",
      },
      {
        email: "ab",
        id: "neque",
        type: "work",
      },
    ],
    fax: "et",
    firstName: "accusantium",
    language: "esse",
    lastName: "architecto",
    leadSource: "quam",
    monetaryAmount: 29.100000,
    name: "soluta",
    ownerId: "sunt",
    phoneNumbers: [
      {
        areaCode: "magni",
        countryCode: "et",
        extension: "optio",
        id: "qui",
        number: "earum",
        type: "home",
      },
      {
        areaCode: "omnis",
        countryCode: "ut",
        extension: "consequatur",
        id: "dolor",
        number: "commodi",
        type: "office",
      },
    ],
    prefix: "reprehenderit",
    socialLinks: [
      {
        id: "nostrum",
        type: "ut",
        url: "laboriosam",
      },
    ],
    status: "sed",
    tags: [
      "soluta",
    ],
    title: "aut",
    websites: [
      {
        id: "consequuntur",
        type: "work",
        url: "autem",
      },
      {
        id: "ipsa",
        type: "work",
        url: "doloremque",
      },
      {
        id: "perferendis",
        type: "secondary",
        url: "ratione",
      },
    ],
  },
};

sdk.leads.leadsAdd(req).then((res: LeadsAddResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->