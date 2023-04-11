import { SpeakeasyBase } from "../../../internal/utils";
import { StreamProcessingStartSelector } from "./streamprocessingstartselector";
import { StreamProcessingStopSelector } from "./streamprocessingstopselector";
export declare class StartStreamProcessorRequest extends SpeakeasyBase {
    name: string;
    startSelector?: StreamProcessingStartSelector;
    stopSelector?: StreamProcessingStopSelector;
}
