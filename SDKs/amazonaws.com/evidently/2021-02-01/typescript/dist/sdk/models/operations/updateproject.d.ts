import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p>Use this parameter to configure client-side evaluation for your project. Client-side evaluation allows your application to assign variations to user sessions locally instead of by calling the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation to assign the variations. This mitigates the latency and availability risks that come with an API call.</p> <p> <code>ProjectAppConfigResource</code> is a structure that defines the configuration of how your application integrates with AppConfig to run client-side evaluation.</p>
 */
export declare class UpdateProjectRequestBodyAppConfigResource extends SpeakeasyBase {
    applicationId?: string;
    environmentId?: string;
}
export declare class UpdateProjectRequestBody extends SpeakeasyBase {
    /**
     * <p>Use this parameter to configure client-side evaluation for your project. Client-side evaluation allows your application to assign variations to user sessions locally instead of by calling the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation to assign the variations. This mitigates the latency and availability risks that come with an API call.</p> <p> <code>ProjectAppConfigResource</code> is a structure that defines the configuration of how your application integrates with AppConfig to run client-side evaluation.</p>
     */
    appConfigResource?: UpdateProjectRequestBodyAppConfigResource;
    /**
     * An optional description of the project.
     */
    description?: string;
}
export declare class UpdateProjectRequest extends SpeakeasyBase {
    requestBody: UpdateProjectRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name or ARN of the project to update.
     */
    project: string;
}
export declare class UpdateProjectResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    updateProjectResponse?: shared.UpdateProjectResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
