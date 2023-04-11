import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnterStandbyQuery extends SpeakeasyBase {
    autoScalingGroupName: string;
    instanceIds?: string[];
    shouldDecrementDesiredCapacity: boolean;
}
