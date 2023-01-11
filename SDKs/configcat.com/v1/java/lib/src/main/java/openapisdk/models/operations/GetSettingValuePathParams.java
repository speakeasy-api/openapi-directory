package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSettingValuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environmentId")
    public String environmentId;
    public GetSettingValuePathParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=settingId")
    public Integer settingId;
    public GetSettingValuePathParams withSettingId(Integer settingId) {
        this.settingId = settingId;
        return this;
    }
}