import { SpeakeasyBase } from "../../../internal/utils";
import { StreamDescriptor } from "./streamdescriptor";
/**
 * contains information about how a reset was configured. only populated if the job was a reset.
 */
export declare class ResetConfig extends SpeakeasyBase {
    streamsToReset?: StreamDescriptor[];
}
