package openapisdk.models.operations;



public class PatchGroupsIdResponse {
    public String contentType;
    public PatchGroupsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupEntity groupEntity;
    public PatchGroupsIdResponse withGroupEntity(openapisdk.models.shared.GroupEntity groupEntity) {
        this.groupEntity = groupEntity;
        return this;
    }
    public Long statusCode;
    public PatchGroupsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}