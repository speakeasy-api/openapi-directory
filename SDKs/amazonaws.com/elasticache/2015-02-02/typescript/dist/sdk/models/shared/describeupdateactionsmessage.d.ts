import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceUpdateStatusEnum } from "./serviceupdatestatusenum";
import { TimeRangeFilter } from "./timerangefilter";
import { UpdateActionStatusEnum } from "./updateactionstatusenum";
export declare class DescribeUpdateActionsMessage extends SpeakeasyBase {
    cacheClusterIds?: string[];
    engine?: string;
    marker?: string;
    maxRecords?: number;
    replicationGroupIds?: string[];
    serviceUpdateName?: string;
    serviceUpdateStatus?: ServiceUpdateStatusEnum[];
    serviceUpdateTimeRange?: TimeRangeFilter;
    showNodeLevelUpdateStatus?: boolean;
    updateActionStatus?: UpdateActionStatusEnum[];
}
