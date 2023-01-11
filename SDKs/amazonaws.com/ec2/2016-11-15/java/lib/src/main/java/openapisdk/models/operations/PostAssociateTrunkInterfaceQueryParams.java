package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateTrunkInterfaceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAssociateTrunkInterfaceActionEnum action;
    public PostAssociateTrunkInterfaceQueryParams withAction(PostAssociateTrunkInterfaceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAssociateTrunkInterfaceVersionEnum version;
    public PostAssociateTrunkInterfaceQueryParams withVersion(PostAssociateTrunkInterfaceVersionEnum version) {
        this.version = version;
        return this;
    }
}