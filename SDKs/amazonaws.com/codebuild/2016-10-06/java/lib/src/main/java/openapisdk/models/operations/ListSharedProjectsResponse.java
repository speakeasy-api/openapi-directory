package openapisdk.models.operations;



public class ListSharedProjectsResponse {
    public String contentType;
    public ListSharedProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListSharedProjectsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListSharedProjectsOutput listSharedProjectsOutput;
    public ListSharedProjectsResponse withListSharedProjectsOutput(openapisdk.models.shared.ListSharedProjectsOutput listSharedProjectsOutput) {
        this.listSharedProjectsOutput = listSharedProjectsOutput;
        return this;
    }
    public Long statusCode;
    public ListSharedProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}