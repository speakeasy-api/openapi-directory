import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentReportStatusEnum } from "./assessmentreportstatusenum";
/**
 *  The metadata objects that are associated with the specified assessment report.
 */
export declare class AssessmentReportMetadata extends SpeakeasyBase {
    assessmentId?: string;
    assessmentName?: string;
    author?: string;
    creationTime?: Date;
    description?: string;
    id?: string;
    name?: string;
    status?: AssessmentReportStatusEnum;
}
