import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyVerifiedAccessGroupPolicyRequest extends SpeakeasyBase {
    clientToken?: string;
    dryRun?: boolean;
    policyDocument?: string;
    policyEnabled: boolean;
    verifiedAccessGroupId: string;
}
