import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesSpaceIdFoldersIdBankRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Bank to modify (except name, class and archivaldate)
 */
export declare class PatchSpacesSpaceIdFoldersIdBankRequestBody extends SpeakeasyBase {
    about?: string;
    comment?: string;
    contractReference?: string;
    designation?: string;
    end?: string;
    home?: boolean;
    keywords?: string[];
    level?: PatchSpacesSpaceIdFoldersIdBankRequestBodyLevelEnum;
    start?: string;
}
export declare class PatchSpacesSpaceIdFoldersIdBankRequest extends SpeakeasyBase {
    /**
     * Bank to modify (except name, class and archivaldate)
     */
    requestBody: PatchSpacesSpaceIdFoldersIdBankRequestBody;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdFoldersIdBankResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
