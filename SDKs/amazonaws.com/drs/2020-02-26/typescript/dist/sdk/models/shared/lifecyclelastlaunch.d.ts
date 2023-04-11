import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchStatusEnum } from "./launchstatusenum";
import { LifeCycleLastLaunchInitiated } from "./lifecyclelastlaunchinitiated";
/**
 * An object containing information regarding the last launch of a Source Server.
 */
export declare class LifeCycleLastLaunch extends SpeakeasyBase {
    initiated?: LifeCycleLastLaunchInitiated;
    status?: LaunchStatusEnum;
}
