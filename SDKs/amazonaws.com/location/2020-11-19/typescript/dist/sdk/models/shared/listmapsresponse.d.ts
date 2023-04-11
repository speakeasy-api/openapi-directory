import { SpeakeasyBase } from "../../../internal/utils";
import { ListMapsResponseEntry } from "./listmapsresponseentry";
/**
 * Success
 */
export declare class ListMapsResponse extends SpeakeasyBase {
    entries: ListMapsResponseEntry[];
    nextToken?: string;
}
