package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OauthAuthorizationsGetGrantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=grant_id")
    public Long grantId;
    public OauthAuthorizationsGetGrantPathParams withGrantId(Long grantId) {
        this.grantId = grantId;
        return this;
    }
}