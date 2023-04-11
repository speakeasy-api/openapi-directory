import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSecurityConfigurationsXAmzTargetEnum {
    AWSGlueGetSecurityConfigurations = "AWSGlue.GetSecurityConfigurations"
}
export declare class GetSecurityConfigurationsRequest extends SpeakeasyBase {
    getSecurityConfigurationsRequest: shared.GetSecurityConfigurationsRequest;
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
    xAmzTarget: GetSecurityConfigurationsXAmzTargetEnum;
}
export declare class GetSecurityConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getSecurityConfigurationsResponse?: shared.GetSecurityConfigurationsResponse;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
