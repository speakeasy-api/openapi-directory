import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchStatusEnum } from "./launchstatusenum";
import { PostLaunchActionsStatus } from "./postlaunchactionsstatus";
/**
 * Server participating in Job.
 */
export declare class ParticipatingServer extends SpeakeasyBase {
    launchStatus?: LaunchStatusEnum;
    launchedEc2InstanceID?: string;
    postLaunchActionsStatus?: PostLaunchActionsStatus;
    sourceServerID: string;
}
