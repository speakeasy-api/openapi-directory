import { SpeakeasyBase } from "../../../internal/utils";
import { IncidentRecordSummary } from "./incidentrecordsummary";
/**
 * Success
 */
export declare class ListIncidentRecordsOutput extends SpeakeasyBase {
    incidentRecordSummaries: IncidentRecordSummary[];
    nextToken?: string;
}
