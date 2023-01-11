package openapisdk.models.shared;



/**
 * CreateOpenIdConnectProviderResponse
 * Contains the response to a successful <a>CreateOpenIDConnectProvider</a> request. 
**/
public class CreateOpenIdConnectProviderResponse {
    public String openIDConnectProviderArn;
    public CreateOpenIdConnectProviderResponse withOpenIdConnectProviderArn(String openIDConnectProviderArn) {
        this.openIDConnectProviderArn = openIDConnectProviderArn;
        return this;
    }
    public Tag[] tags;
    public CreateOpenIdConnectProviderResponse withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}