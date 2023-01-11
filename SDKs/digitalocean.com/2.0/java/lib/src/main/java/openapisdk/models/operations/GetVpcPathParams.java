package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVpcPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vpc_id")
    public String vpcId;
    public GetVpcPathParams withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}