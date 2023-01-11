package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStopMetricStreamsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetStopMetricStreamsActionEnum action;
    public GetStopMetricStreamsQueryParams withAction(GetStopMetricStreamsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Names")
    public String[] names;
    public GetStopMetricStreamsQueryParams withNames(String[] names) {
        this.names = names;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetStopMetricStreamsVersionEnum version;
    public GetStopMetricStreamsQueryParams withVersion(GetStopMetricStreamsVersionEnum version) {
        this.version = version;
        return this;
    }
}