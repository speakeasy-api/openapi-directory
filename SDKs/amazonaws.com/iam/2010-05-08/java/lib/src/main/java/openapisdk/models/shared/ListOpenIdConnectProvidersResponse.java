package openapisdk.models.shared;



/**
 * ListOpenIdConnectProvidersResponse
 * Contains the response to a successful <a>ListOpenIDConnectProviders</a> request. 
**/
public class ListOpenIdConnectProvidersResponse {
    public OpenIdConnectProviderListEntry[] openIDConnectProviderList;
    public ListOpenIdConnectProvidersResponse withOpenIdConnectProviderList(OpenIdConnectProviderListEntry[] openIDConnectProviderList) {
        this.openIDConnectProviderList = openIDConnectProviderList;
        return this;
    }
}