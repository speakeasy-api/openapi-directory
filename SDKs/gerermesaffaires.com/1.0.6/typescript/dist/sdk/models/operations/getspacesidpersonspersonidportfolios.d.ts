import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdPersonsPersonIdPortfoliosRequest extends SpeakeasyBase {
    /**
     * Id of the space
     */
    id: string;
    /**
     * Id of the person to get portfolios
     */
    personId: string;
}
export declare enum GetSpacesIdPersonsPersonIdPortfolios200ApplicationJSONLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
export declare class GetSpacesIdPersonsPersonIdPortfolios200ApplicationJSON extends SpeakeasyBase {
    about?: string;
    archivalDate?: string;
    class?: string;
    designation?: string;
    home?: boolean;
    id?: string;
    keywords?: string[];
    level?: GetSpacesIdPersonsPersonIdPortfolios200ApplicationJSONLevelEnum;
    modificationDate?: string;
    name?: string;
    parent?: string;
}
export declare class GetSpacesIdPersonsPersonIdPortfoliosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of portfolios
     */
    getSpacesIdPersonsPersonIdPortfolios200ApplicationJSONAnies?: GetSpacesIdPersonsPersonIdPortfolios200ApplicationJSON[];
}
