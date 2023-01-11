package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableVpcClassicLinkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostEnableVpcClassicLinkActionEnum action;
    public PostEnableVpcClassicLinkQueryParams withAction(PostEnableVpcClassicLinkActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostEnableVpcClassicLinkVersionEnum version;
    public PostEnableVpcClassicLinkQueryParams withVersion(PostEnableVpcClassicLinkVersionEnum version) {
        this.version = version;
        return this;
    }
}