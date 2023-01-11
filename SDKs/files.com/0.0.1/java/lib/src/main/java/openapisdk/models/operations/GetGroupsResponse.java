package openapisdk.models.operations;



public class GetGroupsResponse {
    public String contentType;
    public GetGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupEntity[] groupEntities;
    public GetGroupsResponse withGroupEntities(openapisdk.models.shared.GroupEntity[] groupEntities) {
        this.groupEntities = groupEntities;
        return this;
    }
    public Long statusCode;
    public GetGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}