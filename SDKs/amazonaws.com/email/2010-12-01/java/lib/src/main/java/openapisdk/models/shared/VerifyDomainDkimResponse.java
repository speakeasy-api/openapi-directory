package openapisdk.models.shared;



/**
 * VerifyDomainDkimResponse
 * Returns CNAME records that you must publish to the DNS server of your domain to set up Easy DKIM with Amazon SES.
**/
public class VerifyDomainDkimResponse {
    public String[] dkimTokens;
    public VerifyDomainDkimResponse withDkimTokens(String[] dkimTokens) {
        this.dkimTokens = dkimTokens;
        return this;
    }
}