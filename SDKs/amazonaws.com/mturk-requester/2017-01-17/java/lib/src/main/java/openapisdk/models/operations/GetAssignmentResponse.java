package openapisdk.models.operations;



public class GetAssignmentResponse {
    public String contentType;
    public GetAssignmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAssignmentResponse getAssignmentResponse;
    public GetAssignmentResponse withGetAssignmentResponse(openapisdk.models.shared.GetAssignmentResponse getAssignmentResponse) {
        this.getAssignmentResponse = getAssignmentResponse;
        return this;
    }
    public Object requestError;
    public GetAssignmentResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public GetAssignmentResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public GetAssignmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}