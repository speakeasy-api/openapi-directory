import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFHIRExportJobXAmzTargetEnum {
    HealthLakeDescribeFHIRExportJob = "HealthLake.DescribeFHIRExportJob"
}
export declare class DescribeFHIRExportJobRequest extends SpeakeasyBase {
    describeFHIRExportJobRequest: shared.DescribeFHIRExportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFHIRExportJobXAmzTargetEnum;
}
export declare class DescribeFHIRExportJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFHIRExportJobResponse?: shared.DescribeFHIRExportJobResponse;
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
