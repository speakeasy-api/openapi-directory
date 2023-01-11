package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsResetTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=client_id")
    public String clientId;
    public AppsResetTokenPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
}