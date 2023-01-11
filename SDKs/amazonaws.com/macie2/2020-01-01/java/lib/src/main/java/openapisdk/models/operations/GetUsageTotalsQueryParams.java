package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsageTotalsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeRange")
    public String timeRange;
    public GetUsageTotalsQueryParams withTimeRange(String timeRange) {
        this.timeRange = timeRange;
        return this;
    }
}