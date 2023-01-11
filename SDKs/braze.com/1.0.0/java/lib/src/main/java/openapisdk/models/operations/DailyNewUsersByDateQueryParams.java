package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DailyNewUsersByDateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=app_id")
    public String appId;
    public DailyNewUsersByDateQueryParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ending_at")
    public String endingAt;
    public DailyNewUsersByDateQueryParams withEndingAt(String endingAt) {
        this.endingAt = endingAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=length")
    public String length;
    public DailyNewUsersByDateQueryParams withLength(String length) {
        this.length = length;
        return this;
    }
}