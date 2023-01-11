package openapisdk.models.operations;



public class DescribeDomainResponse {
    public String contentType;
    public DescribeDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DomainDetail domainDetail;
    public DescribeDomainResponse withDomainDetail(openapisdk.models.shared.DomainDetail domainDetail) {
        this.domainDetail = domainDetail;
        return this;
    }
    public Object operationNotPermittedFault;
    public DescribeDomainResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public DescribeDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceFault;
    public DescribeDomainResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
}