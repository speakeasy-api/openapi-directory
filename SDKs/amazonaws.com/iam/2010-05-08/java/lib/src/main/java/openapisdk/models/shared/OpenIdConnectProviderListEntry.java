package openapisdk.models.shared;



/**
 * OpenIdConnectProviderListEntry
 * Contains the Amazon Resource Name (ARN) for an IAM OpenID Connect provider.
**/
public class OpenIdConnectProviderListEntry {
    public String arn;
    public OpenIdConnectProviderListEntry withArn(String arn) {
        this.arn = arn;
        return this;
    }
}