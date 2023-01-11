package openapisdk.models.operations;



public class UpdateConfigResponse {
    public openapisdk.models.shared.ConfigModel configModel;
    public UpdateConfigResponse withConfigModel(openapisdk.models.shared.ConfigModel configModel) {
        this.configModel = configModel;
        return this;
    }
    public openapisdk.models.shared.ConfigModelHaljson configModelHaljson;
    public UpdateConfigResponse withConfigModelHaljson(openapisdk.models.shared.ConfigModelHaljson configModelHaljson) {
        this.configModelHaljson = configModelHaljson;
        return this;
    }
    public String contentType;
    public UpdateConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}