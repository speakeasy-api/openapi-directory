import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetAugmentedManifestsListItem } from "./datasetaugmentedmanifestslistitem";
import { DatasetDataFormatEnum } from "./datasetdataformatenum";
import { DatasetDocumentClassifierInputDataConfig } from "./datasetdocumentclassifierinputdataconfig";
import { DatasetEntityRecognizerInputDataConfig } from "./datasetentityrecognizerinputdataconfig";
/**
 * Specifies the format and location of the input data for the dataset.
 */
export declare class DatasetInputDataConfig extends SpeakeasyBase {
    augmentedManifests?: DatasetAugmentedManifestsListItem[];
    dataFormat?: DatasetDataFormatEnum;
    documentClassifierInputDataConfig?: DatasetDocumentClassifierInputDataConfig;
    entityRecognizerInputDataConfig?: DatasetEntityRecognizerInputDataConfig;
}
