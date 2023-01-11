package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDropletLoad5MetricsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public String end;
    public GetDropletLoad5MetricsQueryParams withEnd(String end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=host_id")
    public String hostId;
    public GetDropletLoad5MetricsQueryParams withHostId(String hostId) {
        this.hostId = hostId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;
    public GetDropletLoad5MetricsQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
}