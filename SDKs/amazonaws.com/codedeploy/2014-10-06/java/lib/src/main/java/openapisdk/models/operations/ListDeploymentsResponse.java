package openapisdk.models.operations;



public class ListDeploymentsResponse {
    public Object applicationDoesNotExistException;
    public ListDeploymentsResponse withApplicationDoesNotExistException(Object applicationDoesNotExistException) {
        this.applicationDoesNotExistException = applicationDoesNotExistException;
        return this;
    }
    public Object applicationNameRequiredException;
    public ListDeploymentsResponse withApplicationNameRequiredException(Object applicationNameRequiredException) {
        this.applicationNameRequiredException = applicationNameRequiredException;
        return this;
    }
    public String contentType;
    public ListDeploymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deploymentGroupDoesNotExistException;
    public ListDeploymentsResponse withDeploymentGroupDoesNotExistException(Object deploymentGroupDoesNotExistException) {
        this.deploymentGroupDoesNotExistException = deploymentGroupDoesNotExistException;
        return this;
    }
    public Object deploymentGroupNameRequiredException;
    public ListDeploymentsResponse withDeploymentGroupNameRequiredException(Object deploymentGroupNameRequiredException) {
        this.deploymentGroupNameRequiredException = deploymentGroupNameRequiredException;
        return this;
    }
    public Object invalidApplicationNameException;
    public ListDeploymentsResponse withInvalidApplicationNameException(Object invalidApplicationNameException) {
        this.invalidApplicationNameException = invalidApplicationNameException;
        return this;
    }
    public Object invalidDeploymentGroupNameException;
    public ListDeploymentsResponse withInvalidDeploymentGroupNameException(Object invalidDeploymentGroupNameException) {
        this.invalidDeploymentGroupNameException = invalidDeploymentGroupNameException;
        return this;
    }
    public Object invalidDeploymentStatusException;
    public ListDeploymentsResponse withInvalidDeploymentStatusException(Object invalidDeploymentStatusException) {
        this.invalidDeploymentStatusException = invalidDeploymentStatusException;
        return this;
    }
    public Object invalidExternalIdException;
    public ListDeploymentsResponse withInvalidExternalIdException(Object invalidExternalIdException) {
        this.invalidExternalIdException = invalidExternalIdException;
        return this;
    }
    public Object invalidInputException;
    public ListDeploymentsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListDeploymentsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidTimeRangeException;
    public ListDeploymentsResponse withInvalidTimeRangeException(Object invalidTimeRangeException) {
        this.invalidTimeRangeException = invalidTimeRangeException;
        return this;
    }
    public openapisdk.models.shared.ListDeploymentsOutput listDeploymentsOutput;
    public ListDeploymentsResponse withListDeploymentsOutput(openapisdk.models.shared.ListDeploymentsOutput listDeploymentsOutput) {
        this.listDeploymentsOutput = listDeploymentsOutput;
        return this;
    }
    public Long statusCode;
    public ListDeploymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}