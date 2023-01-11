package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReplaceNetworkAclEntryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostReplaceNetworkAclEntryActionEnum action;
    public PostReplaceNetworkAclEntryQueryParams withAction(PostReplaceNetworkAclEntryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostReplaceNetworkAclEntryVersionEnum version;
    public PostReplaceNetworkAclEntryQueryParams withVersion(PostReplaceNetworkAclEntryVersionEnum version) {
        this.version = version;
        return this;
    }
}