import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeConnectionsXAmzTargetEnum {
    AmazonDMSv20160101DescribeConnections = "AmazonDMSv20160101.DescribeConnections"
}
export declare class DescribeConnectionsRequest extends SpeakeasyBase {
    describeConnectionsMessage: shared.DescribeConnectionsMessage;
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
    xAmzTarget: DescribeConnectionsXAmzTargetEnum;
}
export declare class DescribeConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeConnectionsResponse?: shared.DescribeConnectionsResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
