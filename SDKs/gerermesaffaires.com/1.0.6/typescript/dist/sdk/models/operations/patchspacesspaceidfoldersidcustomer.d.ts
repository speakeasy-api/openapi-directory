import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesSpaceIdFoldersIdCustomerRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Customer to modify (except name, class and archivaldate)
 */
export declare class PatchSpacesSpaceIdFoldersIdCustomerRequestBody extends SpeakeasyBase {
    about?: string;
    comment?: string;
    customerNumber?: string;
    designation?: string;
    end?: string;
    home?: boolean;
    keepOld?: boolean;
    keywords?: string[];
    level?: PatchSpacesSpaceIdFoldersIdCustomerRequestBodyLevelEnum;
    portfolioId?: string;
    secondaryPortfolioId?: string;
    start?: string;
}
export declare class PatchSpacesSpaceIdFoldersIdCustomerRequest extends SpeakeasyBase {
    /**
     * Customer to modify (except name, class and archivaldate)
     */
    requestBody: PatchSpacesSpaceIdFoldersIdCustomerRequestBody;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdFoldersIdCustomerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
