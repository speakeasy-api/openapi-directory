package openapisdk.models.operations;



public class ListQualificationRequestsResponse {
    public String contentType;
    public ListQualificationRequestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListQualificationRequestsResponse listQualificationRequestsResponse;
    public ListQualificationRequestsResponse withListQualificationRequestsResponse(openapisdk.models.shared.ListQualificationRequestsResponse listQualificationRequestsResponse) {
        this.listQualificationRequestsResponse = listQualificationRequestsResponse;
        return this;
    }
    public Object requestError;
    public ListQualificationRequestsResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public ListQualificationRequestsResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public ListQualificationRequestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}