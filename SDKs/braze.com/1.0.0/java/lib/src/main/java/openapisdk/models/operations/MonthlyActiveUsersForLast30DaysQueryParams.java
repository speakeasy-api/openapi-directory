package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonthlyActiveUsersForLast30DaysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=app_id")
    public String appId;
    public MonthlyActiveUsersForLast30DaysQueryParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ending_at")
    public String endingAt;
    public MonthlyActiveUsersForLast30DaysQueryParams withEndingAt(String endingAt) {
        this.endingAt = endingAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=length")
    public String length;
    public MonthlyActiveUsersForLast30DaysQueryParams withLength(String length) {
        this.length = length;
        return this;
    }
}