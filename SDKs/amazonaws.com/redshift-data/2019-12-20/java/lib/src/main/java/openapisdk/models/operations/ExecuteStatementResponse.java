package openapisdk.models.operations;



public class ExecuteStatementResponse {
    public Object activeStatementsExceededException;
    public ExecuteStatementResponse withActiveStatementsExceededException(Object activeStatementsExceededException) {
        this.activeStatementsExceededException = activeStatementsExceededException;
        return this;
    }
    public String contentType;
    public ExecuteStatementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object executeStatementException;
    public ExecuteStatementResponse withExecuteStatementException(Object executeStatementException) {
        this.executeStatementException = executeStatementException;
        return this;
    }
    public openapisdk.models.shared.ExecuteStatementOutput executeStatementOutput;
    public ExecuteStatementResponse withExecuteStatementOutput(openapisdk.models.shared.ExecuteStatementOutput executeStatementOutput) {
        this.executeStatementOutput = executeStatementOutput;
        return this;
    }
    public Long statusCode;
    public ExecuteStatementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ExecuteStatementResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}