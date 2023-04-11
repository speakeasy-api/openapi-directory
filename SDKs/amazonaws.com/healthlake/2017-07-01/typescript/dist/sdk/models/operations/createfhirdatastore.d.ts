import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateFHIRDatastoreXAmzTargetEnum {
    HealthLakeCreateFHIRDatastore = "HealthLake.CreateFHIRDatastore"
}
export declare class CreateFHIRDatastoreRequest extends SpeakeasyBase {
    createFHIRDatastoreRequest: shared.CreateFHIRDatastoreRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFHIRDatastoreXAmzTargetEnum;
}
export declare class CreateFHIRDatastoreResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createFHIRDatastoreResponse?: shared.CreateFHIRDatastoreResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
