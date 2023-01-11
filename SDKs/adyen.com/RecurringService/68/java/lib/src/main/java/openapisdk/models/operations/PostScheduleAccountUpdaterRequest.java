package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostScheduleAccountUpdaterRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostScheduleAccountUpdaterRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostScheduleAccountUpdaterSecurity security;
    public PostScheduleAccountUpdaterRequest withSecurity(PostScheduleAccountUpdaterSecurity security) {
        this.security = security;
        return this;
    }
}