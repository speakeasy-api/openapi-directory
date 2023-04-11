import { SpeakeasyBase } from "../../../internal/utils";
import { ExplainabilitySummary } from "./explainabilitysummary";
/**
 * Success
 */
export declare class ListExplainabilitiesResponse extends SpeakeasyBase {
    explainabilities?: ExplainabilitySummary[];
    nextToken?: string;
}
