import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Information about a connection.
 */
export declare class ConnectionDetails extends SpeakeasyBase {
    allowedIps?: string[];
    clientPublicKey?: string;
    clientTunnelAddress?: string;
    serverEndpoint?: string;
    serverPublicKey?: string;
    serverTunnelAddress?: string;
}
