import { SpeakeasyBase } from "../../../internal/utils";
import { ResourcePolicy } from "./resourcepolicy";
/**
 * Success
 */
export declare class GetResourcePoliciesOutput extends SpeakeasyBase {
    nextToken?: string;
    resourcePolicies: ResourcePolicy[];
}
