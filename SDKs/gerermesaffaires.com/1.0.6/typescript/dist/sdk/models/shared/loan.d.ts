import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LoanCategoryEnum {
    DebtSpreading = "debt spreading",
    BankLoan = "bank loan",
    CurrentAccount = "current account",
    OverdraftAgreement = "overdraft agreement",
    Leasing = "leasing",
    Obligation = "obligation"
}
export declare enum LoanLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * A loan folder
 */
export declare class Loan extends SpeakeasyBase {
    about?: string;
    amount?: number;
    archivalDate?: string;
    category?: LoanCategoryEnum;
    class?: string;
    comment?: string;
    designation?: string;
    dueAmount?: number;
    end?: string;
    home?: boolean;
    id?: string;
    keywords?: string[];
    level?: LoanLevelEnum;
    modificationDate?: string;
    monthsNumber?: number;
    name?: string;
    parent?: string;
    rate?: number;
    start?: string;
    totalCost?: number;
}
