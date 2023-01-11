package openapisdk.models.operations;



public class GetDeploymentStatusResponse {
    public Object badRequestException;
    public GetDeploymentStatusResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetDeploymentStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDeploymentStatusResponse getDeploymentStatusResponse;
    public GetDeploymentStatusResponse withGetDeploymentStatusResponse(openapisdk.models.shared.GetDeploymentStatusResponse getDeploymentStatusResponse) {
        this.getDeploymentStatusResponse = getDeploymentStatusResponse;
        return this;
    }
    public Long statusCode;
    public GetDeploymentStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}