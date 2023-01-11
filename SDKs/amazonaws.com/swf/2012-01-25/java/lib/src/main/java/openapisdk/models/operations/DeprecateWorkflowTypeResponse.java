package openapisdk.models.operations;



public class DeprecateWorkflowTypeResponse {
    public String contentType;
    public DeprecateWorkflowTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object operationNotPermittedFault;
    public DeprecateWorkflowTypeResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public DeprecateWorkflowTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object typeDeprecatedFault;
    public DeprecateWorkflowTypeResponse withTypeDeprecatedFault(Object typeDeprecatedFault) {
        this.typeDeprecatedFault = typeDeprecatedFault;
        return this;
    }
    public Object unknownResourceFault;
    public DeprecateWorkflowTypeResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
}