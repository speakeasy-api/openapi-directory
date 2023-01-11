package openapisdk.models.operations;



public class UpdateEnvironmentResponse {
    public String contentType;
    public UpdateEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EnvironmentModel environmentModel;
    public UpdateEnvironmentResponse withEnvironmentModel(openapisdk.models.shared.EnvironmentModel environmentModel) {
        this.environmentModel = environmentModel;
        return this;
    }
    public openapisdk.models.shared.EnvironmentModelHaljson environmentModelHaljson;
    public UpdateEnvironmentResponse withEnvironmentModelHaljson(openapisdk.models.shared.EnvironmentModelHaljson environmentModelHaljson) {
        this.environmentModelHaljson = environmentModelHaljson;
        return this;
    }
    public Long statusCode;
    public UpdateEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}