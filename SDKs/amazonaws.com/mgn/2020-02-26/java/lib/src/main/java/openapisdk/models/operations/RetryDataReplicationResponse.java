package openapisdk.models.operations;



public class RetryDataReplicationResponse {
    public String contentType;
    public RetryDataReplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public RetryDataReplicationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SourceServer sourceServer;
    public RetryDataReplicationResponse withSourceServer(openapisdk.models.shared.SourceServer sourceServer) {
        this.sourceServer = sourceServer;
        return this;
    }
    public Long statusCode;
    public RetryDataReplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object uninitializedAccountException;
    public RetryDataReplicationResponse withUninitializedAccountException(Object uninitializedAccountException) {
        this.uninitializedAccountException = uninitializedAccountException;
        return this;
    }
    public Object validationException;
    public RetryDataReplicationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}