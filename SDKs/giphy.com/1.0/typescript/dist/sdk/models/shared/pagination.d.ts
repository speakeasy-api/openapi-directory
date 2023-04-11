import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
 *
 * @remarks
 *
 */
export declare class Pagination extends SpeakeasyBase {
    /**
     * Total number of items returned.
     */
    count?: number;
    /**
     * Position in pagination.
     */
    offset?: number;
    /**
     * Total number of items available.
     */
    totalCount?: number;
}
