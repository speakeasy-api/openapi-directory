package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class KpIsForDailyAppUninstallsByDateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=app_id")
    public String appId;
    public KpIsForDailyAppUninstallsByDateQueryParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ending_at")
    public String endingAt;
    public KpIsForDailyAppUninstallsByDateQueryParams withEndingAt(String endingAt) {
        this.endingAt = endingAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=length")
    public String length;
    public KpIsForDailyAppUninstallsByDateQueryParams withLength(String length) {
        this.length = length;
        return this;
    }
}