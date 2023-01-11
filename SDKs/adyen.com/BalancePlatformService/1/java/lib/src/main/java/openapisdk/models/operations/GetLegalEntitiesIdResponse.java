package openapisdk.models.operations;



public class GetLegalEntitiesIdResponse {
    public String contentType;
    public GetLegalEntitiesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object legalEntity;
    public GetLegalEntitiesIdResponse withLegalEntity(Object legalEntity) {
        this.legalEntity = legalEntity;
        return this;
    }
    public Object serviceError;
    public GetLegalEntitiesIdResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public GetLegalEntitiesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}