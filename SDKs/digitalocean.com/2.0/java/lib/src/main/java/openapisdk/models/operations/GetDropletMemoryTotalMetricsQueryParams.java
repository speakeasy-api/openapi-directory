package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDropletMemoryTotalMetricsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public String end;
    public GetDropletMemoryTotalMetricsQueryParams withEnd(String end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=host_id")
    public String hostId;
    public GetDropletMemoryTotalMetricsQueryParams withHostId(String hostId) {
        this.hostId = hostId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;
    public GetDropletMemoryTotalMetricsQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
}