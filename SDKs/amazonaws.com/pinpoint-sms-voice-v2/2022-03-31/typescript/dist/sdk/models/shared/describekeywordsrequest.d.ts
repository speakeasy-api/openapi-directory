import { SpeakeasyBase } from "../../../internal/utils";
import { KeywordFilter } from "./keywordfilter";
export declare class DescribeKeywordsRequest extends SpeakeasyBase {
    filters?: KeywordFilter[];
    keywords?: string[];
    maxResults?: number;
    nextToken?: string;
    originationIdentity: string;
}
