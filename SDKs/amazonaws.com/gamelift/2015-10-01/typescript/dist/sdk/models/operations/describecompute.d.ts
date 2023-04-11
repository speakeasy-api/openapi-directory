import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeComputeXAmzTargetEnum {
    GameLiftDescribeCompute = "GameLift.DescribeCompute"
}
export declare class DescribeComputeRequest extends SpeakeasyBase {
    describeComputeInput: shared.DescribeComputeInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeComputeXAmzTargetEnum;
}
export declare class DescribeComputeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeComputeOutput?: shared.DescribeComputeOutput;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
