import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesSpaceIdFoldersIdAccountingYearRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Accounting year to modify (except name, class and archivaldate)
 */
export declare class PatchSpacesSpaceIdFoldersIdAccountingYearRequestBody extends SpeakeasyBase {
    about?: string;
    comment?: string;
    end?: string;
    home?: boolean;
    keywords?: string[];
    level?: PatchSpacesSpaceIdFoldersIdAccountingYearRequestBodyLevelEnum;
    netIncome?: number;
    netPosition?: number;
    start?: string;
    tax?: number;
    taxableIncome?: number;
    turnover?: number;
}
export declare class PatchSpacesSpaceIdFoldersIdAccountingYearRequest extends SpeakeasyBase {
    /**
     * Accounting year to modify (except name, class and archivaldate)
     */
    requestBody: PatchSpacesSpaceIdFoldersIdAccountingYearRequestBody;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdFoldersIdAccountingYearResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
