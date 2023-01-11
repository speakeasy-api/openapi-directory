package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMonitorInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostMonitorInstancesActionEnum action;
    public PostMonitorInstancesQueryParams withAction(PostMonitorInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostMonitorInstancesVersionEnum version;
    public PostMonitorInstancesQueryParams withVersion(PostMonitorInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}