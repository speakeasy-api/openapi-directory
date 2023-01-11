package openapisdk.models.operations;



public class PostGroupsResponse {
    public String contentType;
    public PostGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupEntity groupEntity;
    public PostGroupsResponse withGroupEntity(openapisdk.models.shared.GroupEntity groupEntity) {
        this.groupEntity = groupEntity;
        return this;
    }
    public Long statusCode;
    public PostGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}