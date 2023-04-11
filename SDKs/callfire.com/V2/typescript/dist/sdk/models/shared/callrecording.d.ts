import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Current state of a recording, available values: RECORDING - recording is in progress, READY - recording is ready, ERROR - error has occurred and recording can be broken
 */
export declare enum CallRecordingStateEnum {
    Recording = "RECORDING",
    Ready = "READY",
    Error = "ERROR"
}
/**
 * Represents a recording of a voice call
 */
export declare class CallRecording extends SpeakeasyBase {
    /**
     * An id of a call action
     */
    callId?: number;
    /**
     * Contains broadcast id if call was sent as a part of voice broadcast
     */
    campaignId?: number;
    /**
     * The time when the given resource was created, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    created?: number;
    /**
     * A unique string hash identifier of a recording
     */
    hash?: string;
    /**
     * An id of a call recording
     */
    id?: number;
    /**
     * A size of a recording file in bytes
     */
    lengthInBytes?: number;
    /**
     * Duration of a recording in seconds
     */
    lengthInSeconds?: number;
    /**
     * A public URL of a call recording
     */
    mp3Url?: string;
    /**
     * A name of a recording
     */
    name?: string;
    /**
     * Current state of a recording, available values: RECORDING - recording is in progress, READY - recording is ready, ERROR - error has occurred and recording can be broken
     */
    state?: CallRecordingStateEnum;
}
