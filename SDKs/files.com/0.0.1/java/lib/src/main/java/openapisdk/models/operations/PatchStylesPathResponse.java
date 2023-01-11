package openapisdk.models.operations;



public class PatchStylesPathResponse {
    public String contentType;
    public PatchStylesPathResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchStylesPathResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StyleEntity styleEntity;
    public PatchStylesPathResponse withStyleEntity(openapisdk.models.shared.StyleEntity styleEntity) {
        this.styleEntity = styleEntity;
        return this;
    }
}