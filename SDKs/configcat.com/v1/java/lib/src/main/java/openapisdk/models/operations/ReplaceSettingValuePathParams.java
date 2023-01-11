package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplaceSettingValuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environmentId")
    public String environmentId;
    public ReplaceSettingValuePathParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=settingId")
    public Integer settingId;
    public ReplaceSettingValuePathParams withSettingId(Integer settingId) {
        this.settingId = settingId;
        return this;
    }
}