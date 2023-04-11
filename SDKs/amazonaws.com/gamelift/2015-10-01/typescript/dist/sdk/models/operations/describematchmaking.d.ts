import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeMatchmakingXAmzTargetEnum {
    GameLiftDescribeMatchmaking = "GameLift.DescribeMatchmaking"
}
export declare class DescribeMatchmakingRequest extends SpeakeasyBase {
    describeMatchmakingInput: shared.DescribeMatchmakingInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMatchmakingXAmzTargetEnum;
}
export declare class DescribeMatchmakingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeMatchmakingOutput?: shared.DescribeMatchmakingOutput;
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
