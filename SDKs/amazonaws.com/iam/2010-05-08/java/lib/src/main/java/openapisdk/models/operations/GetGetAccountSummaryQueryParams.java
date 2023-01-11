package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetAccountSummaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetAccountSummaryActionEnum action;
    public GetGetAccountSummaryQueryParams withAction(GetGetAccountSummaryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetAccountSummaryVersionEnum version;
    public GetGetAccountSummaryQueryParams withVersion(GetGetAccountSummaryVersionEnum version) {
        this.version = version;
        return this;
    }
}