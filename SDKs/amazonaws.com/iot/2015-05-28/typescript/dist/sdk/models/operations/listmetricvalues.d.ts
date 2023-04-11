import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The dimension value operator.
 */
export declare enum ListMetricValuesDimensionValueOperatorEnum {
    In = "IN",
    NotIn = "NOT_IN"
}
export declare class ListMetricValuesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The dimension name.
     */
    dimensionName?: string;
    /**
     * The dimension value operator.
     */
    dimensionValueOperator?: ListMetricValuesDimensionValueOperatorEnum;
    /**
     * The end of the time period for which metric values are returned.
     */
    endTime: Date;
    /**
     * The maximum number of results to return at one time.
     */
    maxResults?: number;
    /**
     * The name of the security profile metric for which values are returned.
     */
    metricName: string;
    /**
     * The token for the next set of results.
     */
    nextToken?: string;
    /**
     * The start of the time period for which metric values are returned.
     */
    startTime: Date;
    /**
     * The name of the thing for which security profile metric values are returned.
     */
    thingName: string;
}
export declare class ListMetricValuesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listMetricValuesResponse?: shared.ListMetricValuesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
