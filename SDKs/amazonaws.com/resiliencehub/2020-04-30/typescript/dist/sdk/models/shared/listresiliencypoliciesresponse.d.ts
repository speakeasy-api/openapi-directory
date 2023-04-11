import { SpeakeasyBase } from "../../../internal/utils";
import { ResiliencyPolicy } from "./resiliencypolicy";
/**
 * Success
 */
export declare class ListResiliencyPoliciesResponse extends SpeakeasyBase {
    nextToken?: string;
    resiliencyPolicies: ResiliencyPolicy[];
}
