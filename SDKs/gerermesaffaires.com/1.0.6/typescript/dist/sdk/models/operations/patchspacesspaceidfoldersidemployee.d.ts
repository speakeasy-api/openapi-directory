import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesSpaceIdFoldersIdEmployeeRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Employee to modify (except name, class and archivaldate)
 */
export declare class PatchSpacesSpaceIdFoldersIdEmployeeRequestBody extends SpeakeasyBase {
    about?: string;
    comment?: string;
    contractType?: string;
    employeeNumber?: string;
    end?: string;
    function?: string;
    home?: boolean;
    keywords?: string[];
    level?: PatchSpacesSpaceIdFoldersIdEmployeeRequestBodyLevelEnum;
    postalMail?: boolean;
    ssNumber?: string;
    start?: string;
}
export declare class PatchSpacesSpaceIdFoldersIdEmployeeRequest extends SpeakeasyBase {
    /**
     * Employee to modify (except name, class and archivaldate)
     */
    requestBody: PatchSpacesSpaceIdFoldersIdEmployeeRequestBody;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdFoldersIdEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
