import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object specifying a stream’s audio configuration, as set up by the broadcaster (usually in an encoder). This is part of the <a>IngestConfiguration</a> object and used for monitoring stream health.
 */
export declare class AudioConfiguration extends SpeakeasyBase {
    channels?: number;
    codec?: string;
    sampleRate?: number;
    targetBitrate?: number;
}
