import { SpeakeasyBase } from "../../../internal/utils";
import { FailoverServer } from "./failoverserver";
/**
 * RADIUS configuration
 */
export declare class RadiusConfig extends SpeakeasyBase {
    /**
     * Failover server information
     */
    failoverServer?: FailoverServer;
    /**
     * RADIUS Server IP Address
     */
    ipAddress: string;
    /**
     * Sequence order of concatenated PIN and one-time token
     */
    otpPinFirst: boolean;
    /**
     * RADIUS Server Port
     */
    port: number;
    /**
     * Shared Secret to access the RADIUS server
     */
    sharedSecret: string;
}
