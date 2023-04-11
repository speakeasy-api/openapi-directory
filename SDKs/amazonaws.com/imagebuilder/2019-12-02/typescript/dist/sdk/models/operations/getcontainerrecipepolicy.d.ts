import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContainerRecipePolicyRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The Amazon Resource Name (ARN) of the container recipe for the policy being requested.
     */
    containerRecipeArn: string;
}
export declare class GetContainerRecipePolicyResponse extends SpeakeasyBase {
    /**
     * CallRateLimitExceededException
     */
    callRateLimitExceededException?: any;
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * Success
     */
    getContainerRecipePolicyResponse?: shared.GetContainerRecipePolicyResponse;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
