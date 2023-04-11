import { SpeakeasyBase } from "../../../internal/utils";
import { MailboxExportJob } from "./mailboxexportjob";
/**
 * Success
 */
export declare class ListMailboxExportJobsResponse extends SpeakeasyBase {
    jobs?: MailboxExportJob[];
    nextToken?: string;
}
