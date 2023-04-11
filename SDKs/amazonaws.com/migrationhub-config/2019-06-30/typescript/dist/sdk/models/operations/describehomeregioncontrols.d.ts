import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeHomeRegionControlsXAmzTargetEnum {
    AWSMigrationHubMultiAccountServiceDescribeHomeRegionControls = "AWSMigrationHubMultiAccountService.DescribeHomeRegionControls"
}
export declare class DescribeHomeRegionControlsRequest extends SpeakeasyBase {
    describeHomeRegionControlsRequest: shared.DescribeHomeRegionControlsRequest;
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
    xAmzTarget: DescribeHomeRegionControlsXAmzTargetEnum;
}
export declare class DescribeHomeRegionControlsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeHomeRegionControlsResult?: shared.DescribeHomeRegionControlsResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
