package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVpcLinkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vpcLinkId")
    public String vpcLinkId;
    public UpdateVpcLinkPathParams withVpcLinkId(String vpcLinkId) {
        this.vpcLinkId = vpcLinkId;
        return this;
    }
}