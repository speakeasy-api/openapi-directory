<!-- Start SDK Example Usage -->
```typescript
import {
  CreateCallAnalyticsCategoryRequest,
  CreateCallAnalyticsCategoryResponse,
  CreateCallAnalyticsCategoryXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  TranscriptFilterTypeEnum,
  ParticipantRoleEnum,
  SentimentValueEnum,
  InputTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateCallAnalyticsCategoryRequest = {
  createCallAnalyticsCategoryRequest: {
    categoryName: "corrupti",
    inputType: InputTypeEnum.PostCall,
    rules: [
      {
        interruptionFilter: {
          absoluteTimeRange: {
            endTime: 844266,
            first: 602763,
            last: 857946,
            startTime: 544883,
          },
          negate: false,
          participantRole: ParticipantRoleEnum.Customer,
          relativeTimeRange: {
            endPercentage: 423655,
            first: 623564,
            last: 645894,
            startPercentage: 384382,
          },
          threshold: 437587,
        },
        nonTalkTimeFilter: {
          absoluteTimeRange: {
            endTime: 297534,
            first: 891773,
            last: 56713,
            startTime: 963663,
          },
          negate: false,
          relativeTimeRange: {
            endPercentage: 272656,
            first: 383441,
            last: 477665,
            startPercentage: 791725,
          },
          threshold: 812169,
        },
        sentimentFilter: {
          absoluteTimeRange: {
            endTime: 528895,
            first: 479977,
            last: 568045,
            startTime: 392785,
          },
          negate: false,
          participantRole: ParticipantRoleEnum.Customer,
          relativeTimeRange: {
            endPercentage: 836079,
            first: 71036,
            last: 337396,
            startPercentage: 87129,
          },
          sentiments: [
            SentimentValueEnum.Positive,
            SentimentValueEnum.Negative,
            SentimentValueEnum.Mixed,
          ],
        },
        transcriptFilter: {
          absoluteTimeRange: {
            endTime: 957156,
            first: 778157,
            last: 140350,
            startTime: 870013,
          },
          negate: false,
          participantRole: ParticipantRoleEnum.Customer,
          relativeTimeRange: {
            endPercentage: 978619,
            first: 473608,
            last: 799159,
            startPercentage: 800911,
          },
          targets: [
            "totam",
            "porro",
          ],
          transcriptFilterType: TranscriptFilterTypeEnum.Exact,
        },
      },
      {
        interruptionFilter: {
          absoluteTimeRange: {
            endTime: 678880,
            first: 118274,
            last: 720633,
            startTime: 639921,
          },
          negate: false,
          participantRole: ParticipantRoleEnum.Customer,
          relativeTimeRange: {
            endPercentage: 143353,
            first: 537373,
            last: 944669,
            startPercentage: 758616,
          },
          threshold: 521848,
        },
        nonTalkTimeFilter: {
          absoluteTimeRange: {
            endTime: 105907,
            first: 414662,
            last: 473600,
            startTime: 264555,
          },
          negate: false,
          relativeTimeRange: {
            endPercentage: 186332,
            first: 774234,
            last: 736918,
            startPercentage: 456150,
          },
          threshold: 216550,
        },
        sentimentFilter: {
          absoluteTimeRange: {
            endTime: 568434,
            first: 135218,
            last: 18789,
            startTime: 324141,
          },
          negate: false,
          participantRole: ParticipantRoleEnum.Customer,
          relativeTimeRange: {
            endPercentage: 149675,
            first: 612096,
            last: 222321,
            startPercentage: 616934,
          },
          sentiments: [
            SentimentValueEnum.Mixed,
            SentimentValueEnum.Mixed,
          ],
        },
        transcriptFilter: {
          absoluteTimeRange: {
            endTime: 681820,
            first: 449950,
            last: 359508,
            startTime: 613064,
          },
          negate: false,
          participantRole: ParticipantRoleEnum.Agent,
          relativeTimeRange: {
            endPercentage: 902349,
            first: 697631,
            last: 99280,
            startPercentage: 60225,
          },
          targets: [
            "est",
            "mollitia",
            "laborum",
            "dolores",
          ],
          transcriptFilterType: TranscriptFilterTypeEnum.Exact,
        },
      },
      {
        interruptionFilter: {
          absoluteTimeRange: {
            endTime: 210382,
            first: 358152,
            last: 128926,
            startTime: 750686,
          },
          negate: false,
          participantRole: ParticipantRoleEnum.Agent,
          relativeTimeRange: {
            endPercentage: 607831,
            first: 363711,
            last: 325047,
            startPercentage: 570197,
          },
          threshold: 38425,
        },
        nonTalkTimeFilter: {
          absoluteTimeRange: {
            endTime: 438601,
            first: 634274,
            last: 988374,
            startTime: 958950,
          },
          negate: false,
          relativeTimeRange: {
            endPercentage: 102044,
            first: 652790,
            last: 208876,
            startPercentage: 635059,
          },
          threshold: 161309,
        },
        sentimentFilter: {
          absoluteTimeRange: {
            endTime: 995300,
            first: 653108,
            last: 581850,
            startTime: 253291,
          },
          negate: false,
          participantRole: ParticipantRoleEnum.Agent,
          relativeTimeRange: {
            endPercentage: 466311,
            first: 474697,
            last: 244425,
            startPercentage: 623510,
          },
          sentiments: [
            SentimentValueEnum.Negative,
          ],
        },
        transcriptFilter: {
          absoluteTimeRange: {
            endTime: 110375,
            first: 674752,
            last: 656330,
            startTime: 317202,
          },
          negate: false,
          participantRole: ParticipantRoleEnum.Agent,
          relativeTimeRange: {
            endPercentage: 778346,
            first: 196582,
            last: 949572,
            startPercentage: 368725,
          },
          targets: [
            "possimus",
            "aut",
            "quasi",
          ],
          transcriptFilterType: TranscriptFilterTypeEnum.Exact,
        },
      },
    ],
  },
  xAmzAlgorithm: "error",
  xAmzContentSha256: "temporibus",
  xAmzCredential: "laborum",
  xAmzDate: "quasi",
  xAmzSecurityToken: "reiciendis",
  xAmzSignature: "voluptatibus",
  xAmzSignedHeaders: "vero",
  xAmzTarget: CreateCallAnalyticsCategoryXAmzTargetEnum.TranscribeCreateCallAnalyticsCategory,
};

sdk.createCallAnalyticsCategory(req).then((res: CreateCallAnalyticsCategoryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->