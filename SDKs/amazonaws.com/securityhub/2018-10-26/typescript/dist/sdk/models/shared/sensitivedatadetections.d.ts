import { SpeakeasyBase } from "../../../internal/utils";
import { Occurrences } from "./occurrences";
/**
 * The list of detected instances of sensitive data.
 */
export declare class SensitiveDataDetections extends SpeakeasyBase {
    count?: number;
    occurrences?: Occurrences;
    type?: string;
}
