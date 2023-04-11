import { SpeakeasyBase } from "../../../internal/utils";
import { ListLinksItem } from "./listlinksitem";
/**
 * Success
 */
export declare class ListLinksOutput extends SpeakeasyBase {
    items: ListLinksItem[];
    nextToken?: string;
}
