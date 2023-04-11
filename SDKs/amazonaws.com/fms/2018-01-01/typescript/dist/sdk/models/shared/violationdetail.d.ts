import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceViolation } from "./resourceviolation";
import { Tag } from "./tag";
/**
 * Violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.
 */
export declare class ViolationDetail extends SpeakeasyBase {
    memberAccount: string;
    policyId: string;
    resourceDescription?: string;
    resourceId: string;
    resourceTags?: Tag[];
    resourceType: string;
    resourceViolations: ResourceViolation[];
}
