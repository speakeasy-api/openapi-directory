import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The target status of a query. Used to update the execution status of a currently running query.
 */
export declare enum UpdateProtectedQueryRequestBodyTargetStatusEnum {
    Cancelled = "CANCELLED"
}
export declare class UpdateProtectedQueryRequestBody extends SpeakeasyBase {
    /**
     * The target status of a query. Used to update the execution status of a currently running query.
     */
    targetStatus: UpdateProtectedQueryRequestBodyTargetStatusEnum;
}
export declare class UpdateProtectedQueryRequest extends SpeakeasyBase {
    requestBody: UpdateProtectedQueryRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier for a member of a protected query instance.
     */
    membershipIdentifier: string;
    /**
     * The identifier for a protected query instance.
     */
    protectedQueryIdentifier: string;
}
export declare class UpdateProtectedQueryResponse extends SpeakeasyBase {
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
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateProtectedQueryOutput?: shared.UpdateProtectedQueryOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
