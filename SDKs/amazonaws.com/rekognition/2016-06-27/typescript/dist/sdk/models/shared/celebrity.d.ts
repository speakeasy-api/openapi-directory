import { SpeakeasyBase } from "../../../internal/utils";
import { ComparedFace } from "./comparedface";
import { KnownGender } from "./knowngender";
/**
 * Provides information about a celebrity recognized by the <a>RecognizeCelebrities</a> operation.
 */
export declare class Celebrity extends SpeakeasyBase {
    face?: ComparedFace;
    id?: string;
    /**
     * The known gender identity for the celebrity that matches the provided ID. The known gender identity can be Male, Female, Nonbinary, or Unlisted.
     */
    knownGender?: KnownGender;
    matchConfidence?: number;
    name?: string;
    urls?: string[];
}
