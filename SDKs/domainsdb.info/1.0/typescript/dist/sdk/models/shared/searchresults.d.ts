import { SpeakeasyBase } from "../../../internal/utils";
import { Domains } from "./domains";
/**
 * Success
 */
export declare class SearchResults extends SpeakeasyBase {
    domains?: Domains[];
    /**
     * Next page id
     */
    nextPage?: string;
    /**
     * Time took
     */
    time: string;
    /**
     * Total days reported
     */
    total?: number;
}
