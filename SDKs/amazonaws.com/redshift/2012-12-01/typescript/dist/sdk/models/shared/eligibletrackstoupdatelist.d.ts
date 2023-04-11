import { SpeakeasyBase } from "../../../internal/utils";
import { SupportedOperationList } from "./supportedoperationlist";
/**
 * A maintenance track that you can switch the current track to.
 */
export declare class EligibleTracksToUpdateList extends SpeakeasyBase {
    databaseVersion?: string;
    maintenanceTrackName?: string;
    supportedOperations?: SupportedOperationList[];
}
