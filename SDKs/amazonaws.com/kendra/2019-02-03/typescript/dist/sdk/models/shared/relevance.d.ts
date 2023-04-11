import { SpeakeasyBase } from "../../../internal/utils";
import { OrderEnum } from "./orderenum";
/**
 * Provides information for tuning the relevance of a field in a search. When a query includes terms that match the field, the results are given a boost in the response based on these tuning parameters.
 */
export declare class Relevance extends SpeakeasyBase {
    duration?: string;
    freshness?: boolean;
    importance?: number;
    rankOrder?: OrderEnum;
    valueImportanceMap?: Record<string, number>;
}
