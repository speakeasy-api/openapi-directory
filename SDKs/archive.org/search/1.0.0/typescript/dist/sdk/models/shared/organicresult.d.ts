import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The result of a organic search request
 */
export declare class OrganicResult extends SpeakeasyBase {
    /**
     * Number of results returned
     */
    count?: number;
    items?: Record<string, any>[];
    /**
     * Approximate number of results meeting query
     */
    total?: number;
}
