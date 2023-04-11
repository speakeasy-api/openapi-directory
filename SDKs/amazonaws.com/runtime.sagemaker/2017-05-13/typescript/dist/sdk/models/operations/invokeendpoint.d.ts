import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InvokeEndpointRequestBody extends SpeakeasyBase {
    /**
     * <p>Provides input data, in the format specified in the <code>ContentType</code> request header. Amazon SageMaker passes all of the data in the body to the model. </p> <p>For information about the format of the request body, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html">Common Data Formats-Inference</a>.</p>
     */
    body: string;
}
export declare class InvokeEndpointRequest extends SpeakeasyBase {
    /**
     * The desired MIME type of the inference in the response.
     */
    accept?: string;
    /**
     * The MIME type of the input data in the request body.
     */
    contentType?: string;
    /**
     * The name of the endpoint that you specified when you created the endpoint using the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html">CreateEndpoint</a> API.
     */
    endpointName: string;
    requestBody: InvokeEndpointRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * <p>Provides additional information about a request for an inference submitted to a model hosted at an Amazon SageMaker endpoint. The information is an opaque value that is forwarded verbatim. You could use this value, for example, to provide an ID that you can use to track a request or to provide other metadata that a service endpoint was programmed to process. The value must consist of no more than 1024 visible US-ASCII characters as specified in <a href="https://tools.ietf.org/html/rfc7230#section-3.2.6">Section 3.3.6. Field Value Components</a> of the Hypertext Transfer Protocol (HTTP/1.1). </p> <p>The code in your model is responsible for setting or updating any custom attributes in the response. If your code does not set this value in the response, an empty value is returned. For example, if a custom attribute represents the trace ID, your model can prepend the custom attribute with <code>Trace ID:</code> in your post-processing function.</p> <p>This feature is currently supported in the Amazon Web Services SDKs but not in the Amazon SageMaker Python SDK.</p>
     */
    xAmznSageMakerCustomAttributes?: string;
    /**
     * An optional JMESPath expression used to override the <code>EnableExplanations</code> parameter of the <code>ClarifyExplainerConfig</code> API. See the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html#clarify-online-explainability-create-endpoint-enable">EnableExplanations</a> section in the developer guide for more information.
     */
    xAmznSageMakerEnableExplanations?: string;
    /**
     * If you provide a value, it is added to the captured data when you enable data capture on the endpoint. For information about data capture, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-data-capture.html">Capture Data</a>.
     */
    xAmznSageMakerInferenceId?: string;
    /**
     * If the endpoint hosts multiple containers and is configured to use direct invocation, this parameter specifies the host name of the container to invoke.
     */
    xAmznSageMakerTargetContainerHostname?: string;
    /**
     * The model to request for inference when invoking a multi-model endpoint.
     */
    xAmznSageMakerTargetModel?: string;
    /**
     * <p>Specify the production variant to send the inference request to when invoking an endpoint that is running two or more variants. Note that this parameter overrides the default behavior for the endpoint, which is to distribute the invocation traffic based on the variant weights.</p> <p>For information about how to use variant targeting to perform a/b testing, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-ab-testing.html">Test models in production</a> </p>
     */
    xAmznSageMakerTargetVariant?: string;
}
export declare class InvokeEndpointResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalDependencyException
     */
    internalDependencyException?: any;
    /**
     * InternalFailure
     */
    internalFailure?: any;
    /**
     * Success
     */
    invokeEndpointOutput?: shared.InvokeEndpointOutput;
    /**
     * ModelError
     */
    modelError?: any;
    /**
     * ModelNotReadyException
     */
    modelNotReadyException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailable
     */
    serviceUnavailable?: any;
    /**
     * ValidationError
     */
    validationError?: any;
}
