import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateExtendedSourceServerRequestBody extends SpeakeasyBase {
    /**
     * This defines the ARN of the source server in staging Account based on which you want to create an extended source server.
     */
    sourceServerArn: string;
    /**
     * A list of tags associated with the extended source server.
     */
    tags?: Record<string, string>;
}
export declare class CreateExtendedSourceServerRequest extends SpeakeasyBase {
    requestBody: CreateExtendedSourceServerRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateExtendedSourceServerResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createExtendedSourceServerResponse?: shared.CreateExtendedSourceServerResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
