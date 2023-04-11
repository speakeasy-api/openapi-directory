import { SpeakeasyBase } from "../../../internal/utils";
import { KeywordActionEnum } from "./keywordactionenum";
/**
 * Success
 */
export declare class PutKeywordResult extends SpeakeasyBase {
    keyword?: string;
    keywordAction?: KeywordActionEnum;
    keywordMessage?: string;
    originationIdentity?: string;
    originationIdentityArn?: string;
}
