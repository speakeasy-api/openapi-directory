import { SpeakeasyBase } from "../../../internal/utils";
import { Schedule } from "./schedule";
import { TriggeringDataset } from "./triggeringdataset";
/**
 * The <code>DatasetTrigger</code> that specifies when the dataset is automatically updated.
 */
export declare class DatasetTrigger extends SpeakeasyBase {
    dataset?: TriggeringDataset;
    schedule?: Schedule;
}
