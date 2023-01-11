package openapisdk.models.operations;



public class InferRxNormResponse {
    public String contentType;
    public InferRxNormResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InferRxNormResponse inferRxNormResponse;
    public InferRxNormResponse withInferRxNormResponse(openapisdk.models.shared.InferRxNormResponse inferRxNormResponse) {
        this.inferRxNormResponse = inferRxNormResponse;
        return this;
    }
    public Object internalServerException;
    public InferRxNormResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidEncodingException;
    public InferRxNormResponse withInvalidEncodingException(Object invalidEncodingException) {
        this.invalidEncodingException = invalidEncodingException;
        return this;
    }
    public Object invalidRequestException;
    public InferRxNormResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public InferRxNormResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public InferRxNormResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object textSizeLimitExceededException;
    public InferRxNormResponse withTextSizeLimitExceededException(Object textSizeLimitExceededException) {
        this.textSizeLimitExceededException = textSizeLimitExceededException;
        return this;
    }
    public Object tooManyRequestsException;
    public InferRxNormResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}