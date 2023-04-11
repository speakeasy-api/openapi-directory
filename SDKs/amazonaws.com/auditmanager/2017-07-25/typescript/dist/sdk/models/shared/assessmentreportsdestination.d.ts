import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentReportDestinationTypeEnum } from "./assessmentreportdestinationtypeenum";
/**
 *  The location where Audit Manager saves assessment reports for the given assessment.
 */
export declare class AssessmentReportsDestination extends SpeakeasyBase {
    destination?: string;
    destinationType?: AssessmentReportDestinationTypeEnum;
}
