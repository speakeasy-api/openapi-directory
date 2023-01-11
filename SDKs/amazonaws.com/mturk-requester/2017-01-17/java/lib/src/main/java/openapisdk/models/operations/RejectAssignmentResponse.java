package openapisdk.models.operations;



public class RejectAssignmentResponse {
    public String contentType;
    public RejectAssignmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> rejectAssignmentResponse;
    public RejectAssignmentResponse withRejectAssignmentResponse(java.util.Map<String, Object> rejectAssignmentResponse) {
        this.rejectAssignmentResponse = rejectAssignmentResponse;
        return this;
    }
    public Object requestError;
    public RejectAssignmentResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public RejectAssignmentResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public RejectAssignmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}