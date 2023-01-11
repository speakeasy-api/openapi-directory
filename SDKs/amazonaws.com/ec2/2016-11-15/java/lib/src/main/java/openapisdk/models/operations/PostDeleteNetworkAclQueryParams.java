package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteNetworkAclQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteNetworkAclActionEnum action;
    public PostDeleteNetworkAclQueryParams withAction(PostDeleteNetworkAclActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteNetworkAclVersionEnum version;
    public PostDeleteNetworkAclQueryParams withVersion(PostDeleteNetworkAclVersionEnum version) {
        this.version = version;
        return this;
    }
}