package openapisdk.models.operations;



public class UpdateSettingValueBySdkkeyResponse {
    public String contentType;
    public UpdateSettingValueBySdkkeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SettingValueModel settingValueModel;
    public UpdateSettingValueBySdkkeyResponse withSettingValueModel(openapisdk.models.shared.SettingValueModel settingValueModel) {
        this.settingValueModel = settingValueModel;
        return this;
    }
    public openapisdk.models.shared.SettingValueModelHaljson settingValueModelHaljson;
    public UpdateSettingValueBySdkkeyResponse withSettingValueModelHaljson(openapisdk.models.shared.SettingValueModelHaljson settingValueModelHaljson) {
        this.settingValueModelHaljson = settingValueModelHaljson;
        return this;
    }
    public Long statusCode;
    public UpdateSettingValueBySdkkeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}