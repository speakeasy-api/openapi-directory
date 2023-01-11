package openapisdk.models.operations;



public class ListApplicationsResponse {
    public String contentType;
    public ListApplicationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListApplicationsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListApplicationsOutput listApplicationsOutput;
    public ListApplicationsResponse withListApplicationsOutput(openapisdk.models.shared.ListApplicationsOutput listApplicationsOutput) {
        this.listApplicationsOutput = listApplicationsOutput;
        return this;
    }
    public Long statusCode;
    public ListApplicationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}