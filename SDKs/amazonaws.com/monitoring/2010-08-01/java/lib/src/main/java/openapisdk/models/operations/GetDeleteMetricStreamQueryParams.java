package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteMetricStreamQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteMetricStreamActionEnum action;
    public GetDeleteMetricStreamQueryParams withAction(GetDeleteMetricStreamActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Name")
    public String name;
    public GetDeleteMetricStreamQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteMetricStreamVersionEnum version;
    public GetDeleteMetricStreamQueryParams withVersion(GetDeleteMetricStreamVersionEnum version) {
        this.version = version;
        return this;
    }
}