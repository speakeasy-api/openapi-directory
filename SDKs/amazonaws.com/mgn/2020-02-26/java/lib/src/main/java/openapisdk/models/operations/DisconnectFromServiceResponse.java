package openapisdk.models.operations;



public class DisconnectFromServiceResponse {
    public Object conflictException;
    public DisconnectFromServiceResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DisconnectFromServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public DisconnectFromServiceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SourceServer sourceServer;
    public DisconnectFromServiceResponse withSourceServer(openapisdk.models.shared.SourceServer sourceServer) {
        this.sourceServer = sourceServer;
        return this;
    }
    public Long statusCode;
    public DisconnectFromServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object uninitializedAccountException;
    public DisconnectFromServiceResponse withUninitializedAccountException(Object uninitializedAccountException) {
        this.uninitializedAccountException = uninitializedAccountException;
        return this;
    }
}