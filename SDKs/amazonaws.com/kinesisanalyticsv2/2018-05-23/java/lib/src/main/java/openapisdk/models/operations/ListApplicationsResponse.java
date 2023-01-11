package openapisdk.models.operations;



public class ListApplicationsResponse {
    public String contentType;
    public ListApplicationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public ListApplicationsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListApplicationsResponse listApplicationsResponse;
    public ListApplicationsResponse withListApplicationsResponse(openapisdk.models.shared.ListApplicationsResponse listApplicationsResponse) {
        this.listApplicationsResponse = listApplicationsResponse;
        return this;
    }
    public Long statusCode;
    public ListApplicationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}