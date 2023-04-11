import { SpeakeasyBase } from "../../../internal/utils";
import { Site } from "./site";
/**
 * Success
 */
export declare class ListSitesOutput extends SpeakeasyBase {
    /**
     * The pagination token.
     */
    nextToken?: string;
    /**
     * Information about the sites.
     */
    sites?: Site[];
}
