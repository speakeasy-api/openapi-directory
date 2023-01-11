package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OauthAuthorizationsDeleteGrantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=grant_id")
    public Long grantId;
    public OauthAuthorizationsDeleteGrantPathParams withGrantId(Long grantId) {
        this.grantId = grantId;
        return this;
    }
}