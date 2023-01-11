package openapisdk.models.operations;



public class UpdateMailboxQuotaResponse {
    public String contentType;
    public UpdateMailboxQuotaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public UpdateMailboxQuotaResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object entityStateException;
    public UpdateMailboxQuotaResponse withEntityStateException(Object entityStateException) {
        this.entityStateException = entityStateException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateMailboxQuotaResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public UpdateMailboxQuotaResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public UpdateMailboxQuotaResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public UpdateMailboxQuotaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateMailboxQuotaResponse;
    public UpdateMailboxQuotaResponse withUpdateMailboxQuotaResponse(java.util.Map<String, Object> updateMailboxQuotaResponse) {
        this.updateMailboxQuotaResponse = updateMailboxQuotaResponse;
        return this;
    }
}