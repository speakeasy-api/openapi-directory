package openapisdk.models.operations;



public class GetStylesPathResponse {
    public String contentType;
    public GetStylesPathResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStylesPathResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StyleEntity styleEntity;
    public GetStylesPathResponse withStyleEntity(openapisdk.models.shared.StyleEntity styleEntity) {
        this.styleEntity = styleEntity;
        return this;
    }
}