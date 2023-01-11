package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateNetworkAclEntryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateNetworkAclEntryActionEnum action;
    public PostCreateNetworkAclEntryQueryParams withAction(PostCreateNetworkAclEntryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateNetworkAclEntryVersionEnum version;
    public PostCreateNetworkAclEntryQueryParams withVersion(PostCreateNetworkAclEntryVersionEnum version) {
        this.version = version;
        return this;
    }
}