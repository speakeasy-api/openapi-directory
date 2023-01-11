package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSitePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SiteId")
    public String siteId;
    public DeleteSitePathParams withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}