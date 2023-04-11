import { SpeakeasyBase } from "../../../internal/utils";
import { ListProfileObjectsItem } from "./listprofileobjectsitem";
/**
 * Success
 */
export declare class ListProfileObjectsResponse extends SpeakeasyBase {
    items?: ListProfileObjectsItem[];
    nextToken?: string;
}
