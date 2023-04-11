import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateDeletionProtectionRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the replication set to update.
     */
    arn: string;
    /**
     * A token that ensures that the operation is called only once with the specified details.
     */
    clientToken?: string;
    /**
     * Specifies if deletion protection is turned on or off in your account.
     */
    deletionProtected: boolean;
}
export declare class UpdateDeletionProtectionRequest extends SpeakeasyBase {
    requestBody: UpdateDeletionProtectionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDeletionProtectionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateDeletionProtectionOutput?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
