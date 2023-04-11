import { SpeakeasyBase } from "../../../internal/utils";
import { FlowDefinitionSummary } from "./flowdefinitionsummary";
/**
 * Success
 */
export declare class ListFlowDefinitionsResponse extends SpeakeasyBase {
    flowDefinitionSummaries: FlowDefinitionSummary[];
    nextToken?: string;
}
