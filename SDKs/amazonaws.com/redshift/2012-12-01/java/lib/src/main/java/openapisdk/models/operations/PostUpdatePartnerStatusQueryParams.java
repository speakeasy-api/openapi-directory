package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdatePartnerStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdatePartnerStatusActionEnum action;
    public PostUpdatePartnerStatusQueryParams withAction(PostUpdatePartnerStatusActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdatePartnerStatusVersionEnum version;
    public PostUpdatePartnerStatusQueryParams withVersion(PostUpdatePartnerStatusVersionEnum version) {
        this.version = version;
        return this;
    }
}