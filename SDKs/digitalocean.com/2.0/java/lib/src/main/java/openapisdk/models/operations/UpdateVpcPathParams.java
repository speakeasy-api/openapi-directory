package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVpcPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vpc_id")
    public String vpcId;
    public UpdateVpcPathParams withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}