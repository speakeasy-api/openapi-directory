import { SpeakeasyBase } from "../../../internal/utils";
import { ResourcePolicy } from "./resourcepolicy";
/**
 * Success
 */
export declare class ListResourcePoliciesResult extends SpeakeasyBase {
    nextToken?: string;
    resourcePolicies?: ResourcePolicy[];
}
