package openapisdk.models.operations;



public class StartWorkflowExecutionResponse {
    public String contentType;
    public StartWorkflowExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object defaultUndefinedFault;
    public StartWorkflowExecutionResponse withDefaultUndefinedFault(Object defaultUndefinedFault) {
        this.defaultUndefinedFault = defaultUndefinedFault;
        return this;
    }
    public Object limitExceededFault;
    public StartWorkflowExecutionResponse withLimitExceededFault(Object limitExceededFault) {
        this.limitExceededFault = limitExceededFault;
        return this;
    }
    public Object operationNotPermittedFault;
    public StartWorkflowExecutionResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public openapisdk.models.shared.Run run;
    public StartWorkflowExecutionResponse withRun(openapisdk.models.shared.Run run) {
        this.run = run;
        return this;
    }
    public Long statusCode;
    public StartWorkflowExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object typeDeprecatedFault;
    public StartWorkflowExecutionResponse withTypeDeprecatedFault(Object typeDeprecatedFault) {
        this.typeDeprecatedFault = typeDeprecatedFault;
        return this;
    }
    public Object unknownResourceFault;
    public StartWorkflowExecutionResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
    public Object workflowExecutionAlreadyStartedFault;
    public StartWorkflowExecutionResponse withWorkflowExecutionAlreadyStartedFault(Object workflowExecutionAlreadyStartedFault) {
        this.workflowExecutionAlreadyStartedFault = workflowExecutionAlreadyStartedFault;
        return this;
    }
}