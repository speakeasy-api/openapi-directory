import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetSource } from "./datasetsource";
import { DatasetTypeEnum } from "./datasettypeenum";
export declare class CreateDatasetRequest extends SpeakeasyBase {
    datasetSource?: DatasetSource;
    datasetType: DatasetTypeEnum;
    projectArn: string;
}
