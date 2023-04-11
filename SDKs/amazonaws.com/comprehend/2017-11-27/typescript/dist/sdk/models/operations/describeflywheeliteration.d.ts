import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFlywheelIterationXAmzTargetEnum {
    Comprehend20171127DescribeFlywheelIteration = "Comprehend_20171127.DescribeFlywheelIteration"
}
export declare class DescribeFlywheelIterationRequest extends SpeakeasyBase {
    describeFlywheelIterationRequest: shared.DescribeFlywheelIterationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFlywheelIterationXAmzTargetEnum;
}
export declare class DescribeFlywheelIterationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFlywheelIterationResponse?: shared.DescribeFlywheelIterationResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
