import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFleetAdvisorDatabasesXAmzTargetEnum {
    AmazonDMSv20160101DescribeFleetAdvisorDatabases = "AmazonDMSv20160101.DescribeFleetAdvisorDatabases"
}
export declare class DescribeFleetAdvisorDatabasesRequest extends SpeakeasyBase {
    describeFleetAdvisorDatabasesRequest: shared.DescribeFleetAdvisorDatabasesRequest;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFleetAdvisorDatabasesXAmzTargetEnum;
}
export declare class DescribeFleetAdvisorDatabasesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFleetAdvisorDatabasesResponse?: shared.DescribeFleetAdvisorDatabasesResponse;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
