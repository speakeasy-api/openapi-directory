package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReplaceNetworkAclAssociationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostReplaceNetworkAclAssociationActionEnum action;
    public PostReplaceNetworkAclAssociationQueryParams withAction(PostReplaceNetworkAclAssociationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostReplaceNetworkAclAssociationVersionEnum version;
    public PostReplaceNetworkAclAssociationQueryParams withVersion(PostReplaceNetworkAclAssociationVersionEnum version) {
        this.version = version;
        return this;
    }
}