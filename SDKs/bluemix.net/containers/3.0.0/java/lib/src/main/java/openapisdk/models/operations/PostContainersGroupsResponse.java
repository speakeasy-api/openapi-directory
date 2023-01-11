package openapisdk.models.operations;



public class PostContainersGroupsResponse {
    public openapisdk.models.shared.ContainersGroupsPostCreatedInfo containersGroupsPostCreatedInfo;
    public PostContainersGroupsResponse withContainersGroupsPostCreatedInfo(openapisdk.models.shared.ContainersGroupsPostCreatedInfo containersGroupsPostCreatedInfo) {
        this.containersGroupsPostCreatedInfo = containersGroupsPostCreatedInfo;
        return this;
    }
    public String contentType;
    public PostContainersGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostContainersGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}