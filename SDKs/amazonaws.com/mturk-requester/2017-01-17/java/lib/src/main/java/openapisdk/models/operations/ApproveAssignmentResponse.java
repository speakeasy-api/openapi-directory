package openapisdk.models.operations;



public class ApproveAssignmentResponse {
    public java.util.Map<String, Object> approveAssignmentResponse;
    public ApproveAssignmentResponse withApproveAssignmentResponse(java.util.Map<String, Object> approveAssignmentResponse) {
        this.approveAssignmentResponse = approveAssignmentResponse;
        return this;
    }
    public String contentType;
    public ApproveAssignmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object requestError;
    public ApproveAssignmentResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public ApproveAssignmentResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public ApproveAssignmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}