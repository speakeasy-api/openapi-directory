import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateLoggingConfigurationRequestBody extends SpeakeasyBase {
    /**
     * An identifier used to ensure the idempotency of a write request.
     */
    clientToken?: string;
    /**
     * The ARN of the CW log group to which the vended log data will be published.
     */
    logGroupArn: string;
}
export declare class CreateLoggingConfigurationRequest extends SpeakeasyBase {
    requestBody: CreateLoggingConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the workspace to vend logs to.
     */
    workspaceId: string;
}
export declare class CreateLoggingConfigurationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createLoggingConfigurationResponse?: shared.CreateLoggingConfigurationResponse;
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
     * ValidationException
     */
    validationException?: any;
}
