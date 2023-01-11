package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableVpcClassicLinkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisableVpcClassicLinkActionEnum action;
    public PostDisableVpcClassicLinkQueryParams withAction(PostDisableVpcClassicLinkActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisableVpcClassicLinkVersionEnum version;
    public PostDisableVpcClassicLinkQueryParams withVersion(PostDisableVpcClassicLinkVersionEnum version) {
        this.version = version;
        return this;
    }
}