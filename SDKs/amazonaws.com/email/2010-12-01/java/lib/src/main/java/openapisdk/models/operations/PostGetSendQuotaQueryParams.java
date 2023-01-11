package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetSendQuotaQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetSendQuotaActionEnum action;
    public PostGetSendQuotaQueryParams withAction(PostGetSendQuotaActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetSendQuotaVersionEnum version;
    public PostGetSendQuotaQueryParams withVersion(PostGetSendQuotaVersionEnum version) {
        this.version = version;
        return this;
    }
}