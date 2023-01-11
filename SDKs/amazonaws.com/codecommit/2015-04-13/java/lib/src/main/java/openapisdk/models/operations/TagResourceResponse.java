package openapisdk.models.operations;



public class TagResourceResponse {
    public String contentType;
    public TagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRepositoryNameException;
    public TagResourceResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object invalidResourceArnException;
    public TagResourceResponse withInvalidResourceArnException(Object invalidResourceArnException) {
        this.invalidResourceArnException = invalidResourceArnException;
        return this;
    }
    public Object invalidSystemTagUsageException;
    public TagResourceResponse withInvalidSystemTagUsageException(Object invalidSystemTagUsageException) {
        this.invalidSystemTagUsageException = invalidSystemTagUsageException;
        return this;
    }
    public Object invalidTagsMapException;
    public TagResourceResponse withInvalidTagsMapException(Object invalidTagsMapException) {
        this.invalidTagsMapException = invalidTagsMapException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public TagResourceResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object resourceArnRequiredException;
    public TagResourceResponse withResourceArnRequiredException(Object resourceArnRequiredException) {
        this.resourceArnRequiredException = resourceArnRequiredException;
        return this;
    }
    public Long statusCode;
    public TagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagPolicyException;
    public TagResourceResponse withTagPolicyException(Object tagPolicyException) {
        this.tagPolicyException = tagPolicyException;
        return this;
    }
    public Object tagsMapRequiredException;
    public TagResourceResponse withTagsMapRequiredException(Object tagsMapRequiredException) {
        this.tagsMapRequiredException = tagsMapRequiredException;
        return this;
    }
    public Object tooManyTagsException;
    public TagResourceResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}