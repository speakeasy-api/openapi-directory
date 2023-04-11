import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful GET on Psd2Registration resource
 */
export declare class Psd2Registration extends SpeakeasyBase {
    id: number;
    /**
     * ID of the connector source
     */
    idConnectorSource?: number;
    /**
     * Current status: created/updated/error
     */
    status: string;
}
