import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class QuittungTSERequest extends SpeakeasyBase {
    /**
     * Quittung Identifier  (serialnumber generated during receipt generation process)
     */
    account?: string;
}
/**
 * Success
 */
export declare class QuittungTse200ApplicationJSON extends SpeakeasyBase {
    /**
     * JSON object that got signed by TSE.
     */
    data?: any;
    /**
     * Public Key of TSE
     */
    publickey?: string;
    /**
     * Datastring of JSON Object as it got used to create signature.
     */
    raw?: string;
    /**
     * Resulting signature by signing raw datastring using private key of TSE.
     */
    signature?: string;
}
export declare class QuittungTSEResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    quittungTSE200ApplicationJSONObject?: QuittungTse200ApplicationJSON;
}
