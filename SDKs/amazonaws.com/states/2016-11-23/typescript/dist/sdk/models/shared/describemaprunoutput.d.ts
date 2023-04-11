import { SpeakeasyBase } from "../../../internal/utils";
import { MapRunExecutionCounts } from "./maprunexecutioncounts";
import { MapRunItemCounts } from "./maprunitemcounts";
import { MapRunStatusEnum } from "./maprunstatusenum";
/**
 * Success
 */
export declare class DescribeMapRunOutput extends SpeakeasyBase {
    executionArn: string;
    executionCounts: MapRunExecutionCounts;
    itemCounts: MapRunItemCounts;
    mapRunArn: string;
    maxConcurrency: number;
    startDate: Date;
    status: MapRunStatusEnum;
    stopDate?: Date;
    toleratedFailureCount: number;
    toleratedFailurePercentage: number;
}
