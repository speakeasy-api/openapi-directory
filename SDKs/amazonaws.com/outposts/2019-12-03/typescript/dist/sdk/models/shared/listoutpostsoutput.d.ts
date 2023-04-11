import { SpeakeasyBase } from "../../../internal/utils";
import { Outpost } from "./outpost";
/**
 * Success
 */
export declare class ListOutpostsOutput extends SpeakeasyBase {
    /**
     * The pagination token.
     */
    nextToken?: string;
    /**
     * Information about the Outposts.
     */
    outposts?: Outpost[];
}
