import { SpeakeasyBase } from "../../../internal/utils";
import { ApiDestination } from "./apidestination";
/**
 * Success
 */
export declare class ListApiDestinationsResponse extends SpeakeasyBase {
    apiDestinations?: ApiDestination[];
    nextToken?: string;
}
