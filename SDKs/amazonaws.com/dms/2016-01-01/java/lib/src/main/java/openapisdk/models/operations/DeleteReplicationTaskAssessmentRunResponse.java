package openapisdk.models.operations;



public class DeleteReplicationTaskAssessmentRunResponse {
    public Object accessDeniedFault;
    public DeleteReplicationTaskAssessmentRunResponse withAccessDeniedFault(Object accessDeniedFault) {
        this.accessDeniedFault = accessDeniedFault;
        return this;
    }
    public String contentType;
    public DeleteReplicationTaskAssessmentRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteReplicationTaskAssessmentRunResponse deleteReplicationTaskAssessmentRunResponse;
    public DeleteReplicationTaskAssessmentRunResponse withDeleteReplicationTaskAssessmentRunResponse(openapisdk.models.shared.DeleteReplicationTaskAssessmentRunResponse deleteReplicationTaskAssessmentRunResponse) {
        this.deleteReplicationTaskAssessmentRunResponse = deleteReplicationTaskAssessmentRunResponse;
        return this;
    }
    public Object invalidResourceStateFault;
    public DeleteReplicationTaskAssessmentRunResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public DeleteReplicationTaskAssessmentRunResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DeleteReplicationTaskAssessmentRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}