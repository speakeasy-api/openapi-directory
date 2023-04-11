import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetDesiredCapacityType extends SpeakeasyBase {
    autoScalingGroupName: string;
    desiredCapacity: number;
    honorCooldown?: boolean;
}
