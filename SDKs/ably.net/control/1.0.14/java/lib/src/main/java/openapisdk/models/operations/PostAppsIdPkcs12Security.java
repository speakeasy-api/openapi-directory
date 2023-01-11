package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAppsIdPkcs12Security {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer")
    public openapisdk.models.shared.SchemeBearerAuth bearerAuth;
    public PostAppsIdPkcs12Security withBearerAuth(openapisdk.models.shared.SchemeBearerAuth bearerAuth) {
        this.bearerAuth = bearerAuth;
        return this;
    }
}