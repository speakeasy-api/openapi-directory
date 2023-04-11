import { SpeakeasyBase } from "../../../internal/utils";
import { JobPostLaunchActionsLaunchStatus } from "./jobpostlaunchactionslaunchstatus";
/**
 * Status of the Post Launch Actions running on the Test or Cutover instance.
 */
export declare class PostLaunchActionsStatus extends SpeakeasyBase {
    postLaunchActionsLaunchStatusList?: JobPostLaunchActionsLaunchStatus[];
    ssmAgentDiscoveryDatetime?: string;
}
