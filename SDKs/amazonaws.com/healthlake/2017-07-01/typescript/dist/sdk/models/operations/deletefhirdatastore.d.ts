import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteFHIRDatastoreXAmzTargetEnum {
    HealthLakeDeleteFHIRDatastore = "HealthLake.DeleteFHIRDatastore"
}
export declare class DeleteFHIRDatastoreRequest extends SpeakeasyBase {
    deleteFHIRDatastoreRequest: shared.DeleteFHIRDatastoreRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFHIRDatastoreXAmzTargetEnum;
}
export declare class DeleteFHIRDatastoreResponse extends SpeakeasyBase {
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
     * Success
     */
    deleteFHIRDatastoreResponse?: shared.DeleteFHIRDatastoreResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
