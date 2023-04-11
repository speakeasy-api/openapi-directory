import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The reference that identifies an object.
 */
export declare class GetObjectInformationRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
export declare class GetObjectInformationRequestBody extends SpeakeasyBase {
    /**
     * The reference that identifies an object.
     */
    objectReference: GetObjectInformationRequestBodyObjectReference;
}
/**
 * The consistency level at which to retrieve the object information.
 */
export declare enum GetObjectInformationXAmzConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
export declare class GetObjectInformationRequest extends SpeakeasyBase {
    requestBody: GetObjectInformationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The consistency level at which to retrieve the object information.
     */
    xAmzConsistencyLevel?: GetObjectInformationXAmzConsistencyLevelEnum;
    /**
     * The ARN of the directory being retrieved.
     */
    xAmzDataPartition: string;
}
export declare class GetObjectInformationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * DirectoryNotEnabledException
     */
    directoryNotEnabledException?: any;
    /**
     * Success
     */
    getObjectInformationResponse?: shared.GetObjectInformationResponse;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * RetryableConflictException
     */
    retryableConflictException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
