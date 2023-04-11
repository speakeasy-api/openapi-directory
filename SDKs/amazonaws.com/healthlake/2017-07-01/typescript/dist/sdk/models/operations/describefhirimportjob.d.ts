import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFHIRImportJobXAmzTargetEnum {
    HealthLakeDescribeFHIRImportJob = "HealthLake.DescribeFHIRImportJob"
}
export declare class DescribeFHIRImportJobRequest extends SpeakeasyBase {
    describeFHIRImportJobRequest: shared.DescribeFHIRImportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFHIRImportJobXAmzTargetEnum;
}
export declare class DescribeFHIRImportJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFHIRImportJobResponse?: shared.DescribeFHIRImportJobResponse;
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
