package openapisdk.models.operations;



public class BatchGetImageResponse {
    public openapisdk.models.shared.BatchGetImageResponse batchGetImageResponse;
    public BatchGetImageResponse withBatchGetImageResponse(openapisdk.models.shared.BatchGetImageResponse batchGetImageResponse) {
        this.batchGetImageResponse = batchGetImageResponse;
        return this;
    }
    public String contentType;
    public BatchGetImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public BatchGetImageResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object repositoryNotFoundException;
    public BatchGetImageResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public BatchGetImageResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public BatchGetImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}