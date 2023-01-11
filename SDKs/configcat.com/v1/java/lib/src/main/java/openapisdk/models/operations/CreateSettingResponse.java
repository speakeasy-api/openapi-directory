package openapisdk.models.operations;



public class CreateSettingResponse {
    public String contentType;
    public CreateSettingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SettingModel settingModel;
    public CreateSettingResponse withSettingModel(openapisdk.models.shared.SettingModel settingModel) {
        this.settingModel = settingModel;
        return this;
    }
    public openapisdk.models.shared.SettingModelHaljson settingModelHaljson;
    public CreateSettingResponse withSettingModelHaljson(openapisdk.models.shared.SettingModelHaljson settingModelHaljson) {
        this.settingModelHaljson = settingModelHaljson;
        return this;
    }
    public Long statusCode;
    public CreateSettingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}