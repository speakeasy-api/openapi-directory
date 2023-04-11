import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Stage plan information such as name, identifier, sub plans, and remote sources.
 */
export declare class QueryStagePlanNode extends SpeakeasyBase {
    children?: QueryStagePlanNode[];
    identifier?: string;
    name?: string;
    remoteSources?: string[];
}
