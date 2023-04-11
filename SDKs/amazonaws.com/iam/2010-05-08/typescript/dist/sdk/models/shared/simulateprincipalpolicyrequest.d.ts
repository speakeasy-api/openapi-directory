import { SpeakeasyBase } from "../../../internal/utils";
import { ContextEntry } from "./contextentry";
export declare class SimulatePrincipalPolicyRequest extends SpeakeasyBase {
    actionNames: string[];
    callerArn?: string;
    contextEntries?: ContextEntry[];
    marker?: string;
    maxItems?: number;
    permissionsBoundaryPolicyInputList?: string[];
    policyInputList?: string[];
    policySourceArn: string;
    resourceArns?: string[];
    resourceHandlingOption?: string;
    resourceOwner?: string;
    resourcePolicy?: string;
}
