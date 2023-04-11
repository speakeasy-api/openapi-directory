import { SpeakeasyBase } from "../../../internal/utils";
import { IpRuleItem } from "./ipruleitem";
import { Tag } from "./tag";
export declare class CreateIpGroupRequest extends SpeakeasyBase {
    groupDesc?: string;
    groupName: string;
    tags?: Tag[];
    userRules?: IpRuleItem[];
}
