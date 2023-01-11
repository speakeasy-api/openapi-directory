package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectionsRevokeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=redirect_uri")
    public String redirectUri;
    public ConnectionsRevokeQueryParams withRedirectUri(String redirectUri) {
        this.redirectUri = redirectUri;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public ConnectionsRevokeQueryParams withState(String state) {
        this.state = state;
        return this;
    }
}