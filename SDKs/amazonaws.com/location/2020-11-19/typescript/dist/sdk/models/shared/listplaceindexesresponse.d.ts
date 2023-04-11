import { SpeakeasyBase } from "../../../internal/utils";
import { ListPlaceIndexesResponseEntry } from "./listplaceindexesresponseentry";
/**
 * Success
 */
export declare class ListPlaceIndexesResponse extends SpeakeasyBase {
    entries: ListPlaceIndexesResponseEntry[];
    nextToken?: string;
}
