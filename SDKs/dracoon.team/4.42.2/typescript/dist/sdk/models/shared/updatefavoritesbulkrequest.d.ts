import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for updating favorites
 */
export declare class UpdateFavoritesBulkRequest extends SpeakeasyBase {
    /**
     * Sets the favorite attribute to true or false on each file in an array of nodes.
     */
    isFavorite: boolean;
    /**
     * List of ids
     */
    objectIds: number[];
}
