import { SpeakeasyBase } from "../../../internal/utils";
import { KinesisVideoStreamStartSelector } from "./kinesisvideostreamstartselector";
/**
 * This is a required parameter for label detection stream processors and should not be used to start a face search stream processor.
 */
export declare class StreamProcessingStartSelector extends SpeakeasyBase {
    kvsStreamStartSelector?: KinesisVideoStreamStartSelector;
}
