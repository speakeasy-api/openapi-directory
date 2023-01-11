package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsScopeTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=client_id")
    public String clientId;
    public AppsScopeTokenPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
}