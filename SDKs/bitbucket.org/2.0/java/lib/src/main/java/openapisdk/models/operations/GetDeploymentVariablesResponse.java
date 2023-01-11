package openapisdk.models.operations;



public class GetDeploymentVariablesResponse {
    public String contentType;
    public GetDeploymentVariablesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeploymentVariablesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PaginatedDeploymentVariable paginatedDeploymentVariable;
    public GetDeploymentVariablesResponse withPaginatedDeploymentVariable(openapisdk.models.shared.PaginatedDeploymentVariable paginatedDeploymentVariable) {
        this.paginatedDeploymentVariable = paginatedDeploymentVariable;
        return this;
    }
}