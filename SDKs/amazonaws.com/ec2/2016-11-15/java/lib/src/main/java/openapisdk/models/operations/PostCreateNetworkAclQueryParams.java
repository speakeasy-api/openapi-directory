package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateNetworkAclQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateNetworkAclActionEnum action;
    public PostCreateNetworkAclQueryParams withAction(PostCreateNetworkAclActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateNetworkAclVersionEnum version;
    public PostCreateNetworkAclQueryParams withVersion(PostCreateNetworkAclVersionEnum version) {
        this.version = version;
        return this;
    }
}