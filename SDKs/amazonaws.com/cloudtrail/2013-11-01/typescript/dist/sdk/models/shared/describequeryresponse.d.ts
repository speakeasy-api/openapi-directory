import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryStatusEnum } from "./deliverystatusenum";
import { QueryStatisticsForDescribeQuery } from "./querystatisticsfordescribequery";
import { QueryStatusEnum } from "./querystatusenum";
/**
 * Success
 */
export declare class DescribeQueryResponse extends SpeakeasyBase {
    deliveryS3Uri?: string;
    deliveryStatus?: DeliveryStatusEnum;
    errorMessage?: string;
    queryId?: string;
    queryStatistics?: QueryStatisticsForDescribeQuery;
    queryStatus?: QueryStatusEnum;
    queryString?: string;
}
