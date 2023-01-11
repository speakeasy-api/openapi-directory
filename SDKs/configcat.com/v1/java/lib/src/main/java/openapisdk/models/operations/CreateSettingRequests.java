package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSettingRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.CreateSettingModel createSettingModel;
    public CreateSettingRequests withCreateSettingModel(openapisdk.models.shared.CreateSettingModel createSettingModel) {
        this.createSettingModel = createSettingModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateSettingModel createSettingModel1;
    public CreateSettingRequests withCreateSettingModel1(openapisdk.models.shared.CreateSettingModel createSettingModel1) {
        this.createSettingModel1 = createSettingModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.CreateSettingModel createSettingModel2;
    public CreateSettingRequests withCreateSettingModel2(openapisdk.models.shared.CreateSettingModel createSettingModel2) {
        this.createSettingModel2 = createSettingModel2;
        return this;
    }
}