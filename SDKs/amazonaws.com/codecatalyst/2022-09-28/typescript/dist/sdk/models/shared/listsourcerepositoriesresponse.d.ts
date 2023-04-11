import { SpeakeasyBase } from "../../../internal/utils";
import { ListSourceRepositoriesItem } from "./listsourcerepositoriesitem";
/**
 * Success
 */
export declare class ListSourceRepositoriesResponse extends SpeakeasyBase {
    items?: ListSourceRepositoriesItem[];
    nextToken?: string;
}
