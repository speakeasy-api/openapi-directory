package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteNetworkAclEntryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteNetworkAclEntryActionEnum action;
    public PostDeleteNetworkAclEntryQueryParams withAction(PostDeleteNetworkAclEntryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteNetworkAclEntryVersionEnum version;
    public PostDeleteNetworkAclEntryQueryParams withVersion(PostDeleteNetworkAclEntryVersionEnum version) {
        this.version = version;
        return this;
    }
}