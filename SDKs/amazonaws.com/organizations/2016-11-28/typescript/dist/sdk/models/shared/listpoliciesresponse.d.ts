import { SpeakeasyBase } from "../../../internal/utils";
import { PolicySummary } from "./policysummary";
/**
 * Success
 */
export declare class ListPoliciesResponse extends SpeakeasyBase {
    nextToken?: string;
    policies?: PolicySummary[];
}
