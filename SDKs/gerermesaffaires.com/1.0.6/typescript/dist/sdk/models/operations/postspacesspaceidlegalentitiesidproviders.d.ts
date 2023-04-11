import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdLegalEntitiesIdProvidersSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdLegalEntitiesIdProvidersRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Provider to add (except name, class and archivaldate)
 */
export declare class PostSpacesSpaceIdLegalEntitiesIdProvidersRequestBody extends SpeakeasyBase {
    about?: string;
    comment?: string;
    designation?: string;
    end?: string;
    home?: boolean;
    keywords?: string[];
    level?: PostSpacesSpaceIdLegalEntitiesIdProvidersRequestBodyLevelEnum;
    providerNumber?: string;
    start?: string;
}
export declare class PostSpacesSpaceIdLegalEntitiesIdProvidersRequest extends SpeakeasyBase {
    /**
     * Provider to add (except name, class and archivaldate)
     */
    requestBody: PostSpacesSpaceIdLegalEntitiesIdProvidersRequestBody;
    /**
     * Id of the provider or memberId
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
export declare class PostSpacesSpaceIdLegalEntitiesIdProviders201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdLegalEntitiesIdProvidersResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of folder created
     */
    postSpacesSpaceIdLegalEntitiesIdProviders201ApplicationJSONObject?: PostSpacesSpaceIdLegalEntitiesIdProviders201ApplicationJSON;
}
