package openapisdk.models.operations;



public class BatchDeleteImageResponse {
    public openapisdk.models.shared.BatchDeleteImageResponse batchDeleteImageResponse;
    public BatchDeleteImageResponse withBatchDeleteImageResponse(openapisdk.models.shared.BatchDeleteImageResponse batchDeleteImageResponse) {
        this.batchDeleteImageResponse = batchDeleteImageResponse;
        return this;
    }
    public String contentType;
    public BatchDeleteImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public BatchDeleteImageResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object repositoryNotFoundException;
    public BatchDeleteImageResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public BatchDeleteImageResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public BatchDeleteImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}