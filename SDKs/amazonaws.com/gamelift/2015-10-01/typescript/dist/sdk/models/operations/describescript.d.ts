import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeScriptXAmzTargetEnum {
    GameLiftDescribeScript = "GameLift.DescribeScript"
}
export declare class DescribeScriptRequest extends SpeakeasyBase {
    describeScriptInput: shared.DescribeScriptInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeScriptXAmzTargetEnum;
}
export declare class DescribeScriptResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeScriptOutput?: shared.DescribeScriptOutput;
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
