import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ResumeServiceXAmzTargetEnum {
    AppRunnerResumeService = "AppRunner.ResumeService"
}
export declare class ResumeServiceRequest extends SpeakeasyBase {
    resumeServiceRequest: shared.ResumeServiceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResumeServiceXAmzTargetEnum;
}
export declare class ResumeServiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    resumeServiceResponse?: shared.ResumeServiceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
