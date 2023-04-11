import { SpeakeasyBase } from "../../../internal/utils";
import { FailbackLaunchTypeEnum } from "./failbacklaunchtypeenum";
import { FailbackStateEnum } from "./failbackstateenum";
/**
 * An object representing failback related information of the Recovery Instance.
 */
export declare class RecoveryInstanceFailback extends SpeakeasyBase {
    agentLastSeenByServiceDateTime?: string;
    elapsedReplicationDuration?: string;
    failbackClientID?: string;
    failbackClientLastSeenByServiceDateTime?: string;
    failbackInitiationTime?: string;
    failbackJobID?: string;
    failbackLaunchType?: FailbackLaunchTypeEnum;
    failbackToOriginalServer?: boolean;
    firstByteDateTime?: string;
    state?: FailbackStateEnum;
}
