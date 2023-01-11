package openapisdk.models.operations;



public class ListProjectsResponse {
    public String contentType;
    public ListProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListProjectsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListProjectsOutput listProjectsOutput;
    public ListProjectsResponse withListProjectsOutput(openapisdk.models.shared.ListProjectsOutput listProjectsOutput) {
        this.listProjectsOutput = listProjectsOutput;
        return this;
    }
    public Long statusCode;
    public ListProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}