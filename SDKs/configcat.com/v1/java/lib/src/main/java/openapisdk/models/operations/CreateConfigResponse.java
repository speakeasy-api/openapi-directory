package openapisdk.models.operations;



public class CreateConfigResponse {
    public openapisdk.models.shared.ConfigModel configModel;
    public CreateConfigResponse withConfigModel(openapisdk.models.shared.ConfigModel configModel) {
        this.configModel = configModel;
        return this;
    }
    public openapisdk.models.shared.ConfigModelHaljson configModelHaljson;
    public CreateConfigResponse withConfigModelHaljson(openapisdk.models.shared.ConfigModelHaljson configModelHaljson) {
        this.configModelHaljson = configModelHaljson;
        return this;
    }
    public String contentType;
    public CreateConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}