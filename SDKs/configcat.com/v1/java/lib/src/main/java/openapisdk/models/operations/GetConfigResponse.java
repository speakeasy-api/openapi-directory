package openapisdk.models.operations;



public class GetConfigResponse {
    public openapisdk.models.shared.ConfigModel configModel;
    public GetConfigResponse withConfigModel(openapisdk.models.shared.ConfigModel configModel) {
        this.configModel = configModel;
        return this;
    }
    public openapisdk.models.shared.ConfigModelHaljson configModelHaljson;
    public GetConfigResponse withConfigModelHaljson(openapisdk.models.shared.ConfigModelHaljson configModelHaljson) {
        this.configModelHaljson = configModelHaljson;
        return this;
    }
    public String contentType;
    public GetConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}