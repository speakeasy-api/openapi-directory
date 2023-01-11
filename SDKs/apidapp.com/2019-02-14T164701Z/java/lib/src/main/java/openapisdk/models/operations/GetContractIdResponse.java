package openapisdk.models.operations;



public class GetContractIdResponse {
    public String contentType;
    public GetContractIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public GetContractIdResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetContractIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetContractIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}