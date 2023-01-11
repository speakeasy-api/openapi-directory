package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSettingValueBySdkkeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=settingKeyOrId")
    public String settingKeyOrId;
    public GetSettingValueBySdkkeyPathParams withSettingKeyOrId(String settingKeyOrId) {
        this.settingKeyOrId = settingKeyOrId;
        return this;
    }
}