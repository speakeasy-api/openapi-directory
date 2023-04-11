import { SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";
/**
 * Success
 */
export declare class ListManagedEndpointsResponse extends SpeakeasyBase {
    endpoints?: Endpoint[];
    nextToken?: string;
}
