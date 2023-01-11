package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeletePartnerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeletePartnerActionEnum action;
    public PostDeletePartnerQueryParams withAction(PostDeletePartnerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeletePartnerVersionEnum version;
    public PostDeletePartnerQueryParams withVersion(PostDeletePartnerVersionEnum version) {
        this.version = version;
        return this;
    }
}