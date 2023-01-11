import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTag } from "./resourcetag";
import { SecurityServicePolicyData } from "./securityservicepolicydata";
/**
 * An Firewall Manager policy.
**/
export declare class Policy extends SpeakeasyBase {
    deleteUnusedFMManagedResources?: boolean;
    excludeMap?: Record<string, string[]>;
    excludeResourceTags: boolean;
    includeMap?: Record<string, string[]>;
    policyId?: string;
    policyName: string;
    policyUpdateToken?: string;
    remediationEnabled: boolean;
    resourceTags?: ResourceTag[];
    resourceType: string;
    resourceTypeList?: string[];
    securityServicePolicyData: SecurityServicePolicyData;
}
