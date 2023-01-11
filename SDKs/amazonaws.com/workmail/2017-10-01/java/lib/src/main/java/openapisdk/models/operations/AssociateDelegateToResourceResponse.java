package openapisdk.models.operations;



public class AssociateDelegateToResourceResponse {
    public java.util.Map<String, Object> associateDelegateToResourceResponse;
    public AssociateDelegateToResourceResponse withAssociateDelegateToResourceResponse(java.util.Map<String, Object> associateDelegateToResourceResponse) {
        this.associateDelegateToResourceResponse = associateDelegateToResourceResponse;
        return this;
    }
    public String contentType;
    public AssociateDelegateToResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public AssociateDelegateToResourceResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object entityStateException;
    public AssociateDelegateToResourceResponse withEntityStateException(Object entityStateException) {
        this.entityStateException = entityStateException;
        return this;
    }
    public Object invalidParameterException;
    public AssociateDelegateToResourceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object organizationNotFoundException;
    public AssociateDelegateToResourceResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public AssociateDelegateToResourceResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public AssociateDelegateToResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}