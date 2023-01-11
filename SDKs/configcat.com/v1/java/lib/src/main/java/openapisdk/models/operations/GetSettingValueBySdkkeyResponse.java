package openapisdk.models.operations;



public class GetSettingValueBySdkkeyResponse {
    public String contentType;
    public GetSettingValueBySdkkeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SettingValueModel settingValueModel;
    public GetSettingValueBySdkkeyResponse withSettingValueModel(openapisdk.models.shared.SettingValueModel settingValueModel) {
        this.settingValueModel = settingValueModel;
        return this;
    }
    public openapisdk.models.shared.SettingValueModelHaljson settingValueModelHaljson;
    public GetSettingValueBySdkkeyResponse withSettingValueModelHaljson(openapisdk.models.shared.SettingValueModelHaljson settingValueModelHaljson) {
        this.settingValueModelHaljson = settingValueModelHaljson;
        return this;
    }
    public Long statusCode;
    public GetSettingValueBySdkkeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}