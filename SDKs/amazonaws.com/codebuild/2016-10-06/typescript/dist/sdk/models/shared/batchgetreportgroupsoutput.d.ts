import { SpeakeasyBase } from "../../../internal/utils";
import { ReportGroup } from "./reportgroup";
/**
 * Success
 */
export declare class BatchGetReportGroupsOutput extends SpeakeasyBase {
    reportGroups?: ReportGroup[];
    reportGroupsNotFound?: string[];
}
