package openapisdk.models.operations;



public class GetSettingValueResponse {
    public String contentType;
    public GetSettingValueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SettingValueModel settingValueModel;
    public GetSettingValueResponse withSettingValueModel(openapisdk.models.shared.SettingValueModel settingValueModel) {
        this.settingValueModel = settingValueModel;
        return this;
    }
    public openapisdk.models.shared.SettingValueModelHaljson settingValueModelHaljson;
    public GetSettingValueResponse withSettingValueModelHaljson(openapisdk.models.shared.SettingValueModelHaljson settingValueModelHaljson) {
        this.settingValueModelHaljson = settingValueModelHaljson;
        return this;
    }
    public Long statusCode;
    public GetSettingValueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}