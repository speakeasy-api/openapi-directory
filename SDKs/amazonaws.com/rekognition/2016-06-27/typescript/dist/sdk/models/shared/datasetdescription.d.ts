import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetStats } from "./datasetstats";
import { DatasetStatusEnum } from "./datasetstatusenum";
import { DatasetStatusMessageCodeEnum } from "./datasetstatusmessagecodeenum";
/**
 * <p> A description for a dataset. For more information, see <a>DescribeDataset</a>.</p> <p>The status fields <code>Status</code>, <code>StatusMessage</code>, and <code>StatusMessageCode</code> reflect the last operation on the dataset. </p>
 */
export declare class DatasetDescription extends SpeakeasyBase {
    creationTimestamp?: Date;
    datasetStats?: DatasetStats;
    lastUpdatedTimestamp?: Date;
    status?: DatasetStatusEnum;
    statusMessage?: string;
    statusMessageCode?: DatasetStatusMessageCodeEnum;
}
