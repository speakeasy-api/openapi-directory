import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesIdPersonsPersonIdPortfoliosSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesIdPersonsPersonIdPortfoliosRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Portfolio to add (except Class and Name)
 */
export declare class PostSpacesIdPersonsPersonIdPortfoliosRequestBody extends SpeakeasyBase {
    about?: string;
    archivalDate?: string;
    designation?: string;
    home?: boolean;
    keywords?: string[];
    level?: PostSpacesIdPersonsPersonIdPortfoliosRequestBodyLevelEnum;
    name?: string;
}
export declare class PostSpacesIdPersonsPersonIdPortfoliosRequest extends SpeakeasyBase {
    /**
     * Portfolio to add (except Class and Name)
     */
    requestBody?: PostSpacesIdPersonsPersonIdPortfoliosRequestBody;
    /**
     * Id of the space
     */
    id: string;
    /**
     * Id of the person who will be the owner of the portfolio
     */
    personId: string;
}
/**
 * Id of the portfolio created
 */
export declare class PostSpacesIdPersonsPersonIdPortfolios201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesIdPersonsPersonIdPortfoliosResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of the portfolio created
     */
    postSpacesIdPersonsPersonIdPortfolios201ApplicationJSONObject?: PostSpacesIdPersonsPersonIdPortfolios201ApplicationJSON;
}
