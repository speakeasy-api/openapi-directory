import { SpeakeasyBase } from "../../../internal/utils";
import { DetectLabelsFeatureNameEnum } from "./detectlabelsfeaturenameenum";
import { DetectLabelsSettings } from "./detectlabelssettings";
import { Image } from "./image";
export declare class DetectLabelsRequest extends SpeakeasyBase {
    features?: DetectLabelsFeatureNameEnum[];
    image: Image;
    maxLabels?: number;
    minConfidence?: number;
    settings?: DetectLabelsSettings;
}
