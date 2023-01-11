package openapisdk.models.operations;



public class MarkAsArchivedResponse {
    public Object conflictException;
    public MarkAsArchivedResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public MarkAsArchivedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public MarkAsArchivedResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SourceServer sourceServer;
    public MarkAsArchivedResponse withSourceServer(openapisdk.models.shared.SourceServer sourceServer) {
        this.sourceServer = sourceServer;
        return this;
    }
    public Long statusCode;
    public MarkAsArchivedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object uninitializedAccountException;
    public MarkAsArchivedResponse withUninitializedAccountException(Object uninitializedAccountException) {
        this.uninitializedAccountException = uninitializedAccountException;
        return this;
    }
}