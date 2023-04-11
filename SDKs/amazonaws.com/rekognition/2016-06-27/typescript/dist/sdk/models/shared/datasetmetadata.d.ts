import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetStatusEnum } from "./datasetstatusenum";
import { DatasetStatusMessageCodeEnum } from "./datasetstatusmessagecodeenum";
import { DatasetTypeEnum } from "./datasettypeenum";
/**
 *  Summary information for an Amazon Rekognition Custom Labels dataset. For more information, see <a>ProjectDescription</a>.
 */
export declare class DatasetMetadata extends SpeakeasyBase {
    creationTimestamp?: Date;
    datasetArn?: string;
    datasetType?: DatasetTypeEnum;
    status?: DatasetStatusEnum;
    statusMessage?: string;
    statusMessageCode?: DatasetStatusMessageCodeEnum;
}
