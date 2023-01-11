package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteAlarmsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteAlarmsActionEnum action;
    public PostDeleteAlarmsQueryParams withAction(PostDeleteAlarmsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteAlarmsVersionEnum version;
    public PostDeleteAlarmsQueryParams withVersion(PostDeleteAlarmsVersionEnum version) {
        this.version = version;
        return this;
    }
}