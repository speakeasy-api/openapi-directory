package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDropletFilesystemSizeMetricsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public String end;
    public GetDropletFilesystemSizeMetricsQueryParams withEnd(String end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=host_id")
    public String hostId;
    public GetDropletFilesystemSizeMetricsQueryParams withHostId(String hostId) {
        this.hostId = hostId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;
    public GetDropletFilesystemSizeMetricsQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
}