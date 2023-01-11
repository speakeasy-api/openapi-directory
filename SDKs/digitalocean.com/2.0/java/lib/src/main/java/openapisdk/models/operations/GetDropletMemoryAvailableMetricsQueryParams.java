package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDropletMemoryAvailableMetricsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public String end;
    public GetDropletMemoryAvailableMetricsQueryParams withEnd(String end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=host_id")
    public String hostId;
    public GetDropletMemoryAvailableMetricsQueryParams withHostId(String hostId) {
        this.hostId = hostId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;
    public GetDropletMemoryAvailableMetricsQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
}