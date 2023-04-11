import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TariffSlph0Request extends SpeakeasyBase {
    /**
     * Zipcode (Postzleitzahl) of a city in Germany.
     */
    zipcode?: string;
}
export declare class TariffSlph0Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    tariffh0s?: shared.Tariffh0[];
}
