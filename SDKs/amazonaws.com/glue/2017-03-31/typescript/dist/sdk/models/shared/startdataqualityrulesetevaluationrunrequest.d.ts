import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityEvaluationRunAdditionalRunOptions } from "./dataqualityevaluationrunadditionalrunoptions";
import { DataSource } from "./datasource";
export declare class StartDataQualityRulesetEvaluationRunRequest extends SpeakeasyBase {
    additionalRunOptions?: DataQualityEvaluationRunAdditionalRunOptions;
    clientToken?: string;
    dataSource: DataSource;
    numberOfWorkers?: number;
    role: string;
    rulesetNames: string[];
    timeout?: number;
}
