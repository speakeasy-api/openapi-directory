import { SpeakeasyBase } from "../../../internal/utils";
import { DetectLabelsImageProperties } from "./detectlabelsimageproperties";
import { Label } from "./label";
import { OrientationCorrectionEnum } from "./orientationcorrectionenum";
/**
 * Success
 */
export declare class DetectLabelsResponse extends SpeakeasyBase {
    imageProperties?: DetectLabelsImageProperties;
    labelModelVersion?: string;
    labels?: Label[];
    orientationCorrection?: OrientationCorrectionEnum;
}
