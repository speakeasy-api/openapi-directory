package openapisdk.models.operations;



public class TerminateTargetInstancesResponse {
    public Object conflictException;
    public TerminateTargetInstancesResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public TerminateTargetInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TerminateTargetInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TerminateTargetInstancesResponse terminateTargetInstancesResponse;
    public TerminateTargetInstancesResponse withTerminateTargetInstancesResponse(openapisdk.models.shared.TerminateTargetInstancesResponse terminateTargetInstancesResponse) {
        this.terminateTargetInstancesResponse = terminateTargetInstancesResponse;
        return this;
    }
    public Object uninitializedAccountException;
    public TerminateTargetInstancesResponse withUninitializedAccountException(Object uninitializedAccountException) {
        this.uninitializedAccountException = uninitializedAccountException;
        return this;
    }
    public Object validationException;
    public TerminateTargetInstancesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}