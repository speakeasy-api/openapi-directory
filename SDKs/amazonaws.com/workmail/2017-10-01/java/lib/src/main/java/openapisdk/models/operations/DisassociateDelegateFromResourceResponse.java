package openapisdk.models.operations;



public class DisassociateDelegateFromResourceResponse {
    public String contentType;
    public DisassociateDelegateFromResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateDelegateFromResourceResponse;
    public DisassociateDelegateFromResourceResponse withDisassociateDelegateFromResourceResponse(java.util.Map<String, Object> disassociateDelegateFromResourceResponse) {
        this.disassociateDelegateFromResourceResponse = disassociateDelegateFromResourceResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DisassociateDelegateFromResourceResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object entityStateException;
    public DisassociateDelegateFromResourceResponse withEntityStateException(Object entityStateException) {
        this.entityStateException = entityStateException;
        return this;
    }
    public Object invalidParameterException;
    public DisassociateDelegateFromResourceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public DisassociateDelegateFromResourceResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public DisassociateDelegateFromResourceResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public DisassociateDelegateFromResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}