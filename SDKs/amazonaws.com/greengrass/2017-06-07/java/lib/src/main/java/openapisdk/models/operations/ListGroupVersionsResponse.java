package openapisdk.models.operations;



public class ListGroupVersionsResponse {
    public Object badRequestException;
    public ListGroupVersionsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListGroupVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListGroupVersionsResponse listGroupVersionsResponse;
    public ListGroupVersionsResponse withListGroupVersionsResponse(openapisdk.models.shared.ListGroupVersionsResponse listGroupVersionsResponse) {
        this.listGroupVersionsResponse = listGroupVersionsResponse;
        return this;
    }
    public Long statusCode;
    public ListGroupVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}