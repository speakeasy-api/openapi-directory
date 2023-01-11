package openapisdk.models.operations;



public class UndeprecateDomainResponse {
    public String contentType;
    public UndeprecateDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object domainAlreadyExistsFault;
    public UndeprecateDomainResponse withDomainAlreadyExistsFault(Object domainAlreadyExistsFault) {
        this.domainAlreadyExistsFault = domainAlreadyExistsFault;
        return this;
    }
    public Object operationNotPermittedFault;
    public UndeprecateDomainResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public UndeprecateDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceFault;
    public UndeprecateDomainResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
}