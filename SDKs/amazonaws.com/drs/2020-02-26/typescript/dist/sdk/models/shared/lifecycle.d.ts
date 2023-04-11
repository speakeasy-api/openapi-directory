import { SpeakeasyBase } from "../../../internal/utils";
import { LifeCycleLastLaunch } from "./lifecyclelastlaunch";
/**
 * An object representing the Source Server Lifecycle.
 */
export declare class LifeCycle extends SpeakeasyBase {
    addedToServiceDateTime?: string;
    elapsedReplicationDuration?: string;
    firstByteDateTime?: string;
    lastLaunch?: LifeCycleLastLaunch;
    lastSeenByServiceDateTime?: string;
}
