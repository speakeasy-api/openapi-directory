package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePortalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portalId")
    public String portalId;
    public DeletePortalPathParams withPortalId(String portalId) {
        this.portalId = portalId;
        return this;
    }
}