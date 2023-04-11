import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
import { TaskStatusTypeEnum } from "./taskstatustypeenum";
/**
 * Describes the result of a data quality rule recommendation run.
 */
export declare class DataQualityRuleRecommendationRunDescription extends SpeakeasyBase {
    dataSource?: DataSource;
    runId?: string;
    startedOn?: Date;
    status?: TaskStatusTypeEnum;
}
