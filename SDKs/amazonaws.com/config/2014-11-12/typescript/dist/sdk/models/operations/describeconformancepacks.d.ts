import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeConformancePacksXAmzTargetEnum {
    StarlingDoveServiceDescribeConformancePacks = "StarlingDoveService.DescribeConformancePacks"
}
export declare class DescribeConformancePacksRequest extends SpeakeasyBase {
    describeConformancePacksRequest: shared.DescribeConformancePacksRequest;
    /**
     * Pagination limit
     */
    limit?: string;
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
    xAmzTarget: DescribeConformancePacksXAmzTargetEnum;
}
export declare class DescribeConformancePacksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeConformancePacksResponse?: shared.DescribeConformancePacksResponse;
    /**
     * InvalidLimitException
     */
    invalidLimitException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * NoSuchConformancePackException
     */
    noSuchConformancePackException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
