import { SpeakeasyBase } from "../../../internal/utils";
import { ListGeofenceResponseEntry } from "./listgeofenceresponseentry";
/**
 * Success
 */
export declare class ListGeofencesResponse extends SpeakeasyBase {
    entries: ListGeofenceResponseEntry[];
    nextToken?: string;
}
