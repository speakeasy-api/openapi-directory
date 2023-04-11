import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about an endpoint and port where client devices can connect to an MQTT broker on a Greengrass core device.
 */
export declare class ConnectivityInfo extends SpeakeasyBase {
    hostAddress?: string;
    id?: string;
    metadata?: string;
    portNumber?: number;
}
