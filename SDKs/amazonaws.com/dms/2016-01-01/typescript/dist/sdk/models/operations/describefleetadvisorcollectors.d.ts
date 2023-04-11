import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFleetAdvisorCollectorsXAmzTargetEnum {
    AmazonDMSv20160101DescribeFleetAdvisorCollectors = "AmazonDMSv20160101.DescribeFleetAdvisorCollectors"
}
export declare class DescribeFleetAdvisorCollectorsRequest extends SpeakeasyBase {
    describeFleetAdvisorCollectorsRequest: shared.DescribeFleetAdvisorCollectorsRequest;
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
    xAmzTarget: DescribeFleetAdvisorCollectorsXAmzTargetEnum;
}
export declare class DescribeFleetAdvisorCollectorsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFleetAdvisorCollectorsResponse?: shared.DescribeFleetAdvisorCollectorsResponse;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
