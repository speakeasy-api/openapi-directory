import { SpeakeasyBase } from "../../../internal/utils";
import { RecordingConfigurationSummary } from "./recordingconfigurationsummary";
/**
 * Success
 */
export declare class ListRecordingConfigurationsResponse extends SpeakeasyBase {
    nextToken?: string;
    recordingConfigurations: RecordingConfigurationSummary[];
}
