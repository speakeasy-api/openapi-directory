import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchStatusEnum } from "./launchstatusenum";
/**
 * Represents a server participating in an asynchronous Job.
 */
export declare class ParticipatingServer extends SpeakeasyBase {
    launchStatus?: LaunchStatusEnum;
    recoveryInstanceID?: string;
    sourceServerID?: string;
}
