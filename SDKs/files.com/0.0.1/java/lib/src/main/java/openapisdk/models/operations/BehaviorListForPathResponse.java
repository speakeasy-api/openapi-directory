package openapisdk.models.operations;



public class BehaviorListForPathResponse {
    public openapisdk.models.shared.BehaviorEntity[] behaviorEntities;
    public BehaviorListForPathResponse withBehaviorEntities(openapisdk.models.shared.BehaviorEntity[] behaviorEntities) {
        this.behaviorEntities = behaviorEntities;
        return this;
    }
    public String contentType;
    public BehaviorListForPathResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BehaviorListForPathResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}