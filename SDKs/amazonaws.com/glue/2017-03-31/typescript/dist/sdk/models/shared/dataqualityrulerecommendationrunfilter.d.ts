import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
/**
 * A filter for listing data quality recommendation runs.
 */
export declare class DataQualityRuleRecommendationRunFilter extends SpeakeasyBase {
    dataSource: DataSource;
    startedAfter?: Date;
    startedBefore?: Date;
}
