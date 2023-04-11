import { SpeakeasyBase } from "../../../internal/utils";
import { ListProfileObjectTypeItem } from "./listprofileobjecttypeitem";
/**
 * Success
 */
export declare class ListProfileObjectTypesResponse extends SpeakeasyBase {
    items?: ListProfileObjectTypeItem[];
    nextToken?: string;
}
