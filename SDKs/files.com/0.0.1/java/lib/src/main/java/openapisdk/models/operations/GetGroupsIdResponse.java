package openapisdk.models.operations;



public class GetGroupsIdResponse {
    public String contentType;
    public GetGroupsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupEntity groupEntity;
    public GetGroupsIdResponse withGroupEntity(openapisdk.models.shared.GroupEntity groupEntity) {
        this.groupEntity = groupEntity;
        return this;
    }
    public Long statusCode;
    public GetGroupsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}