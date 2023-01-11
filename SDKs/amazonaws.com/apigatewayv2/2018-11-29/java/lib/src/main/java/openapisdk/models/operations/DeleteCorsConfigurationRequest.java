package openapisdk.models.operations;



public class DeleteCorsConfigurationRequest {
    public DeleteCorsConfigurationPathParams pathParams;
    public DeleteCorsConfigurationRequest withPathParams(DeleteCorsConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCorsConfigurationHeaders headers;
    public DeleteCorsConfigurationRequest withHeaders(DeleteCorsConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
}