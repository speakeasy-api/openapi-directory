import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdLegalEntitiesIdBanksSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdLegalEntitiesIdBanksRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Bank to add (except name, class and archivaldate)
 */
export declare class PostSpacesSpaceIdLegalEntitiesIdBanksRequestBody extends SpeakeasyBase {
    about?: string;
    comment?: string;
    contractReference?: string;
    designation?: string;
    end?: string;
    home?: boolean;
    keywords?: string[];
    level?: PostSpacesSpaceIdLegalEntitiesIdBanksRequestBodyLevelEnum;
    start?: string;
}
export declare class PostSpacesSpaceIdLegalEntitiesIdBanksRequest extends SpeakeasyBase {
    /**
     * Bank to add (except name, class and archivaldate)
     */
    requestBody: PostSpacesSpaceIdLegalEntitiesIdBanksRequestBody;
    /**
     * Id of the bank or memberId
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
export declare class PostSpacesSpaceIdLegalEntitiesIdBanks201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdLegalEntitiesIdBanksResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of folder created
     */
    postSpacesSpaceIdLegalEntitiesIdBanks201ApplicationJSONObject?: PostSpacesSpaceIdLegalEntitiesIdBanks201ApplicationJSON;
}
