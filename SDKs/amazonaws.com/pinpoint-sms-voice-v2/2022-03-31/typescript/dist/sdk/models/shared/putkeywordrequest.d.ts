import { SpeakeasyBase } from "../../../internal/utils";
import { KeywordActionEnum } from "./keywordactionenum";
export declare class PutKeywordRequest extends SpeakeasyBase {
    keyword: string;
    keywordAction?: KeywordActionEnum;
    keywordMessage: string;
    originationIdentity: string;
}
