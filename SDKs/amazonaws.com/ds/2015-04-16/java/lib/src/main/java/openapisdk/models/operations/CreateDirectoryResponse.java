package openapisdk.models.operations;



public class CreateDirectoryResponse {
    public Object clientException;
    public CreateDirectoryResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public CreateDirectoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDirectoryResult createDirectoryResult;
    public CreateDirectoryResponse withCreateDirectoryResult(openapisdk.models.shared.CreateDirectoryResult createDirectoryResult) {
        this.createDirectoryResult = createDirectoryResult;
        return this;
    }
    public Object directoryLimitExceededException;
    public CreateDirectoryResponse withDirectoryLimitExceededException(Object directoryLimitExceededException) {
        this.directoryLimitExceededException = directoryLimitExceededException;
        return this;
    }
    public Object invalidParameterException;
    public CreateDirectoryResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public CreateDirectoryResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateDirectoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}