import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnum {
    StarlingDoveServiceDescribeConfigurationAggregatorSourcesStatus = "StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus"
}
export declare class DescribeConfigurationAggregatorSourcesStatusRequest extends SpeakeasyBase {
    describeConfigurationAggregatorSourcesStatusRequest: shared.DescribeConfigurationAggregatorSourcesStatusRequest;
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
    xAmzTarget: DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnum;
}
export declare class DescribeConfigurationAggregatorSourcesStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeConfigurationAggregatorSourcesStatusResponse?: shared.DescribeConfigurationAggregatorSourcesStatusResponse;
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
     * NoSuchConfigurationAggregatorException
     */
    noSuchConfigurationAggregatorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
