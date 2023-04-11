import { SpeakeasyBase } from "../../../internal/utils";
import { AirbyteStream } from "./airbytestream";
import { AirbyteStreamConfiguration } from "./airbytestreamconfiguration";
/**
 * each stream is split in two parts; the immutable schema from source and mutable configuration for destination
 */
export declare class AirbyteStreamAndConfiguration extends SpeakeasyBase {
    /**
     * the mutable part of the stream to configure the destination
     */
    config?: AirbyteStreamConfiguration;
    /**
     * the immutable schema defined by the source
     */
    stream?: AirbyteStream;
}
