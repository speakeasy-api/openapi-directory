package openapisdk.models.operations;



public class UpdateSettingValueResponse {
    public String contentType;
    public UpdateSettingValueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SettingValueModel settingValueModel;
    public UpdateSettingValueResponse withSettingValueModel(openapisdk.models.shared.SettingValueModel settingValueModel) {
        this.settingValueModel = settingValueModel;
        return this;
    }
    public openapisdk.models.shared.SettingValueModelHaljson settingValueModelHaljson;
    public UpdateSettingValueResponse withSettingValueModelHaljson(openapisdk.models.shared.SettingValueModelHaljson settingValueModelHaljson) {
        this.settingValueModelHaljson = settingValueModelHaljson;
        return this;
    }
    public Long statusCode;
    public UpdateSettingValueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}