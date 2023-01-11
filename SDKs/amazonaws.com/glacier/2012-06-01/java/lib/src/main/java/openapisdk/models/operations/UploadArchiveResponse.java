package openapisdk.models.operations;



public class UploadArchiveResponse {
    public java.util.Map<String, Object> archiveCreationOutput;
    public UploadArchiveResponse withArchiveCreationOutput(java.util.Map<String, Object> archiveCreationOutput) {
        this.archiveCreationOutput = archiveCreationOutput;
        return this;
    }
    public String contentType;
    public UploadArchiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public UploadArchiveResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingParameterValueException;
    public UploadArchiveResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object requestTimeoutException;
    public UploadArchiveResponse withRequestTimeoutException(Object requestTimeoutException) {
        this.requestTimeoutException = requestTimeoutException;
        return this;
    }
    public Object resourceNotFoundException;
    public UploadArchiveResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public UploadArchiveResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public UploadArchiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}