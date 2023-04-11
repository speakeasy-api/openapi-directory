import { SpeakeasyBase } from "../../../internal/utils";
import { KeywordActionEnum } from "./keywordactionenum";
/**
 * The information for all keywords in a pool.
 */
export declare class KeywordInformation extends SpeakeasyBase {
    keyword: string;
    keywordAction: KeywordActionEnum;
    keywordMessage: string;
}
