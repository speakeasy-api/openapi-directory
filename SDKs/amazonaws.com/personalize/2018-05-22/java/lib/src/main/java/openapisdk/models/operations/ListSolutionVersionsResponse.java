package openapisdk.models.operations;



public class ListSolutionVersionsResponse {
    public String contentType;
    public ListSolutionVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListSolutionVersionsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListSolutionVersionsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListSolutionVersionsResponse listSolutionVersionsResponse;
    public ListSolutionVersionsResponse withListSolutionVersionsResponse(openapisdk.models.shared.ListSolutionVersionsResponse listSolutionVersionsResponse) {
        this.listSolutionVersionsResponse = listSolutionVersionsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListSolutionVersionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListSolutionVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}