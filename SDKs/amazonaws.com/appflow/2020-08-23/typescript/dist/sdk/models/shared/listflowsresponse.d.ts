import { SpeakeasyBase } from "../../../internal/utils";
import { FlowDefinition } from "./flowdefinition";
/**
 * Success
 */
export declare class ListFlowsResponse extends SpeakeasyBase {
    flows?: FlowDefinition[];
    nextToken?: string;
}
