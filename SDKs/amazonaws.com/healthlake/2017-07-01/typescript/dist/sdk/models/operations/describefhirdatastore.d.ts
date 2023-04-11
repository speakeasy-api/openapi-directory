import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFHIRDatastoreXAmzTargetEnum {
    HealthLakeDescribeFHIRDatastore = "HealthLake.DescribeFHIRDatastore"
}
export declare class DescribeFHIRDatastoreRequest extends SpeakeasyBase {
    describeFHIRDatastoreRequest: shared.DescribeFHIRDatastoreRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFHIRDatastoreXAmzTargetEnum;
}
export declare class DescribeFHIRDatastoreResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFHIRDatastoreResponse?: shared.DescribeFHIRDatastoreResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
