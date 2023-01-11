package openapisdk.models.shared;



/**
 * ListDomainNamesResponse
 * The result of a <code>ListDomainNames</code> request. Contains a list of the domains owned by an account.
**/
public class ListDomainNamesResponse {
    public java.util.Map<String, String> domainNames;
    public ListDomainNamesResponse withDomainNames(java.util.Map<String, String> domainNames) {
        this.domainNames = domainNames;
        return this;
    }
}