package openapisdk.models.operations;



public class BatchExecuteStatementResponse {
    public Object activeStatementsExceededException;
    public BatchExecuteStatementResponse withActiveStatementsExceededException(Object activeStatementsExceededException) {
        this.activeStatementsExceededException = activeStatementsExceededException;
        return this;
    }
    public Object batchExecuteStatementException;
    public BatchExecuteStatementResponse withBatchExecuteStatementException(Object batchExecuteStatementException) {
        this.batchExecuteStatementException = batchExecuteStatementException;
        return this;
    }
    public openapisdk.models.shared.BatchExecuteStatementOutput batchExecuteStatementOutput;
    public BatchExecuteStatementResponse withBatchExecuteStatementOutput(openapisdk.models.shared.BatchExecuteStatementOutput batchExecuteStatementOutput) {
        this.batchExecuteStatementOutput = batchExecuteStatementOutput;
        return this;
    }
    public String contentType;
    public BatchExecuteStatementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BatchExecuteStatementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public BatchExecuteStatementResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}