package openapisdk.models.operations;



public class PostGetTaxFormResponse {
    public String contentType;
    public PostGetTaxFormResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object getTaxFormResponse;
    public PostGetTaxFormResponse withGetTaxFormResponse(Object getTaxFormResponse) {
        this.getTaxFormResponse = getTaxFormResponse;
        return this;
    }
    public Object serviceError;
    public PostGetTaxFormResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostGetTaxFormResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}