# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/dlm/2018-01-12/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/dlm/2018-01-12/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateLifecyclePolicyRequest,
  CreateLifecyclePolicyResponse,
  CreateLifecyclePolicyRequestBodyStateEnum,
} from "openapi/dist/sdk/models/operations";
import {
  RetentionIntervalUnitValuesEnum,
  LocationValuesEnum,
  IntervalUnitValuesEnum,
  ResourceTypeValuesEnum,
  ResourceLocationValuesEnum,
  PolicyTypeValuesEnum,
  EventSourceValuesEnum,
  EventTypeValuesEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateLifecyclePolicyRequest = {
  requestBody: {
    description: "corrupti",
    executionRoleArn: "provident",
    policyDetails: {
      actions: [
        {
          crossRegionCopy: [
            {
              encryptionConfiguration: {
                cmkArn: "unde",
                encrypted: false,
              },
              retainRule: {
                interval: 857946,
                intervalUnit: RetentionIntervalUnitValuesEnum.Months,
              },
              target: "illum",
            },
            {
              encryptionConfiguration: {
                cmkArn: "vel",
                encrypted: false,
              },
              retainRule: {
                interval: 623564,
                intervalUnit: RetentionIntervalUnitValuesEnum.Months,
              },
              target: "suscipit",
            },
            {
              encryptionConfiguration: {
                cmkArn: "iure",
                encrypted: false,
              },
              retainRule: {
                interval: 297534,
                intervalUnit: RetentionIntervalUnitValuesEnum.Years,
              },
              target: "ipsa",
            },
            {
              encryptionConfiguration: {
                cmkArn: "delectus",
                encrypted: false,
              },
              retainRule: {
                interval: 272656,
                intervalUnit: RetentionIntervalUnitValuesEnum.Weeks,
              },
              target: "molestiae",
            },
          ],
          name: "minus",
        },
        {
          crossRegionCopy: [
            {
              encryptionConfiguration: {
                cmkArn: "voluptatum",
                encrypted: false,
              },
              retainRule: {
                interval: 479977,
                intervalUnit: RetentionIntervalUnitValuesEnum.Months,
              },
              target: "nisi",
            },
            {
              encryptionConfiguration: {
                cmkArn: "recusandae",
                encrypted: false,
              },
              retainRule: {
                interval: 836079,
                intervalUnit: RetentionIntervalUnitValuesEnum.Days,
              },
              target: "quis",
            },
            {
              encryptionConfiguration: {
                cmkArn: "veritatis",
                encrypted: false,
              },
              retainRule: {
                interval: 648172,
                intervalUnit: RetentionIntervalUnitValuesEnum.Days,
              },
              target: "ipsam",
            },
            {
              encryptionConfiguration: {
                cmkArn: "repellendus",
                encrypted: false,
              },
              retainRule: {
                interval: 957156,
                intervalUnit: RetentionIntervalUnitValuesEnum.Years,
              },
              target: "odit",
            },
          ],
          name: "at",
        },
        {
          crossRegionCopy: [
            {
              encryptionConfiguration: {
                cmkArn: "maiores",
                encrypted: false,
              },
              retainRule: {
                interval: 473608,
                intervalUnit: RetentionIntervalUnitValuesEnum.Years,
              },
              target: "quod",
            },
            {
              encryptionConfiguration: {
                cmkArn: "esse",
                encrypted: false,
              },
              retainRule: {
                interval: 520478,
                intervalUnit: RetentionIntervalUnitValuesEnum.Years,
              },
              target: "dolorum",
            },
            {
              encryptionConfiguration: {
                cmkArn: "dicta",
                encrypted: false,
              },
              retainRule: {
                interval: 720633,
                intervalUnit: RetentionIntervalUnitValuesEnum.Months,
              },
              target: "occaecati",
            },
            {
              encryptionConfiguration: {
                cmkArn: "fugit",
                encrypted: false,
              },
              retainRule: {
                interval: 537373,
                intervalUnit: RetentionIntervalUnitValuesEnum.Years,
              },
              target: "optio",
            },
          ],
          name: "totam",
        },
      ],
      eventSource: {
        parameters: {
          descriptionRegex: "beatae",
          eventType: EventTypeValuesEnum.ShareSnapshot,
          snapshotOwner: [
            "molestiae",
            "modi",
          ],
        },
        type: EventSourceValuesEnum.ManagedCwe,
      },
      parameters: {
        excludeBootVolume: false,
        excludeDataVolumeTags: [
          {
            key: "impedit",
            value: "cum",
          },
        ],
        noReboot: false,
      },
      policyType: PolicyTypeValuesEnum.ImageManagement,
      resourceLocations: [
        ResourceLocationValuesEnum.Outpost,
      ],
      resourceTypes: [
        ResourceTypeValuesEnum.Volume,
      ],
      schedules: [
        {
          archiveRule: {
            retainRule: {
              retentionArchiveTier: {
                count: 617636,
                interval: 149675,
                intervalUnit: RetentionIntervalUnitValuesEnum.Months,
              },
            },
          },
          copyTags: false,
          createRule: {
            cronExpression: "dolor",
            interval: 616934,
            intervalUnit: IntervalUnitValuesEnum.Hours,
            location: LocationValuesEnum.Cloud,
            times: [
              "saepe",
              "fuga",
              "in",
              "corporis",
            ],
          },
          crossRegionCopyRules: [
            {
              cmkArn: "iure",
              copyTags: false,
              deprecateRule: {
                interval: 902349,
                intervalUnit: RetentionIntervalUnitValuesEnum.Months,
              },
              encrypted: false,
              retainRule: {
                interval: 99280,
                intervalUnit: RetentionIntervalUnitValuesEnum.Days,
              },
              target: "reiciendis",
              targetRegion: "est",
            },
            {
              cmkArn: "mollitia",
              copyTags: false,
              deprecateRule: {
                interval: 670638,
                intervalUnit: RetentionIntervalUnitValuesEnum.Days,
              },
              encrypted: false,
              retainRule: {
                interval: 210382,
                intervalUnit: RetentionIntervalUnitValuesEnum.Weeks,
              },
              target: "explicabo",
              targetRegion: "nobis",
            },
            {
              cmkArn: "enim",
              copyTags: false,
              deprecateRule: {
                interval: 607831,
                intervalUnit: RetentionIntervalUnitValuesEnum.Weeks,
              },
              encrypted: false,
              retainRule: {
                interval: 325047,
                intervalUnit: RetentionIntervalUnitValuesEnum.Months,
              },
              target: "accusantium",
              targetRegion: "iure",
            },
          ],
          deprecateRule: {
            count: 634274,
            interval: 988374,
            intervalUnit: RetentionIntervalUnitValuesEnum.Years,
          },
          fastRestoreRule: {
            availabilityZones: [
              "mollitia",
            ],
            count: 208876,
            interval: 635059,
            intervalUnit: RetentionIntervalUnitValuesEnum.Days,
          },
          name: "repellat",
          retainRule: {
            count: 653108,
            interval: 581850,
            intervalUnit: RetentionIntervalUnitValuesEnum.Weeks,
          },
          shareRules: [
            {
              targetAccounts: [
                "molestiae",
                "velit",
              ],
              unshareInterval: 623510,
              unshareIntervalUnit: RetentionIntervalUnitValuesEnum.Days,
            },
            {
              targetAccounts: [
                "vitae",
                "laborum",
              ],
              unshareInterval: 656330,
              unshareIntervalUnit: RetentionIntervalUnitValuesEnum.Weeks,
            },
          ],
          tagsToAdd: [
            {
              key: "quo",
              value: "sequi",
            },
          ],
          variableTags: [
            {
              key: "ipsam",
              value: "id",
            },
            {
              key: "possimus",
              value: "aut",
            },
            {
              key: "quasi",
              value: "error",
            },
            {
              key: "temporibus",
              value: "laborum",
            },
          ],
        },
        {
          archiveRule: {
            retainRule: {
              retentionArchiveTier: {
                count: 96098,
                interval: 971945,
                intervalUnit: RetentionIntervalUnitValuesEnum.Years,
              },
            },
          },
          copyTags: false,
          createRule: {
            cronExpression: "vero",
            interval: 468651,
            intervalUnit: IntervalUnitValuesEnum.Hours,
            location: LocationValuesEnum.OutpostLocal,
            times: [
              "ipsa",
              "omnis",
              "voluptate",
              "cum",
            ],
          },
          crossRegionCopyRules: [
            {
              cmkArn: "doloremque",
              copyTags: false,
              deprecateRule: {
                interval: 441711,
                intervalUnit: RetentionIntervalUnitValuesEnum.Weeks,
              },
              encrypted: false,
              retainRule: {
                interval: 979587,
                intervalUnit: RetentionIntervalUnitValuesEnum.Days,
              },
              target: "corporis",
              targetRegion: "dolore",
            },
          ],
          deprecateRule: {
            count: 480894,
            interval: 118727,
            intervalUnit: RetentionIntervalUnitValuesEnum.Months,
          },
          fastRestoreRule: {
            availabilityZones: [
              "accusamus",
              "commodi",
            ],
            count: 918236,
            interval: 64147,
            intervalUnit: RetentionIntervalUnitValuesEnum.Days,
          },
          name: "quidem",
          retainRule: {
            count: 565189,
            interval: 566602,
            intervalUnit: RetentionIntervalUnitValuesEnum.Years,
          },
          shareRules: [
            {
              targetAccounts: [
                "rem",
                "voluptates",
                "quasi",
              ],
              unshareInterval: 921158,
              unshareIntervalUnit: RetentionIntervalUnitValuesEnum.Months,
            },
            {
              targetAccounts: [
                "itaque",
              ],
              unshareInterval: 277718,
              unshareIntervalUnit: RetentionIntervalUnitValuesEnum.Weeks,
            },
          ],
          tagsToAdd: [
            {
              key: "est",
              value: "quibusdam",
            },
          ],
          variableTags: [
            {
              key: "deserunt",
              value: "distinctio",
            },
          ],
        },
      ],
      targetTags: [
        {
          key: "labore",
          value: "modi",
        },
        {
          key: "qui",
          value: "aliquid",
        },
        {
          key: "cupiditate",
          value: "quos",
        },
        {
          key: "perferendis",
          value: "magni",
        },
      ],
    },
    state: CreateLifecyclePolicyRequestBodyStateEnum.Disabled,
    tags: {
      "alias": "fugit",
      "dolorum": "excepturi",
    },
  },
  xAmzAlgorithm: "tempora",
  xAmzContentSha256: "facilis",
  xAmzCredential: "tempore",
  xAmzDate: "labore",
  xAmzSecurityToken: "delectus",
  xAmzSignature: "eum",
  xAmzSignedHeaders: "non",
};

sdk.createLifecyclePolicy(req).then((res: CreateLifecyclePolicyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createLifecyclePolicy` - Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.
* `deleteLifecyclePolicy` - <p>Deletes the specified lifecycle policy and halts the automated operations that the policy specified.</p> <p>For more information about deleting a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#delete">Delete lifecycle policies</a>.</p>
* `getLifecyclePolicies` - <p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
* `getLifecyclePolicy` - Gets detailed information about the specified lifecycle policy.
* `listTagsForResource` - Lists the tags for the specified resource.
* `tagResource` - Adds the specified tags to the specified resource.
* `untagResource` - Removes the specified tags from the specified resource.
* `updateLifecyclePolicy` - <p>Updates the specified lifecycle policy.</p> <p>For more information about updating a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#modify">Modify lifecycle policies</a>.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

