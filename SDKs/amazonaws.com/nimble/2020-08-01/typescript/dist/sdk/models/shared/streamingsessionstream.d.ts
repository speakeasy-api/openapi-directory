import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingSessionStreamStateEnum } from "./streamingsessionstreamstateenum";
import { StreamingSessionStreamStatusCodeEnum } from "./streamingsessionstreamstatuscodeenum";
/**
 * A stream is an active connection to a streaming session, enabling a studio user to control the streaming session using a compatible client. Streaming session streams are compatible with the NICE DCV web client, included in the Nimble Studio portal, or the NICE DCV desktop client.
 */
export declare class StreamingSessionStream extends SpeakeasyBase {
    createdAt?: Date;
    createdBy?: string;
    expiresAt?: Date;
    ownedBy?: string;
    state?: StreamingSessionStreamStateEnum;
    statusCode?: StreamingSessionStreamStatusCodeEnum;
    streamId?: string;
    url?: string;
}
