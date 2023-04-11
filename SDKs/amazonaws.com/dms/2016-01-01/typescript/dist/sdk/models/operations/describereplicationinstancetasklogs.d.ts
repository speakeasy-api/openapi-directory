import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeReplicationInstanceTaskLogsXAmzTargetEnum {
    AmazonDMSv20160101DescribeReplicationInstanceTaskLogs = "AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs"
}
export declare class DescribeReplicationInstanceTaskLogsRequest extends SpeakeasyBase {
    describeReplicationInstanceTaskLogsMessage: shared.DescribeReplicationInstanceTaskLogsMessage;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeReplicationInstanceTaskLogsXAmzTargetEnum;
}
export declare class DescribeReplicationInstanceTaskLogsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeReplicationInstanceTaskLogsResponse?: shared.DescribeReplicationInstanceTaskLogsResponse;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
