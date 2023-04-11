import { SpeakeasyBase } from "../../../internal/utils";
/**
 * successful operation
 */
export declare class ConfigPROXY extends SpeakeasyBase {
    tcpNodelay?: number;
    clientToServer?: string;
    disconnectDelay?: number;
    maxConnects?: number;
    portno?: number;
    preConnect?: string;
    serverToClient?: string;
    target?: string;
    transport?: string;
}
