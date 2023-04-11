import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateCompilationJobXAmzTargetEnum {
    SageMakerCreateCompilationJob = "SageMaker.CreateCompilationJob"
}
export declare class CreateCompilationJobRequest extends SpeakeasyBase {
    createCompilationJobRequest: shared.CreateCompilationJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCompilationJobXAmzTargetEnum;
}
export declare class CreateCompilationJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createCompilationJobResponse?: shared.CreateCompilationJobResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
}
