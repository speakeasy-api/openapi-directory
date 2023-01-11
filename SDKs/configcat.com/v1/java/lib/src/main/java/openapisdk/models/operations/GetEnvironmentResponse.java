package openapisdk.models.operations;



public class GetEnvironmentResponse {
    public String contentType;
    public GetEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EnvironmentModel environmentModel;
    public GetEnvironmentResponse withEnvironmentModel(openapisdk.models.shared.EnvironmentModel environmentModel) {
        this.environmentModel = environmentModel;
        return this;
    }
    public openapisdk.models.shared.EnvironmentModelHaljson environmentModelHaljson;
    public GetEnvironmentResponse withEnvironmentModelHaljson(openapisdk.models.shared.EnvironmentModelHaljson environmentModelHaljson) {
        this.environmentModelHaljson = environmentModelHaljson;
        return this;
    }
    public Long statusCode;
    public GetEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}