package openapisdk.models.operations;



public class CreateDeploymentResponse {
    public Object badRequestException;
    public CreateDeploymentResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDeploymentResponse createDeploymentResponse;
    public CreateDeploymentResponse withCreateDeploymentResponse(openapisdk.models.shared.CreateDeploymentResponse createDeploymentResponse) {
        this.createDeploymentResponse = createDeploymentResponse;
        return this;
    }
    public Long statusCode;
    public CreateDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}