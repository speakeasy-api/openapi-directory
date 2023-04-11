import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContainerRecipeRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The Amazon Resource Name (ARN) of the container recipe to retrieve.
     */
    containerRecipeArn: string;
}
export declare class GetContainerRecipeResponse extends SpeakeasyBase {
    /**
     * CallRateLimitExceededException
     */
    callRateLimitExceededException?: any;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * Success
     */
    getContainerRecipeResponse?: shared.GetContainerRecipeResponse;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
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
