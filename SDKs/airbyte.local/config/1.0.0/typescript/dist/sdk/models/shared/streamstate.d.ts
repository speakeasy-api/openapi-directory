import { SpeakeasyBase } from "../../../internal/utils";
import { StreamDescriptor } from "./streamdescriptor";
export declare class StreamState extends SpeakeasyBase {
    streamDescriptor: StreamDescriptor;
    streamState?: Record<string, any>;
}
