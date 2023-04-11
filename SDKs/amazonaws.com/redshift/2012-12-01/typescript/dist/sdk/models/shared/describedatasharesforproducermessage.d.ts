import { SpeakeasyBase } from "../../../internal/utils";
import { DataShareStatusForProducerEnum } from "./datasharestatusforproducerenum";
export declare class DescribeDataSharesForProducerMessage extends SpeakeasyBase {
    marker?: string;
    maxRecords?: number;
    producerArn?: string;
    status?: DataShareStatusForProducerEnum;
}
