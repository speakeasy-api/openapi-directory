package openapisdk.models.operations;



public class ListTagsForResourceResponse {
    public String contentType;
    public ListTagsForResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRepositoryNameException;
    public ListTagsForResourceResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object invalidResourceArnException;
    public ListTagsForResourceResponse withInvalidResourceArnException(Object invalidResourceArnException) {
        this.invalidResourceArnException = invalidResourceArnException;
        return this;
    }
    public openapisdk.models.shared.ListTagsForResourceOutput listTagsForResourceOutput;
    public ListTagsForResourceResponse withListTagsForResourceOutput(openapisdk.models.shared.ListTagsForResourceOutput listTagsForResourceOutput) {
        this.listTagsForResourceOutput = listTagsForResourceOutput;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public ListTagsForResourceResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object resourceArnRequiredException;
    public ListTagsForResourceResponse withResourceArnRequiredException(Object resourceArnRequiredException) {
        this.resourceArnRequiredException = resourceArnRequiredException;
        return this;
    }
    public Long statusCode;
    public ListTagsForResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}