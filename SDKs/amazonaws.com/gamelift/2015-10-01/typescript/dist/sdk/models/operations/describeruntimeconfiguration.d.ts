import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRuntimeConfigurationXAmzTargetEnum {
    GameLiftDescribeRuntimeConfiguration = "GameLift.DescribeRuntimeConfiguration"
}
export declare class DescribeRuntimeConfigurationRequest extends SpeakeasyBase {
    describeRuntimeConfigurationInput: shared.DescribeRuntimeConfigurationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRuntimeConfigurationXAmzTargetEnum;
}
export declare class DescribeRuntimeConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRuntimeConfigurationOutput?: shared.DescribeRuntimeConfigurationOutput;
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
