import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesSpaceIdFoldersIdProviderRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Provider to modify (except name, class and archivaldate)
 */
export declare class PatchSpacesSpaceIdFoldersIdProviderRequestBody extends SpeakeasyBase {
    about?: string;
    comment?: string;
    designation?: string;
    end?: string;
    home?: boolean;
    keywords?: string[];
    level?: PatchSpacesSpaceIdFoldersIdProviderRequestBodyLevelEnum;
    providerNumber?: string;
    start?: string;
}
export declare class PatchSpacesSpaceIdFoldersIdProviderRequest extends SpeakeasyBase {
    /**
     * Provider to modify (except name, class and archivaldate)
     */
    requestBody: PatchSpacesSpaceIdFoldersIdProviderRequestBody;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdFoldersIdProviderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
