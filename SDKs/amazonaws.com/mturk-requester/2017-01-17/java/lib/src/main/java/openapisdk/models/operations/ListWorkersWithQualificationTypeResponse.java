package openapisdk.models.operations;



public class ListWorkersWithQualificationTypeResponse {
    public String contentType;
    public ListWorkersWithQualificationTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListWorkersWithQualificationTypeResponse listWorkersWithQualificationTypeResponse;
    public ListWorkersWithQualificationTypeResponse withListWorkersWithQualificationTypeResponse(openapisdk.models.shared.ListWorkersWithQualificationTypeResponse listWorkersWithQualificationTypeResponse) {
        this.listWorkersWithQualificationTypeResponse = listWorkersWithQualificationTypeResponse;
        return this;
    }
    public Object requestError;
    public ListWorkersWithQualificationTypeResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public ListWorkersWithQualificationTypeResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public ListWorkersWithQualificationTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}