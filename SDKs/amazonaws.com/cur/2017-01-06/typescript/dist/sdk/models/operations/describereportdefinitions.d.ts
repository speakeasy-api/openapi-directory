import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeReportDefinitionsXAmzTargetEnum {
    AWSOrigamiServiceGatewayServiceDescribeReportDefinitions = "AWSOrigamiServiceGatewayService.DescribeReportDefinitions"
}
export declare class DescribeReportDefinitionsRequest extends SpeakeasyBase {
    describeReportDefinitionsRequest: shared.DescribeReportDefinitionsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
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
    xAmzTarget: DescribeReportDefinitionsXAmzTargetEnum;
}
export declare class DescribeReportDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeReportDefinitionsResponse?: shared.DescribeReportDefinitionsResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
