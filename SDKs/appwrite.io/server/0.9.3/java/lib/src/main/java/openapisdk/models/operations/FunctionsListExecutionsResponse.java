package openapisdk.models.operations;



public class FunctionsListExecutionsResponse {
    public String contentType;
    public FunctionsListExecutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FunctionsListExecutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ExecutionList executionList;
    public FunctionsListExecutionsResponse withExecutionList(openapisdk.models.shared.ExecutionList executionList) {
        this.executionList = executionList;
        return this;
    }
}