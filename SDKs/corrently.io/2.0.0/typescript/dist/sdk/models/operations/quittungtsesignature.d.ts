import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class QuittungTSEsignatureRequest extends SpeakeasyBase {
    /**
     * Quittung Identifier  (serialnumber generated during receipt generation process)
     */
    account?: string;
}
export declare class QuittungTSEsignatureResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
