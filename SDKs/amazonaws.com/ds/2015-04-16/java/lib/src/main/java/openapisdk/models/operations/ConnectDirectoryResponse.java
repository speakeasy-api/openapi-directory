package openapisdk.models.operations;



public class ConnectDirectoryResponse {
    public Object clientException;
    public ConnectDirectoryResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public openapisdk.models.shared.ConnectDirectoryResult connectDirectoryResult;
    public ConnectDirectoryResponse withConnectDirectoryResult(openapisdk.models.shared.ConnectDirectoryResult connectDirectoryResult) {
        this.connectDirectoryResult = connectDirectoryResult;
        return this;
    }
    public String contentType;
    public ConnectDirectoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryLimitExceededException;
    public ConnectDirectoryResponse withDirectoryLimitExceededException(Object directoryLimitExceededException) {
        this.directoryLimitExceededException = directoryLimitExceededException;
        return this;
    }
    public Object invalidParameterException;
    public ConnectDirectoryResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public ConnectDirectoryResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ConnectDirectoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}