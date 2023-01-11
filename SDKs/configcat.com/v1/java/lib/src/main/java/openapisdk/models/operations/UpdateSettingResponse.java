package openapisdk.models.operations;



public class UpdateSettingResponse {
    public String contentType;
    public UpdateSettingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SettingModel settingModel;
    public UpdateSettingResponse withSettingModel(openapisdk.models.shared.SettingModel settingModel) {
        this.settingModel = settingModel;
        return this;
    }
    public openapisdk.models.shared.SettingModelHaljson settingModelHaljson;
    public UpdateSettingResponse withSettingModelHaljson(openapisdk.models.shared.SettingModelHaljson settingModelHaljson) {
        this.settingModelHaljson = settingModelHaljson;
        return this;
    }
    public Long statusCode;
    public UpdateSettingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}