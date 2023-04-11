import { SpeakeasyBase } from "../../../internal/utils";
import { ResiliencyPolicy } from "./resiliencypolicy";
/**
 * Success
 */
export declare class ListSuggestedResiliencyPoliciesResponse extends SpeakeasyBase {
    nextToken?: string;
    resiliencyPolicies: ResiliencyPolicy[];
}
