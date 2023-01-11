package openapisdk.models.shared;



/**
 * CreateSamlProviderResponse
 * Contains the response to a successful <a>CreateSAMLProvider</a> request. 
**/
public class CreateSamlProviderResponse {
    public String samlProviderArn;
    public CreateSamlProviderResponse withSamlProviderArn(String samlProviderArn) {
        this.samlProviderArn = samlProviderArn;
        return this;
    }
    public Tag[] tags;
    public CreateSamlProviderResponse withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}