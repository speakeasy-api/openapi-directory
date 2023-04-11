import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyVerifiedAccessEndpointPolicyRequest extends SpeakeasyBase {
    clientToken?: string;
    dryRun?: boolean;
    policyDocument?: string;
    policyEnabled: boolean;
    verifiedAccessEndpointId: string;
}
