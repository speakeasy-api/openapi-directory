package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchVpcPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vpc_id")
    public String vpcId;
    public PatchVpcPathParams withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}