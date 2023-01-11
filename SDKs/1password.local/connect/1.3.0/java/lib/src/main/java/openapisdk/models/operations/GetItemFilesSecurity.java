package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetItemFilesSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer")
    public openapisdk.models.shared.SchemeConnectToken connectToken;
    public GetItemFilesSecurity withConnectToken(openapisdk.models.shared.SchemeConnectToken connectToken) {
        this.connectToken = connectToken;
        return this;
    }
}