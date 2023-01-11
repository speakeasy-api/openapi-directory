package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePortalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portalId")
    public String portalId;
    public UpdatePortalPathParams withPortalId(String portalId) {
        this.portalId = portalId;
        return this;
    }
}