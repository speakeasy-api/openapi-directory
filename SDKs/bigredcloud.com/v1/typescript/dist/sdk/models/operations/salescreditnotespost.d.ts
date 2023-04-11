import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SalesCreditNotesPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    salesCreditNotesPost200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
