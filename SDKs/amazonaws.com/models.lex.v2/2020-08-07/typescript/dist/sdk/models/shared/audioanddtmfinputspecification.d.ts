import { SpeakeasyBase } from "../../../internal/utils";
import { AudioSpecification } from "./audiospecification";
import { DTMFSpecification } from "./dtmfspecification";
/**
 * Specifies the audio and DTMF input specification.
 */
export declare class AudioAndDTMFInputSpecification extends SpeakeasyBase {
    audioSpecification?: AudioSpecification;
    dtmfSpecification?: DTMFSpecification;
    startTimeoutMs: number;
}
