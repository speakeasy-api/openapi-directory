import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceNameAndResourceType } from "./servicenameandresourcetype";
/**
 * Success
 */
export declare class ListResourceTypesResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceTypes?: ServiceNameAndResourceType[];
}
