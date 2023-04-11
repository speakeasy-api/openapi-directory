import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesIdTaxContractsSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesIdTaxContractsRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Tax contract to add
 */
export declare class PostSpacesIdTaxContractsRequestBody extends SpeakeasyBase {
    about?: string;
    comment?: string;
    designation: string;
    end?: string;
    home?: boolean;
    keywords?: string[];
    level?: PostSpacesIdTaxContractsRequestBodyLevelEnum;
    start?: string;
}
export declare class PostSpacesIdTaxContractsRequest extends SpeakeasyBase {
    /**
     * Tax contract to add
     */
    requestBody: PostSpacesIdTaxContractsRequestBody;
    /**
     * Id of the space
     */
    id: string;
}
/**
 * Id of the tax contract created
 */
export declare class PostSpacesIdTaxContracts201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesIdTaxContractsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of the tax contract created
     */
    postSpacesIdTaxContracts201ApplicationJSONObject?: PostSpacesIdTaxContracts201ApplicationJSON;
}
