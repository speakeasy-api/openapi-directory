package openapisdk.models.operations;



public class ReplaceSettingValueResponse {
    public String contentType;
    public ReplaceSettingValueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SettingValueModel settingValueModel;
    public ReplaceSettingValueResponse withSettingValueModel(openapisdk.models.shared.SettingValueModel settingValueModel) {
        this.settingValueModel = settingValueModel;
        return this;
    }
    public openapisdk.models.shared.SettingValueModelHaljson settingValueModelHaljson;
    public ReplaceSettingValueResponse withSettingValueModelHaljson(openapisdk.models.shared.SettingValueModelHaljson settingValueModelHaljson) {
        this.settingValueModelHaljson = settingValueModelHaljson;
        return this;
    }
    public Long statusCode;
    public ReplaceSettingValueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}