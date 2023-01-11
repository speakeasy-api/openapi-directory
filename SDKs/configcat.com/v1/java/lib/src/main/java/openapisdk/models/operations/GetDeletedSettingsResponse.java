package openapisdk.models.operations;



public class GetDeletedSettingsResponse {
    public String contentType;
    public GetDeletedSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SettingModelHaljson[] settingModelHaljsons;
    public GetDeletedSettingsResponse withSettingModelHaljsons(openapisdk.models.shared.SettingModelHaljson[] settingModelHaljsons) {
        this.settingModelHaljsons = settingModelHaljsons;
        return this;
    }
    public openapisdk.models.shared.SettingModel[] settingModels;
    public GetDeletedSettingsResponse withSettingModels(openapisdk.models.shared.SettingModel[] settingModels) {
        this.settingModels = settingModels;
        return this;
    }
    public Long statusCode;
    public GetDeletedSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}