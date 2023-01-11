package openapisdk.models.operations;



public class ListLaunchPathsResponse {
    public String contentType;
    public ListLaunchPathsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public ListLaunchPathsResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.ListLaunchPathsOutput listLaunchPathsOutput;
    public ListLaunchPathsResponse withListLaunchPathsOutput(openapisdk.models.shared.ListLaunchPathsOutput listLaunchPathsOutput) {
        this.listLaunchPathsOutput = listLaunchPathsOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListLaunchPathsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListLaunchPathsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}