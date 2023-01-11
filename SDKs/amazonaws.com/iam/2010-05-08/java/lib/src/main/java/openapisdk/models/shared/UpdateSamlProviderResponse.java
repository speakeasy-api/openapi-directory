package openapisdk.models.shared;



/**
 * UpdateSamlProviderResponse
 * Contains the response to a successful <a>UpdateSAMLProvider</a> request. 
**/
public class UpdateSamlProviderResponse {
    public String samlProviderArn;
    public UpdateSamlProviderResponse withSamlProviderArn(String samlProviderArn) {
        this.samlProviderArn = samlProviderArn;
        return this;
    }
}