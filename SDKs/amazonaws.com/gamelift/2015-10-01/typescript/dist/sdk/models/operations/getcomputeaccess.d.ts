import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetComputeAccessXAmzTargetEnum {
    GameLiftGetComputeAccess = "GameLift.GetComputeAccess"
}
export declare class GetComputeAccessRequest extends SpeakeasyBase {
    getComputeAccessInput: shared.GetComputeAccessInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetComputeAccessXAmzTargetEnum;
}
export declare class GetComputeAccessResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getComputeAccessOutput?: shared.GetComputeAccessOutput;
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
