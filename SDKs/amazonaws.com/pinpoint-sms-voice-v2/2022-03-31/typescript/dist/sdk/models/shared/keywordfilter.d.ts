import { SpeakeasyBase } from "../../../internal/utils";
import { KeywordFilterNameEnum } from "./keywordfilternameenum";
/**
 * The information for keywords that meet a specified criteria.
 */
export declare class KeywordFilter extends SpeakeasyBase {
    name: KeywordFilterNameEnum;
    values: string[];
}
