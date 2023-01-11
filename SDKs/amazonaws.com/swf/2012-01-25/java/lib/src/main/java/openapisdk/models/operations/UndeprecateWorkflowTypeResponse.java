package openapisdk.models.operations;



public class UndeprecateWorkflowTypeResponse {
    public String contentType;
    public UndeprecateWorkflowTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object operationNotPermittedFault;
    public UndeprecateWorkflowTypeResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public UndeprecateWorkflowTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object typeAlreadyExistsFault;
    public UndeprecateWorkflowTypeResponse withTypeAlreadyExistsFault(Object typeAlreadyExistsFault) {
        this.typeAlreadyExistsFault = typeAlreadyExistsFault;
        return this;
    }
    public Object unknownResourceFault;
    public UndeprecateWorkflowTypeResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
}