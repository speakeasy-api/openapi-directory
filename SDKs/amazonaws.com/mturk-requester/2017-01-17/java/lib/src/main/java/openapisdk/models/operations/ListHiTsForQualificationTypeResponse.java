package openapisdk.models.operations;



public class ListHiTsForQualificationTypeResponse {
    public String contentType;
    public ListHiTsForQualificationTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListHiTsForQualificationTypeResponse listHITsForQualificationTypeResponse;
    public ListHiTsForQualificationTypeResponse withListHiTsForQualificationTypeResponse(openapisdk.models.shared.ListHiTsForQualificationTypeResponse listHITsForQualificationTypeResponse) {
        this.listHITsForQualificationTypeResponse = listHITsForQualificationTypeResponse;
        return this;
    }
    public Object requestError;
    public ListHiTsForQualificationTypeResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public ListHiTsForQualificationTypeResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public ListHiTsForQualificationTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}