import { SpeakeasyBase } from "../../../internal/utils";
import { AggregatedUtterancesSummary } from "./aggregatedutterancessummary";
import { UtteranceAggregationDuration } from "./utteranceaggregationduration";
/**
 * Success
 */
export declare class ListAggregatedUtterancesResponse extends SpeakeasyBase {
    aggregatedUtterancesSummaries?: AggregatedUtterancesSummary[];
    aggregationDuration?: UtteranceAggregationDuration;
    aggregationLastRefreshedDateTime?: Date;
    aggregationWindowEndTime?: Date;
    aggregationWindowStartTime?: Date;
    botAliasId?: string;
    botId?: string;
    botVersion?: string;
    localeId?: string;
    nextToken?: string;
}
