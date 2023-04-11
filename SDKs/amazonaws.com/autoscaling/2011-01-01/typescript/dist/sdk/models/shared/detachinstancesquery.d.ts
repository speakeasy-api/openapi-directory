import { SpeakeasyBase } from "../../../internal/utils";
export declare class DetachInstancesQuery extends SpeakeasyBase {
    autoScalingGroupName: string;
    instanceIds?: string[];
    shouldDecrementDesiredCapacity: boolean;
}
