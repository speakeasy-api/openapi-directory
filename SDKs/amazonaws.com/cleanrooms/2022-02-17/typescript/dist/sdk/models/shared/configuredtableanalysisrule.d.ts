import { SpeakeasyBase } from "../../../internal/utils";
import { ConfiguredTableAnalysisRulePolicy } from "./configuredtableanalysisrulepolicy";
import { ConfiguredTableAnalysisRuleTypeEnum } from "./configuredtableanalysisruletypeenum";
/**
 * A configured table analysis rule, which limits how data for this table can be used.
 */
export declare class ConfiguredTableAnalysisRule extends SpeakeasyBase {
    configuredTableArn: string;
    configuredTableId: string;
    createTime: Date;
    policy: ConfiguredTableAnalysisRulePolicy;
    type: ConfiguredTableAnalysisRuleTypeEnum;
    updateTime: Date;
}
