package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetSendQuotaQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetSendQuotaActionEnum action;
    public GetGetSendQuotaQueryParams withAction(GetGetSendQuotaActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetSendQuotaVersionEnum version;
    public GetGetSendQuotaQueryParams withVersion(GetGetSendQuotaVersionEnum version) {
        this.version = version;
        return this;
    }
}