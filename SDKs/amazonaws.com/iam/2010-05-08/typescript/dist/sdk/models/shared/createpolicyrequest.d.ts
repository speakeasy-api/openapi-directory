import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreatePolicyRequest extends SpeakeasyBase {
    description?: string;
    path?: string;
    policyDocument: string;
    policyName: string;
    tags?: Tag[];
}
