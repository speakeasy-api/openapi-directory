import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PostSpacesRequestBodyLogo extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
export declare enum PostSpacesRequestBodyTypeEnum {
    Enterprise = "enterprise",
    Company = "company",
    Association = "association"
}
/**
 * Space to add (except private)
 */
export declare class PostSpacesRequestBody extends SpeakeasyBase {
    legalStatut?: string;
    logo?: PostSpacesRequestBodyLogo;
    name: string;
    registrationNumber?: string;
    templateSpaceId?: string;
    type: PostSpacesRequestBodyTypeEnum;
}
/**
 * Id of space created
 */
export declare class PostSpaces201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of space created
     */
    postSpaces201ApplicationJSONObject?: PostSpaces201ApplicationJSON;
}
