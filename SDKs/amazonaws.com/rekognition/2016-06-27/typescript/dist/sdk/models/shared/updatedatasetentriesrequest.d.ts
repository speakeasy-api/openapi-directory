import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetChanges } from "./datasetchanges";
export declare class UpdateDatasetEntriesRequest extends SpeakeasyBase {
    changes: DatasetChanges;
    datasetArn: string;
}
