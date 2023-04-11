import { SpeakeasyBase } from "../../../internal/utils";
import { DataShareStatusForConsumerEnum } from "./datasharestatusforconsumerenum";
export declare class DescribeDataSharesForConsumerMessage extends SpeakeasyBase {
    consumerArn?: string;
    marker?: string;
    maxRecords?: number;
    status?: DataShareStatusForConsumerEnum;
}
