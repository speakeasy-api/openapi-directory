package openapisdk.models.operations;



public class DeleteConnectorProfileResponse {
    public Object conflictException;
    public DeleteConnectorProfileResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteConnectorProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteConnectorProfileResponse;
    public DeleteConnectorProfileResponse withDeleteConnectorProfileResponse(java.util.Map<String, Object> deleteConnectorProfileResponse) {
        this.deleteConnectorProfileResponse = deleteConnectorProfileResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteConnectorProfileResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteConnectorProfileResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteConnectorProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}