import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class QuittungZugferdRequest extends SpeakeasyBase {
    /**
     * Quittung Identifier  (serialnumber generated during receipt generation process)
     */
    account?: string;
}
export declare class QuittungZugferdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
