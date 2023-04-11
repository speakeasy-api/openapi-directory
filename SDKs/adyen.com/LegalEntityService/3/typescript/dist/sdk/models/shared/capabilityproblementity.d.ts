import { SpeakeasyBase } from "../../../internal/utils";
import { CapabilityProblemEntityRecursive } from "./capabilityproblementityrecursive";
export declare enum CapabilityProblemEntityTypeEnum {
    BankAccount = "BankAccount",
    Document = "Document",
    LegalEntity = "LegalEntity"
}
export declare class CapabilityProblemEntity extends SpeakeasyBase {
    documents?: string[];
    id?: string;
    owner?: CapabilityProblemEntityRecursive;
    type?: CapabilityProblemEntityTypeEnum;
}
