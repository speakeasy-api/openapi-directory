import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartFHIRExportJobXAmzTargetEnum {
    HealthLakeStartFHIRExportJob = "HealthLake.StartFHIRExportJob"
}
export declare class StartFHIRExportJobRequest extends SpeakeasyBase {
    startFHIRExportJobRequest: shared.StartFHIRExportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartFHIRExportJobXAmzTargetEnum;
}
export declare class StartFHIRExportJobResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    startFHIRExportJobResponse?: shared.StartFHIRExportJobResponse;
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
