package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDetailsOfFileByIdSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer")
    public openapisdk.models.shared.SchemeConnectToken connectToken;
    public GetDetailsOfFileByIdSecurity withConnectToken(openapisdk.models.shared.SchemeConnectToken connectToken) {
        this.connectToken = connectToken;
        return this;
    }
}