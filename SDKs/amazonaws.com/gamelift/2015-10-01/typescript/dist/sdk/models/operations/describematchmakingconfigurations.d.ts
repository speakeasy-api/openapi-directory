import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeMatchmakingConfigurationsXAmzTargetEnum {
    GameLiftDescribeMatchmakingConfigurations = "GameLift.DescribeMatchmakingConfigurations"
}
export declare class DescribeMatchmakingConfigurationsRequest extends SpeakeasyBase {
    describeMatchmakingConfigurationsInput: shared.DescribeMatchmakingConfigurationsInput;
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
    xAmzTarget: DescribeMatchmakingConfigurationsXAmzTargetEnum;
}
export declare class DescribeMatchmakingConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeMatchmakingConfigurationsOutput?: shared.DescribeMatchmakingConfigurationsOutput;
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
     * UnsupportedRegionException
     */
    unsupportedRegionException?: any;
}
