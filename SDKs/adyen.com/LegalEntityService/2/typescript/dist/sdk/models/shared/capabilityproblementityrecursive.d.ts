import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CapabilityProblemEntityRecursiveTypeEnum {
    BankAccount = "BankAccount",
    Document = "Document",
    LegalEntity = "LegalEntity"
}
export declare class CapabilityProblemEntityRecursive extends SpeakeasyBase {
    documents?: string[];
    id?: string;
    type?: CapabilityProblemEntityRecursiveTypeEnum;
}
