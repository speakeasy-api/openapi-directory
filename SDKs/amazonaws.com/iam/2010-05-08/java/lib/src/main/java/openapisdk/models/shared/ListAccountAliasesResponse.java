package openapisdk.models.shared;



/**
 * ListAccountAliasesResponse
 * Contains the response to a successful <a>ListAccountAliases</a> request. 
**/
public class ListAccountAliasesResponse {
    public String[] accountAliases;
    public ListAccountAliasesResponse withAccountAliases(String[] accountAliases) {
        this.accountAliases = accountAliases;
        return this;
    }
    public Boolean isTruncated;
    public ListAccountAliasesResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListAccountAliasesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}