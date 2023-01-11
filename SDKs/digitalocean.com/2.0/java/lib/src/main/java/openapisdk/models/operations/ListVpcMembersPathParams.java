package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListVpcMembersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vpc_id")
    public String vpcId;
    public ListVpcMembersPathParams withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}