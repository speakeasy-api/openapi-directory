package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResendInvitationsForSharePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shareId")
    public Long shareId;
    public ResendInvitationsForSharePathParams withShareId(Long shareId) {
        this.shareId = shareId;
        return this;
    }
}