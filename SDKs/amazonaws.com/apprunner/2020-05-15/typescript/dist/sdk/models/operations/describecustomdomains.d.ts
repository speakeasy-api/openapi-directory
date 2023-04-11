import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCustomDomainsXAmzTargetEnum {
    AppRunnerDescribeCustomDomains = "AppRunner.DescribeCustomDomains"
}
export declare class DescribeCustomDomainsRequest extends SpeakeasyBase {
    describeCustomDomainsRequest: shared.DescribeCustomDomainsRequest;
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
    xAmzTarget: DescribeCustomDomainsXAmzTargetEnum;
}
export declare class DescribeCustomDomainsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeCustomDomainsResponse?: shared.DescribeCustomDomainsResponse;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
