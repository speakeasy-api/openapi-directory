package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCharginglocationsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeUserAccessToken userAccessToken;
    public GetCharginglocationsSecurity withUserAccessToken(openapisdk.models.shared.SchemeUserAccessToken userAccessToken) {
        this.userAccessToken = userAccessToken;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeUserAccessToken userAccessToken1;
    public GetCharginglocationsSecurity withUserAccessToken1(openapisdk.models.shared.SchemeUserAccessToken userAccessToken1) {
        this.userAccessToken1 = userAccessToken1;
        return this;
    }
}