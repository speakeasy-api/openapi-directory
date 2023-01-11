package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateTrunkInterfaceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisassociateTrunkInterfaceActionEnum action;
    public PostDisassociateTrunkInterfaceQueryParams withAction(PostDisassociateTrunkInterfaceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisassociateTrunkInterfaceVersionEnum version;
    public PostDisassociateTrunkInterfaceQueryParams withVersion(PostDisassociateTrunkInterfaceVersionEnum version) {
        this.version = version;
        return this;
    }
}