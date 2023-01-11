package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsDeleteAuthorizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=client_id")
    public String clientId;
    public AppsDeleteAuthorizationPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
}