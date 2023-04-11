import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisRulePolicy } from "./analysisrulepolicy";
import { AnalysisRuleTypeEnum } from "./analysisruletypeenum";
/**
 * A specification about how data from the configured table can be used in a query.
 */
export declare class AnalysisRule extends SpeakeasyBase {
    collaborationId: string;
    createTime: Date;
    name: string;
    policy: AnalysisRulePolicy;
    type: AnalysisRuleTypeEnum;
    updateTime: Date;
}
