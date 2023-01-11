package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DailyActiveUsersByDateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=app_id")
    public String appId;
    public DailyActiveUsersByDateQueryParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ending_at")
    public String endingAt;
    public DailyActiveUsersByDateQueryParams withEndingAt(String endingAt) {
        this.endingAt = endingAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=length")
    public String length;
    public DailyActiveUsersByDateQueryParams withLength(String length) {
        this.length = length;
        return this;
    }
}