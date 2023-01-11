package openapisdk.models.operations;



public class PatchClickwrapsIdResponse {
    public openapisdk.models.shared.ClickwrapEntity clickwrapEntity;
    public PatchClickwrapsIdResponse withClickwrapEntity(openapisdk.models.shared.ClickwrapEntity clickwrapEntity) {
        this.clickwrapEntity = clickwrapEntity;
        return this;
    }
    public String contentType;
    public PatchClickwrapsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchClickwrapsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}