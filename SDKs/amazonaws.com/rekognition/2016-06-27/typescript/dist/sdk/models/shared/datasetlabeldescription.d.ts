import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetLabelStats } from "./datasetlabelstats";
/**
 *  Describes a dataset label. For more information, see <a>ListDatasetLabels</a>.
 */
export declare class DatasetLabelDescription extends SpeakeasyBase {
    labelName?: string;
    labelStats?: DatasetLabelStats;
}
