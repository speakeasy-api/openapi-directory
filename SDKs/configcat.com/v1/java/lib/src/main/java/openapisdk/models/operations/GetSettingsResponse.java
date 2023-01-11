package openapisdk.models.operations;



public class GetSettingsResponse {
    public String contentType;
    public GetSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SettingModelHaljson[] settingModelHaljsons;
    public GetSettingsResponse withSettingModelHaljsons(openapisdk.models.shared.SettingModelHaljson[] settingModelHaljsons) {
        this.settingModelHaljsons = settingModelHaljsons;
        return this;
    }
    public openapisdk.models.shared.SettingModel[] settingModels;
    public GetSettingsResponse withSettingModels(openapisdk.models.shared.SettingModel[] settingModels) {
        this.settingModels = settingModels;
        return this;
    }
    public Long statusCode;
    public GetSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}