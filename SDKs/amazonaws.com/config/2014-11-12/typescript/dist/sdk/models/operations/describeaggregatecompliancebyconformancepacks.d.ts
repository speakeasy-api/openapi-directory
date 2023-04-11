import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAggregateComplianceByConformancePacksXAmzTargetEnum {
    StarlingDoveServiceDescribeAggregateComplianceByConformancePacks = "StarlingDoveService.DescribeAggregateComplianceByConformancePacks"
}
export declare class DescribeAggregateComplianceByConformancePacksRequest extends SpeakeasyBase {
    describeAggregateComplianceByConformancePacksRequest: shared.DescribeAggregateComplianceByConformancePacksRequest;
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
    xAmzTarget: DescribeAggregateComplianceByConformancePacksXAmzTargetEnum;
}
export declare class DescribeAggregateComplianceByConformancePacksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAggregateComplianceByConformancePacksResponse?: shared.DescribeAggregateComplianceByConformancePacksResponse;
    /**
     * InvalidLimitException
     */
    invalidLimitException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * NoSuchConfigurationAggregatorException
     */
    noSuchConfigurationAggregatorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
