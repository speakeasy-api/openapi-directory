package openapisdk.models.operations;



public class CreateEnvironmentResponse {
    public String contentType;
    public CreateEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EnvironmentModel environmentModel;
    public CreateEnvironmentResponse withEnvironmentModel(openapisdk.models.shared.EnvironmentModel environmentModel) {
        this.environmentModel = environmentModel;
        return this;
    }
    public openapisdk.models.shared.EnvironmentModelHaljson environmentModelHaljson;
    public CreateEnvironmentResponse withEnvironmentModelHaljson(openapisdk.models.shared.EnvironmentModelHaljson environmentModelHaljson) {
        this.environmentModelHaljson = environmentModelHaljson;
        return this;
    }
    public Long statusCode;
    public CreateEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}