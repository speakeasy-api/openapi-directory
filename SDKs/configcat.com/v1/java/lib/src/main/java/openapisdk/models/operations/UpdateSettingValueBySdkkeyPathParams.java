package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSettingValueBySdkkeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=settingKeyOrId")
    public String settingKeyOrId;
    public UpdateSettingValueBySdkkeyPathParams withSettingKeyOrId(String settingKeyOrId) {
        this.settingKeyOrId = settingKeyOrId;
        return this;
    }
}