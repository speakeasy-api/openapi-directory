package openapisdk.models.operations;



public class GetReturnsResponse {
    public String contentType;
    public GetReturnsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetReturnsReturnsArrayV2 returnsArrayV2;
    public GetReturnsResponse withReturnsArrayV2(GetReturnsReturnsArrayV2 returnsArrayV2) {
        this.returnsArrayV2 = returnsArrayV2;
        return this;
    }
    public Long statusCode;
    public GetReturnsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}