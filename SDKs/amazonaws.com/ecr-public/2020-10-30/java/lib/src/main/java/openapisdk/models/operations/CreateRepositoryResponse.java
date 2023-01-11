package openapisdk.models.operations;



public class CreateRepositoryResponse {
    public String contentType;
    public CreateRepositoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateRepositoryResponse createRepositoryResponse;
    public CreateRepositoryResponse withCreateRepositoryResponse(openapisdk.models.shared.CreateRepositoryResponse createRepositoryResponse) {
        this.createRepositoryResponse = createRepositoryResponse;
        return this;
    }
    public Object invalidParameterException;
    public CreateRepositoryResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidTagParameterException;
    public CreateRepositoryResponse withInvalidTagParameterException(Object invalidTagParameterException) {
        this.invalidTagParameterException = invalidTagParameterException;
        return this;
    }
    public Object limitExceededException;
    public CreateRepositoryResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object repositoryAlreadyExistsException;
    public CreateRepositoryResponse withRepositoryAlreadyExistsException(Object repositoryAlreadyExistsException) {
        this.repositoryAlreadyExistsException = repositoryAlreadyExistsException;
        return this;
    }
    public Object serverException;
    public CreateRepositoryResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public CreateRepositoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyTagsException;
    public CreateRepositoryResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}