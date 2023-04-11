import { SpeakeasyBase } from "../../../internal/utils";
import { ComparedFace } from "./comparedface";
import { ComparedSourceImageFace } from "./comparedsourceimageface";
import { CompareFacesMatch } from "./comparefacesmatch";
import { OrientationCorrectionEnum } from "./orientationcorrectionenum";
/**
 * Success
 */
export declare class CompareFacesResponse extends SpeakeasyBase {
    faceMatches?: CompareFacesMatch[];
    sourceImageFace?: ComparedSourceImageFace;
    sourceImageOrientationCorrection?: OrientationCorrectionEnum;
    targetImageOrientationCorrection?: OrientationCorrectionEnum;
    unmatchedFaces?: ComparedFace[];
}
