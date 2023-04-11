import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesSpaceIdFoldersIdTaxContractRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Tax contract to modify (except name, class and archivaldate)
 */
export declare class PatchSpacesSpaceIdFoldersIdTaxContractRequestBody extends SpeakeasyBase {
    about?: string;
    archivalDate?: string;
    comment?: string;
    designation?: string;
    end?: string;
    home?: boolean;
    keywords?: string[];
    level?: PatchSpacesSpaceIdFoldersIdTaxContractRequestBodyLevelEnum;
    start?: string;
}
export declare class PatchSpacesSpaceIdFoldersIdTaxContractRequest extends SpeakeasyBase {
    /**
     * Tax contract to modify (except name, class and archivaldate)
     */
    requestBody: PatchSpacesSpaceIdFoldersIdTaxContractRequestBody;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdFoldersIdTaxContractResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
