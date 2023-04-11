import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
/**
 * Success
 */
export declare class DescribeDestinationsResponse extends SpeakeasyBase {
    destinations?: Destination[];
    /**
     * The token for the next set of items to return. The token expires after 24 hours.
     */
    nextToken?: string;
}
