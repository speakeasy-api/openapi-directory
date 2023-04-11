import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesIdAccountingYearSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesIdAccountingYearRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * AccountingYear to add
 */
export declare class PostSpacesIdAccountingYearRequestBody extends SpeakeasyBase {
    about?: string;
    comment?: string;
    end: string;
    home?: boolean;
    keywords?: string[];
    level?: PostSpacesIdAccountingYearRequestBodyLevelEnum;
    netIncome?: number;
    netPosition?: number;
    start?: string;
    tax?: number;
    taxableIncome?: number;
    turnover?: number;
}
export declare class PostSpacesIdAccountingYearRequest extends SpeakeasyBase {
    /**
     * AccountingYear to add
     */
    requestBody: PostSpacesIdAccountingYearRequestBody;
    /**
     * Id of the space
     */
    id: string;
}
/**
 * Id of the accounting year created
 */
export declare class PostSpacesIdAccountingYear201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesIdAccountingYearResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of the accounting year created
     */
    postSpacesIdAccountingYear201ApplicationJSONObject?: PostSpacesIdAccountingYear201ApplicationJSON;
}
