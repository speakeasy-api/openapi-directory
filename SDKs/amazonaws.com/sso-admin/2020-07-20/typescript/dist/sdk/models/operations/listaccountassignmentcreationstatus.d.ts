import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAccountAssignmentCreationStatusXAmzTargetEnum {
    SWBExternalServiceListAccountAssignmentCreationStatus = "SWBExternalService.ListAccountAssignmentCreationStatus"
}
export declare class ListAccountAssignmentCreationStatusRequest extends SpeakeasyBase {
    listAccountAssignmentCreationStatusRequest: shared.ListAccountAssignmentCreationStatusRequest;
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
    xAmzTarget: ListAccountAssignmentCreationStatusXAmzTargetEnum;
}
export declare class ListAccountAssignmentCreationStatusResponse extends SpeakeasyBase {
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
    listAccountAssignmentCreationStatusResponse?: shared.ListAccountAssignmentCreationStatusResponse;
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
