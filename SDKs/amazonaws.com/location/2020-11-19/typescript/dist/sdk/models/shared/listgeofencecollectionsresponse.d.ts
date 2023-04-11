import { SpeakeasyBase } from "../../../internal/utils";
import { ListGeofenceCollectionsResponseEntry } from "./listgeofencecollectionsresponseentry";
/**
 * Success
 */
export declare class ListGeofenceCollectionsResponse extends SpeakeasyBase {
    entries: ListGeofenceCollectionsResponseEntry[];
    nextToken?: string;
}
