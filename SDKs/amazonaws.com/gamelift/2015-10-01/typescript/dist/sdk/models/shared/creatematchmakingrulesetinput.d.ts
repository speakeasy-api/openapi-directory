import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateMatchmakingRuleSetInput extends SpeakeasyBase {
    name: string;
    ruleSetBody: string;
    tags?: Tag[];
}
