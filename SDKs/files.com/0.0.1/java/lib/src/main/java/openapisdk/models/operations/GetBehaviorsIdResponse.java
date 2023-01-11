package openapisdk.models.operations;



public class GetBehaviorsIdResponse {
    public openapisdk.models.shared.BehaviorEntity behaviorEntity;
    public GetBehaviorsIdResponse withBehaviorEntity(openapisdk.models.shared.BehaviorEntity behaviorEntity) {
        this.behaviorEntity = behaviorEntity;
        return this;
    }
    public String contentType;
    public GetBehaviorsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBehaviorsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}