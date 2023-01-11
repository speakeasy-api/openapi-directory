package openapisdk.models.operations;



public class ListReviewableHiTsResponse {
    public String contentType;
    public ListReviewableHiTsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListReviewableHiTsResponse listReviewableHITsResponse;
    public ListReviewableHiTsResponse withListReviewableHiTsResponse(openapisdk.models.shared.ListReviewableHiTsResponse listReviewableHITsResponse) {
        this.listReviewableHITsResponse = listReviewableHITsResponse;
        return this;
    }
    public Object requestError;
    public ListReviewableHiTsResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public ListReviewableHiTsResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public ListReviewableHiTsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}