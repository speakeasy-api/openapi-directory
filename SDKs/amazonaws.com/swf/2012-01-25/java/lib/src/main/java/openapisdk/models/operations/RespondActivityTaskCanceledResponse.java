package openapisdk.models.operations;



public class RespondActivityTaskCanceledResponse {
    public String contentType;
    public RespondActivityTaskCanceledResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object operationNotPermittedFault;
    public RespondActivityTaskCanceledResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public RespondActivityTaskCanceledResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceFault;
    public RespondActivityTaskCanceledResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
}