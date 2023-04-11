import { Device } from "./device";
import { Firmware } from "./firmware";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["/api/v1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * IOTVAS API enables you to discover IoT/Connected devices in the network and provides
 *
 * @remarks
 *     detailed real-time risk analysis, including firmware vulnerability analysis without requiring the user to upload the firmware file.
 *     Please visit the [signup page](https://iotvas-api.firmalyzer.com/portal/signup) to create an API key.
 *     IoTVAS API can be easily integrated with vulnerability scanning and network port scanner tools. For example,
 *     we have also released the [IOTVAS NSE script](https://github.com/firmalyzer/iotvas-nmap) that turns the nmap port scanner
 *     to a IoT/connected device discovery and real-time risk assessment tool. For more infromation on IoTVAS and other
 *     solutions please visit [Firmalyzer web site](https://www.firmalyzer.com).
 */
export declare class SDK {
    device: Device;
    firmware: Firmware;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
