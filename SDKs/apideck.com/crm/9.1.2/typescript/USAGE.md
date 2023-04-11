<!-- Start SDK Example Usage -->
```typescript
import {
  ActivitiesAddRequest,
  ActivitiesAddResponse
} from "openapi/dist/sdk/models/operations";
import {
  ActivityShowAsEnum,
  ActivityTypeEnum,
  AddressTypeEnum,
  ActivityAttendeeStatusEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ActivitiesAddRequest = {
  activityInput: {
    accountId: "12345",
    activityDate: "2021-05-01",
    activityDatetime: "2021-05-01T12:00:00.000Z",
    allDayEvent: false,
    archived: false,
    assetId: "12345",
    attendees: [
      {
        emailAddress: "elon@musk.com",
        firstName: "Elon",
        isOrganizer: true,
        lastName: "Musk",
        middleName: "D.",
        name: "Elon Musk",
        prefix: "Mr.",
        status: ActivityAttendeeStatusEnum.Accepted,
        suffix: "PhD",
      },
      {
        emailAddress: "elon@musk.com",
        firstName: "Elon",
        isOrganizer: true,
        lastName: "Musk",
        middleName: "D.",
        name: "Elon Musk",
        prefix: "Mr.",
        status: ActivityAttendeeStatusEnum.Accepted,
        suffix: "PhD",
      },
      {
        emailAddress: "elon@musk.com",
        firstName: "Elon",
        isOrganizer: true,
        lastName: "Musk",
        middleName: "D.",
        name: "Elon Musk",
        prefix: "Mr.",
        status: ActivityAttendeeStatusEnum.Accepted,
        suffix: "PhD",
      },
    ],
    campaignId: "12345",
    caseId: "12345",
    child: false,
    companyId: "12345",
    contactId: "12345",
    contractId: "12345",
    customFields: [
      {
        description: "Employee Level",
        id: "2389328923893298",
        name: "employee_level",
        value: true,
      },
      {
        description: "Employee Level",
        id: "2389328923893298",
        name: "employee_level",
        value: [
          "nulla",
          "corrupti",
          "illum",
        ],
      },
      {
        description: "Employee Level",
        id: "2389328923893298",
        name: "employee_level",
        value: 10,
      },
    ],
    customObjectId: "12345",
    deleted: false,
    description: "More info about the meeting",
    done: false,
    durationSeconds: 1800,
    endDate: "2021-05-01",
    endDatetime: "2021-05-01T12:30:00.000Z",
    eventSubType: "debrief",
    groupEvent: true,
    groupEventType: "Proposed",
    leadId: "12345",
    location: "Space",
    locationAddress: {
      city: "San Francisco",
      contactName: "Elon Musk",
      country: "US",
      county: "Santa Clara",
      email: "elon@musk.com",
      fax: "122-111-1111",
      id: "123",
      latitude: "40.759211",
      line1: "Main street",
      line2: "apt #",
      line3: "Suite #",
      line4: "delivery instructions",
      longitude: "-73.984638",
      name: "HQ US",
      phoneNumber: "111-111-1111",
      postalCode: "94104",
      rowVersion: "1-12345",
      salutation: "Mr",
      state: "CA",
      streetNumber: "25",
      string: "25 Spring Street, Blackburn, VIC 3130",
      type: AddressTypeEnum.Primary,
      website: "https://elonmusk.com",
    },
    note: "An internal note about the meeting",
    opportunityId: "12345",
    ownerId: "12345",
    private: true,
    productId: "12345",
    recurrent: false,
    reminderDatetime: "2021-05-01T17:00:00.000Z",
    reminderSet: false,
    showAs: ActivityShowAsEnum.Busy,
    solutionId: "12345",
    startDatetime: "2021-05-01T12:00:00.000Z",
    title: "Meeting",
    type: ActivityTypeEnum.Meeting,
    userId: "12345",
    videoConferenceId: "zoom:88120759396",
    videoConferenceUrl: "https://us02web.zoom.us/j/88120759396",
  },
  raw: false,
  xApideckAppId: "error",
  xApideckConsumerId: "deserunt",
  xApideckServiceId: "suscipit",
};

sdk.activities.activitiesAdd(req).then((res: ActivitiesAddResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->