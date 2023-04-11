import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CrmCheckRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * sale date to check whether after this listing has appeared or not. Must be 8 character long, with YYYYMMDD format
     */
    saleDate: string;
    /**
     * The VIN to identify the car. Must be a valid 17 char VIN
     */
    vin: string;
}
export declare class CrmCheckResponse extends SpeakeasyBase {
    /**
     * CRM check for given vin
     */
    crmResponse?: shared.CRMResponse;
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
