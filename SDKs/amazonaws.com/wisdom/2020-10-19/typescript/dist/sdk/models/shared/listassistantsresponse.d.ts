import { SpeakeasyBase } from "../../../internal/utils";
import { AssistantSummary } from "./assistantsummary";
/**
 * Success
 */
export declare class ListAssistantsResponse extends SpeakeasyBase {
    assistantSummaries: AssistantSummary[];
    nextToken?: string;
}
