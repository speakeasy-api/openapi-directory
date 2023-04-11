import { SpeakeasyBase } from "../../../internal/utils";
import { AudioConfiguration } from "./audioconfiguration";
import { VideoConfiguration } from "./videoconfiguration";
/**
 * Object specifying the ingest configuration set up by the broadcaster, usually in an encoder.
 */
export declare class IngestConfiguration extends SpeakeasyBase {
    audio?: AudioConfiguration;
    video?: VideoConfiguration;
}
