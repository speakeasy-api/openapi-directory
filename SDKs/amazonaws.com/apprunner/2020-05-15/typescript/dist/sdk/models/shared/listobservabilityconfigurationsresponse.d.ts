import { SpeakeasyBase } from "../../../internal/utils";
import { ObservabilityConfigurationSummary } from "./observabilityconfigurationsummary";
/**
 * Success
 */
export declare class ListObservabilityConfigurationsResponse extends SpeakeasyBase {
    nextToken?: string;
    observabilityConfigurationSummaryList: ObservabilityConfigurationSummary[];
}
