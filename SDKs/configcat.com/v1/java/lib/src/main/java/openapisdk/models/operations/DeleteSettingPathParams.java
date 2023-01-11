package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSettingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=settingId")
    public Integer settingId;
    public DeleteSettingPathParams withSettingId(Integer settingId) {
        this.settingId = settingId;
        return this;
    }
}