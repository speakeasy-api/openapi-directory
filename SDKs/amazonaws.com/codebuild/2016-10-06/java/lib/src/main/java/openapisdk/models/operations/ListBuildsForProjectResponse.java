package openapisdk.models.operations;



public class ListBuildsForProjectResponse {
    public String contentType;
    public ListBuildsForProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListBuildsForProjectResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListBuildsForProjectOutput listBuildsForProjectOutput;
    public ListBuildsForProjectResponse withListBuildsForProjectOutput(openapisdk.models.shared.ListBuildsForProjectOutput listBuildsForProjectOutput) {
        this.listBuildsForProjectOutput = listBuildsForProjectOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListBuildsForProjectResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListBuildsForProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}