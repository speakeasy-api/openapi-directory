package openapisdk.models.operations;



public class RemoveTagsResponse {
    public Object cloudTrailARNInvalidException;
    public RemoveTagsResponse withCloudTrailArnInvalidException(Object cloudTrailARNInvalidException) {
        this.cloudTrailARNInvalidException = cloudTrailARNInvalidException;
        return this;
    }
    public String contentType;
    public RemoveTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidTagParameterException;
    public RemoveTagsResponse withInvalidTagParameterException(Object invalidTagParameterException) {
        this.invalidTagParameterException = invalidTagParameterException;
        return this;
    }
    public Object invalidTrailNameException;
    public RemoveTagsResponse withInvalidTrailNameException(Object invalidTrailNameException) {
        this.invalidTrailNameException = invalidTrailNameException;
        return this;
    }
    public Object notOrganizationMasterAccountException;
    public RemoveTagsResponse withNotOrganizationMasterAccountException(Object notOrganizationMasterAccountException) {
        this.notOrganizationMasterAccountException = notOrganizationMasterAccountException;
        return this;
    }
    public Object operationNotPermittedException;
    public RemoveTagsResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public java.util.Map<String, Object> removeTagsResponse;
    public RemoveTagsResponse withRemoveTagsResponse(java.util.Map<String, Object> removeTagsResponse) {
        this.removeTagsResponse = removeTagsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public RemoveTagsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceTypeNotSupportedException;
    public RemoveTagsResponse withResourceTypeNotSupportedException(Object resourceTypeNotSupportedException) {
        this.resourceTypeNotSupportedException = resourceTypeNotSupportedException;
        return this;
    }
    public Long statusCode;
    public RemoveTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public RemoveTagsResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}