import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a serialization/deserialization program (SerDe) that serves as an extractor and loader.
**/
export declare class SerDeInfo extends SpeakeasyBase {
    name?: string;
    parameters?: Record<string, string>;
    serializationLibrary?: string;
}
