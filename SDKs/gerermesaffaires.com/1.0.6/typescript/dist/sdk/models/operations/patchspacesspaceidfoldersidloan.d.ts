import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesSpaceIdFoldersIdLoanRequestBodyCategoryEnum {
    DebtSpreading = "debt spreading",
    BankLoan = "bank loan",
    CurrentAccount = "current account",
    OverdraftAgreement = "overdraft agreement",
    Leasing = "leasing",
    Obligation = "obligation"
}
export declare enum PatchSpacesSpaceIdFoldersIdLoanRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Loan to modify (except name, class and archivaldate)
 */
export declare class PatchSpacesSpaceIdFoldersIdLoanRequestBody extends SpeakeasyBase {
    about?: string;
    amount?: number;
    category?: PatchSpacesSpaceIdFoldersIdLoanRequestBodyCategoryEnum;
    comment?: string;
    designation?: string;
    dueAmount?: number;
    end?: string;
    home?: boolean;
    keywords?: string[];
    level?: PatchSpacesSpaceIdFoldersIdLoanRequestBodyLevelEnum;
    monthsNumber?: number;
    rate?: number;
    start?: string;
    totalCost?: number;
}
export declare class PatchSpacesSpaceIdFoldersIdLoanRequest extends SpeakeasyBase {
    /**
     * Loan to modify (except name, class and archivaldate)
     */
    requestBody: PatchSpacesSpaceIdFoldersIdLoanRequestBody;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdFoldersIdLoanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
