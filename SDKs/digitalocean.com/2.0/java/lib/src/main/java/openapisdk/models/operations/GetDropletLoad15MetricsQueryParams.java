package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDropletLoad15MetricsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public String end;
    public GetDropletLoad15MetricsQueryParams withEnd(String end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=host_id")
    public String hostId;
    public GetDropletLoad15MetricsQueryParams withHostId(String hostId) {
        this.hostId = hostId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;
    public GetDropletLoad15MetricsQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
}