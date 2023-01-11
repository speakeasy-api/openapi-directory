package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayoutSummaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetPayoutSummaryQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
}