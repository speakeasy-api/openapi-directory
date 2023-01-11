package openapisdk.models.operations;



public class PostContainersGroupsNameOrIdMaprouteResponse {
    public openapisdk.models.shared.ContainersGroupsNameOrIdMaproutePostInfo containersGroupsNameOrIdMaproutePostInfo;
    public PostContainersGroupsNameOrIdMaprouteResponse withContainersGroupsNameOrIdMaproutePostInfo(openapisdk.models.shared.ContainersGroupsNameOrIdMaproutePostInfo containersGroupsNameOrIdMaproutePostInfo) {
        this.containersGroupsNameOrIdMaproutePostInfo = containersGroupsNameOrIdMaproutePostInfo;
        return this;
    }
    public String contentType;
    public PostContainersGroupsNameOrIdMaprouteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostContainersGroupsNameOrIdMaprouteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}