package openapisdk.models.operations;



public class CancelReplicationTaskAssessmentRunResponse {
    public Object accessDeniedFault;
    public CancelReplicationTaskAssessmentRunResponse withAccessDeniedFault(Object accessDeniedFault) {
        this.accessDeniedFault = accessDeniedFault;
        return this;
    }
    public openapisdk.models.shared.CancelReplicationTaskAssessmentRunResponse cancelReplicationTaskAssessmentRunResponse;
    public CancelReplicationTaskAssessmentRunResponse withCancelReplicationTaskAssessmentRunResponse(openapisdk.models.shared.CancelReplicationTaskAssessmentRunResponse cancelReplicationTaskAssessmentRunResponse) {
        this.cancelReplicationTaskAssessmentRunResponse = cancelReplicationTaskAssessmentRunResponse;
        return this;
    }
    public String contentType;
    public CancelReplicationTaskAssessmentRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidResourceStateFault;
    public CancelReplicationTaskAssessmentRunResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public CancelReplicationTaskAssessmentRunResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public CancelReplicationTaskAssessmentRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}