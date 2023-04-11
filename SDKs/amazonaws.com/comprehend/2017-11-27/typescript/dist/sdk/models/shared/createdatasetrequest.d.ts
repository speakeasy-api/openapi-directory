import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetInputDataConfig } from "./datasetinputdataconfig";
import { DatasetTypeEnum } from "./datasettypeenum";
import { Tag } from "./tag";
export declare class CreateDatasetRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    datasetName: string;
    datasetType?: DatasetTypeEnum;
    description?: string;
    flywheelArn: string;
    inputDataConfig: DatasetInputDataConfig;
    tags?: Tag[];
}
