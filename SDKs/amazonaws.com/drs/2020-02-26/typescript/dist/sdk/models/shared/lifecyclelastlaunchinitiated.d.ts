import { SpeakeasyBase } from "../../../internal/utils";
import { LastLaunchTypeEnum } from "./lastlaunchtypeenum";
/**
 * An object containing information regarding the initiation of the last launch of a Source Server.
 */
export declare class LifeCycleLastLaunchInitiated extends SpeakeasyBase {
    apiCallDateTime?: string;
    jobID?: string;
    type?: LastLaunchTypeEnum;
}
