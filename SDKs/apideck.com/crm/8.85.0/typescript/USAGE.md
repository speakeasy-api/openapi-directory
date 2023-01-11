<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ActivitiesAddRequest, ActivitiesAddResponse } from "openapi/src/sdk/models/operations";
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
    
const req: ActivitiesAddRequest = {
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
    accountId: "consequuntur",
    activityDate: "dolor",
    activityDatetime: "expedita",
    allDayEvent: true,
    archived: true,
    assetId: "et",
    attendees: [
      {
        emailAddress: "rerum",
        firstName: "dicta",
        isOrganizer: true,
        lastName: "voluptatum",
        middleName: "et",
        name: "ut",
        prefix: "dolorem",
        status: "tentative",
        suffix: "voluptate",
      },
    ],
    campaignId: "iste",
    caseId: "vitae",
    child: true,
    companyId: "dolores",
    contactId: "illum",
    contractId: "debitis",
    customFields: [
      {
        description: "odio",
        id: "dolore",
        name: "id",
        value: "aspernatur",
      },
      {
        description: "accusantium",
        id: "totam",
        name: "commodi",
        value: "quis",
      },
    ],
    customObjectId: "est",
    deleted: true,
    description: "odit",
    done: true,
    durationSeconds: 167566062957544642,
    endDate: "omnis",
    endDatetime: "aut",
    eventSubType: "illo",
    groupEvent: false,
    groupEventType: "officiis",
    leadId: "autem",
    location: "consectetur",
    locationAddress: {
      city: "nobis",
      contactName: "odio",
      country: "qui",
      county: "recusandae",
      email: "at",
      fax: "ipsum",
      id: "eveniet",
      latitude: "modi",
      line1: "sint",
      line2: "inventore",
      line3: "ut",
      line4: "exercitationem",
      longitude: "aut",
      name: "reprehenderit",
      phoneNumber: "tempore",
      postalCode: "maiores",
      rowVersion: "incidunt",
      salutation: "dolor",
      state: "beatae",
      streetNumber: "veritatis",
      string: "in",
      type: "billing",
      website: "omnis",
    },
    note: "ipsum",
    opportunityId: "ex",
    ownerId: "dolores",
    private: true,
    productId: "vel",
    recurrent: true,
    reminderDatetime: "mollitia",
    reminderSet: true,
    showAs: "busy",
    solutionId: "reprehenderit",
    startDatetime: "qui",
    title: "qui",
    type: "email",
    userId: "in",
    videoConferenceId: "autem",
    videoConferenceUrl: "qui",
  },
};

sdk.activities.activitiesAdd(req).then((res: ActivitiesAddResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->