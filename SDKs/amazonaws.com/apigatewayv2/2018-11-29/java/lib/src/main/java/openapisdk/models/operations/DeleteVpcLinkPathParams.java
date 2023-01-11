package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVpcLinkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vpcLinkId")
    public String vpcLinkId;
    public DeleteVpcLinkPathParams withVpcLinkId(String vpcLinkId) {
        this.vpcLinkId = vpcLinkId;
        return this;
    }
}