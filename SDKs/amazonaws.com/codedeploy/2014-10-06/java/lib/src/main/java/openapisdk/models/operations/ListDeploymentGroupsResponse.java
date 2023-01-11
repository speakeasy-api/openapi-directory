package openapisdk.models.operations;



public class ListDeploymentGroupsResponse {
    public Object applicationDoesNotExistException;
    public ListDeploymentGroupsResponse withApplicationDoesNotExistException(Object applicationDoesNotExistException) {
        this.applicationDoesNotExistException = applicationDoesNotExistException;
        return this;
    }
    public Object applicationNameRequiredException;
    public ListDeploymentGroupsResponse withApplicationNameRequiredException(Object applicationNameRequiredException) {
        this.applicationNameRequiredException = applicationNameRequiredException;
        return this;
    }
    public String contentType;
    public ListDeploymentGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidApplicationNameException;
    public ListDeploymentGroupsResponse withInvalidApplicationNameException(Object invalidApplicationNameException) {
        this.invalidApplicationNameException = invalidApplicationNameException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListDeploymentGroupsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListDeploymentGroupsOutput listDeploymentGroupsOutput;
    public ListDeploymentGroupsResponse withListDeploymentGroupsOutput(openapisdk.models.shared.ListDeploymentGroupsOutput listDeploymentGroupsOutput) {
        this.listDeploymentGroupsOutput = listDeploymentGroupsOutput;
        return this;
    }
    public Long statusCode;
    public ListDeploymentGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}