package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSettingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=settingId")
    public Integer settingId;
    public UpdateSettingPathParams withSettingId(Integer settingId) {
        this.settingId = settingId;
        return this;
    }
}