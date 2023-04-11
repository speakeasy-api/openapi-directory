import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetStatusEnum } from "./datasetstatusenum";
import { DatasetTypeEnum } from "./datasettypeenum";
/**
 * Properties associated with the dataset.
 */
export declare class DatasetProperties extends SpeakeasyBase {
    creationTime?: Date;
    datasetArn?: string;
    datasetName?: string;
    datasetS3Uri?: string;
    datasetType?: DatasetTypeEnum;
    description?: string;
    endTime?: Date;
    message?: string;
    numberOfDocuments?: number;
    status?: DatasetStatusEnum;
}
