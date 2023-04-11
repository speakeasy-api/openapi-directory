import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetInstanceAccessXAmzTargetEnum {
    GameLiftGetInstanceAccess = "GameLift.GetInstanceAccess"
}
export declare class GetInstanceAccessRequest extends SpeakeasyBase {
    getInstanceAccessInput: shared.GetInstanceAccessInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInstanceAccessXAmzTargetEnum;
}
export declare class GetInstanceAccessResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getInstanceAccessOutput?: shared.GetInstanceAccessOutput;
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
