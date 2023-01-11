package openapisdk.models.operations;



public class GetSettingValuesResponse {
    public openapisdk.models.shared.ConfigSettingValuesModel configSettingValuesModel;
    public GetSettingValuesResponse withConfigSettingValuesModel(openapisdk.models.shared.ConfigSettingValuesModel configSettingValuesModel) {
        this.configSettingValuesModel = configSettingValuesModel;
        return this;
    }
    public String contentType;
    public GetSettingValuesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSettingValuesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}