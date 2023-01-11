package openapisdk.models.shared;



public class ListDomainsResult {
    public java.util.Map<String, Object>[] domainNames;
    public ListDomainsResult withDomainNames(java.util.Map<String, Object>[] domainNames) {
        this.domainNames = domainNames;
        return this;
    }
    public String nextToken;
    public ListDomainsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}