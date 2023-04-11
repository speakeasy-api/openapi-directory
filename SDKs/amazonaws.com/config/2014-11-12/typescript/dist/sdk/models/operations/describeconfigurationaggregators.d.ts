import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeConfigurationAggregatorsXAmzTargetEnum {
    StarlingDoveServiceDescribeConfigurationAggregators = "StarlingDoveService.DescribeConfigurationAggregators"
}
export declare class DescribeConfigurationAggregatorsRequest extends SpeakeasyBase {
    describeConfigurationAggregatorsRequest: shared.DescribeConfigurationAggregatorsRequest;
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
    xAmzTarget: DescribeConfigurationAggregatorsXAmzTargetEnum;
}
export declare class DescribeConfigurationAggregatorsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeConfigurationAggregatorsResponse?: shared.DescribeConfigurationAggregatorsResponse;
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
