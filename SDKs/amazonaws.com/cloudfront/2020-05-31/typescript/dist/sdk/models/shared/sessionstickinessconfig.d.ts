import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.
 */
export declare class SessionStickinessConfig extends SpeakeasyBase {
    idleTTL: number;
    maximumTTL: number;
}
