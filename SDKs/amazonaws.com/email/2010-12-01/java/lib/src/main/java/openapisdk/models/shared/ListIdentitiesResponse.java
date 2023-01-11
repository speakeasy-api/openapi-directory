package openapisdk.models.shared;



/**
 * ListIdentitiesResponse
 * A list of all identities that you have attempted to verify under your AWS account, regardless of verification status.
**/
public class ListIdentitiesResponse {
    public String[] identities;
    public ListIdentitiesResponse withIdentities(String[] identities) {
        this.identities = identities;
        return this;
    }
    public String nextToken;
    public ListIdentitiesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}