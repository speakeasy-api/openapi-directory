import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GETDescribeUpdateActionsActionEnum {
    DescribeUpdateActions = "DescribeUpdateActions"
}
/**
 * Filters update actions from the service updates that are in available status during the time range.
 */
export declare class GETDescribeUpdateActionsServiceUpdateTimeRange extends SpeakeasyBase {
    endTime?: Date;
    startTime?: Date;
}
export declare enum GETDescribeUpdateActionsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETDescribeUpdateActionsRequest extends SpeakeasyBase {
    action: GETDescribeUpdateActionsActionEnum;
    /**
     * The cache cluster IDs
     */
    cacheClusterIds?: string[];
    /**
     * The Elasticache engine to which the update applies. Either Redis or Memcached
     */
    engine?: string;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
     */
    marker?: string;
    /**
     * The maximum number of records to include in the response
     */
    maxRecords?: number;
    /**
     * The replication group IDs
     */
    replicationGroupIds?: string[];
    /**
     * The unique ID of the service update
     */
    serviceUpdateName?: string;
    /**
     * The status of the service update
     */
    serviceUpdateStatus?: shared.ServiceUpdateStatusEnum[];
    /**
     * The range of time specified to search for service updates that are in available status
     */
    serviceUpdateTimeRange?: GETDescribeUpdateActionsServiceUpdateTimeRange;
    /**
     * Dictates whether to include node level update status in the response
     */
    showNodeLevelUpdateStatus?: boolean;
    /**
     * The status of the update action.
     */
    updateActionStatus?: shared.UpdateActionStatusEnum[];
    version: GETDescribeUpdateActionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeUpdateActionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
