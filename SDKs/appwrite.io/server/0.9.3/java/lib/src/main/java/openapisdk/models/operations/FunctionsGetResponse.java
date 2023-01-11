package openapisdk.models.operations;



public class FunctionsGetResponse {
    public String contentType;
    public FunctionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FunctionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Function function;
    public FunctionsGetResponse withFunction(openapisdk.models.shared.Function function) {
        this.function = function;
        return this;
    }
}