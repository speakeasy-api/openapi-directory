package openapisdk.models.shared;



/**
 * ListSamlProvidersResponse
 * Contains the response to a successful <a>ListSAMLProviders</a> request. 
**/
public class ListSamlProvidersResponse {
    public SamlProviderListEntry[] samlProviderList;
    public ListSamlProvidersResponse withSamlProviderList(SamlProviderListEntry[] samlProviderList) {
        this.samlProviderList = samlProviderList;
        return this;
    }
}