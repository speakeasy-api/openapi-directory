import { SpeakeasyBase } from "../../../internal/utils";
import { SearchCodeSearchResult } from "./searchcodesearchresult";
/**
 * Successful search
 */
export declare class SearchResultPage extends SpeakeasyBase {
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    querySubstituted?: boolean;
    size?: number;
    values?: SearchCodeSearchResult[];
}
