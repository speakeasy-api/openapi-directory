import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetStatusEnum } from "./datasetstatusenum";
import { DatasetTypeEnum } from "./datasettypeenum";
/**
 * Filter the datasets based on creation time or dataset status.
 */
export declare class DatasetFilter extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    datasetType?: DatasetTypeEnum;
    status?: DatasetStatusEnum;
}
