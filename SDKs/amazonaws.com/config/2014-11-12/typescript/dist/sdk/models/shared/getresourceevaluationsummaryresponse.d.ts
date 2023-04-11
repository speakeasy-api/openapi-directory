import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";
import { EvaluationContext } from "./evaluationcontext";
import { EvaluationModeEnum } from "./evaluationmodeenum";
import { EvaluationStatus } from "./evaluationstatus";
import { ResourceDetails } from "./resourcedetails";
/**
 * Success
 */
export declare class GetResourceEvaluationSummaryResponse extends SpeakeasyBase {
    compliance?: ComplianceTypeEnum;
    evaluationContext?: EvaluationContext;
    evaluationMode?: EvaluationModeEnum;
    evaluationStartTimestamp?: Date;
    evaluationStatus?: EvaluationStatus;
    resourceDetails?: ResourceDetails;
    resourceEvaluationId?: string;
}
