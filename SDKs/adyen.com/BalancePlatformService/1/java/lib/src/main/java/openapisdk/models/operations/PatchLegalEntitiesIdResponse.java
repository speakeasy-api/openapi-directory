package openapisdk.models.operations;



public class PatchLegalEntitiesIdResponse {
    public String contentType;
    public PatchLegalEntitiesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object legalEntity;
    public PatchLegalEntitiesIdResponse withLegalEntity(Object legalEntity) {
        this.legalEntity = legalEntity;
        return this;
    }
    public Object serviceError;
    public PatchLegalEntitiesIdResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PatchLegalEntitiesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}