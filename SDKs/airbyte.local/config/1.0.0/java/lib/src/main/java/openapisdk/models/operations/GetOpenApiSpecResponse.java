package openapisdk.models.operations;



public class GetOpenApiSpecResponse {
    public String contentType;
    public GetOpenApiSpecResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOpenApiSpecResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getOpenApiSpec200TextPlainBinaryString;
    public GetOpenApiSpecResponse withGetOpenApiSpec200TextPlainBinaryString(String getOpenApiSpec200TextPlainBinaryString) {
        this.getOpenApiSpec200TextPlainBinaryString = getOpenApiSpec200TextPlainBinaryString;
        return this;
    }
}