import { SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
/**
 * Success
 */
export declare class ListResourceSetResourcesResponse extends SpeakeasyBase {
    items: Resource[];
    nextToken?: string;
}
