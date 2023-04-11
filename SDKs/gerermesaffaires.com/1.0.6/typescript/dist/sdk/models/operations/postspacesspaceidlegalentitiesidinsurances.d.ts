import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdLegalEntitiesIdInsurancesSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdLegalEntitiesIdInsurancesRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Insurance to add (except name, class and archivaldate)
 */
export declare class PostSpacesSpaceIdLegalEntitiesIdInsurancesRequestBody extends SpeakeasyBase {
    about?: string;
    comment?: string;
    customerNumber?: string;
    designation?: string;
    end?: string;
    home?: boolean;
    keywords?: string[];
    level?: PostSpacesSpaceIdLegalEntitiesIdInsurancesRequestBodyLevelEnum;
    policyNumber?: string;
    start?: string;
}
export declare class PostSpacesSpaceIdLegalEntitiesIdInsurancesRequest extends SpeakeasyBase {
    /**
     * Insurance to add (except name, class and archivaldate)
     */
    requestBody: PostSpacesSpaceIdLegalEntitiesIdInsurancesRequestBody;
    /**
     * Id of the insurance or memberId
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
export declare class PostSpacesSpaceIdLegalEntitiesIdInsurances201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdLegalEntitiesIdInsurancesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of folder created
     */
    postSpacesSpaceIdLegalEntitiesIdInsurances201ApplicationJSONObject?: PostSpacesSpaceIdLegalEntitiesIdInsurances201ApplicationJSON;
}
