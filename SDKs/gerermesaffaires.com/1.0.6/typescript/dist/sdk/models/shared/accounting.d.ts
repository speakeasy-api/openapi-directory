import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountingAccountingWorkbookEnum {
    Customer = "customer",
    Provider = "provider",
    Bank = "bank",
    CashWoucher = "cashWoucher",
    Fiscal = "fiscal",
    Insurance = "insurance",
    Social = "social",
    Other = "other",
    Permanent = "permanent"
}
export declare class AccountingAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: AccountingAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class Accounting extends SpeakeasyBase {
    accounting?: AccountingAccounting;
    author?: string;
    class?: string[];
    code?: string;
    comment?: string;
    date?: string;
    extension?: string;
    folderDate?: string;
    id?: string;
    title?: string;
}
