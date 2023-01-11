package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDropletMemoryCachedMetricsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public String end;
    public GetDropletMemoryCachedMetricsQueryParams withEnd(String end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=host_id")
    public String hostId;
    public GetDropletMemoryCachedMetricsQueryParams withHostId(String hostId) {
        this.hostId = hostId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;
    public GetDropletMemoryCachedMetricsQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
}