import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeTimeSeriesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The alias that identifies the time series.
     */
    alias?: string;
    /**
     * The ID of the asset in which the asset property was created.
     */
    assetId?: string;
    /**
     * The ID of the asset property.
     */
    propertyId?: string;
}
export declare class DescribeTimeSeriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTimeSeriesResponse?: shared.DescribeTimeSeriesResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
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
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
