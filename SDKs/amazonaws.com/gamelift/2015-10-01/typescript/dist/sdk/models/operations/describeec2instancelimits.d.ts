import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEc2InstanceLimitsXAmzTargetEnum {
    GameLiftDescribeEc2InstanceLimits = "GameLift.DescribeEC2InstanceLimits"
}
export declare class DescribeEc2InstanceLimitsRequest extends SpeakeasyBase {
    describeEc2InstanceLimitsInput: shared.DescribeEc2InstanceLimitsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEc2InstanceLimitsXAmzTargetEnum;
}
export declare class DescribeEc2InstanceLimitsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEc2InstanceLimitsOutput?: shared.DescribeEc2InstanceLimitsOutput;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * UnsupportedRegionException
     */
    unsupportedRegionException?: any;
}
