import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EvaluateFeatureRequestBody extends SpeakeasyBase {
    /**
     * An internal ID that represents a unique user of the application. This <code>entityID</code> is checked against any override rules assigned for this feature.
     */
    entityId: string;
    /**
     * <p>A JSON object of attributes that you can optionally pass in as part of the evaluation event sent to Evidently from the user session. Evidently can use this value to match user sessions with defined audience segments. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html">Use segments to focus your audience</a>.</p> <p>If you include this parameter, the value must be a JSON object. A JSON array is not supported.</p>
     */
    evaluationContext?: string;
}
export declare class EvaluateFeatureRequest extends SpeakeasyBase {
    requestBody: EvaluateFeatureRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the feature being evaluated.
     */
    feature: string;
    /**
     * The name or ARN of the project that contains this feature.
     */
    project: string;
}
export declare class EvaluateFeatureResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    evaluateFeatureResponse?: shared.EvaluateFeatureResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
