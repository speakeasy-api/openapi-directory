package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDropletLoad1MetricsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public String end;
    public GetDropletLoad1MetricsQueryParams withEnd(String end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=host_id")
    public String hostId;
    public GetDropletLoad1MetricsQueryParams withHostId(String hostId) {
        this.hostId = hostId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;
    public GetDropletLoad1MetricsQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
}