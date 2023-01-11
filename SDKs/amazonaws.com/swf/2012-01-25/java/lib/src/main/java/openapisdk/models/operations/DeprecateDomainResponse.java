package openapisdk.models.operations;



public class DeprecateDomainResponse {
    public String contentType;
    public DeprecateDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object domainDeprecatedFault;
    public DeprecateDomainResponse withDomainDeprecatedFault(Object domainDeprecatedFault) {
        this.domainDeprecatedFault = domainDeprecatedFault;
        return this;
    }
    public Object operationNotPermittedFault;
    public DeprecateDomainResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public DeprecateDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceFault;
    public DeprecateDomainResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
}