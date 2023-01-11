package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsCheckTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=client_id")
    public String clientId;
    public AppsCheckTokenPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
}