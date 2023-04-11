import { SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";
import { IngestConfiguration } from "./ingestconfiguration";
import { RecordingConfiguration } from "./recordingconfiguration";
import { StreamEvent } from "./streamevent";
/**
 * Object that captures the Amazon IVS configuration that the customer provisioned, the ingest configurations that the broadcaster used, and the most recent Amazon IVS stream events it encountered.
 */
export declare class StreamSession extends SpeakeasyBase {
    channel?: Channel;
    endTime?: Date;
    ingestConfiguration?: IngestConfiguration;
    recordingConfiguration?: RecordingConfiguration;
    startTime?: Date;
    streamId?: string;
    truncatedEvents?: StreamEvent[];
}
