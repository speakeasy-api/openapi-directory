import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingSessionStateEnum } from "./streamingsessionstateenum";
import { StreamingSessionStatusCodeEnum } from "./streamingsessionstatuscodeenum";
/**
 * Information about the streaming session backup.
 */
export declare class StreamingSessionBackup extends SpeakeasyBase {
    arn?: string;
    backupId?: string;
    createdAt?: Date;
    launchProfileId?: string;
    ownedBy?: string;
    sessionId?: string;
    /**
     * The streaming session state.
     */
    state?: StreamingSessionStateEnum;
    statusCode?: StreamingSessionStatusCodeEnum;
    statusMessage?: string;
    tags?: Record<string, string>;
}
