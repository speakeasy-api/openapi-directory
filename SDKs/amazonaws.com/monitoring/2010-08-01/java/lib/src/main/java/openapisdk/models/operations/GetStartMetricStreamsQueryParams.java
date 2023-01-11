package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStartMetricStreamsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetStartMetricStreamsActionEnum action;
    public GetStartMetricStreamsQueryParams withAction(GetStartMetricStreamsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Names")
    public String[] names;
    public GetStartMetricStreamsQueryParams withNames(String[] names) {
        this.names = names;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetStartMetricStreamsVersionEnum version;
    public GetStartMetricStreamsQueryParams withVersion(GetStartMetricStreamsVersionEnum version) {
        this.version = version;
        return this;
    }
}