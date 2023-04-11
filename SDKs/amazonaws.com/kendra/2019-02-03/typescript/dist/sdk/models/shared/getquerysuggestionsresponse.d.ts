import { SpeakeasyBase } from "../../../internal/utils";
import { Suggestion } from "./suggestion";
/**
 * Success
 */
export declare class GetQuerySuggestionsResponse extends SpeakeasyBase {
    querySuggestionsId?: string;
    suggestions?: Suggestion[];
}
