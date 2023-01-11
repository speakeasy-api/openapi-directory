package openapisdk.models.operations;



public class GetEnvironmentsResponse {
    public String contentType;
    public GetEnvironmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EnvironmentModelHaljson[] environmentModelHaljsons;
    public GetEnvironmentsResponse withEnvironmentModelHaljsons(openapisdk.models.shared.EnvironmentModelHaljson[] environmentModelHaljsons) {
        this.environmentModelHaljsons = environmentModelHaljsons;
        return this;
    }
    public openapisdk.models.shared.EnvironmentModel[] environmentModels;
    public GetEnvironmentsResponse withEnvironmentModels(openapisdk.models.shared.EnvironmentModel[] environmentModels) {
        this.environmentModels = environmentModels;
        return this;
    }
    public Long statusCode;
    public GetEnvironmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}