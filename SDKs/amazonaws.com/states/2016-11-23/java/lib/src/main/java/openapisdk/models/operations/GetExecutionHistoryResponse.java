package openapisdk.models.operations;



public class GetExecutionHistoryResponse {
    public String contentType;
    public GetExecutionHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object executionDoesNotExist;
    public GetExecutionHistoryResponse withExecutionDoesNotExist(Object executionDoesNotExist) {
        this.executionDoesNotExist = executionDoesNotExist;
        return this;
    }
    public openapisdk.models.shared.GetExecutionHistoryOutput getExecutionHistoryOutput;
    public GetExecutionHistoryResponse withGetExecutionHistoryOutput(openapisdk.models.shared.GetExecutionHistoryOutput getExecutionHistoryOutput) {
        this.getExecutionHistoryOutput = getExecutionHistoryOutput;
        return this;
    }
    public Object invalidArn;
    public GetExecutionHistoryResponse withInvalidArn(Object invalidArn) {
        this.invalidArn = invalidArn;
        return this;
    }
    public Object invalidToken;
    public GetExecutionHistoryResponse withInvalidToken(Object invalidToken) {
        this.invalidToken = invalidToken;
        return this;
    }
    public Long statusCode;
    public GetExecutionHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}