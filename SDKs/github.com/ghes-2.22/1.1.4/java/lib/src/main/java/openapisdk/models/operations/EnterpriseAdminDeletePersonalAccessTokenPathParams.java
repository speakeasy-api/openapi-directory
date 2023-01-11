package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminDeletePersonalAccessTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=token_id")
    public Long tokenId;
    public EnterpriseAdminDeletePersonalAccessTokenPathParams withTokenId(Long tokenId) {
        this.tokenId = tokenId;
        return this;
    }
}