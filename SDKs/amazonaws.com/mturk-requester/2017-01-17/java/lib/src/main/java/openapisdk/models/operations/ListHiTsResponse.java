package openapisdk.models.operations;



public class ListHiTsResponse {
    public String contentType;
    public ListHiTsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListHiTsResponse listHITsResponse;
    public ListHiTsResponse withListHiTsResponse(openapisdk.models.shared.ListHiTsResponse listHITsResponse) {
        this.listHITsResponse = listHITsResponse;
        return this;
    }
    public Object requestError;
    public ListHiTsResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public ListHiTsResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public ListHiTsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}