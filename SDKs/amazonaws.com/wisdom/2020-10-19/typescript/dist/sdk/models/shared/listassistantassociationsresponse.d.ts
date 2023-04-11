import { SpeakeasyBase } from "../../../internal/utils";
import { AssistantAssociationSummary } from "./assistantassociationsummary";
/**
 * Success
 */
export declare class ListAssistantAssociationsResponse extends SpeakeasyBase {
    assistantAssociationSummaries: AssistantAssociationSummary[];
    nextToken?: string;
}
