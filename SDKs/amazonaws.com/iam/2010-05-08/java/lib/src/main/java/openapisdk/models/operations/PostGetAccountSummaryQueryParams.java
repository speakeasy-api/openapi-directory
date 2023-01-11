package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetAccountSummaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetAccountSummaryActionEnum action;
    public PostGetAccountSummaryQueryParams withAction(PostGetAccountSummaryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetAccountSummaryVersionEnum version;
    public PostGetAccountSummaryQueryParams withVersion(PostGetAccountSummaryVersionEnum version) {
        this.version = version;
        return this;
    }
}