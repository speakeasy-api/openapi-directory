package openapisdk.models.operations;



public class GetConfigsResponse {
    public openapisdk.models.shared.ConfigModelHaljson[] configModelHaljsons;
    public GetConfigsResponse withConfigModelHaljsons(openapisdk.models.shared.ConfigModelHaljson[] configModelHaljsons) {
        this.configModelHaljsons = configModelHaljsons;
        return this;
    }
    public openapisdk.models.shared.ConfigModel[] configModels;
    public GetConfigsResponse withConfigModels(openapisdk.models.shared.ConfigModel[] configModels) {
        this.configModels = configModels;
        return this;
    }
    public String contentType;
    public GetConfigsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetConfigsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}