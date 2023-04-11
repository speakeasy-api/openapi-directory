import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetEnrollmentStatusesForOrganizationXAmzTargetEnum {
    ComputeOptimizerServiceGetEnrollmentStatusesForOrganization = "ComputeOptimizerService.GetEnrollmentStatusesForOrganization"
}
export declare class GetEnrollmentStatusesForOrganizationRequest extends SpeakeasyBase {
    getEnrollmentStatusesForOrganizationRequest: shared.GetEnrollmentStatusesForOrganizationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEnrollmentStatusesForOrganizationXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class GetEnrollmentStatusesForOrganizationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getEnrollmentStatusesForOrganizationResponse?: shared.GetEnrollmentStatusesForOrganizationResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * MissingAuthenticationToken
     */
    missingAuthenticationToken?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
