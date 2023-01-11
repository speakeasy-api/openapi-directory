package openapisdk.models.operations;



public class InitiateMultipartUploadResponse {
    public String contentType;
    public InitiateMultipartUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> initiateMultipartUploadOutput;
    public InitiateMultipartUploadResponse withInitiateMultipartUploadOutput(java.util.Map<String, Object> initiateMultipartUploadOutput) {
        this.initiateMultipartUploadOutput = initiateMultipartUploadOutput;
        return this;
    }
    public Object invalidParameterValueException;
    public InitiateMultipartUploadResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingParameterValueException;
    public InitiateMultipartUploadResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public InitiateMultipartUploadResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public InitiateMultipartUploadResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public InitiateMultipartUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}