import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdLegalEntitiesIdCustomersSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdLegalEntitiesIdCustomersRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Customer to add (except name, class and archivaldate)
 */
export declare class PostSpacesSpaceIdLegalEntitiesIdCustomersRequestBody extends SpeakeasyBase {
    about?: string;
    comment?: string;
    customerNumber?: string;
    designation?: string;
    end?: string;
    home?: boolean;
    keywords?: string[];
    level?: PostSpacesSpaceIdLegalEntitiesIdCustomersRequestBodyLevelEnum;
    portfolioId?: string;
    start?: string;
}
export declare class PostSpacesSpaceIdLegalEntitiesIdCustomersRequest extends SpeakeasyBase {
    /**
     * Customer to add (except name, class and archivaldate)
     */
    requestBody: PostSpacesSpaceIdLegalEntitiesIdCustomersRequestBody;
    /**
     * Id of the customer or memberId
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
/**
 * Id of folder created
 */
export declare class PostSpacesSpaceIdLegalEntitiesIdCustomers201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdLegalEntitiesIdCustomersResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of folder created
     */
    postSpacesSpaceIdLegalEntitiesIdCustomers201ApplicationJSONObject?: PostSpacesSpaceIdLegalEntitiesIdCustomers201ApplicationJSON;
}
