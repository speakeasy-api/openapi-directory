package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDropletFilesystemFreeMetricsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public String end;
    public GetDropletFilesystemFreeMetricsQueryParams withEnd(String end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=host_id")
    public String hostId;
    public GetDropletFilesystemFreeMetricsQueryParams withHostId(String hostId) {
        this.hostId = hostId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;
    public GetDropletFilesystemFreeMetricsQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
}