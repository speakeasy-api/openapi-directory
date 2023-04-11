import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateReplicationSetRequestBody extends SpeakeasyBase {
    /**
     * An action to add or delete a Region.
     */
    actions: shared.UpdateReplicationSetAction[];
    /**
     * The Amazon Resource Name (ARN) of the replication set you're updating.
     */
    arn: string;
    /**
     * A token that ensures that the operation is called only once with the specified details.
     */
    clientToken?: string;
}
export declare class UpdateReplicationSetRequest extends SpeakeasyBase {
    requestBody: UpdateReplicationSetRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateReplicationSetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
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
    updateReplicationSetOutput?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
