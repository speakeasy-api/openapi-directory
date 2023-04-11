import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEndpointsXAmzTargetEnum {
    Timestream20181101DescribeEndpoints = "Timestream_20181101.DescribeEndpoints"
}
export declare class DescribeEndpointsRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEndpointsXAmzTargetEnum;
}
export declare class DescribeEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEndpointsResponse?: shared.DescribeEndpointsResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
