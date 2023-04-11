import { SpeakeasyBase } from "../../../internal/utils";
import { KnowledgeBaseSummary } from "./knowledgebasesummary";
/**
 * Success
 */
export declare class ListKnowledgeBasesResponse extends SpeakeasyBase {
    knowledgeBaseSummaries: KnowledgeBaseSummary[];
    nextToken?: string;
}
