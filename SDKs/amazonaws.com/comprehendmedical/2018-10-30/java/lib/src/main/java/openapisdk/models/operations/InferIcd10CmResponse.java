package openapisdk.models.operations;



public class InferIcd10CmResponse {
    public String contentType;
    public InferIcd10CmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InferIcd10CmResponse inferIcd10CMResponse;
    public InferIcd10CmResponse withInferIcd10CmResponse(openapisdk.models.shared.InferIcd10CmResponse inferIcd10CMResponse) {
        this.inferIcd10CMResponse = inferIcd10CMResponse;
        return this;
    }
    public Object internalServerException;
    public InferIcd10CmResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidEncodingException;
    public InferIcd10CmResponse withInvalidEncodingException(Object invalidEncodingException) {
        this.invalidEncodingException = invalidEncodingException;
        return this;
    }
    public Object invalidRequestException;
    public InferIcd10CmResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public InferIcd10CmResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public InferIcd10CmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object textSizeLimitExceededException;
    public InferIcd10CmResponse withTextSizeLimitExceededException(Object textSizeLimitExceededException) {
        this.textSizeLimitExceededException = textSizeLimitExceededException;
        return this;
    }
    public Object tooManyRequestsException;
    public InferIcd10CmResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}