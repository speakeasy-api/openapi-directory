import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
/**
 * Criteria used to return data quality results.
 */
export declare class DataQualityResultFilterCriteria extends SpeakeasyBase {
    dataSource?: DataSource;
    jobName?: string;
    jobRunId?: string;
    startedAfter?: Date;
    startedBefore?: Date;
}
