package openapisdk.models.operations;



public class PostContainersGroupsNameOrIdUnmaprouteResponse {
    public openapisdk.models.shared.ContainersGroupsNameOrIdMaproutePostInfo containersGroupsNameOrIdMaproutePostInfo;
    public PostContainersGroupsNameOrIdUnmaprouteResponse withContainersGroupsNameOrIdMaproutePostInfo(openapisdk.models.shared.ContainersGroupsNameOrIdMaproutePostInfo containersGroupsNameOrIdMaproutePostInfo) {
        this.containersGroupsNameOrIdMaproutePostInfo = containersGroupsNameOrIdMaproutePostInfo;
        return this;
    }
    public String contentType;
    public PostContainersGroupsNameOrIdUnmaprouteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostContainersGroupsNameOrIdUnmaprouteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}