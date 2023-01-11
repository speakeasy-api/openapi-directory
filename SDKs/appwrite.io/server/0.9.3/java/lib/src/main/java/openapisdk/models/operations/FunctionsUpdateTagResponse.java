package openapisdk.models.operations;



public class FunctionsUpdateTagResponse {
    public String contentType;
    public FunctionsUpdateTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FunctionsUpdateTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Function function;
    public FunctionsUpdateTagResponse withFunction(openapisdk.models.shared.Function function) {
        this.function = function;
        return this;
    }
}