import { SpeakeasyBase } from "../../../internal/utils";
import { EntityDescription } from "./entitydescription";
/**
 * Success
 */
export declare class SearchEntitiesResponse extends SpeakeasyBase {
    descriptions?: EntityDescription[];
    nextToken?: string;
}
