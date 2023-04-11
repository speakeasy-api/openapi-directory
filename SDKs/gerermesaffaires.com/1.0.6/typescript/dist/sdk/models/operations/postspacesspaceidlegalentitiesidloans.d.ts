import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdLegalEntitiesIdLoansSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdLegalEntitiesIdLoansRequestBodyCategoryEnum {
    DebtSpreading = "debt spreading",
    BankLoan = "bank loan",
    CurrentAccount = "current account",
    OverdraftAgreement = "overdraft agreement",
    Leasing = "leasing",
    Obligation = "obligation"
}
export declare enum PostSpacesSpaceIdLegalEntitiesIdLoansRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Loan to add (except name, class and archivaldate)
 */
export declare class PostSpacesSpaceIdLegalEntitiesIdLoansRequestBody extends SpeakeasyBase {
    about?: string;
    amount?: number;
    category?: PostSpacesSpaceIdLegalEntitiesIdLoansRequestBodyCategoryEnum;
    comment?: string;
    designation?: string;
    dueAmount?: number;
    end?: string;
    home?: boolean;
    keywords?: string[];
    level?: PostSpacesSpaceIdLegalEntitiesIdLoansRequestBodyLevelEnum;
    monthsNumber?: number;
    rate?: number;
    start?: string;
    totalCost?: number;
}
export declare class PostSpacesSpaceIdLegalEntitiesIdLoansRequest extends SpeakeasyBase {
    /**
     * Loan to add (except name, class and archivaldate)
     */
    requestBody: PostSpacesSpaceIdLegalEntitiesIdLoansRequestBody;
    /**
     * Id of the loan or memberId
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
export declare class PostSpacesSpaceIdLegalEntitiesIdLoans201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdLegalEntitiesIdLoansResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of folder created
     */
    postSpacesSpaceIdLegalEntitiesIdLoans201ApplicationJSONObject?: PostSpacesSpaceIdLegalEntitiesIdLoans201ApplicationJSON;
}
