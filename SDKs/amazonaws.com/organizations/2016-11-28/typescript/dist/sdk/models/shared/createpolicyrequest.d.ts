import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeEnum } from "./policytypeenum";
import { Tag } from "./tag";
export declare class CreatePolicyRequest extends SpeakeasyBase {
    content: string;
    description: string;
    name: string;
    tags?: Tag[];
    type: PolicyTypeEnum;
}
