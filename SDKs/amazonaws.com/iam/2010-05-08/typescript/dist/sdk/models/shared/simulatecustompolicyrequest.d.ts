import { SpeakeasyBase } from "../../../internal/utils";
import { ContextEntry } from "./contextentry";
export declare class SimulateCustomPolicyRequest extends SpeakeasyBase {
    actionNames: string[];
    callerArn?: string;
    contextEntries?: ContextEntry[];
    marker?: string;
    maxItems?: number;
    permissionsBoundaryPolicyInputList?: string[];
    policyInputList: string[];
    resourceArns?: string[];
    resourceHandlingOption?: string;
    resourceOwner?: string;
    resourcePolicy?: string;
}
