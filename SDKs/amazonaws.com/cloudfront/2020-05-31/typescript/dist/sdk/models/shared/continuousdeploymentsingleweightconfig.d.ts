import { SpeakeasyBase } from "../../../internal/utils";
import { SessionStickinessConfig } from "./sessionstickinessconfig";
/**
 * Contains the percentage of traffic to send to a staging distribution.
 */
export declare class ContinuousDeploymentSingleWeightConfig extends SpeakeasyBase {
    /**
     * Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.
     */
    sessionStickinessConfig?: SessionStickinessConfig;
    weight: number;
}
