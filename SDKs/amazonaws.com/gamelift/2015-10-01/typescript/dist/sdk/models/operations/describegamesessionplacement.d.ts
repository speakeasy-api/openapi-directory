import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeGameSessionPlacementXAmzTargetEnum {
    GameLiftDescribeGameSessionPlacement = "GameLift.DescribeGameSessionPlacement"
}
export declare class DescribeGameSessionPlacementRequest extends SpeakeasyBase {
    describeGameSessionPlacementInput: shared.DescribeGameSessionPlacementInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeGameSessionPlacementXAmzTargetEnum;
}
export declare class DescribeGameSessionPlacementResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeGameSessionPlacementOutput?: shared.DescribeGameSessionPlacementOutput;
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
