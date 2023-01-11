package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplaceSettingValueBySdkkeyRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.UpdateSettingValueModel updateSettingValueModel;
    public ReplaceSettingValueBySdkkeyRequests withUpdateSettingValueModel(openapisdk.models.shared.UpdateSettingValueModel updateSettingValueModel) {
        this.updateSettingValueModel = updateSettingValueModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateSettingValueModel updateSettingValueModel1;
    public ReplaceSettingValueBySdkkeyRequests withUpdateSettingValueModel1(openapisdk.models.shared.UpdateSettingValueModel updateSettingValueModel1) {
        this.updateSettingValueModel1 = updateSettingValueModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.UpdateSettingValueModel updateSettingValueModel2;
    public ReplaceSettingValueBySdkkeyRequests withUpdateSettingValueModel2(openapisdk.models.shared.UpdateSettingValueModel updateSettingValueModel2) {
        this.updateSettingValueModel2 = updateSettingValueModel2;
        return this;
    }
}