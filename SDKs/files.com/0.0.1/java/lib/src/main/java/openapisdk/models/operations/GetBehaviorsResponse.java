package openapisdk.models.operations;



public class GetBehaviorsResponse {
    public openapisdk.models.shared.BehaviorEntity[] behaviorEntities;
    public GetBehaviorsResponse withBehaviorEntities(openapisdk.models.shared.BehaviorEntity[] behaviorEntities) {
        this.behaviorEntities = behaviorEntities;
        return this;
    }
    public String contentType;
    public GetBehaviorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBehaviorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}