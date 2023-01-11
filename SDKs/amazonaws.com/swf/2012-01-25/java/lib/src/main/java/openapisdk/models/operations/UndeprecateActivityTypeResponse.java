package openapisdk.models.operations;



public class UndeprecateActivityTypeResponse {
    public String contentType;
    public UndeprecateActivityTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object operationNotPermittedFault;
    public UndeprecateActivityTypeResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public UndeprecateActivityTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object typeAlreadyExistsFault;
    public UndeprecateActivityTypeResponse withTypeAlreadyExistsFault(Object typeAlreadyExistsFault) {
        this.typeAlreadyExistsFault = typeAlreadyExistsFault;
        return this;
    }
    public Object unknownResourceFault;
    public UndeprecateActivityTypeResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
}