import { SpeakeasyBase } from "../../../internal/utils";
import { FaceDetail } from "./facedetail";
import { OrientationCorrectionEnum } from "./orientationcorrectionenum";
/**
 * Success
 */
export declare class DetectFacesResponse extends SpeakeasyBase {
    faceDetails?: FaceDetail[];
    orientationCorrection?: OrientationCorrectionEnum;
}
