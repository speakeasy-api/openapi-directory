package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetMetricStreamQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetMetricStreamActionEnum action;
    public GetGetMetricStreamQueryParams withAction(GetGetMetricStreamActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Name")
    public String name;
    public GetGetMetricStreamQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetMetricStreamVersionEnum version;
    public GetGetMetricStreamQueryParams withVersion(GetGetMetricStreamVersionEnum version) {
        this.version = version;
        return this;
    }
}