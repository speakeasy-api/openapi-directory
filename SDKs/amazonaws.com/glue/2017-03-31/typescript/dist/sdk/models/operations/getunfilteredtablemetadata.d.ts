import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetUnfilteredTableMetadataXAmzTargetEnum {
    AWSGlueGetUnfilteredTableMetadata = "AWSGlue.GetUnfilteredTableMetadata"
}
export declare class GetUnfilteredTableMetadataRequest extends SpeakeasyBase {
    getUnfilteredTableMetadataRequest: shared.GetUnfilteredTableMetadataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetUnfilteredTableMetadataXAmzTargetEnum;
}
export declare class GetUnfilteredTableMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getUnfilteredTableMetadataResponse?: shared.GetUnfilteredTableMetadataResponse;
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
