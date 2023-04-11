import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeBuildXAmzTargetEnum {
    GameLiftDescribeBuild = "GameLift.DescribeBuild"
}
export declare class DescribeBuildRequest extends SpeakeasyBase {
    describeBuildInput: shared.DescribeBuildInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBuildXAmzTargetEnum;
}
export declare class DescribeBuildResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeBuildOutput?: shared.DescribeBuildOutput;
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
