import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisMethodEnum } from "./analysismethodenum";
import { ConfiguredTableAnalysisRuleTypeEnum } from "./configuredtableanalysisruletypeenum";
import { TableReference } from "./tablereference";
/**
 * A table that has been configured for use in a collaboration.
 */
export declare class ConfiguredTable extends SpeakeasyBase {
    allowedColumns: string[];
    analysisMethod: AnalysisMethodEnum;
    analysisRuleTypes: ConfiguredTableAnalysisRuleTypeEnum[];
    arn: string;
    createTime: Date;
    description?: string;
    id: string;
    name: string;
    tableReference: TableReference;
    updateTime: Date;
}
