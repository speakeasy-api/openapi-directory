import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringJobDefinitionSummary } from "./monitoringjobdefinitionsummary";
/**
 * Success
 */
export declare class ListDataQualityJobDefinitionsResponse extends SpeakeasyBase {
    jobDefinitionSummaries: MonitoringJobDefinitionSummary[];
    nextToken?: string;
}
