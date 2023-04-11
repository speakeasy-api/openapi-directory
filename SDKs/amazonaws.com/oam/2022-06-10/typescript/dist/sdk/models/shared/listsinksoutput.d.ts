import { SpeakeasyBase } from "../../../internal/utils";
import { ListSinksItem } from "./listsinksitem";
/**
 * Success
 */
export declare class ListSinksOutput extends SpeakeasyBase {
    items: ListSinksItem[];
    nextToken?: string;
}
