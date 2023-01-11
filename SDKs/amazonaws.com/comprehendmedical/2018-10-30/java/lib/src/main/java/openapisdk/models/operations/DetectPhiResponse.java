package openapisdk.models.operations;



public class DetectPhiResponse {
    public String contentType;
    public DetectPhiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetectPhiResponse detectPHIResponse;
    public DetectPhiResponse withDetectPhiResponse(openapisdk.models.shared.DetectPhiResponse detectPHIResponse) {
        this.detectPHIResponse = detectPHIResponse;
        return this;
    }
    public Object internalServerException;
    public DetectPhiResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidEncodingException;
    public DetectPhiResponse withInvalidEncodingException(Object invalidEncodingException) {
        this.invalidEncodingException = invalidEncodingException;
        return this;
    }
    public Object invalidRequestException;
    public DetectPhiResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public DetectPhiResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DetectPhiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object textSizeLimitExceededException;
    public DetectPhiResponse withTextSizeLimitExceededException(Object textSizeLimitExceededException) {
        this.textSizeLimitExceededException = textSizeLimitExceededException;
        return this;
    }
    public Object tooManyRequestsException;
    public DetectPhiResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}