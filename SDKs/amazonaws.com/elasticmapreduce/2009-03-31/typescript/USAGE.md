<!-- Start SDK Example Usage -->
```typescript
import {
  AddInstanceFleetRequest,
  AddInstanceFleetResponse,
  AddInstanceFleetXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  SpotProvisioningTimeoutActionEnum,
  SpotProvisioningAllocationStrategyEnum,
  OnDemandCapacityReservationUsageStrategyEnum,
  OnDemandCapacityReservationPreferenceEnum,
  OnDemandProvisioningAllocationStrategyEnum,
  InstanceFleetTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddInstanceFleetRequest = {
  addInstanceFleetInput: {
    clusterId: "corrupti",
    instanceFleet: {
      instanceFleetType: InstanceFleetTypeEnum.Core,
      instanceTypeConfigs: [
        {
          bidPrice: "quibusdam",
          bidPriceAsPercentageOfOnDemandPrice: 6027.63,
          configurations: [
            {
              classification: "corrupti",
              configurations: [
                {},
                {},
                {},
                {},
              ],
              properties: {
                "error": "deserunt",
                "suscipit": "iure",
              },
            },
            {
              classification: "magnam",
              configurations: [
                {},
                {},
                {},
                {},
              ],
              properties: {
                "delectus": "tempora",
              },
            },
            {
              classification: "suscipit",
              configurations: [
                {},
                {},
              ],
              properties: {
                "placeat": "voluptatum",
                "iusto": "excepturi",
                "nisi": "recusandae",
                "temporibus": "ab",
              },
            },
            {
              classification: "quis",
              configurations: [
                {},
              ],
              properties: {
                "perferendis": "ipsam",
                "repellendus": "sapiente",
                "quo": "odit",
              },
            },
          ],
          customAmiId: "at",
          ebsConfiguration: {
            ebsBlockDeviceConfigs: [
              {
                volumeSpecification: {
                  iops: 978619,
                  sizeInGB: 473608,
                  throughput: 799159,
                  volumeType: "quod",
                },
                volumesPerInstance: 461479,
              },
              {
                volumeSpecification: {
                  iops: 520478,
                  sizeInGB: 780529,
                  throughput: 678880,
                  volumeType: "dicta",
                },
                volumesPerInstance: 720633,
              },
              {
                volumeSpecification: {
                  iops: 639921,
                  sizeInGB: 582020,
                  throughput: 143353,
                  volumeType: "deleniti",
                },
                volumesPerInstance: 944669,
              },
              {
                volumeSpecification: {
                  iops: 758616,
                  sizeInGB: 521848,
                  throughput: 105907,
                  volumeType: "commodi",
                },
                volumesPerInstance: 473600,
              },
            ],
            ebsOptimized: false,
          },
          instanceType: "modi",
          weightedCapacity: 186332,
        },
        {
          bidPrice: "impedit",
          bidPriceAsPercentageOfOnDemandPrice: 7369.18,
          configurations: [
            {
              classification: "ipsum",
              configurations: [
                {},
                {},
                {},
              ],
              properties: {
                "perferendis": "ad",
              },
            },
            {
              classification: "natus",
              configurations: [
                {},
              ],
              properties: {
                "dolor": "natus",
                "laboriosam": "hic",
                "saepe": "fuga",
              },
            },
          ],
          customAmiId: "in",
          ebsConfiguration: {
            ebsBlockDeviceConfigs: [
              {
                volumeSpecification: {
                  iops: 613064,
                  sizeInGB: 437032,
                  throughput: 902349,
                  volumeType: "quidem",
                },
                volumesPerInstance: 99280,
              },
              {
                volumeSpecification: {
                  iops: 60225,
                  sizeInGB: 969810,
                  throughput: 666767,
                  volumeType: "mollitia",
                },
                volumesPerInstance: 670638,
              },
            ],
            ebsOptimized: false,
          },
          instanceType: "dolores",
          weightedCapacity: 210382,
        },
        {
          bidPrice: "corporis",
          bidPriceAsPercentageOfOnDemandPrice: 1289.26,
          configurations: [
            {
              classification: "enim",
              configurations: [
                {},
                {},
                {},
              ],
              properties: {
                "minima": "excepturi",
                "accusantium": "iure",
              },
            },
            {
              classification: "culpa",
              configurations: [
                {},
                {},
                {},
                {},
              ],
              properties: {
                "architecto": "mollitia",
                "dolorem": "culpa",
                "consequuntur": "repellat",
                "mollitia": "occaecati",
              },
            },
            {
              classification: "numquam",
              configurations: [
                {},
                {},
              ],
              properties: {
                "molestiae": "velit",
                "error": "quia",
              },
            },
            {
              classification: "quis",
              configurations: [
                {},
              ],
              properties: {
                "animi": "enim",
                "odit": "quo",
                "sequi": "tenetur",
              },
            },
          ],
          customAmiId: "ipsam",
          ebsConfiguration: {
            ebsBlockDeviceConfigs: [
              {
                volumeSpecification: {
                  iops: 820994,
                  sizeInGB: 13571,
                  throughput: 97101,
                  volumeType: "error",
                },
                volumesPerInstance: 837945,
              },
              {
                volumeSpecification: {
                  iops: 673660,
                  sizeInGB: 96098,
                  throughput: 971945,
                  volumeType: "voluptatibus",
                },
                volumesPerInstance: 878194,
              },
              {
                volumeSpecification: {
                  iops: 468651,
                  sizeInGB: 509624,
                  throughput: 976762,
                  volumeType: "ipsa",
                },
                volumesPerInstance: 604846,
              },
            ],
            ebsOptimized: false,
          },
          instanceType: "voluptate",
          weightedCapacity: 739264,
        },
      ],
      launchSpecifications: {
        onDemandSpecification: {
          allocationStrategy: OnDemandProvisioningAllocationStrategyEnum.LowestPrice,
          capacityReservationOptions: {
            capacityReservationPreference: OnDemandCapacityReservationPreferenceEnum.Open,
            capacityReservationResourceGroupArn: "doloremque",
            usageStrategy: OnDemandCapacityReservationUsageStrategyEnum.UseCapacityReservationsFirst,
          },
        },
        spotSpecification: {
          allocationStrategy: SpotProvisioningAllocationStrategyEnum.CapacityOptimized,
          blockDurationMinutes: 441711,
          timeoutAction: SpotProvisioningTimeoutActionEnum.SwitchToOnDemand,
          timeoutDurationMinutes: 979587,
        },
      },
      name: "dicta",
      resizeSpecifications: {
        onDemandResizeSpecification: {
          timeoutDurationMinutes: 359444,
        },
        spotResizeSpecification: {
          timeoutDurationMinutes: 296140,
        },
      },
      targetOnDemandCapacity: 480894,
      targetSpotCapacity: 118727,
    },
  },
  xAmzAlgorithm: "harum",
  xAmzContentSha256: "enim",
  xAmzCredential: "accusamus",
  xAmzDate: "commodi",
  xAmzSecurityToken: "repudiandae",
  xAmzSignature: "quae",
  xAmzSignedHeaders: "ipsum",
  xAmzTarget: AddInstanceFleetXAmzTargetEnum.ElasticMapReduceAddInstanceFleet,
};

sdk.addInstanceFleet(req).then((res: AddInstanceFleetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->