import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAccessControlConfigurationsXAmzTargetEnum {
    AWSKendraFrontendServiceListAccessControlConfigurations = "AWSKendraFrontendService.ListAccessControlConfigurations"
}
export declare class ListAccessControlConfigurationsRequest extends SpeakeasyBase {
    listAccessControlConfigurationsRequest: shared.ListAccessControlConfigurationsRequest;
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
    xAmzTarget: ListAccessControlConfigurationsXAmzTargetEnum;
}
export declare class ListAccessControlConfigurationsResponse extends SpeakeasyBase {
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
    listAccessControlConfigurationsResponse?: shared.ListAccessControlConfigurationsResponse;
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
     * ValidationException
     */
    validationException?: any;
}
