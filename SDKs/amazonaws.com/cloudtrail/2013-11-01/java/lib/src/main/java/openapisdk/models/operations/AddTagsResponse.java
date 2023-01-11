package openapisdk.models.operations;



public class AddTagsResponse {
    public java.util.Map<String, Object> addTagsResponse;
    public AddTagsResponse withAddTagsResponse(java.util.Map<String, Object> addTagsResponse) {
        this.addTagsResponse = addTagsResponse;
        return this;
    }
    public Object cloudTrailARNInvalidException;
    public AddTagsResponse withCloudTrailArnInvalidException(Object cloudTrailARNInvalidException) {
        this.cloudTrailARNInvalidException = cloudTrailARNInvalidException;
        return this;
    }
    public String contentType;
    public AddTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidTagParameterException;
    public AddTagsResponse withInvalidTagParameterException(Object invalidTagParameterException) {
        this.invalidTagParameterException = invalidTagParameterException;
        return this;
    }
    public Object invalidTrailNameException;
    public AddTagsResponse withInvalidTrailNameException(Object invalidTrailNameException) {
        this.invalidTrailNameException = invalidTrailNameException;
        return this;
    }
    public Object notOrganizationMasterAccountException;
    public AddTagsResponse withNotOrganizationMasterAccountException(Object notOrganizationMasterAccountException) {
        this.notOrganizationMasterAccountException = notOrganizationMasterAccountException;
        return this;
    }
    public Object operationNotPermittedException;
    public AddTagsResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object resourceNotFoundException;
    public AddTagsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceTypeNotSupportedException;
    public AddTagsResponse withResourceTypeNotSupportedException(Object resourceTypeNotSupportedException) {
        this.resourceTypeNotSupportedException = resourceTypeNotSupportedException;
        return this;
    }
    public Long statusCode;
    public AddTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagsLimitExceededException;
    public AddTagsResponse withTagsLimitExceededException(Object tagsLimitExceededException) {
        this.tagsLimitExceededException = tagsLimitExceededException;
        return this;
    }
    public Object unsupportedOperationException;
    public AddTagsResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}