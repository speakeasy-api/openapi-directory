import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Information about the server's network for which the assessment was run.
 */
export declare class NetworkInfo extends SpeakeasyBase {
    interfaceName: string;
    ipAddress: string;
    macAddress: string;
    netMask: string;
}
