import { SpeakeasyBase } from "../../../internal/utils";
import { FacetResult } from "./facetresult";
import { QueryResultItem } from "./queryresultitem";
import { SpellCorrectedQuery } from "./spellcorrectedquery";
import { Warning } from "./warning";
/**
 * Success
 */
export declare class QueryResult extends SpeakeasyBase {
    facetResults?: FacetResult[];
    queryId?: string;
    resultItems?: QueryResultItem[];
    spellCorrectedQueries?: SpellCorrectedQuery[];
    totalNumberOfResults?: number;
    warnings?: Warning[];
}
