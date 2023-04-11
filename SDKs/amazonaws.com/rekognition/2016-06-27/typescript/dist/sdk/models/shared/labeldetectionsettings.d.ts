import { SpeakeasyBase } from "../../../internal/utils";
import { GeneralLabelsSettings } from "./generallabelssettings";
/**
 * Contains the specified filters that should be applied to a list of returned GENERAL_LABELS.
 */
export declare class LabelDetectionSettings extends SpeakeasyBase {
    /**
     * Contains filters for the object labels returned by DetectLabels. Filters can be inclusive, exclusive, or a combination of both and can be applied to individual l abels or entire label categories.
     */
    generalLabels?: GeneralLabelsSettings;
}
