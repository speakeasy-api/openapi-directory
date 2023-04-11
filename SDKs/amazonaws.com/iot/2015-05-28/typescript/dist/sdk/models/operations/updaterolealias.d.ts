import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateRoleAliasRequestBody extends SpeakeasyBase {
    /**
     * <p>The number of seconds the credential will be valid.</p> <p>This value must be less than or equal to the maximum session duration of the IAM role that the role alias references.</p>
     */
    credentialDurationSeconds?: number;
    /**
     * The role ARN.
     */
    roleArn?: string;
}
export declare class UpdateRoleAliasRequest extends SpeakeasyBase {
    requestBody: UpdateRoleAliasRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The role alias to update.
     */
    roleAlias: string;
}
export declare class UpdateRoleAliasResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * Success
     */
    updateRoleAliasResponse?: shared.UpdateRoleAliasResponse;
}
