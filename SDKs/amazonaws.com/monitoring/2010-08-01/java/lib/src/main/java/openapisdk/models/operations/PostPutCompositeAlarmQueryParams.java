package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutCompositeAlarmQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPutCompositeAlarmActionEnum action;
    public PostPutCompositeAlarmQueryParams withAction(PostPutCompositeAlarmActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPutCompositeAlarmVersionEnum version;
    public PostPutCompositeAlarmQueryParams withVersion(PostPutCompositeAlarmVersionEnum version) {
        this.version = version;
        return this;
    }
}