package openapisdk.models.operations;



public class ListBuildsResponse {
    public String contentType;
    public ListBuildsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListBuildsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListBuildsOutput listBuildsOutput;
    public ListBuildsResponse withListBuildsOutput(openapisdk.models.shared.ListBuildsOutput listBuildsOutput) {
        this.listBuildsOutput = listBuildsOutput;
        return this;
    }
    public Long statusCode;
    public ListBuildsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}