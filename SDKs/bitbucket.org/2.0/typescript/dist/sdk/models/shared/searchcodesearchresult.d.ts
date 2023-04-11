import { SpeakeasyBase } from "../../../internal/utils";
import { SearchContentMatch } from "./searchcontentmatch";
import { SearchSegment } from "./searchsegment";
export declare class SearchCodeSearchResult extends SpeakeasyBase {
    contentMatchCount?: number;
    contentMatches?: SearchContentMatch[];
    /**
     * A file object, representing a file at a commit in a repository
     */
    file?: Record<string, any>;
    pathMatches?: SearchSegment[];
    type?: string;
}
