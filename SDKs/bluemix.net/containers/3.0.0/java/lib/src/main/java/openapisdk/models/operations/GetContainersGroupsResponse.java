package openapisdk.models.operations;



public class GetContainersGroupsResponse {
    public Object[] containersGroupsGetListItems;
    public GetContainersGroupsResponse withContainersGroupsGetListItems(Object[] containersGroupsGetListItems) {
        this.containersGroupsGetListItems = containersGroupsGetListItems;
        return this;
    }
    public String contentType;
    public GetContainersGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetContainersGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}