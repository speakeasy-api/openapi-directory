import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GeneralApiCountriesRequest extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class GeneralApiCountriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    countryDetailsApiModels?: shared.CountryDetailsApiModel[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
