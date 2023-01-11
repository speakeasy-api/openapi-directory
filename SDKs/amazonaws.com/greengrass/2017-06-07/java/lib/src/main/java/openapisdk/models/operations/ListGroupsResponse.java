package openapisdk.models.operations;



public class ListGroupsResponse {
    public String contentType;
    public ListGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListGroupsResponse listGroupsResponse;
    public ListGroupsResponse withListGroupsResponse(openapisdk.models.shared.ListGroupsResponse listGroupsResponse) {
        this.listGroupsResponse = listGroupsResponse;
        return this;
    }
    public Long statusCode;
    public ListGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}