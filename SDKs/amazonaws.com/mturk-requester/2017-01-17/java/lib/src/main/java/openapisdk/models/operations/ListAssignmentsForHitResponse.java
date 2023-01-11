package openapisdk.models.operations;



public class ListAssignmentsForHitResponse {
    public String contentType;
    public ListAssignmentsForHitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAssignmentsForHitResponse listAssignmentsForHITResponse;
    public ListAssignmentsForHitResponse withListAssignmentsForHitResponse(openapisdk.models.shared.ListAssignmentsForHitResponse listAssignmentsForHITResponse) {
        this.listAssignmentsForHITResponse = listAssignmentsForHITResponse;
        return this;
    }
    public Object requestError;
    public ListAssignmentsForHitResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public ListAssignmentsForHitResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public ListAssignmentsForHitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}