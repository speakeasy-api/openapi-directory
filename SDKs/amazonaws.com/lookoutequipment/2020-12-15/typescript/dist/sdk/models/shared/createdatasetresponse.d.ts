import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetStatusEnum } from "./datasetstatusenum";
/**
 * Success
 */
export declare class CreateDatasetResponse extends SpeakeasyBase {
    datasetArn?: string;
    datasetName?: string;
    status?: DatasetStatusEnum;
}
