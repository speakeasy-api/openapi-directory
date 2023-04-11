import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdAccountingYearRequest extends SpeakeasyBase {
    /**
     * Effective date inside  the accounting year  (range not available)
     */
    effectiveDate?: string;
    /**
     * End date of the accounting year (YYYYMM or YYYYMMDD) (range not available)
     */
    end?: string;
    /**
     * Id of the space
     */
    id: string;
}
export declare enum GetSpacesIdAccountingYear200ApplicationJSONLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
export declare class GetSpacesIdAccountingYear200ApplicationJSON extends SpeakeasyBase {
    about?: string;
    archivalDate?: string;
    class?: string;
    comment?: string;
    end?: string;
    home?: boolean;
    id?: string;
    keywords?: string[];
    level?: GetSpacesIdAccountingYear200ApplicationJSONLevelEnum;
    modificationDate?: string;
    name?: string;
    netIncome?: number;
    netPosition?: number;
    parent?: string;
    start?: string;
    tax?: number;
    taxableIncome?: number;
    turnover?: number;
}
export declare class GetSpacesIdAccountingYearResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of accounting years
     */
    getSpacesIdAccountingYear200ApplicationJSONAnies?: GetSpacesIdAccountingYear200ApplicationJSON[];
}
