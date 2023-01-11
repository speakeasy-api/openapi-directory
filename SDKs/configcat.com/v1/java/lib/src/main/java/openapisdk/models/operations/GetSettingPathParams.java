package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSettingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=settingId")
    public Integer settingId;
    public GetSettingPathParams withSettingId(Integer settingId) {
        this.settingId = settingId;
        return this;
    }
}