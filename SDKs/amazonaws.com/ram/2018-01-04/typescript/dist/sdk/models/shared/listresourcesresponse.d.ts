import { SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
/**
 * Success
 */
export declare class ListResourcesResponse extends SpeakeasyBase {
    nextToken?: string;
    resources?: Resource[];
}
