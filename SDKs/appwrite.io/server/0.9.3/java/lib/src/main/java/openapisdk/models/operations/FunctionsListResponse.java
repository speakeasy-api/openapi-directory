package openapisdk.models.operations;



public class FunctionsListResponse {
    public String contentType;
    public FunctionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FunctionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FunctionList functionList;
    public FunctionsListResponse withFunctionList(openapisdk.models.shared.FunctionList functionList) {
        this.functionList = functionList;
        return this;
    }
}