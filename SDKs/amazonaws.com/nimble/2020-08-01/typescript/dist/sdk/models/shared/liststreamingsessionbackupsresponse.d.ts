import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingSessionBackup } from "./streamingsessionbackup";
/**
 * Success
 */
export declare class ListStreamingSessionBackupsResponse extends SpeakeasyBase {
    nextToken?: string;
    streamingSessionBackups?: StreamingSessionBackup[];
}
