import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object specifying a stream’s video configuration, as set up by the broadcaster (usually in an encoder). This is part of the <a>IngestConfiguration</a> object and used for monitoring stream health.
 */
export declare class VideoConfiguration extends SpeakeasyBase {
    avcLevel?: string;
    avcProfile?: string;
    codec?: string;
    encoder?: string;
    targetBitrate?: number;
    targetFramerate?: number;
    videoHeight?: number;
    videoWidth?: number;
}
