package openapisdk.models.operations;



public class StartReplicationTaskAssessmentResponse {
    public String contentType;
    public StartReplicationTaskAssessmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidResourceStateFault;
    public StartReplicationTaskAssessmentResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public StartReplicationTaskAssessmentResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public openapisdk.models.shared.StartReplicationTaskAssessmentResponse startReplicationTaskAssessmentResponse;
    public StartReplicationTaskAssessmentResponse withStartReplicationTaskAssessmentResponse(openapisdk.models.shared.StartReplicationTaskAssessmentResponse startReplicationTaskAssessmentResponse) {
        this.startReplicationTaskAssessmentResponse = startReplicationTaskAssessmentResponse;
        return this;
    }
    public Long statusCode;
    public StartReplicationTaskAssessmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}