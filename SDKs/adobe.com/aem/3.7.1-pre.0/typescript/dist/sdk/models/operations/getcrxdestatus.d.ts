import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCrxdeStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * CRXDE is enabled
     */
    getCrxdeStatus200PlainTextString?: string;
    /**
     * CRXDE is disabled
     */
    getCrxdeStatus404PlainTextString?: string;
}
