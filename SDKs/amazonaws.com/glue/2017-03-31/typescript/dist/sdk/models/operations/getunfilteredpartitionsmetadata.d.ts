import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetUnfilteredPartitionsMetadataXAmzTargetEnum {
    AWSGlueGetUnfilteredPartitionsMetadata = "AWSGlue.GetUnfilteredPartitionsMetadata"
}
export declare class GetUnfilteredPartitionsMetadataRequest extends SpeakeasyBase {
    getUnfilteredPartitionsMetadataRequest: shared.GetUnfilteredPartitionsMetadataRequest;
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
    xAmzTarget: GetUnfilteredPartitionsMetadataXAmzTargetEnum;
}
export declare class GetUnfilteredPartitionsMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getUnfilteredPartitionsMetadataResponse?: shared.GetUnfilteredPartitionsMetadataResponse;
    /**
     * GlueEncryptionException
     */
    glueEncryptionException?: any;
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
    /**
     * PermissionTypeMismatchException
     */
    permissionTypeMismatchException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
