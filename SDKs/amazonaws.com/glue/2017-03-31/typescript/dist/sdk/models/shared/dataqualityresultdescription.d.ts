import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
/**
 * Describes a data quality result.
 */
export declare class DataQualityResultDescription extends SpeakeasyBase {
    dataSource?: DataSource;
    jobName?: string;
    jobRunId?: string;
    resultId?: string;
    startedOn?: Date;
}
