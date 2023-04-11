import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Cursors to navigate to previous or next pages through the API
 */
export declare class MetaCursors extends SpeakeasyBase {
    /**
     * Cursor to navigate to the current page of results through the API
     */
    current?: string;
    /**
     * Cursor to navigate to the next page of results through the API
     */
    next?: string;
    /**
     * Cursor to navigate to the previous page of results through the API
     */
    previous?: string;
}
/**
 * Response metadata
 */
export declare class Meta extends SpeakeasyBase {
    /**
     * Cursors to navigate to previous or next pages through the API
     */
    cursors?: MetaCursors;
    /**
     * Number of items returned in the data property of the response
     */
    itemsOnPage?: number;
}
