import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";
/**
 * <p/>
 */
export declare class GetComplianceDetailsByResourceRequest extends SpeakeasyBase {
    complianceTypes?: ComplianceTypeEnum[];
    nextToken?: string;
    resourceEvaluationId?: string;
    resourceId?: string;
    resourceType?: string;
}
