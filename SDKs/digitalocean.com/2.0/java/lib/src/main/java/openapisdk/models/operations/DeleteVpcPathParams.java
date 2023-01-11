package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVpcPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vpc_id")
    public String vpcId;
    public DeleteVpcPathParams withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}