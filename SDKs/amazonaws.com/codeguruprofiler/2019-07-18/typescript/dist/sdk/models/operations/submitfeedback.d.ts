import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 *  The feedback tpye. Thee are two valid values, <code>Positive</code> and <code>Negative</code>.
 */
export declare enum SubmitFeedbackRequestBodyTypeEnum {
    Positive = "Positive",
    Negative = "Negative"
}
export declare class SubmitFeedbackRequestBody extends SpeakeasyBase {
    /**
     * Optional feedback about this anomaly.
     */
    comment?: string;
    /**
     *  The feedback tpye. Thee are two valid values, <code>Positive</code> and <code>Negative</code>.
     */
    type: SubmitFeedbackRequestBodyTypeEnum;
}
export declare class SubmitFeedbackRequest extends SpeakeasyBase {
    requestBody: SubmitFeedbackRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The universally unique identifier (UUID) of the <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AnomalyInstance.html"> <code>AnomalyInstance</code> </a> object that is included in the analysis data.
     */
    anomalyInstanceId: string;
    /**
     * The name of the profiling group that is associated with the analysis data.
     */
    profilingGroupName: string;
}
export declare class SubmitFeedbackResponse extends SpeakeasyBase {
    contentType: string;
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
     * Success
     */
    submitFeedbackResponse?: Record<string, any>;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
