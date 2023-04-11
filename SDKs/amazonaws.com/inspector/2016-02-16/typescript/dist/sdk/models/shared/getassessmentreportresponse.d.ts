import { SpeakeasyBase } from "../../../internal/utils";
import { ReportStatusEnum } from "./reportstatusenum";
/**
 * Success
 */
export declare class GetAssessmentReportResponse extends SpeakeasyBase {
    status: ReportStatusEnum;
    url?: string;
}
