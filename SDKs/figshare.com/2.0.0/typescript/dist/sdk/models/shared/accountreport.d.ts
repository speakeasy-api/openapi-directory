import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the report
 */
export declare enum AccountReportStatusEnum {
    Missing = "missing",
    Pending = "pending",
    Done = "done"
}
/**
 * OK. AccountReport created.
 */
export declare class AccountReport extends SpeakeasyBase {
    /**
     * The ID of the account which generated this report.
     */
    accountId: number;
    /**
     * Date when the AccountReport was requested
     */
    createdDate: string;
    /**
     * The download link for the generated XLSX
     */
    downloadUrl: string;
    /**
     * The group ID that was used to filter the report, if any.
     */
    groupId: number;
    /**
     * A unique ID for the AccountRecord
     */
    id: number;
    /**
     * Status of the report
     */
    status: AccountReportStatusEnum;
}
