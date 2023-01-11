package openapisdk.models.operations;



public class DeleteMitigationActionResponse {
    public String contentType;
    public DeleteMitigationActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteMitigationActionResponse;
    public DeleteMitigationActionResponse withDeleteMitigationActionResponse(java.util.Map<String, Object> deleteMitigationActionResponse) {
        this.deleteMitigationActionResponse = deleteMitigationActionResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteMitigationActionResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteMitigationActionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DeleteMitigationActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteMitigationActionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}