package openapisdk.models.operations;



public class DetectEntitiesV2Response {
    public String contentType;
    public DetectEntitiesV2Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetectEntitiesV2Response detectEntitiesV2Response;
    public DetectEntitiesV2Response withDetectEntitiesV2Response(openapisdk.models.shared.DetectEntitiesV2Response detectEntitiesV2Response) {
        this.detectEntitiesV2Response = detectEntitiesV2Response;
        return this;
    }
    public Object internalServerException;
    public DetectEntitiesV2Response withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidEncodingException;
    public DetectEntitiesV2Response withInvalidEncodingException(Object invalidEncodingException) {
        this.invalidEncodingException = invalidEncodingException;
        return this;
    }
    public Object invalidRequestException;
    public DetectEntitiesV2Response withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public DetectEntitiesV2Response withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DetectEntitiesV2Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object textSizeLimitExceededException;
    public DetectEntitiesV2Response withTextSizeLimitExceededException(Object textSizeLimitExceededException) {
        this.textSizeLimitExceededException = textSizeLimitExceededException;
        return this;
    }
    public Object tooManyRequestsException;
    public DetectEntitiesV2Response withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}