package openapisdk.models.operations;



public class ListQualificationTypesResponse {
    public String contentType;
    public ListQualificationTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListQualificationTypesResponse listQualificationTypesResponse;
    public ListQualificationTypesResponse withListQualificationTypesResponse(openapisdk.models.shared.ListQualificationTypesResponse listQualificationTypesResponse) {
        this.listQualificationTypesResponse = listQualificationTypesResponse;
        return this;
    }
    public Object requestError;
    public ListQualificationTypesResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public ListQualificationTypesResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public ListQualificationTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}