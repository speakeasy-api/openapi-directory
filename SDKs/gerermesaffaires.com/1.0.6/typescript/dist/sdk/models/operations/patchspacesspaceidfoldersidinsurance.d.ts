import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesSpaceIdFoldersIdInsuranceRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Insurance to modify (except name, class and archivaldate)
 */
export declare class PatchSpacesSpaceIdFoldersIdInsuranceRequestBody extends SpeakeasyBase {
    about?: string;
    comment?: string;
    customerNumber?: string;
    designation?: string;
    end?: string;
    home?: boolean;
    keywords?: string[];
    level?: PatchSpacesSpaceIdFoldersIdInsuranceRequestBodyLevelEnum;
    policyNumber?: string;
    start?: string;
}
export declare class PatchSpacesSpaceIdFoldersIdInsuranceRequest extends SpeakeasyBase {
    /**
     * Insurance to modify (except name, class and archivaldate)
     */
    requestBody: PatchSpacesSpaceIdFoldersIdInsuranceRequestBody;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdFoldersIdInsuranceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
