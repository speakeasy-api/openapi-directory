import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about the integration of DevOps Guru as consumer with another AWS service, such as AWS CodeGuru Profiler via EventBridge.
 */
export declare class UpdateEventSourcesConfigRequestBodyEventSources extends SpeakeasyBase {
    amazonCodeGuruProfiler?: shared.AmazonCodeGuruProfilerIntegration;
}
export declare class UpdateEventSourcesConfigRequestBody extends SpeakeasyBase {
    /**
     * Information about the integration of DevOps Guru as consumer with another AWS service, such as AWS CodeGuru Profiler via EventBridge.
     */
    eventSources?: UpdateEventSourcesConfigRequestBodyEventSources;
}
export declare class UpdateEventSourcesConfigRequest extends SpeakeasyBase {
    requestBody: UpdateEventSourcesConfigRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateEventSourcesConfigResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
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
     * Success
     */
    updateEventSourcesConfigResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
