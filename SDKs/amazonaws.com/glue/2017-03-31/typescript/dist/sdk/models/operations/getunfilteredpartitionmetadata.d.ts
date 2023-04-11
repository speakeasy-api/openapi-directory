import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetUnfilteredPartitionMetadataXAmzTargetEnum {
    AWSGlueGetUnfilteredPartitionMetadata = "AWSGlue.GetUnfilteredPartitionMetadata"
}
export declare class GetUnfilteredPartitionMetadataRequest extends SpeakeasyBase {
    getUnfilteredPartitionMetadataRequest: shared.GetUnfilteredPartitionMetadataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetUnfilteredPartitionMetadataXAmzTargetEnum;
}
export declare class GetUnfilteredPartitionMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getUnfilteredPartitionMetadataResponse?: shared.GetUnfilteredPartitionMetadataResponse;
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
