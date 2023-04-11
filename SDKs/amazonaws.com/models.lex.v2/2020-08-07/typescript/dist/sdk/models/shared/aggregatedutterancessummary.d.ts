import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides summary information for aggregated utterances. The <code>ListAggregatedUtterances</code> operations combines all instances of the same utterance into a single aggregated summary.
 */
export declare class AggregatedUtterancesSummary extends SpeakeasyBase {
    containsDataFromDeletedResources?: boolean;
    hitCount?: number;
    missedCount?: number;
    utterance?: string;
    utteranceFirstRecordedInAggregationDuration?: Date;
    utteranceLastRecordedInAggregationDuration?: Date;
}
