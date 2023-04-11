import { SpeakeasyBase } from "../../../internal/utils";
import { Celebrity } from "./celebrity";
import { ComparedFace } from "./comparedface";
import { OrientationCorrectionEnum } from "./orientationcorrectionenum";
/**
 * Success
 */
export declare class RecognizeCelebritiesResponse extends SpeakeasyBase {
    celebrityFaces?: Celebrity[];
    orientationCorrection?: OrientationCorrectionEnum;
    unrecognizedFaces?: ComparedFace[];
}
