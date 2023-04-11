import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetComputeAuthTokenXAmzTargetEnum {
    GameLiftGetComputeAuthToken = "GameLift.GetComputeAuthToken"
}
export declare class GetComputeAuthTokenRequest extends SpeakeasyBase {
    getComputeAuthTokenInput: shared.GetComputeAuthTokenInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetComputeAuthTokenXAmzTargetEnum;
}
export declare class GetComputeAuthTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getComputeAuthTokenOutput?: shared.GetComputeAuthTokenOutput;
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
