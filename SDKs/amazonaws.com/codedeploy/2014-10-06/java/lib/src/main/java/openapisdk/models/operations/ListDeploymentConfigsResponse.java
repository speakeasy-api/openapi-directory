package openapisdk.models.operations;



public class ListDeploymentConfigsResponse {
    public String contentType;
    public ListDeploymentConfigsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListDeploymentConfigsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListDeploymentConfigsOutput listDeploymentConfigsOutput;
    public ListDeploymentConfigsResponse withListDeploymentConfigsOutput(openapisdk.models.shared.ListDeploymentConfigsOutput listDeploymentConfigsOutput) {
        this.listDeploymentConfigsOutput = listDeploymentConfigsOutput;
        return this;
    }
    public Long statusCode;
    public ListDeploymentConfigsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}