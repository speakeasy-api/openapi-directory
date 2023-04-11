import { SpeakeasyBase } from "../../../internal/utils";
import { StreamModeDetails } from "./streammodedetails";
/**
 * Represents the input for <code>CreateStream</code>.
 */
export declare class CreateStreamInput extends SpeakeasyBase {
    shardCount?: number;
    streamModeDetails?: StreamModeDetails;
    streamName: string;
}
