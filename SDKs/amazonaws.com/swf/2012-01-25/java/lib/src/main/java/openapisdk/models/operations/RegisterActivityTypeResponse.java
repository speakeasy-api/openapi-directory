package openapisdk.models.operations;



public class RegisterActivityTypeResponse {
    public String contentType;
    public RegisterActivityTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededFault;
    public RegisterActivityTypeResponse withLimitExceededFault(Object limitExceededFault) {
        this.limitExceededFault = limitExceededFault;
        return this;
    }
    public Object operationNotPermittedFault;
    public RegisterActivityTypeResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public RegisterActivityTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object typeAlreadyExistsFault;
    public RegisterActivityTypeResponse withTypeAlreadyExistsFault(Object typeAlreadyExistsFault) {
        this.typeAlreadyExistsFault = typeAlreadyExistsFault;
        return this;
    }
    public Object unknownResourceFault;
    public RegisterActivityTypeResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
}