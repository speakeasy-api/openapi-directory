package openapisdk.models.operations;



public class ListDomainsResponse {
    public String contentType;
    public ListDomainsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DomainInfos domainInfos;
    public ListDomainsResponse withDomainInfos(openapisdk.models.shared.DomainInfos domainInfos) {
        this.domainInfos = domainInfos;
        return this;
    }
    public Object operationNotPermittedFault;
    public ListDomainsResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public ListDomainsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}