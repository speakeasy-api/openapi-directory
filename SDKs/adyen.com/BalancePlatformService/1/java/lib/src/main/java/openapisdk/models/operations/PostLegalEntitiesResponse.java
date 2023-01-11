package openapisdk.models.operations;



public class PostLegalEntitiesResponse {
    public String contentType;
    public PostLegalEntitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object legalEntity;
    public PostLegalEntitiesResponse withLegalEntity(Object legalEntity) {
        this.legalEntity = legalEntity;
        return this;
    }
    public Object serviceError;
    public PostLegalEntitiesResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostLegalEntitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}