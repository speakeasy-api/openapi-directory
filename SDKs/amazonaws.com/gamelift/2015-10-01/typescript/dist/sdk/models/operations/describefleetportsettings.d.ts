import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFleetPortSettingsXAmzTargetEnum {
    GameLiftDescribeFleetPortSettings = "GameLift.DescribeFleetPortSettings"
}
export declare class DescribeFleetPortSettingsRequest extends SpeakeasyBase {
    describeFleetPortSettingsInput: shared.DescribeFleetPortSettingsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFleetPortSettingsXAmzTargetEnum;
}
export declare class DescribeFleetPortSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFleetPortSettingsOutput?: shared.DescribeFleetPortSettingsOutput;
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
    /**
     * UnsupportedRegionException
     */
    unsupportedRegionException?: any;
}
