package openapisdk.models.operations;



public class UploadMultipartPartResponse {
    public String contentType;
    public UploadMultipartPartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public UploadMultipartPartResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingParameterValueException;
    public UploadMultipartPartResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object requestTimeoutException;
    public UploadMultipartPartResponse withRequestTimeoutException(Object requestTimeoutException) {
        this.requestTimeoutException = requestTimeoutException;
        return this;
    }
    public Object resourceNotFoundException;
    public UploadMultipartPartResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public UploadMultipartPartResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public UploadMultipartPartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> uploadMultipartPartOutput;
    public UploadMultipartPartResponse withUploadMultipartPartOutput(java.util.Map<String, Object> uploadMultipartPartOutput) {
        this.uploadMultipartPartOutput = uploadMultipartPartOutput;
        return this;
    }
}