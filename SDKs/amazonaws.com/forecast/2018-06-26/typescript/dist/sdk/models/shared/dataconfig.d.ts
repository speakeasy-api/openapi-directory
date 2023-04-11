import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalDataset } from "./additionaldataset";
import { AttributeConfig } from "./attributeconfig";
/**
 * The data configuration for your dataset group and any additional datasets.
 */
export declare class DataConfig extends SpeakeasyBase {
    additionalDatasets?: AdditionalDataset[];
    attributeConfigs?: AttributeConfig[];
    datasetGroupArn: string;
}
