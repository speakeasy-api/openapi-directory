package openapisdk.models.operations;



public class PatchBehaviorsIdResponse {
    public openapisdk.models.shared.BehaviorEntity behaviorEntity;
    public PatchBehaviorsIdResponse withBehaviorEntity(openapisdk.models.shared.BehaviorEntity behaviorEntity) {
        this.behaviorEntity = behaviorEntity;
        return this;
    }
    public String contentType;
    public PatchBehaviorsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchBehaviorsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}