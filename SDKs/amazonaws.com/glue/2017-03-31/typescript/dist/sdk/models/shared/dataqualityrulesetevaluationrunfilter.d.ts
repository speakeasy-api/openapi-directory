import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
/**
 * The filter criteria.
 */
export declare class DataQualityRulesetEvaluationRunFilter extends SpeakeasyBase {
    dataSource: DataSource;
    startedAfter?: Date;
    startedBefore?: Date;
}
