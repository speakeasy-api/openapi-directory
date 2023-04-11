import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Acceptable
     */
    errorResponse?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    ping200TextPlainString?: string;
}
