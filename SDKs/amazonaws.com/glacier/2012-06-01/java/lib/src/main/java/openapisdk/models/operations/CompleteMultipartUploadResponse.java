package openapisdk.models.operations;



public class CompleteMultipartUploadResponse {
    public java.util.Map<String, Object> archiveCreationOutput;
    public CompleteMultipartUploadResponse withArchiveCreationOutput(java.util.Map<String, Object> archiveCreationOutput) {
        this.archiveCreationOutput = archiveCreationOutput;
        return this;
    }
    public String contentType;
    public CompleteMultipartUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public CompleteMultipartUploadResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingParameterValueException;
    public CompleteMultipartUploadResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public CompleteMultipartUploadResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public CompleteMultipartUploadResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CompleteMultipartUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}