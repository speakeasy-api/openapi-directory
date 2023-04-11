import { SpeakeasyBase } from "../../../internal/utils";
import { KeywordInformation } from "./keywordinformation";
/**
 * Success
 */
export declare class DescribeKeywordsResult extends SpeakeasyBase {
    keywords?: KeywordInformation[];
    nextToken?: string;
    originationIdentity?: string;
    originationIdentityArn?: string;
}
