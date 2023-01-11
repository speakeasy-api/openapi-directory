package openapisdk.models.operations;



public class GetSettingsByTagResponse {
    public String contentType;
    public GetSettingsByTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SettingModelHaljson[] settingModelHaljsons;
    public GetSettingsByTagResponse withSettingModelHaljsons(openapisdk.models.shared.SettingModelHaljson[] settingModelHaljsons) {
        this.settingModelHaljsons = settingModelHaljsons;
        return this;
    }
    public openapisdk.models.shared.SettingModel[] settingModels;
    public GetSettingsByTagResponse withSettingModels(openapisdk.models.shared.SettingModel[] settingModels) {
        this.settingModels = settingModels;
        return this;
    }
    public Long statusCode;
    public GetSettingsByTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}