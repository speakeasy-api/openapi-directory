package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDropletBandwidthMetricsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetDropletBandwidthMetricsDirectionEnum direction;
    public GetDropletBandwidthMetricsQueryParams withDirection(GetDropletBandwidthMetricsDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public String end;
    public GetDropletBandwidthMetricsQueryParams withEnd(String end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=host_id")
    public String hostId;
    public GetDropletBandwidthMetricsQueryParams withHostId(String hostId) {
        this.hostId = hostId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interface")
    public GetDropletBandwidthMetricsInterfaceEnum interface_;
    public GetDropletBandwidthMetricsQueryParams withInterface(GetDropletBandwidthMetricsInterfaceEnum interface_) {
        this.interface_ = interface_;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;
    public GetDropletBandwidthMetricsQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
}