import { SpeakeasyBase } from "../../../internal/utils";
export declare class Links extends SpeakeasyBase {
    /**
     * A URL to retrieve the first page of data keeping the provided page size
     */
    first?: string;
    /**
     * A URL to retrieve the last page of data keeping the provided page size
     */
    last?: string;
    /**
     * A URL to retrieve the next page of data keeping the provided page size
     */
    next?: string;
    /**
     * A URL to retrieve the previous page of keeping using the provided page size
     */
    prev?: string;
    /**
     * A URL to retrieve the collection as the primary data
     */
    self?: string;
}
