import { SpeakeasyBase } from "../../../internal/utils";
import { DetectLabelsImagePropertiesSettings } from "./detectlabelsimagepropertiessettings";
import { GeneralLabelsSettings } from "./generallabelssettings";
/**
 * Settings for the DetectLabels request. Settings can include filters for both GENERAL_LABELS and IMAGE_PROPERTIES. GENERAL_LABELS filters can be inclusive or exclusive and applied to individual labels or label categories. IMAGE_PROPERTIES filters allow specification of a maximum number of dominant colors.
 */
export declare class DetectLabelsSettings extends SpeakeasyBase {
    generalLabels?: GeneralLabelsSettings;
    imageProperties?: DetectLabelsImagePropertiesSettings;
}
