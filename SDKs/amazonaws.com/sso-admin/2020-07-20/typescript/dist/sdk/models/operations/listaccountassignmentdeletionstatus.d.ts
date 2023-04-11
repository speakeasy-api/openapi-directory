import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAccountAssignmentDeletionStatusXAmzTargetEnum {
    SWBExternalServiceListAccountAssignmentDeletionStatus = "SWBExternalService.ListAccountAssignmentDeletionStatus"
}
export declare class ListAccountAssignmentDeletionStatusRequest extends SpeakeasyBase {
    listAccountAssignmentDeletionStatusRequest: shared.ListAccountAssignmentDeletionStatusRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAccountAssignmentDeletionStatusXAmzTargetEnum;
}
export declare class ListAccountAssignmentDeletionStatusResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listAccountAssignmentDeletionStatusResponse?: shared.ListAccountAssignmentDeletionStatusResponse;
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
     * ValidationException
     */
    validationException?: any;
}
