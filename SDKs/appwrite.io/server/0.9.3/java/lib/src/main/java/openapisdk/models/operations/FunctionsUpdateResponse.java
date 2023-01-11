package openapisdk.models.operations;



public class FunctionsUpdateResponse {
    public String contentType;
    public FunctionsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FunctionsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Function function;
    public FunctionsUpdateResponse withFunction(openapisdk.models.shared.Function function) {
        this.function = function;
        return this;
    }
}