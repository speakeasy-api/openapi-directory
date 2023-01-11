package openapisdk.models.operations;



public class FunctionsCreateResponse {
    public String contentType;
    public FunctionsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FunctionsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Function function;
    public FunctionsCreateResponse withFunction(openapisdk.models.shared.Function function) {
        this.function = function;
        return this;
    }
}