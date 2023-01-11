import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountReportStatusEnum {
    Missing = "missing",
    Pending = "pending",
    Done = "done"
}
export declare class AccountReport extends SpeakeasyBase {
    accountId?: number;
    createdDate?: string;
    downloadUrl?: string;
    groupId?: number;
    id?: number;
    status?: AccountReportStatusEnum;
}
