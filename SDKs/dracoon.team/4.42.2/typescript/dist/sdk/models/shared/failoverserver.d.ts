import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Failover server information
 */
export declare class FailoverServer extends SpeakeasyBase {
    /**
     * RADIUS Failover Server is active
     */
    failoverEnabled: boolean;
    /**
     * RADIUS Failover Server IP Address
     *
     * @remarks
     *
     * Required if failover server is enabled.
     */
    failoverIpAddress: string;
    /**
     * RADIUS Failover Server Port
     *
     * @remarks
     *
     * Required if failover server is enabled.
     */
    failoverPort: number;
}
