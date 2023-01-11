package openapisdk.models.operations;



public class UploadEntityDefinitionsResponse {
    public String contentType;
    public UploadEntityDefinitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UploadEntityDefinitionsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UploadEntityDefinitionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public UploadEntityDefinitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UploadEntityDefinitionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UploadEntityDefinitionsResponse uploadEntityDefinitionsResponse;
    public UploadEntityDefinitionsResponse withUploadEntityDefinitionsResponse(openapisdk.models.shared.UploadEntityDefinitionsResponse uploadEntityDefinitionsResponse) {
        this.uploadEntityDefinitionsResponse = uploadEntityDefinitionsResponse;
        return this;
    }
}