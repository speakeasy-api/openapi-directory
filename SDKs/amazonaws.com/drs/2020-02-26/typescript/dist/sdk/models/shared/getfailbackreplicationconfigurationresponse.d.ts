import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class GetFailbackReplicationConfigurationResponse extends SpeakeasyBase {
    bandwidthThrottling?: number;
    name?: string;
    recoveryInstanceID: string;
    usePrivateIP?: boolean;
}
