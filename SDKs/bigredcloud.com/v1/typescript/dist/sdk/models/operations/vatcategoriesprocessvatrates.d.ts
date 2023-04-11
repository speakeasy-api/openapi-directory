import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class VatCategoriesProcessVatRatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    vatCategoriesProcessVatRates200ApplicationJSONObject?: Record<string, any>;
}
