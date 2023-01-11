package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVpcLinkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vpcLinkId")
    public String vpcLinkId;
    public GetVpcLinkPathParams withVpcLinkId(String vpcLinkId) {
        this.vpcLinkId = vpcLinkId;
        return this;
    }
}