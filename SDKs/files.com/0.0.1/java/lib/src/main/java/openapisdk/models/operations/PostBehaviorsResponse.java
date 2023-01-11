package openapisdk.models.operations;



public class PostBehaviorsResponse {
    public openapisdk.models.shared.BehaviorEntity behaviorEntity;
    public PostBehaviorsResponse withBehaviorEntity(openapisdk.models.shared.BehaviorEntity behaviorEntity) {
        this.behaviorEntity = behaviorEntity;
        return this;
    }
    public String contentType;
    public PostBehaviorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostBehaviorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}