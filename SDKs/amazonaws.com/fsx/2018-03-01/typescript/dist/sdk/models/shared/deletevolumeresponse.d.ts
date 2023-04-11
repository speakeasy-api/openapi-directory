import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteVolumeOntapResponse } from "./deletevolumeontapresponse";
import { VolumeLifecycleEnum } from "./volumelifecycleenum";
/**
 * Success
 */
export declare class DeleteVolumeResponse extends SpeakeasyBase {
    lifecycle?: VolumeLifecycleEnum;
    ontapResponse?: DeleteVolumeOntapResponse;
    volumeId?: string;
}
