import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InvokeEndpointAsyncRequest extends SpeakeasyBase {
    /**
     * The name of the endpoint that you specified when you created the endpoint using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html"> <code>CreateEndpoint</code> </a> API.
     */
    endpointName: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The desired MIME type of the inference in the response.
     */
    xAmznSageMakerAccept?: string;
    /**
     * The MIME type of the input data in the request body.
     */
    xAmznSageMakerContentType?: string;
    /**
     * <p>Provides additional information about a request for an inference submitted to a model hosted at an Amazon SageMaker endpoint. The information is an opaque value that is forwarded verbatim. You could use this value, for example, to provide an ID that you can use to track a request or to provide other metadata that a service endpoint was programmed to process. The value must consist of no more than 1024 visible US-ASCII characters as specified in <a href="https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6">Section 3.3.6. Field Value Components</a> of the Hypertext Transfer Protocol (HTTP/1.1). </p> <p>The code in your model is responsible for setting or updating any custom attributes in the response. If your code does not set this value in the response, an empty value is returned. For example, if a custom attribute represents the trace ID, your model can prepend the custom attribute with <code>Trace ID</code>: in your post-processing function. </p> <p>This feature is currently supported in the Amazon Web Services SDKs but not in the Amazon SageMaker Python SDK. </p>
     */
    xAmznSageMakerCustomAttributes?: string;
    /**
     * The identifier for the inference request. Amazon SageMaker will generate an identifier for you if none is specified.
     */
    xAmznSageMakerInferenceId?: string;
    /**
     * The Amazon S3 URI where the inference request payload is stored.
     */
    xAmznSageMakerInputLocation: string;
    /**
     * Maximum amount of time in seconds a request can be processed before it is marked as expired. The default is 15 minutes, or 900 seconds.
     */
    xAmznSageMakerInvocationTimeoutSeconds?: number;
    /**
     * Maximum age in seconds a request can be in the queue before it is marked as expired. The default is 6 hours, or 21,600 seconds.
     */
    xAmznSageMakerRequestTTLSeconds?: number;
}
export declare class InvokeEndpointAsyncResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailure
     */
    internalFailure?: any;
    /**
     * Success
     */
    invokeEndpointAsyncOutput?: shared.InvokeEndpointAsyncOutput;
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
