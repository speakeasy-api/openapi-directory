package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePortalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portalId")
    public String portalId;
    public DescribePortalPathParams withPortalId(String portalId) {
        this.portalId = portalId;
        return this;
    }
}