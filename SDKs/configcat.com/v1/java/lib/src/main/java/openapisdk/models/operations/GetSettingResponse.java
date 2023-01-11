package openapisdk.models.operations;



public class GetSettingResponse {
    public String contentType;
    public GetSettingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SettingModel settingModel;
    public GetSettingResponse withSettingModel(openapisdk.models.shared.SettingModel settingModel) {
        this.settingModel = settingModel;
        return this;
    }
    public openapisdk.models.shared.SettingModelHaljson settingModelHaljson;
    public GetSettingResponse withSettingModelHaljson(openapisdk.models.shared.SettingModelHaljson settingModelHaljson) {
        this.settingModelHaljson = settingModelHaljson;
        return this;
    }
    public Long statusCode;
    public GetSettingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}