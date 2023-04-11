import { SpeakeasyBase } from "../../../internal/utils";
import { FirstBootEnum } from "./firstbootenum";
/**
 * Launched instance.
 */
export declare class LaunchedInstance extends SpeakeasyBase {
    ec2InstanceID?: string;
    firstBoot?: FirstBootEnum;
    jobID?: string;
}
