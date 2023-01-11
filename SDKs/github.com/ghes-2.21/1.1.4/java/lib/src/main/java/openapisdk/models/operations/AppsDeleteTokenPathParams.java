package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsDeleteTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=client_id")
    public String clientId;
    public AppsDeleteTokenPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
}