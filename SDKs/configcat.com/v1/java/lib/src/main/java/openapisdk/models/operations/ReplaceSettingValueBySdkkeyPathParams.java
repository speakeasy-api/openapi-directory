package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplaceSettingValueBySdkkeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=settingKeyOrId")
    public String settingKeyOrId;
    public ReplaceSettingValueBySdkkeyPathParams withSettingKeyOrId(String settingKeyOrId) {
        this.settingKeyOrId = settingKeyOrId;
        return this;
    }
}