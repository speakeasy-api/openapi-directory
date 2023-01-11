package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddPartnerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAddPartnerActionEnum action;
    public PostAddPartnerQueryParams withAction(PostAddPartnerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAddPartnerVersionEnum version;
    public PostAddPartnerQueryParams withVersion(PostAddPartnerVersionEnum version) {
        this.version = version;
        return this;
    }
}