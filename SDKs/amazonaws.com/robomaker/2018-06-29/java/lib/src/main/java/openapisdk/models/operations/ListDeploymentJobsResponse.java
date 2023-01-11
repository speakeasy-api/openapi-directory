package openapisdk.models.operations;



public class ListDeploymentJobsResponse {
    public String contentType;
    public ListDeploymentJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListDeploymentJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public ListDeploymentJobsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListDeploymentJobsResponse listDeploymentJobsResponse;
    public ListDeploymentJobsResponse withListDeploymentJobsResponse(openapisdk.models.shared.ListDeploymentJobsResponse listDeploymentJobsResponse) {
        this.listDeploymentJobsResponse = listDeploymentJobsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListDeploymentJobsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListDeploymentJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListDeploymentJobsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}