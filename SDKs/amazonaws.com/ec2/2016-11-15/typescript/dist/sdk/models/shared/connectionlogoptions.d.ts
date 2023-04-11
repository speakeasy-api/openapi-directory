import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the client connection logging options for the Client VPN endpoint.
 */
export declare class ConnectionLogOptions extends SpeakeasyBase {
    cloudwatchLogGroup?: string;
    cloudwatchLogStream?: string;
    enabled?: boolean;
}
