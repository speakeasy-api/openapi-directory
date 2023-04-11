import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisMethodEnum } from "./analysismethodenum";
import { ConfiguredTableAnalysisRuleTypeEnum } from "./configuredtableanalysisruletypeenum";
/**
 * The configured table summary for the objects listed by the request.
 */
export declare class ConfiguredTableSummary extends SpeakeasyBase {
    analysisMethod: AnalysisMethodEnum;
    analysisRuleTypes: ConfiguredTableAnalysisRuleTypeEnum[];
    arn: string;
    createTime: Date;
    id: string;
    name: string;
    updateTime: Date;
}
