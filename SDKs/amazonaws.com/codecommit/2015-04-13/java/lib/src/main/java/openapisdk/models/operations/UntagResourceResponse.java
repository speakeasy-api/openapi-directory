package openapisdk.models.operations;



public class UntagResourceResponse {
    public String contentType;
    public UntagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRepositoryNameException;
    public UntagResourceResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object invalidResourceArnException;
    public UntagResourceResponse withInvalidResourceArnException(Object invalidResourceArnException) {
        this.invalidResourceArnException = invalidResourceArnException;
        return this;
    }
    public Object invalidSystemTagUsageException;
    public UntagResourceResponse withInvalidSystemTagUsageException(Object invalidSystemTagUsageException) {
        this.invalidSystemTagUsageException = invalidSystemTagUsageException;
        return this;
    }
    public Object invalidTagKeysListException;
    public UntagResourceResponse withInvalidTagKeysListException(Object invalidTagKeysListException) {
        this.invalidTagKeysListException = invalidTagKeysListException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public UntagResourceResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object resourceArnRequiredException;
    public UntagResourceResponse withResourceArnRequiredException(Object resourceArnRequiredException) {
        this.resourceArnRequiredException = resourceArnRequiredException;
        return this;
    }
    public Long statusCode;
    public UntagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagKeysListRequiredException;
    public UntagResourceResponse withTagKeysListRequiredException(Object tagKeysListRequiredException) {
        this.tagKeysListRequiredException = tagKeysListRequiredException;
        return this;
    }
    public Object tagPolicyException;
    public UntagResourceResponse withTagPolicyException(Object tagPolicyException) {
        this.tagPolicyException = tagPolicyException;
        return this;
    }
    public Object tooManyTagsException;
    public UntagResourceResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}