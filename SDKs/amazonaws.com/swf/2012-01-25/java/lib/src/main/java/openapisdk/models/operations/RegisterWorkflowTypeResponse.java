package openapisdk.models.operations;



public class RegisterWorkflowTypeResponse {
    public String contentType;
    public RegisterWorkflowTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededFault;
    public RegisterWorkflowTypeResponse withLimitExceededFault(Object limitExceededFault) {
        this.limitExceededFault = limitExceededFault;
        return this;
    }
    public Object operationNotPermittedFault;
    public RegisterWorkflowTypeResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public RegisterWorkflowTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object typeAlreadyExistsFault;
    public RegisterWorkflowTypeResponse withTypeAlreadyExistsFault(Object typeAlreadyExistsFault) {
        this.typeAlreadyExistsFault = typeAlreadyExistsFault;
        return this;
    }
    public Object unknownResourceFault;
    public RegisterWorkflowTypeResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
}