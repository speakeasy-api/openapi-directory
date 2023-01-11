package openapisdk.models.operations;



public class DetectEntitiesResponse {
    public String contentType;
    public DetectEntitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetectEntitiesResponse detectEntitiesResponse;
    public DetectEntitiesResponse withDetectEntitiesResponse(openapisdk.models.shared.DetectEntitiesResponse detectEntitiesResponse) {
        this.detectEntitiesResponse = detectEntitiesResponse;
        return this;
    }
    public Object internalServerException;
    public DetectEntitiesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidEncodingException;
    public DetectEntitiesResponse withInvalidEncodingException(Object invalidEncodingException) {
        this.invalidEncodingException = invalidEncodingException;
        return this;
    }
    public Object invalidRequestException;
    public DetectEntitiesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public DetectEntitiesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DetectEntitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object textSizeLimitExceededException;
    public DetectEntitiesResponse withTextSizeLimitExceededException(Object textSizeLimitExceededException) {
        this.textSizeLimitExceededException = textSizeLimitExceededException;
        return this;
    }
    public Object tooManyRequestsException;
    public DetectEntitiesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}