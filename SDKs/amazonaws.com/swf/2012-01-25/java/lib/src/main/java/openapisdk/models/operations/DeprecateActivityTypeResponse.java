package openapisdk.models.operations;



public class DeprecateActivityTypeResponse {
    public String contentType;
    public DeprecateActivityTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object operationNotPermittedFault;
    public DeprecateActivityTypeResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public DeprecateActivityTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object typeDeprecatedFault;
    public DeprecateActivityTypeResponse withTypeDeprecatedFault(Object typeDeprecatedFault) {
        this.typeDeprecatedFault = typeDeprecatedFault;
        return this;
    }
    public Object unknownResourceFault;
    public DeprecateActivityTypeResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
}