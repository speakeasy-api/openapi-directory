package openapisdk.models.operations;



public class RegisterDomainResponse {
    public String contentType;
    public RegisterDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object domainAlreadyExistsFault;
    public RegisterDomainResponse withDomainAlreadyExistsFault(Object domainAlreadyExistsFault) {
        this.domainAlreadyExistsFault = domainAlreadyExistsFault;
        return this;
    }
    public Object limitExceededFault;
    public RegisterDomainResponse withLimitExceededFault(Object limitExceededFault) {
        this.limitExceededFault = limitExceededFault;
        return this;
    }
    public Object operationNotPermittedFault;
    public RegisterDomainResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public RegisterDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyTagsFault;
    public RegisterDomainResponse withTooManyTagsFault(Object tooManyTagsFault) {
        this.tooManyTagsFault = tooManyTagsFault;
        return this;
    }
}