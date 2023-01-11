package openapisdk.models.operations;



public class UpdateFunctionConfigurationRequest {
    public UpdateFunctionConfigurationPathParams pathParams;
    public UpdateFunctionConfigurationRequest withPathParams(UpdateFunctionConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateFunctionConfigurationQueryParams queryParams;
    public UpdateFunctionConfigurationRequest withQueryParams(UpdateFunctionConfigurationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UpdateFunctionConfigurationHeaders headers;
    public UpdateFunctionConfigurationRequest withHeaders(UpdateFunctionConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
}